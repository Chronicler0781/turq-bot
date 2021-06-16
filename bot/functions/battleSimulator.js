const { User, Location, Pokemon } = require('../../models');
const dex = require('../../data/pokedex');
const utils = require('../lib/utils');

module.exports = async function battleSimulator(Discord, bot, message, battle, profile, location, party, oppParty) {

	// Set active pokemon for player and opponent
	let active = party[0];
	// Disabled: opponent will be able to change with trainer battles
	// eslint-disable-next-line prefer-const
	let opponent = oppParty[0];

	// generate battleImage and gender/shiny info for battle embed
	let activeGend = null,
		opponentGend = null,
		opponentShinyAddOn = '';
	await generateBattleImage();

	// Set starting title for battle embed.
	let title = '';
	if (battle.opponent.type === 'Wild') {
		title = `A wild ${opponentGend} ${opponentShinyAddOn}${opponent.pokemon} appeared!`;
	}
	else {
		title = `${battle.opponent.trainerType} ${battle.opponent.name} would like to battle!`;
	}

	// Create battle embed menu variables
	const emojiCharacters = require('../lib/emojiCharacters');
	const battleEmojis = [emojiCharacters.f, emojiCharacters.s,
			emojiCharacters.b, emojiCharacters.r],
		battleOptions = [`${battleEmojis[0]} Fight`, `**${battleEmojis[1]} Switch**`,
			`${battleEmojis[2]} Bag`, `**${battleEmojis[3]} Run**`];

	// create battle state tracking variables
	let firstMenu = true,
		simInitiated = false,
		swapped = false,
		battleDone = false,
		actionTaken = false,
		embedMessage2 = null,
		winnerDetermined = false,
		winner = false,
		ranAway = false,
		turnSummaryTitle = 'Battle Start',
		turnSummary = ['Please select an option from the menu above.'];

	const Sim = require('../../../pokemon-showdown');
	const streams = Sim.getPlayerStreams(new Sim.BattleStream());
	const p2 = new Sim.RandomPlayerAI(streams.p2);

	// iterate battle turns while battle is unfinished.
	while (!battleDone) {

		// After turn, update battle image if a pokemon has been switched/fainted
		if (actionTaken) {
			if (swapped) {
				[activeGend, opponentGend, opponentShinyAddOn] = await generateBattleImage();
				swapped = false;
			}
			turnSummaryTitle = `Turn ${battle.turn - 1}`;
		}

		// reset actionTaken boolean for new turn
		actionTaken = false;

		if (!turnSummary) {
			turnSummary.push('The turn summary is empty.');
		}

		// Keep original menu active until a turn choice has been made.
		while (!actionTaken) {

			if (!firstMenu) {
				title = `Battle with ${opponentGend} ${opponentShinyAddOn}${opponent.pokemon}`;
			}

			const battleEmbed = new Discord.MessageEmbed()
				.setColor('#0099ff')
				.setAuthor(`${location.name}`)
				.setTitle(title)
				.addFields(
					{ name: `${battleOptions[0]}`, value: `${battleOptions[1]}`, inline: true },
					{ name: `${battleOptions[2]}`, value: `${battleOptions[3]}`, inline: true },
					{ name: `__${turnSummaryTitle}:__`, value: `${turnSummary.join('\n')}` },
					{
						name: `__Lvl.${active.level} ${active.pokemon} ${activeGend}__`,
						value: `**HP:** ${active.currentHP}/${active.maxHP}${active.status}`,
						inline: true,
					},
					{
						name: `__Lvl.${opponent.level} ${opponent.pokemon} ${opponentGend}__`,
						value: `**HP:** ${opponent.currentHP}/${opponent.maxHP}${opponent.status}`,
						inline: true,
					},
				)
				.attachFiles(['./images/tempBattle.png'])
				.setImage('attachment://tempBattle.png');
			//  .setFooter('Battle Started:')
			//  .setTimestamp();

			let noOptionPicked = true,
				errorMessage = null;
			const embedMessage = await message.channel.send(battleEmbed);

			for (const emoji of battleEmojis) {
				embedMessage.react(emoji);
			}

			while (noOptionPicked) {
				try {
					const filter = (reaction, user) => {
						return battleEmojis.indexOf(reaction.emoji.name) !== -1 && user.id === message.author.id;
					};
					const collected = await embedMessage.awaitReactions(filter, { max: 1, time: 300000, errors: ['time'] });
					if (embedMessage2) embedMessage2.delete();

					for (const emoji of battleEmojis) {
						if (emoji === collected.first().emoji.name && emoji === emojiCharacters.f) {
							if (errorMessage) errorMessage.delete();
							noOptionPicked = false;
							firstMenu = false;
							await runFightEmbed();
							console.log('RunFightEmbed finished.');
							// await embedMessage.delete();
							break;
						}
						else if (emoji === collected.first().emoji.name && emoji === emojiCharacters.s) {
							if (battle.party.length === 1) {
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
							if (battle.opponent.type === 'Wild') {
								if (errorMessage) errorMessage.delete();
								noOptionPicked = false;
								actionTaken = true;
								battleDone = true;
								ranAway = true;
								await message.channel.send('>>> You have successfully run away!');
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
					noOptionPicked = false;
					actionTaken = true;
					battleDone = true;
					ranAway = true;
					await message.channel.send('>>> Error: Your battle has timed out and has been aborted. Please start a new battle later.');
				}
			}
		}
		console.log(`End of Turn ${battle.turn - 1}\n`);
		// End of Turn Stuff
	}


	if (winnerDetermined) {
		turnSummaryTitle = 'Battle End';
		console.log('TurnSummary at end: \n' + turnSummary);
		const endEmbed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setAuthor(`${location.name}`)
			.setTitle(title)
			.addFields(
				{ name: `__${turnSummaryTitle}:__`, value: `${turnSummary.join('\n')}` },
			);
		// .setFooter('Battle Finished')
		// .setTimestamp();

		// eslint-disable-next-line no-unused-vars
		const endEmbedMessage = await message.channel.send(endEmbed);
	}

	await User.findOneAndUpdate({ _id: profile._id }, profile);

	party[battle.active.position] = active;
	for (const pokemon of party) {
		await Pokemon.findOneAndUpdate({ _id: pokemon._id }, pokemon);
	}

	console.log('Battle Finished\n');
	bot.commands.get('run').execute(message);
	if (!winner && !ranAway) bot.commands.get('heal').execute(message);


	// ----------------------------------------------------------------------------------------------------
	// Battle Simulator Functions
	// ----------------------------------------------------------------------------------------------------

	async function generateBattleImage() {
		// create object with gender emojis
		const gend_emoji = { m: null, f: null };
		gend_emoji.m = bot.emojis.cache.find(emoji => emoji.name === 'm_');
		gend_emoji.f = bot.emojis.cache.find(emoji => emoji.name === 'f_');

		if (active.gender === 'M') activeGend = gend_emoji.m;
		else if (active.gender === 'F') activeGend = gend_emoji.f;
		else activeGend = '';
		if (opponent.gender === 'M') opponentGend = gend_emoji.m;
		else if (opponent.gender === 'F') opponentGend = gend_emoji.f;
		else opponentGend = '';

		// Assign user's active and opponent pokemon images path names for regular or shiny pokemon
		let activeImagePath = `./images/pokemon/pseudosprites/${active.species}.png`;
		if (active.shiny) {
			activeImagePath = `./images/pokemon/shinypseudosprites/${active.species}.png`;
		}
		let opponentImagePath = `./images/pokemon/pseudosprites/${opponent.species}.png`;
		if (opponent.shiny) {
			opponentShinyAddOn = 'Shiny ';
			opponentImagePath = `./images/pokemon/shinypseudosprites/${opponent.species}.png`;
		}

		await juxtaposePokemon(activeImagePath, opponentImagePath, 25);

		return;
	}

	async function juxtaposePokemon(activePokemonPath, opponentPokemonPath, spacing) {

		const { createCanvas, Image } = require('canvas');

		// create canvas
		const canvas = createCanvas(200 + spacing, 100),
			ctx = canvas.getContext('2d');
		let imagesLoaded = 0;

		// load Images to canvas
		const img1 = await loadImage(activePokemonPath, juxtapose),
			img2 = await loadImage(opponentPokemonPath, juxtapose);

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
		const buffer = canvas.toBuffer('image/png'),
			fs = require('fs');
		await fs.writeFileSync('./images/tempBattle.png', buffer);

		return;
	}

	async function runFightEmbed() {
		const moveEmojis = [],
			moveOptions = [];

		for (let i = 0; i < 4; i++) {
			if (active.moves[i]) {
				moveEmojis.push(emojiCharacters[i + 1]);
				moveOptions.push(`${moveEmojis[i]} ${active.moves[i]}`);
			}
			else {
				moveOptions.push('-');
			}
		}
		moveEmojis.push('❎');

		const fightEmbed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setAuthor('Fight!')
			.addFields(
				{ name: `${moveOptions[0]}`, value: `**${moveOptions[2]}**`, inline: true },
				{ name: `${moveOptions[1]}`, value: `**${moveOptions[3]}**`, inline: true },
			)
			.setFooter('React with ❎ to go back.');

		embedMessage2 = await message.channel.send(fightEmbed);

		for (const emoji of moveEmojis) {
			embedMessage2.react(emoji);
		}

		try {
			const filter = (reaction, user) => {
				return moveEmojis.indexOf(reaction.emoji.name) !== -1 && user.id === message.author.id;
			};
			const collected = await embedMessage2.awaitReactions(filter, { max: 1, time: 300000, errors: ['time'] });

			for (let i = 0; i < moveEmojis.length; i++) {
				if (moveEmojis[i] === collected.first().emoji.name && moveEmojis[i] !== '❎') {
					const moveChoice = moveOptions[i].slice(4);
					actionTaken = true;
					await battleInitiate(moveChoice);
					console.log('TurnSummary in fightembed: \n' + turnSummary);
					return;
					/* console.log('Battle phase over.');
					actionTaken = true;
					// await embedMessage2.delete();
					return;*/
				}
				else if (moveEmojis[i] === collected.first().emoji.name && moveEmojis[i] === '❎') {
					// actionTaken = false;
					return;
				}
			}
		}
		catch (error) {
			console.log(error);
			await message.channel.send('>>> Error: Your battle has timed out. Please enter \'-resume\' to continue your battle later.');
			console.log('Save battle status to database');
			actionTaken = true;
			battleDone = true;
			return;
		}
	}

	function battleInitiate(activeMove) {
		// eslint-disable-next-line no-unused-vars
		return new Promise(function(resolve, reject) {

			console.log('Promise initiated.');

			if (!simInitiated) {
				const spec = {
					formatid: 'gen8customgame',
				};

				const playerTeam = [],
					partyState = [];
				let p = 0;
				for (const pokemon of party) {
					const teamMember = {
						name: pokemon.pokemon,
						species: pokemon.pokemon,
						gender: pokemon.gender.charAt(0),
						happiness: pokemon.happiness,
						nature: pokemon.nature,
						moves: pokemon.moves,
						ability: pokemon.abilityNo,
						evs: { hp: 255, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
						ivs: { hp: 31, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
						item: pokemon.heldItem !== 'None' ? active.heldItem : '',
						level: pokemon.level,
						shiny: pokemon.shiny,
					};
					playerTeam.push(teamMember);
					partyState.push({ position: p, hp: pokemon.currentHP, status: pokemon.status });
					p++;
				}

				const opponentTeam = [];
				for (const pokemon of oppParty) {
					const teamMember = {
						name: pokemon.pokemon,
						species: pokemon.pokemon,
						gender: pokemon.gender.charAt(0),
						happiness: pokemon.happiness,
						nature: pokemon.nature,
						moves: pokemon.moves,
						ability: pokemon.abilityNo,
						evs: { hp: 255, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
						ivs: { hp: 31, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
						item: pokemon.heldItem,
						level: pokemon.level,
						shiny: pokemon.shiny,
					};
					opponentTeam.push(teamMember);
				}

				const p1spec = {
					name: 'Player',
					team: packTeam(playerTeam),
				};
				const p2spec = {
					name: 'Opponent',
					team: packTeam(opponentTeam),
				};
				p2.start();

				streams.omniscient.write(`>start ${JSON.stringify(spec)}`);
				streams.omniscient.write(`>player p1 ${JSON.stringify(p1spec)}`);
				streams.omniscient.write(`>player p2 ${JSON.stringify(p2spec)}`);
				streams.omniscient.write('>p1 team 123456');
				streams.omniscient.write('>p2 team 123456');
				streams.omniscient.write(`>updatePlayerState ${JSON.stringify(partyState)}`);

				simInitiated = true;
			}

			(async () => {
				// eslint-disable-next-line no-unused-vars
				let i = 0,
					results = null,
					prevLine = null,
					stat = null,
					tempHP = null,
					sourceName = null,
					targetName = null,
					tempPoke = null,
					healLocationPhrase = '',
					prizeMoneyBase = null,
					prizeMoney = null,
					maxLevel = 0,
					newLocation = null;

				let activeName = active.nickname;
				if (!activeName) activeName = active.pokemon;

				let foesName = `The wild ${opponent.pokemon}`;
				if (battle.opponent.type !== 'Wild') {
					foesName = `The opposing ${opponent.pokemon}`;
				}

				for await (const output of streams.omniscient) {
					console.log('\nStream Output ' + i + ': ');
					results = output.split('\n');
					turnSummary = [];

					for (const line of results) {
						console.log(line);
						if (line === prevLine) continue;
						const item = line.split('|');

						switch (item[1]) {

						// WIP - ATTACKER's MOVE/effect targeted at POKEMON was blocked by EFFECT
						// |-block|POKEMON|EFFECT|MOVE|ATTACKER
						case '-block':

							break;

						// POKEMON's STAT is boosted by AMOUNT levels, to a max of 6
						// |-boost|POKEMON|STAT|AMOUNT
						case '-boost':
							switch (item[3]) {
							case 'atk':
								stat = 'Attack';
								break;
							case 'def':
								stat = 'Defense';
								break;
							case 'spa':
								stat = 'Sp. Atk';
								break;
							case 'spd':
								stat = 'Sp. Def';
								break;
							case 'spe':
								stat = 'Speed';
								break;
							case 'accuracy':
								stat = 'accuracy';
								break;
							case 'evasion':
								stat = 'evasiveness';
							}

							if (item[2].split(':')[0] === 'p1a') {
								targetName = activeName;
								if (battle.active.boosts[item[3]] < 6) {
									switch (item[4]) {
									case '1':
										battle.active.boosts[item[3]] += 1;
										turnSummary.push(`${targetName}'s ${stat} rose! [${battle.active.boosts[item[3]]}]`);
										break;
									case '2':
										battle.active.boosts[item[3]] += 2;
										if (battle.active.boosts[item[3]] > 6) battle.active.boosts[item[3]] = 6;
										turnSummary.push(`${targetName}'s ${stat} rose sharply! [${battle.active.boosts[item[3]]}]`);
										break;
									case '3':
									case '4':
									case '5':
									case '6':
										battle.active.boosts[item[3]] += parseInt(item[4], 10);
										if (battle.active.boosts[item[3]] > 6) battle.active.boosts[item[3]] = 6;
										turnSummary.push(`${targetName}'s ${stat} rose drastically! [${battle.active.boosts[item[3]]}]`);
										break;
									}
								}
								else {
									turnSummary.push(`${targetName}'s ${stat} won't go any higher!`);
								}
							}
							else if (battle.opponentActive.boosts[item[3]] < 6) {
								targetName = foesName;
								switch (item[4]) {
								case '1':
									battle.opponentActive.boosts[item[3]] += 1;
									turnSummary.push(`${targetName}'s ${stat} rose! [${battle.opponentActive.boosts[item[3]]}]`);
									break;
								case '2':
									battle.opponentActive.boosts[item[3]] += 2;
									if (battle.opponentActive.boosts[item[3]] > 6) battle.opponentActive.boosts[item[3]] = 6;
									turnSummary.push(`${targetName}'s ${stat} rose sharply! [${battle.opponentActive.boosts[item[3]]}]`);
									break;
								case '3':
								case '4':
								case '5':
								case '6':
									battle.opponentActive.boosts[item[3]] += parseInt(item[4], 10);
									if (battle.opponentActive.boosts[item[3]] > 6) battle.opponentActive.boosts[item[3]] = 6;
									turnSummary.push(`${targetName}'s ${stat} rose drastically! [${battle.opponentActive.boosts[item[3]]}]`);
									break;
								}
							}
							else {
								turnSummary.push(`${targetName}'s ${stat} won't go any higher!`);
							}
							break;

							// WIP - POKEMON was not able to do something (potentially MOVE) because of REASON.
							// |cant|POKEMON|REASON|*MOVE*
						case 'cant':
							// X is paralyzed!
							// It can't move!
							if (item[2].split(':')[0] === 'p1a') { sourceName = activeName; }
							else { sourceName = foesName; }

							switch (item[3]) {
							case 'par':
								turnSummary.push(`${sourceName} is paralyzed! It can't move!`);
								break;
							default:
								turnSummary.push(`Something undefined prevented ${sourceName} from attacking!`);
								break;
							}

							break;

							// WIP  -
							// ||
						case '':
							break;

							// WIP - specified POKEMON recovers from STATUS
							// |-curestatus|POKEMON|STATUS
						case '-curestatus':

							break;

							// WIP - POKEMON has used move to cure all team status effects (heal bell)
							// |-cureteam|POKEMON
						case '-cureteam':

							break;

							// WIP - clears all bof the boosts of all POKEMON (Ex: Haze)
							// |-clearallboost
						case '-clearallboost':

							break;

							// WIP - Clears all of the boosts of specified POKEMON (Ex: Clear Smog)
							// |-clearboost|POKEMON
						case '-clearboost':

							break;

							// WIP - Clears all negative boosts from the target POKEMON (Ex: z-effects)
							// |-clearnegativeboost|POKEMON
						case '-clearnegativeboost':

							break;

							// WIP - Clears all positive boosts of TARGET due to EFFECT of POKEMON (Ex: Spectral Thief)
							// |-clearpositiveboost|TARGET|POKEMON|EFFECT
						case '-clearpositiveboost':

							break;

							// WIP - Copies boost from SOURCE to TARGET (Ex: Psych Up)
							// |-copyboost|SOURCE|TARGET
						case '-copyboost':

							break;

							// Critical hit was perfomed on POKEMON
							// |-crit|POKEMON
						case '-crit':
							turnSummary.push('It\'s a critical hit!');
							break;

							// WIP - POKEMON has changed formes temporarily (-formechange) or permanently (detailschange) for duration of battle
							// |detailschange|POKEMON|DETAILS|HP STATUS   OR   |-formechange|POKEMON|SPECIES|HP STATUS
						case 'detailschange':
						case '-formechange':

							break;

							// Set new HP status for specified POKEMON by SOURCE (optional)
							// |-damage|POKEMON|HP STATUS|SOURCE
						case '-damage':
							if (item[3].slice(-3) === 'fnt') tempHP = item[3].split(' ')[0];
							else tempHP = item[3].split('/')[0];

							if (item[2].split(':')[0] === 'p1a') {
								active.currentHP = tempHP;
								targetName = activeName;
							}
							else {
								opponent.currentHP = tempHP;
								targetName = foesName;
							}

							// If hurt by something other than an opponent's move
							if (item[4]) {
								if (item[5]) {
									if (item[5].split(' ')[1] === 'p1a:') { sourceName = activeName; }
									else { sourceName = foesName; }
								}
								let hurtBy = item[4].split('[from] ')[1],
									sourceAbility = null;
								if (hurtBy.indexOf('ability') !== -1) {
									sourceAbility = hurtBy.split(': ')[1];
									hurtBy = 'ability';
								}

								switch (hurtBy) {
								case 'ability':
									turnSummary.push(`${targetName} was hurt by ${sourceName}'s ${sourceAbility}!`);
									break;
								case 'psn':
									turnSummary.push(`${targetName} was hurt by poison!`);
									break;
								case 'recoil':
									turnSummary.push(`${targetName} was hurt by recoil!`);
									break;
								default:
									turnSummary.push(`${targetName} was hurt by something undefined!`);
									break;
								}
							}
							break;

							// WIP - same as switch, except forced. If opponent, reset participated. If player, add to participated
							// WIP - swap active or opponent active with another mon. If opponent, reset participated. If player, add to participated
							// |drag|POKEMON|DETAILS|HP STATUS   OR   |switch|POKEMON|DETAILS|HP STATUS
						case 'drag':
						case 'switch':

							break;

							// WIP - The [*volatile* status] inflicted on POKEMON by EFFECT has ended.
							// |-end|POKEMON|EFFECT
						case '-end':
							break;

							// WIP - ITEM held by POKEMON has been destroyed due toEFFECT (move/ability)
							// This will be [silent] if item's ownership changes.
							// |-enditem|POKEMON|ITEM|[from]EFFECT
							// POKEMON's ITEM has destroyed itself (consumed berries, air balloon)
							// if berry is consumed, additional modifier |[eat] is used.
							// |-enditem|POKEMON|ITEM|
						case '-enditem':
							break;

							// WIP - ACTION has failed against specific target POKEMON
							// |-fail|POKEMON|ACTION
						case '-fail':
							turnSummary.push('But it failed!');
							break;

							// WIP - If player, request new switch in. If opponent, apply experience, level ups, evolution tracker
							// |faint|POKEMON
						case 'faint':
							if (item[2].split(':')[0] === 'p1a') {
								active.status = 'Fainted';
								battle.fainted.push(battle.active.position);
								party[battle.active.position] = active;
								turnSummary.push(`${activeName} fainted!`);

								if (party.length !== battle.fainted.length) {
									// switch menu
								}
							}
							else {
								opponent.status = 'Fainted';
								battle.opponentFainted.push(battle.opponentActive.position);
								oppParty[battle.opponentActive.position] = opponent;
								turnSummary.push(`${foesName} fainted!`);
								turnSummary.push('-------------------------');

								// Award Exp to each party Pokemon
								party[battle.active.position] = active;
								for (let j = 0; j < party.length; j++) {
									if (battle.fainted.indexOf(j) === -1) {
										party[j] = awardExp(party[j], j);
									}
								}
								active = party[battle.active.position];

								if (oppParty.length !== battle.opponentFainted.length) {
									battle.participated = [];
									// Switch out opponent's pokemon
								}
							}
							break;

							// WIP -
							// |-fieldend|CONDITION
						case '-fieldend':

							break;

							// WIP -
							// |-fieldstart|CONDITION
						case '-fieldstart':

							break;

							// Set new HP STATUS for specified POKEMON
							// |-heal|POKEMON|HP STATUS|
						case '-heal':
							tempHP = item[3].split('/')[0];
							if (item[2].split(':')[0] === 'p1a') {
								active.currentHP = tempHP;
								targetName = activeName;
							}
							else {
								opponent.currentHP = tempHP;
								targetName = foesName;
							}
							turnSummary.push(`${targetName} had its HP resotred.`);
							break;

							// WIP - A multi-hit move hit POKEMON NUM times.
							// |-hitcount|POKEMON|NUM
						case '-hitcount':
							if (item[2].split(':')[0] === 'p1a') { targetName = activeName; }
							else { targetName = foesName; }
							turnSummary.push(`${targetName} was hit ${item[3]} times!`);
							break;

							// POKEMON is immune to a move.
							// |-immune|POKEMON
						case '-immune':
							if (item[2].split(':')[0] === 'p1a') { targetName = activeName; }
							else { targetName = foesName.charAt(0).toLowerCase() + foesName.slice(1); }
							turnSummary.push(`It doesn't affect ${targetName}...`);
							break;

							// WIP - Inverts the boosts of the specified POKEMON
							// |-invertboost|POKEMON
						case '-invertboost':
							break;

							// WIP - ITEM held by POKEMON has been changed or revealed due to
							// EFFECT (move or ability)
							// |-item|POKEMON|ITEM|[from]EFFECT
							// POKEMON switched in, ITEM has long-term effect (Ex: Air Balloon)
							// |-item|POKEMON|ITEM|
						case '-item':
							break;

							// The move used by SOURCE missed the TARGET
							// |-miss|SOURCE|TARGET
						case '-miss':
							if (item[3].split(':')[0] === 'p1a') {
								turnSummary.push(`${activeName} avoided the attack!`);
							}
							else {
								turnSummary.push(`${foesName} avoided the attack!`);
							}
							break;

							// IMPROVE LATER - fetch move description
							// |move|POKEMON|MOVE|TARGET
						case 'move':
							if (item[2].split(':')[0] === 'p1a') {
								turnSummary.push(`${activeName} used ${item[3]}!`);
							}
							else {
								// turnSummary.push(`${foesName} used ${opponent.moves[oppMove - 1]}!`);
								turnSummary.push(`${foesName} used ${item[3]}!`);
							}
							break;

							// Future Implement - Zoroark Illusion has ended
							// |replace|POKEMON|DETAILS|HP STATUS
						case 'replace':
							break;

							// Resisted hit was perfomed on POKEMON
							// |-resisted|POKEMON
						case '-resisted':
							turnSummary.push('It\'s not very effective!');
							break;

							// WIP - specified POKEMON's STAT is set to specific AMOUNT (Ex: Anger Point, Belly Drum)
							// |-setboost|POKEMON|STAT|AMOUNT
						case '-setboost':

							break;

							// WIP - specified POKEMON now has HP hitpoints
							// |-sethp|POKEMON|HP
						case '-sethp':

							break;

							// WIP - a side CONDITION has started on SIDE. (Ex: Tailwind, Stealth Rock, Reflect)
							// |-sidestart|SIDE|CONDITION|
						case '-sidestart':
							break;

							// WIP - a side CONDITION has ended on SIDE.
							// |-sidestart|SIDE|CONDITION|
						case '-sideend':
							break;

							// WIP - specified POKEMON used a MOVE lasting duration of the move (Ex: Grudge, Destiny Bond)
							// |-singlemove|POKEMON|MOVE
						case '-singlemove':

							break;

							// WIP - specified POKEMON used a MOVE lasting duration of the turn (Ex: Protect, Focus Punch, Roost)
							// |-singleturn|POKEMON|MOVE
						case '-singleturn':

							break;

							// WIP - a [*volatile* status] has been inflicted on POKEMON by EFFECT.
							// |-start|POKEMON|EFFECT
						case '-start':
							break;

							// WIP - specified POKEMON has been inflcited with STATUS
							// |-status|POKEMON|STATUS
						case '-status':
							if (item[2].split(':')[0] === 'p1a') {
								targetName = `${activeName}`;
								tempPoke = active;
							}
							else {
								targetName = `${foesName}`;
								tempPoke = opponent;
							}

							switch (item[3]) {

							case 'par':
								turnSummary.push(`${targetName} was paralyzed!`);
								tempPoke.status = ' [PRZ]';
								break;
							case 'psn':
								turnSummary.push(`${targetName} was poisoned!`);
								tempPoke.status = ' [PSN]';
								break;
							case 'slp':
								turnSummary.push(`${targetName} fell asleep!`);
								tempPoke.status = ' [SLP]';
								break;
							case 'tox':
								turnSummary.push(`${targetName} was badly poisoned!`);
								tempPoke.status = ' [PSN]';
								break;
							default:
								turnSummary.push(`${targetName} was afflicted with an undefined status!`);
							}

							if (item[2].split(':')[0] === 'p1a') { active = tempPoke; }
							else { opponent = tempPoke; }
							break;

							// super-effective hit was perfomed on POKEMON
							// |-supereffective|POKEMON
						case '-supereffective':
							turnSummary.push('It\'s super effective!');
							break;

							// Future Implement: Double Battles
							// |swap|POKEMON|POSITION
						case 'swap':
							break;

							// WIP - Swaps the boosts from STATS between the SOURCE and TARGET Pokemon
							// |-swapboost|SOURCE|TARGET|STATS
						case '-swapboost':

							break;

							// WIP - Player + opponent black out, no money lost, all mon healed and statuses set to normal, formes reset.
							// |tie
						case 'tie':
							battleDone = true;
							winnerDetermined = true;

							// Return player to last visited Pokémon Center/home
							if (profile.lastHealLocation === 'leddintown') {
								healLocationPhrase = 'home';
							}
							else {
								newLocation = await Location.findOne({ _id: profile.lastHealLocation });
								healLocationPhrase = `to the ${newLocation.name} Pokémon Center`;
							}
							profile.currentLocation = profile.lastHealLocation;
							turnSummary.push(`You have no more Pokémon that can fight!\n
										You were discouraged by the tie!\n
										You scurry back ${healLocationPhrase}, protecting your exhausted Pokémon from any futher harm...`);

							// Set HP, status, formes to normal
							console.log('Promise resolve after tie');
							resolve();
							break;

							// Sync battle object turn count with simulator turn count.
							// |turn|AMOUNT
						case 'turn':
							if (item[2] !== battle.turn) battle.turn = item[2];
							if (parseInt(item[2], 10) > 1) {
								console.log('Promise resolved on turn: ' + item[2]);
								resolve();
							}
							break;

							// POKEMON's STAT is unboosted by AMOUNT levels, to a max of -6
							// |-unboost|POKEMON|STAT|AMOUNT
						case '-unboost':
							switch (item[3]) {
							case 'atk':
								stat = 'Attack';
								break;
							case 'def':
								stat = 'Defense';
								break;
							case 'spa':
								stat = 'Sp. Atk';
								break;
							case 'spd':
								stat = 'Sp. Def';
								break;
							case 'spe':
								stat = 'Speed';
								break;
							case 'accuracy':
								stat = 'accuracy';
								break;
							case 'evasion':
								stat = 'evasiveness';
							}

							if (item[2].split(':')[0] === 'p1a') {
								if (battle.active.boosts[item[3]] > -6) {
									targetName = activeName;
									switch (item[4]) {
									case '1':
										battle.active.boosts[item[3]] -= 1;
										turnSummary.push(`${targetName}'s ${stat} fell! [${battle.active.boosts[item[3]]}]`);
										break;
									case '2':
										battle.active.boosts[item[3]] -= 2;
										if (battle.active.boosts[item[3]] < -6) battle.active.boosts[item[3]] = -6;
										turnSummary.push(`${targetName}'s ${stat} harshly fell! [${battle.active.boosts[item[3]]}]`);
										break;
									case '3':
									case '4':
									case '5':
									case '6':
										battle.active.boosts[item[3]] -= parseInt(item[4], 10);
										if (battle.active.boosts[item[3]] < -6) battle.active.boosts[item[3]] = -6;
										turnSummary.push(`${targetName}'s ${stat} severely fell! [${battle.active.boosts[item[3]]}]`);
										break;
									}
								}
								else {
									turnSummary.push(`${targetName}'s ${stat} won't go any lower!`);
								}
							}
							else {
								targetName = foesName;
								if (battle.opponentActive.boosts[item[3]] > -6) {
									switch (item[4]) {
									case '1':
										battle.opponentActive.boosts[item[3]] -= 1;
										turnSummary.push(`${targetName}'s ${stat} fell! [${battle.opponentActive.boosts[item[3]]}]`);
										break;
									case '2':
										battle.oppopnentActive.boosts[item[3]] -= 2;
										if (battle.opponentActive.boosts[item[3]] < -6) battle.opponentActive.boosts[item[3]] = -6;
										turnSummary.push(`${targetName}'s ${stat} harshly fell! [${battle.opponentActive.boosts[item[3]]}]`);
										break;
									case '3':
									case '4':
									case '5':
									case '6':
										battle.opponentActive.boosts[item[3]] -= parseInt(item[4], 10);
										if (battle.opponentActive.boosts[item[3]] < -6) battle.opponentActive.boosts[item[3]] = -6;
										turnSummary.push(`${targetName}'s ${stat} severely fell! [${battle.opponentActive.boosts[item[3]]}]`);
										break;
									}
								}
								else {
									turnSummary.push(`${targetName}'s ${stat} won't go any lower!`);
								}
							}
							break;

							// WIP - Indicates WEATHER that is currently in effect. [upkeep] if weather was activated previously and still in effect, 'none' if weather expired.
							// |-weather|WEATHER
						case 'weather':

							break;

							// WIP - If player, apply experience, level ups, win money (if trainer), evolutions. If opponent, black out, take money from player.
							// |win|USER
						case 'win':

							if (item[2] === 'Player') {

								// If trainer, determine amount of prize money won and post to TurnSummary
								// Increase happiness if
								if (battle.opponent.type !== 'Wild') {

									switch (battle.opponent.level) {
									case 'beginner':
										prizeMoneyBase = 60;
										break;

									case 'novice':
										prizeMoneyBase = 80;
										break;

									case 'intermediate':
										prizeMoneyBase = 100;
										break;

									case 'advanced':
										prizeMoneyBase = 120;
										break;

									case 'expert':
										prizeMoneyBase = 160;
										break;

									case 'special':
										prizeMoneyBase = 200;
										if (battle.opponent.trainerType === 'Leader' || battle.opponent.trainerType === 'Elite Four' || battle.opponent.trainerType === 'Champion') {
											for (const position of battle.participated) {
												if (party[position].happiness < 100) {
													party[position].happiness += 5;
												}
												else if (party[position].happiness < 200) {
													party[position].happiness += 4;
												}
												else if (party[position].happiness < 253) {
													party[position].happiness += 3;
												}
												else if (party[position].happiness < 255) {
													party[position].happiness = 255;
												}
											}
										}
										break;
									}
									for (const pokemon of oppParty) {
										if (pokemon.level > maxLevel) maxLevel = pokemon.level;
									}
									prizeMoney = maxLevel * prizeMoneyBase;
									profile.money += prizeMoney;

									turnSummary.push(`You defeated !\nYou got ${prizeMoney}P for winning!`);
								}

								if (battle.evolutions) {
									// WIP - queue evolutions
								}

								battleDone = true;
								winnerDetermined = true;
								winner = true;
							}
							else {

								// determine amount of prize money lost
								switch (profile.badges.length) {
								case 0:
									prizeMoneyBase = 8;
									break;

								case 1:
									prizeMoneyBase = 16;
									break;

								case 2:
									prizeMoneyBase = 24;
									break;

								case 3:
									prizeMoneyBase = 36;
									break;

								case 4:
									prizeMoneyBase = 48;
									break;

								case 5:
									prizeMoneyBase = 64;
									break;

								case 6:
									prizeMoneyBase = 80;
									break;

								case 7:
									prizeMoneyBase = 100;
									break;

								case 8:
									prizeMoneyBase = 120;
									break;

								default:
									prizeMoneyBase = 8;
								}
								for (const pokemon of party) {
									if (pokemon.level > maxLevel) maxLevel = pokemon.level;
								}
								prizeMoney = maxLevel * prizeMoneyBase;
								if (prizeMoney > profile.money) prizeMoney = profile.money;

								// set new location as last location healed after loss.
								if (profile.lastHealLocation === 'leddintown') {
									newLocation = await Location.findOne({ _id: 'leddintown' });
									healLocationPhrase = 'home';
								}
								else {
									newLocation = await Location.findOne({ _id: profile.lastHealLocation });
									healLocationPhrase = `to the ${newLocation.name} Pokémon Center`;
								}
								profile.currentLocation = newLocation._id;
								console.log('Player lost. New Location set.');
								console.log('TurnSummary: \n' + turnSummary);
								turnSummary.push(`\nYou have no more Pokémon that can fight!
											You panicked and dropped ${prizeMoney}P...
											You were overwhelmed by your defeat!
											You scurry back ${healLocationPhrase}, protecting your exhausted Pokémon from any futher harm...`);
								console.log('TurnSummary Update: \n' + turnSummary);

								// WIP - fully heal team, update location to last PC
								profile.money -= prizeMoney;

								battleDone = true;
								winnerDetermined = true;
							}
							console.log('Promise resolved after winner determined.');
							resolve();
							break;

						default:
							break;
						}
						prevLine = line;
					}
					i++;
				}
				console.log('Promise resolved after tie');
				resolve();
			})();

			streams.omniscient.write(`>p1 move ${activeMove}`);
			// stream.write(`>p2 move ${oppMove}`);
		});
	}

	function awardExp(pokemon, position) {
		let expGained = null,
			a = 1,
			e = 1,
			s = 1,
			t = 1;
		const b = dex[opponent.pokemon.toLowerCase()].expYield,
			L = opponent.level,
			Lp = pokemon.level,
			p = 1;

		if (battle.opponent.type === 'Trainer') a = 1.5;
		if (pokemon.item === 'Lucky Egg') e = 1.5;
		if (battle.participated.indexOf(position) === -1) s = 2;
		if (pokemon.currentTrainer !== pokemon.originalTrainer) t = 1.5;

		let pokeName = pokemon.nickname,
			newMoveset = pokemon.moves,
			leveled = false;
		if (!pokeName) pokeName = pokemon.pokemon;

		// Calculate EXP gained with scaled formula, update Pokémon's current EXP.
		expGained = Math.floor((((a * b * L) / (5 * s)) * Math.pow((2 * L + 10) / (L + Lp + 10), 2.5) + 1) * t * e * p);
		pokemon.exp.current += expGained;
		turnSummary.push(`${pokeName} gained ${expGained} Exp. Points!`);

		// until all level ups have been added
		while (pokemon.exp.current > pokemon.exp.nextLevel) {

			// update Pokemon level and current/max HP
			pokemon.level += 1;
			leveled = true;
			const newStats = utils.getStats(pokemon.species, pokemon.level, pokemon.natureMultipliers);
			const deltaHP = newStats[0] - pokemon.maxHP;
			pokemon.maxHP = newStats[0];
			pokemon.currentHP += deltaHP;

			// update next level exp goal and percentage attained
			const expInfo = utils.expLookup(pokemon.species, pokemon.level, pokemon.exp.current);
			pokemon.exp.percentage = expInfo.percent;
			pokemon.exp.nextLevel = expInfo.nextLevel;

			// check for evolution

			// update moveset with new pokemon level
			newMoveset = utils.upsertMoveset(pokemon.species, pokemon.level, newMoveset, true);
		}
		if (leveled) {
			turnSummary.push(`${pokeName} grew to level ${pokemon.level}!`);
			if (pokemon.moves !== newMoveset) {
				for (let i = pokemon.moves.length; i < newMoveset.length; i++) {
					turnSummary.push(`${pokeName} learned ${newMoveset[i]}!`);
				}
				pokemon.moves = newMoveset;
			}
		}

		return pokemon;
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
			}
			else {
				buf += evs;
			}

			// gender
			if (set.gender) {
				buf += '|' + set.gender;
			}
			else {
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
			}
			else {
				buf += ivs;
			}

			// shiny
			if (set.shiny) {
				buf += '|S';
			}
			else {
				buf += '|';
			}

			// level
			if (set.level && set.level !== 100) {
				buf += '|' + set.level;
			}
			else {
				buf += '|';
			}

			// happiness
			if (set.happiness !== undefined && set.happiness !== 255) {
				buf += '|' + set.happiness;
			}
			else {
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
};

