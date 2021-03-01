const { Battle, DexEntry, Location, Pokemon, User } = require('../models');

module.exports = {
	name: 'wild',
	description: 'this command generates a wild pokemon battle depending on where a user is',

	execute(Discord, bot, message) {

		const gen_pokemon = require('./pokeinfo/gen_pokemon.js');

		async function main() {

			try {

				// retrieve user profile from database
				const userID = message.author.id;
				let profile = await User.findOne({_id: userID});

				if (profile.battleID == '' || profile.battleID == 'None') {
					
					// choose a numbers between 1-100 to determine the wild slot, held item chance, and evolution stage chance
					const wildSeed = Math.floor(Math.random() * (100 - 1 + 1)) + (1 - 0);
					// const itemSeed = Math.floor(Math.random() * (100 - 1 + 1)) + (1 - 0);

					// use the levelcalc function to determine the wild level of the pokemon
					let wildLevel = await levelcalc(profile);

					// set wildpoke and default held item values
					let wildpoke = null;
					let helditem = 'None';
					let wildCounter = 0;
					let minLvl = 60;

					// Determine wild slot with see, applicable stages in slot, and choose stage for wild encounter
					const location = await Location.findOne({_id: profile.currentLocation});

					for (const wildSlot of location.wilds) {
						wildCounter = wildCounter + wildSlot.probability;
						
						if (wildSeed <= wildCounter) {
							const stages = [];

							for (const wildStage of wildSlot.pokemon) {
								if (wildLevel >= wildStage.minLvl && (wildLevel <= wildStage.maxLvl || typeof wildStage.maxLvl === 'undefined')) {
									if (minLvl > wildStage.minLvl) {
										minLvl = wildStage.minLvl;
									}
									stages.push(wildStage.name)
								}
							}

							if (wildLevel < minLvl) {
								wildLevel = minLvl;
							}
							const stageSeed = Math.floor(Math.random() * (stages.length - 1 + 1));
							wildpoke = stages[stageSeed];
							break;
						}
					}

					// create wild pokemon object
					const wild_obj = gen_pokemon(wildpoke,'', wildLevel, helditem, '', null);

					// create wild pokemon in database, save wild pokemon's ID
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

					// Create gender emoji variable to male or female
					let gend_emoji = [];
					if(wild_obj.Gender == 'Male') {
						gend_emoji = bot.emojis.cache.find(emoji => emoji.name === 'm_');
					}
					else if(wild_obj.Gender == 'Female') {
						gend_emoji = bot.emojis.cache.find(emoji => emoji.name === 'f_');
					}

					const wildBattleEmbed = new Discord.MessageEmbed()
						.setColor('#0099ff')
						.setAuthor(`${location.name}`)
						.setTitle(`A wild ${gend_emoji} Lvl. ${wildLevel} ${wildpoke.charAt(0).toUpperCase() + wildpoke.slice(1)} appeared!`)
						.setDescription(`**HP:** ${wild_obj.currentHP}/${wild_obj.maxHP}`)
						.setImage(`http://turquoise.alteredorigin.net/images/pseudosprites/${wildpoke}.png`)
						.setFooter('Battle Started:')
						.setTimestamp();

					message.channel.send(wildBattleEmbed);

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
				levels[count] = slot1.Level;
				count = count + 1;
			}
			if (slot2 !== null) {
				levels[count] = slot2.Level;
				count = count + 1;
			}
			if (slot3 !== null) {
				levels[count] = slot3.Level;
				count = count + 1;
			}
			if (slot4 !== null) {
				levels[count] = slot4.Level;
				count = count + 1;
			}
			if (slot5 !== null) {
				levels[count] = slot5.Level;
				count = count + 1;
			}
			if (slot6 !== null) {
				levels[count] = slot6.Level;
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