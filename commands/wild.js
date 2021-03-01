const { Battle, DexEntry, Location, Pokemon, User } = require('../models');

module.exports = {
	name: 'wild',
	description: 'this command generates a wild pokemon battle depending on where a user is',

	execute(Discord, bot, message) {

		const gen_pokemon = require('./pokeinfo/gen_pokemon.js');
		const Sim = require('../../pokemon-showdown');

		async function main() {

			try {

				// retrieve user profile from database
				const userID = message.author.id;
				let profile = await User.findOne({_id: userID});

				if (profile.battleID == '' || profile.battleID == 'None') {
					
					// choose a numbers between 1-100 to determine the wild slot, held item chance, and evolution stage chance
					const wildSeed = Math.floor(Math.random() * (100 - 1 + 1)) + (1 - 0);
					console.log('wild seed: ' + wildSeed)
					// const itemSeed = Math.floor(Math.random() * (100 - 1 + 1)) + (1 - 0);

					// use the levelcalc function to determine the wild level of the pokemon
					let wildLevel = await levelcalc(profile);
					console.log(wildLevel);

					// set wildpoke and default held item values
					let wildpoke = null;
					let helditem = 'None';
					let wildCounter = 0;
					let minLvl = 60;
					let maxLvl = 2;

					// Determine wild slot with see, applicable stages in slot, and choose stage for wild encounter
					const location = await Location.findOne({_id: profile.currentLocation});

					for (const wildSlot of location.wilds) {
						wildCounter = wildCounter + wildSlot.probability;
						
						if (wildSeed <= wildCounter) {
							console.log('wild counter: ' + wildCounter)
							const stages = [];

							for (const wildStage of wildSlot.pokemon) {
								console.log(wildStage);
								if ((wildLevel >= wildStage.minLvl || stages.length === 0) && (wildLevel <= wildStage.maxLvl || typeof wildStage.maxLvl === 'undefined' || wildSlot.pokemon.length === 1)) {
									if (minLvl > wildStage.minLvl) {
										minLvl = wildStage.minLvl;
									}
									if (maxLvl < wildStage.maxLvl && typeof wildStage.maxLvl !== 'undefined') {
										maxLvl = wildStage.maxLvl;
									}
									else {
										maxLvl = 60;
									}
									stages.push(wildStage.name)
								}
							}

							if (wildLevel < minLvl) {
								wildLevel = minLvl;
							}
							if (wildLevel > maxLvl) {
								wildLevel = maxLvl;
							}
							const stageSeed = Math.floor(Math.random() * (stages.length - 1 + 1));
							wildpoke = stages[stageSeed];
							console.log(stages);
							break;
						}
					}

					

					// make sure that form-variations are adjusted so that they can be processed and shown correctly
					let formAddOn = '';
					let wildPokemonForm = wildpoke;

					if (wildpoke.match(/unown/g)){
						if (wildpoke.match(/em/g)) {
							formAddOn = ' !';
						}
						else if (wildpoke.match(/qm/g)){
							formAddOn = ' ?';
						}
						else {
							formAddOn = ' ' + wildpoke.charAt(5).toUpperCase();
						}
						wildpoke = 'unown';
					}
					if (wildpoke.match(/basculin/g)){
						wildpoke = 'basculin';
					}

					// create wild pokemon
					const wild_obj = gen_pokemon(wildpoke,'', wildLevel, helditem, '', null);
					const newWild = await Pokemon.create(wild_obj);

					// create a new battle database entry with the two pokemon involved, save battle ID
					const wildBattle = await Battle.create({
						playerID: userID,
						party: profile.party,
						wildPokemon: newWild._id,
						TurnCount: 0,
						Type: 'Wild',
					});

					// Update user's profile with new battle ID
					const updatedProfile = { battleID: wildBattle._id };
					profile = await User.findOneAndUpdate({_id: userID}, updatedProfile, {new: true});

					// Handle embed emoji and pokemon images for gender-related parts
					let gend_emoji = null;
					if(wild_obj.gender == 'Male') {
						gend_emoji = bot.emojis.cache.find(emoji => emoji.name === 'm_');
						if (wildpoke === 'meowstic' || wildpoke === 'josuche') {
							wildPokemonForm = wildPokemonForm + 'male';
						}
					}
					else if(wild_obj.gender == 'Female') {
						gend_emoji = bot.emojis.cache.find(emoji => emoji.name === 'f_');
						if (wildpoke === 'meowstic' || wildpoke === 'josuche') {
							wildPokemonForm = wildPokemonForm + 'female';
						}
					}

					// Handle pokemon images changes for regular or shiny pokemon
					let shinyAddOn = '';
					let imagePath = `./images/pokemon/pseudosprites/${wildPokemonForm}.png`;
					let attachmentPath = `attachment://${wildPokemonForm}.png`;
					if (newWild.shiny === true) {
						shinyAddOn = 'Shiny ';
						imagePath = `./images/pokemon/shinypseudosprites/${wildPokemonForm}shiny.png`
						attachmentPath = `attachment://${wildPokemonForm}shiny.png`;
					}
					
					const wildBattleEmbed = new Discord.MessageEmbed()
						.setColor('#0099ff')
						.setAuthor(`${location.name}`)
						.setTitle(`A wild ${gend_emoji} Lvl. ${wildLevel} ${shinyAddOn}${wildpoke.charAt(0).toUpperCase() + wildpoke.slice(1) + formAddOn} appeared!`)
						.setDescription(`**HP:** ${wild_obj.currentHP}/${wild_obj.maxHP}`)
						.attachFiles([imagePath])
						.setImage(attachmentPath)
						.setFooter('Battle Started:')
						.setTimestamp();

					message.channel.send(wildBattleEmbed);

					// stream = new Sim.BattleStream();

					// (async () => {
					// 	for await (const output of stream) {
					// 		console.log(output);
					// 	}
					// })();

					// stream.write(`>start {"formatid":"gen7randombattle"}`);
					// stream.write(`>player p1 {"name":"${profile.firstName}"}`);
					// stream.write(`>player p2 {"name":"${profile.rival.firstName}"}`);

				}
				else {
					message.channel.send('>>> Please finish your current battle before searching for a new wild Pokémon!');
				}

			// try ends
			}

			catch (e) {
				console.error(e);
			}
		}

		main().catch(console.error);

		// function that determines the wild pokemon level (between 2 and 60) from the highest level in the player's party
		async function levelcalc(profile) {
			const slot1 = await Pokemon.findOne({ _id: profile.party[0] });
			const slot2 = await Pokemon.findOne({ _id: profile.party[1] });
			const slot3 = await Pokemon.findOne({ _id: profile.party[2] });
			const slot4 = await Pokemon.findOne({ _id: profile.party[3] });
			const slot5 = await Pokemon.findOne({ _id: profile.party[4] });
			const slot6 = await Pokemon.findOne({ _id: profile.party[5] });

			let count = 0;
			const levels = [];
			if (slot1 !== null) {
				levels[count] = slot1.level;
				count = count + 1;
			}
			if (slot2 !== null) {
				levels[count] = slot2.level;
				count = count + 1;
			}
			if (slot3 !== null) {
				levels[count] = slot3.level;
				count = count + 1;
			}
			if (slot4 !== null) {
				levels[count] = slot4.level;
				count = count + 1;
			}
			if (slot5 !== null) {
				levels[count] = slot5.level;
				count = count + 1;
			}
			if (slot6 !== null) {
				levels[count] = slot6.level;
				count = count + 1;
			}

			const levelbase = Math.max(levels);

			// var LevelResult = Math.floor(Math.random() * ((levelbase+2) - (levelbase-4) + 1)) + ((levelbase-4) - 0); //old version that allowed wilds slightly stronger than the player's pokemon
			let LevelResult = Math.floor(Math.random() * ((levelbase - 1) - (levelbase - 7) + 1)) + ((levelbase - 7) - 0);
			// wild levels can't go below 2
			if (LevelResult < 2) {
				LevelResult = 2;
			}
			if (LevelResult > 60) {
				LevelResult = 60;
			}
			return LevelResult;
		}
	
	},
};