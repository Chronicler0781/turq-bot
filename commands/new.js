module.exports = {
	name: 'new',
	description: 'this command generates a new profile for the tagged user',
	execute(message, args) {

		// add mongodb client and /pokeinfo/ function files for generating a new pokemon
		const MongoClient = require('mongodb').MongoClient;
		const movesets = require('./pokeinfo/movesets.js');
		const det_gender = require('./pokeinfo/det_gender.js');
		const det_stats = require('./pokeinfo/det_stats.js');
		const det_ability = require('./pokeinfo/det_ability.js');
		const det_nature = require('./pokeinfo/det_nature.js');
		const det_shiny = require('./pokeinfo/det_shiny.js');

		// main function for 'new' command, will not run until called.
		async function main() {

			// login to mongodb
			const uri = 'mongodb+srv://turqbot:turquoise2007@turqdb-30xsx.gcp.mongodb.net/turqdb?retryWrites=true&w=majority';
			const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

			try {
				await client.connect();

				// switch to determine subcommand of -new command
				switch(args[0].toLowerCase()) {

				// subcommand to generate new user profile
				case 'profile':

					// if no user is tagged, do not continue
					if (typeof message.mentions.users.first() == 'undefined') {
						message.channel.send('>>> Please tag a user when creating a profile.');
					}
					else {
						// get discord userID for tagged user
						const taggedUser = message.mentions.users.first();
						const userID = taggedUser.id;

						// search for pre-existing profile in profile database with discord ID
						const userSearch = await findProfilebyID(client, userID);

						// if no mathcing profile is found, continue with profile creation
						if (typeof userSearch == 'undefined') {

							// convert starter pokemon name to lower case
							const pokemon = args[4].toLowerCase();

							// determine Gender, HP, Ability, Nature, Moves, and Shininess of Starter
							const gend = det_gender(pokemon);
							console.log(`Gender determined as: ${gend}`);

							const ability = det_ability(pokemon, []);
							console.log(`Ability ${ability.number} rolled: ${ability.name}`);

							const nature = det_nature();
							console.log(`${nature.name} nature rolled with multipliers: ${nature.mult}`);

							const stats = det_stats(pokemon, 5, nature.mult);
							console.log(`Stats determined as: ${stats}`);

							const current_ms = movesets(pokemon, 5, []);
							console.log(`Movelist determined as: ${current_ms}`);

							const shininess = det_shiny();
							console.log(`Is the Pokemon shiny?: ${shininess}`);

							// create new database entry for specified starter pokemon
							const starter = await createPokemon(client,
								{
									Pokémon: args[4],
									Level: 5,
									Gender: gend,
									CurrentHP: stats[0],
									MaxHP: stats[0],
									AbilityNo: ability.number,
									Ability: ability.name,
									Nature: nature.name,
									NatureMultipliers: nature.mult,
									HeldItem: 'None',
									Nickname: args[5],
									CurrentTrainer: args[1],
									OT: args[1],
									Moves: current_ms,
									Experience: 0,
									Shiny: shininess,
								},
							);

							// create new database entry for tagged user, assigns new starter's pokemon ID to PartySlot1
							await createProfile(client,
								{
									_id: userID,
									Name: args[1],
									Age: args[2],
									Gender: args[3],
									Money: 1000,
									Badges: [],
									KeyItems: [],
									GeneralItems: ['Oran Berry'],
									PokéBalls: ['Poké Ball', 'Poké Ball', 'Poké Ball', 'Poké Ball',
										'Poké Ball'],
									TMs: [],
									HMs: [],
									RivalName: args[6],
									RivalAge: args[7],
									RivalGender: args[8],
									PartySlot1: starter.insertedId.toString(),
									PartySlot2: 'Empty',
									PartySlot3: 'Empty',
									PartySlot4: 'Empty',
									PartySlot5: 'Empty',
									PartySlot6: 'Empty',
								},
							);
							message.channel.send(`>>> Profile successfully created for ${taggedUser.username}.`);
						}
						// exit out if profile was found matching user discord ID
						else if (userID == userSearch._id) {
							message.channel.send(`>>> Profile already exists for ${taggedUser.username}.`);
						}
					}
					break;
				}
			}
			catch (e) {
				console.error(e);
			}
			finally {
				await client.close();
			}
		}

		// run main function
		main().catch(console.error);

		// function for creating a profile in mongodb, returns new profile database object
		async function createProfile(client, newProfile) {
			const result = await client.db('turqdb').collection('profiles').insertOne(newProfile);
			console.log(`New profile created with the following id: ${result.insertedId}`);
			return result;
		}

		// function for creating a pokemon in mongodb, returns new pokemon database object
		async function createPokemon(client, newPokemon) {
			const result = await client.db('turqdb').collection('pokémon').insertOne(newPokemon);
			console.log(`New Pokémon created with the following id: ${result.insertedId}`);
			return result;
		}

		// function for searching profile collection for specified userID
		async function findProfilebyID(client, userID) {
			const result = await client.db('turqdb').collection('profiles').findOne({ _id: userID });
			if (result) {
				console.log(`Found a profile associated with UserID: '${userID}'`);
				return result;
			}
			else {
				// if no profile is found, result will be 'undefined'
				console.log(`No profile found with the UserID: '${userID}'`);
			}
		}
	},
};