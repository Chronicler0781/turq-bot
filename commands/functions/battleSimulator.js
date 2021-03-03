const { Battle, Pokemon } = require('../../models');

module.exports = async function battleSimulator(Discord, bot, message, battleObject, profile, location) {

    // Fetch active and opposing pokemon objects from database
    let active = await Pokemon.findOne({ _id: battleObject.active.id });
    let opponent = await Pokemon.findOne({ _id: battleObject.opponentActive.id });

    // create object with gender emojis
    let gend_emoji = { m: null, f: null };
    let activeGend = null;
    let opponentGend = null;
    gend_emoji.m = bot.emojis.cache.find(emoji => emoji.name === 'm_');
    gend_emoji.f = bot.emojis.cache.find(emoji => emoji.name === 'f_'); 

    if (active.gender === 'Male') activeGend = gend_emoji.m;
    else if (active.gender === 'Female') activeGend = gend_emoji.f;
    else activeGend = '';
    if (opponent.gender === 'Male') opponentGend = gend_emoji.m;
    else if (opponent.gender === 'Female') opponentGend = gend_emoji.f;
    else opponentGend = '';

    // Assign user's active and opponent pokemon images path names for regular or shiny pokemon
    let activeImagePath = `./images/pokemon/pseudosprites/${active.spriteName}.png`;
    if (active.shiny) {
        activeImagePath = `./images/pokemon/shinypseudosprites/${active.spriteName}.png`;
    }
    let opponentShinyAddOn = '';
    let opponentImagePath = `./images/pokemon/pseudosprites/${opponent.spriteName}.png`;
    if (opponent.shiny) {
        opponentShinyAddOn = 'Shiny ';
        opponentImagePath = `./images/pokemon/shinypseudosprites/${opponent.spriteName}.png`;
    }
    
    await juxtaposePokemon(activeImagePath, opponentImagePath, 25);

    let startingTitle = '';
    if (battleObject.type === 'Wild') {
        startingTitle = `A wild ${opponentGend} ${opponentShinyAddOn}${opponent.pokemon} appeared!`;
    }
    else if (battleObject.type === 'Trainer') {
        startingTitle = `Trainer would like to battle!`;
    }

    const emojiCharacters = require('../../scripts/emojiCharacters');
    const battleEmojis = [emojiCharacters.f, emojiCharacters.s, emojiCharacters.b, emojiCharacters.r];
    const battleOptions = [`${battleEmojis[0]} Fight`, `**${battleEmojis[1]} Switch**`,`${battleEmojis[2]} Bag`,`**${battleEmojis[3]} Run**`];

    let actionTaken = false;
    let firstMenu = true;

    while (!actionTaken) {

        if (!firstMenu) {
            startingTitle = `Battle with ${opponentGend} ${opponentShinyAddOn}${opponent.pokemon}`;
        }

        const battleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setAuthor(`${location.name}`)
            .setTitle(startingTitle)
            .addFields(
                { name: `${battleOptions[0]}`, value: `${battleOptions[1]}`, inline: true },
                { name: `${battleOptions[2]}`, value: `${battleOptions[3]}`, inline: true },
                { name: '\u200B', value: 'Please select an option from the menu above.'},
                { 
                    name: `__Lvl.${active.level} ${active.pokemon} ${activeGend}__`, 
                    value: `**HP:** ${active.currentHP}/${active.maxHP}`, 
                    inline: true 
                },
                { 
                    name: `__Lvl.${opponent.level} ${opponent.pokemon} ${opponentGend}__`, 
                    value: `**HP:** ${opponent.currentHP}/${opponent.maxHP}`, 
                    inline: true 
                },
            )
            .attachFiles(['./images/tempBattle.png'])
            .setImage('attachment://tempBattle.png')
            .setFooter('Battle Started:')
            .setTimestamp();

        const embedMessage = await message.channel.send(battleEmbed);

        for (const emoji of battleEmojis) {
            embedMessage.react(emoji);
        }

        let noOptionPicked = true;
        let errorMessage = null;

        while (noOptionPicked) {
            try {
                const filter = ( reaction, user) => {
                    return battleEmojis.indexOf(reaction.emoji.name) !== -1 && user.id === message.author.id;
                }
                const collected = await embedMessage.awaitReactions(filter, { max: 1, time: 300000, errors: ['time'] });

                for (const emoji of battleEmojis) {
                    if (emoji === collected.first().emoji.name && emoji === emojiCharacters.f) {
                        if (errorMessage) errorMessage.delete();
                        noOptionPicked = false;
                        firstMenu = false;
                        const results = await runFightEmbed(Discord, message, battleObject, active, opponent, emojiCharacters);
                        actionTaken = results.actionTaken;
                        break;
                    }
                    else if (emoji === collected.first().emoji.name && emoji === emojiCharacters.s) {
                        if (battleObject.party.length === 1) {
                            errorMessage = await message.channel.send('>>> Error: You don\'t have any other Pokémon to switch to. Please react with another choice.');
                        }
                        else {
                            console.log('Switch Pokemon Options');
                        }
                        break;
                    }
                    else if (emoji === collected.first().emoji.name && emoji === emojiCharacters.b) {
                        
                        break;
                    }
                    else if (emoji === collected.first().emoji.name && emoji === emojiCharacters.r) {
                        if (battleObject.type === 'Wild') {
                            if (errorMessage) errorMessage.delete();
                            noOptionPicked = false;
                            actionTaken = true;
                            bot.commands.get('run').execute(message);
                        }
                        else {
                            errorMessage = await message.channel.send('>>> Error: You can\'t run from a trainer battle. Please react with another choice.');
                        }
                        break;
                    }
                }
            }
            catch (error) {
                console.log(error);
                actionTaken = true;
                await message.channel.send('>>> Error: Your battle has timed out. Please enter \'-resume\' to continue your battle later.');
                console.log('Save battle status to database');
            }
        }
    }

    

    

}

async function juxtaposePokemon(activePokemonPath, opponentPokemonPath, spacing) {
    
    const { createCanvas, Image } = require('canvas');
    
    // create canvas the same size as new logora map
    const canvas = createCanvas(200 + spacing, 100);
    const ctx = canvas.getContext('2d');
    let imagesLoaded = 0;

    // load Images to canvas
    const img1 = await loadImage(activePokemonPath, juxtapose);
    const img2 = await loadImage(opponentPokemonPath, juxtapose);

    // run merge function
    await juxtapose();

    // function to merge images if two images were found to be loaded
    // eslint-disable-next-line no-inner-declarations
    async function juxtapose() {
        if(imagesLoaded == 2) {
            ctx.drawImage(img1, 0, 0);
            ctx.drawImage(img2, 100 + spacing, 0);
        }
        imagesLoaded += 1;
    }

    // function to onload image, set source, and return image object
    // eslint-disable-next-line no-inner-declarations
    async function loadImage(src, onload) {
        const img = new Image();
        img.onload = onload;
        img.src = src;
        return img;
    }

    // send canvas image to buffer, write to temporary file
    const buffer = canvas.toBuffer('image/png');
    const fs = require('fs');
    await fs.writeFileSync('./images/tempBattle.png', buffer);

    return;
}

async function runFightEmbed(Discord, message, battleObject, activePokemon, opponentPokemon, emojiCharacters) {
    let action = false;
    let moveEmojis = [];
    let moveOptions = [];

    for (let i = 0; i < 4; i++) {
        if (activePokemon.moves[i]) {
            moveEmojis.push(emojiCharacters[i+1]);
            moveOptions.push(`${moveEmojis[i]} ${activePokemon.moves[i]}`);
        }
        else {
            moveOptions.push('-');
        }
    }
    moveEmojis.push('❎');

    const fightEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setAuthor(`Fight!`)
        .addFields(
            { name: `${moveOptions[0]}`, value: `${moveOptions[2]}`, inline: true },
            { name: `**${moveOptions[1]}**`, value: `**${moveOptions[3]}**`, inline: true },
        )
        .setFooter('React with ❎ to go back.');

    const embedMessage = await message.channel.send(fightEmbed);

    for (const emoji of moveEmojis) {
        embedMessage.react(emoji);
    }

    try {
        const filter = ( reaction, user) => {
            return moveEmojis.indexOf(reaction.emoji.name) !== -1 && user.id === message.author.id;
        }
        const collected = await embedMessage.awaitReactions(filter, { max: 1, time: 300000, errors: ['time'] });

        for (let i = 0; i < moveEmojis.length; i++) {
            if (moveEmojis[i] === collected.first().emoji.name && moveEmojis[i] !== '❎') {
                console.log('You chose the move: '+moveOptions[i])
                await battleInitiate(battleObject, activePokemon, opponentPokemon, moveOptions[i]);
                action = true;
                break;
            }
            else if (moveEmojis[i] === collected.first().emoji.name && moveEmojis[i] === '❎') {
                action = false;
                break;
            }
        }
    }
    catch (error) {
        console.log(error);
		await message.channel.send('>>> Error: Your battle has timed out. Please enter \'-resume\' to continue your battle later.');
		console.log('Save battle status to database');
        action = true;
    }

    return { actionTaken: action };
    
}

async function battleInitiate(battleObject, activePokemon, opponentPokemon) {

    const Sim = require('../../../pokemon-showdown');
    // const Dex = require('./importDex.js');
    
    stream = new Sim.BattleStream();

    const spec = {
        formatid: "gen8customgame",
    };

    // Example:
    // const team = {
    //     name: 'Diancie',
    //     species: 'Diancie',
    //     gender: 'N',
    //     moves: [ 'diamondstorm', 'earthpower', 'moonblast', 'hiddenpowerfire' ],
    //     ability: 'Clear Body',
    //     evs: { hp: 85, atk: 85, def: 85, spa: 85, spd: 85, spe: 85 },
    //     ivs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
    //     item: 'Diancite',
    //     level: 80,
    //     shiny: false
    // },

    const playerTeam = [{
        name: activePokemon.pokemon,
        species: activePokemon.pokemon,
        gender: activePokemon.gender.charAt(0),
        moves: [ activePokemon.moves[0].toLowerCase().replace(/\s/g, '') ],
        ability: 0,
        evs: { hp: 255, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
        ivs: { hp: 31, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
        item: activePokemon.heldItem !== 'None' ? activePokemon.heldItem : '',
        level: activePokemon.level,
        shiny: activePokemon.shiny
    }]

    const opponentTeam = [{
        name: opponentPokemon.pokemon,
        species: opponentPokemon.pokemon,
        gender: opponentPokemon.gender.charAt(0),
        moves: [ opponentPokemon.moves[0].toLowerCase().replace(/\s/g, '')],
        ability: 0,
        evs: { hp: 255, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
        ivs: { hp: 31, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
        item: opponentPokemon.heldItem !== 'None' ? opponentPokemon.heldItem : '',
        level: opponentPokemon.level,

        shiny: opponentPokemon.shiny
    }]

    const p1spec = {
        name: "Player",
        team: packTeam(playerTeam),
    };
    const p2spec = {
        name: "Opponent",
        team: packTeam(opponentTeam),
    };

    (async () => {
    	for await (const output of stream) {
    		console.log(output);
    	}
    })();

    stream.write(`>start ${JSON.stringify(spec)}`); // 1 item [0]
    stream.write(`>player p1 ${JSON.stringify(p1spec)}`); // 2 itmes [1-2]
    stream.write(`>player p2 ${JSON.stringify(p2spec)}`); // 1 items [3]
    stream.write(`>p1 team 123456`); // 2 item [4-5]
    stream.write(`>p2 team 123456`); // 2 item [6-7]
    let count = 8;

    stream.write(`>p1 move ${activePokemon.moves[0]}`);
    stream.write(`>p2 move 1`); // 1+ items [8+]
    let data = stream.buf;
    
    console.log(data);

    result = data[data.length-1].split('\n');
    for (const line of result) {
        item = line.split('|');
        console.log(item);

        switch (item[1]) {

            case '-damage':
                
                break;

            case 'faint':
            
                break;

            case '-heal':
            
                break;

            case 'switch':

                break;

            default:
                break;
            
        }
    }
}

function packTeam(team) {
    const toID = require('toid');

    if (!team) return '';

    function getIv(ivs, s) {
        return ivs[s] === 31 || ivs[s] === undefined ? '' : ivs[s].toString();
    }

    let buf = '';
    for (const set of team) {
        if (buf) buf += ']';

        // name
        buf += (set.name || set.species);

        // species
        const id = toID(set.species || set.name);
        buf += '|' + (toID(set.name || set.species) === id ? '' : id);

        // item
        buf += '|' + toID(set.item);

        // ability
        buf += '|' + toID(set.ability);

        // moves
        buf += '|' + set.moves.map(toID).join(',');

        // nature
        buf += '|' + (set.nature || '');

        // evs
        let evs = '|';
        if (set.evs) {
            evs = '|' + (set.evs['hp'] || '') + ',' + (set.evs['atk'] || '') + ',' + (set.evs['def'] || '') + ',' + (set.evs['spa'] || '') + ',' + (set.evs['spd'] || '') + ',' + (set.evs['spe'] || '');
        }
        if (evs === '|,,,,,') {
            buf += '|';
        } else {
            buf += evs;
        }

        // gender
        if (set.gender) {
            buf += '|' + set.gender;
        } else {
            buf += '|';
        }

        // ivs
        let ivs = '|';
        if (set.ivs) {
            ivs = '|' + getIv(set.ivs, 'hp') + ',' + getIv(set.ivs, 'atk') + ',' + getIv(set.ivs, 'def') +
                ',' + getIv(set.ivs, 'spa') + ',' + getIv(set.ivs, 'spd') + ',' + getIv(set.ivs, 'spe');
        }
        if (ivs === '|,,,,,') {
            buf += '|';
        } else {
            buf += ivs;
        }

        // shiny
        if (set.shiny) {
            buf += '|S';
        } else {
            buf += '|';
        }

        // level
        if (set.level && set.level !== 100) {
            buf += '|' + set.level;
        } else {
            buf += '|';
        }

        // happiness
        if (set.happiness !== undefined && set.happiness !== 255) {
            buf += '|' + set.happiness;
        } else {
            buf += '|';
        }

        if (set.pokeball || set.hpType || set.gigantamax) {
            buf += ',' + (set.hpType || '');
            buf += ',' + toID(set.pokeball || '');
            buf += ',' + (set.gigantamax ? 'G' : '');
        }
    }

    return buf;
}