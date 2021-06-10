const { Battle, Location, Pokemon, User } = require('../../models');

module.exports = {
	name: 'wild',
	description: 'this command generates a wild pokemon battle depending on where a user is',

	execute(Discord, bot, message) {

		const genPokemon = require('../functions/genPokemon');
		const simulator = require('../functions/battleSimulator');

		async function main() {

			try {

				// retrieve user profile from database
				const userID = message.author.id;
				let profile = await User.findOne({ _id: userID });
				const location = await Location.findOne({ _id: profile.currentLocation });

				if (location.wilds[0]) {
					if (!profile.battleID) {

						// choose a numbers between 1-100 to determine the wild slot, held item chance, and evolution stage chance
						const wildSeed = Math.floor(Math.random() * (100 - 1 + 1)) + (1 - 0);
						console.log('wild seed: ' + wildSeed);
						// const itemSeed = Math.floor(Math.random() * (100 - 1 + 1)) + (1 - 0);

						// use the levelcalc function to determine the wild level of the pokemon
						let wildLevel = await levelcalc(profile);
						console.log(wildLevel);

						// set wildpoke and default held item values
						let wildpoke = null;
						let wildCounter = 0;
						let minLvl = 60;
						let maxLvl = 2;

						// Determine wild slot with see, applicable stages in slot, and choose stage for wild encounter
						for (const wildSlot of location.wilds) {
							wildCounter += wildSlot.probability;

							if (wildSeed <= wildCounter) {
								// console.log('wild counter: ' + wildCounter);
								const stages = [];

								for (const wildStage of wildSlot.pokemon) {
									console.log(wildStage);
									if ((wildLevel >= wildStage.minLvl || stages.length === 0) && (!wildStage.maxLvl || wildLevel <= wildStage.maxLvl || wildSlot.pokemon.length === 1)) {
										if (minLvl > wildStage.minLvl) {
											minLvl = wildStage.minLvl;
										}
										if (wildStage.maxLvl && maxLvl < wildStage.maxLvl) {
											maxLvl = wildStage.maxLvl;
										}
										else {
											maxLvl = 60;
										}
										stages.push(wildStage.name);
									}
								}

								if (wildLevel < minLvl) {wildLevel = minLvl; }
								if (wildLevel > maxLvl) { wildLevel = maxLvl; }

								const stageSeed = Math.floor(Math.random() * (stages.length - 1 + 1));
								wildpoke = stages[stageSeed];
								// console.log(stages);
								break;
							}
						}

						// create wild pokemon object and instance in database,
						// along with opponent party array for accessing pokemon info in-battle
						console.log(wildpoke);
						let wildPokemon = genPokemon(wildpoke, '', wildLevel, profile, 'Wild');
						wildPokemon = await Pokemon.create(wildPokemon);
						console.log('New Pokémon assigned ID: ' + wildPokemon._id);
						const oppParty = [wildPokemon];

						// create playerTeam array to insert in battle object,
						// and party array for acccessing pokemon info in-battle
						const party = [],
							playerTeam = [],
							fainted = [];
						let i = 0;
						for (const pokemonID of profile.party) {
							const tempPoke = await Pokemon.findOne({ _id: pokemonID });
							party.push(tempPoke);
							if (tempPoke.status === 'Fainted') {
								fainted.push(i);
							}
							playerTeam.push({ _id: pokemonID, nickname: tempPoke.nickname, pokemon: tempPoke.pokemon });
							i++;
						}

						// create a new battle database entry with the two pokemon involved, save battle ID
						const wildBattle = await Battle.create({
							playerID: userID,
							party: playerTeam,
							active: {
								_id: playerTeam[0].id,
								position: 0,
								boosts: { atk: 0, def: 0, spa: 0, spd: 0,
									spe: 0, accuracy: 0, evasion: 0 },
								effects: [],
							},
							fainted: [],
							opponentParty: [{ _id: wildPokemon._id, pokemon: wildPokemon.pokemon }],
							opponentActive: {
								_id: wildPokemon._id,
								position: 0,
								boosts: { atk: 0, def: 0, spa: 0, spd: 0,
									spe: 0, accuracy: 0, evasion: 0 },
								effects: [],
							},
							opponentFainted: [],
							opponent: {
								type: 'Wild',
							},
							participated: [0],
							evolutions: [],
							turn: 1,
						});

						// Update user's profile with new battle ID
						const updatedProfile = { battleID: wildBattle._id };
						profile = await User.findOneAndUpdate({ _id: userID }, updatedProfile, { new: true });

						await simulator(Discord, bot, message, wildBattle, profile, location, party, oppParty);

					}
					else {
						message.channel.send('>>> Error: Please finish your current battle before searching for a new wild Pokémon!');
					}
				}
				else {
					message.channel.send('>>> Error: This location does not contain wild Pokémon!');
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

			const levelbase = Math.max(...levels);

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