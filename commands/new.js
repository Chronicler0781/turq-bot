module.exports = {
	name: 'new',
	description: 'this command generates a new profile for the tagged user',
	execute(message, args) {

		// add mongodb client and functions for generating a new pokemon
		const MongoClient = require('mongodb').MongoClient;
		const movesets = require('./pokeinfo/movesets.js');
		const det_gender = require('./pokeinfo/det_gender.js');
		const det_stats = require('./pokeinfo/det_stats.js');
		const det_ability = require('./pokeinfo/det_ability.js');
		const det_nature = require('./pokeinfo/det_nature.js');
		const det_shiny = require('./pokeinfo/det_shiny.js');


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
					if (typeof message.mentions.users.first() == 'undefined') {
						message.channel.send('>>> Please tag a user when creating a profile.');
					}
					else {
						const taggedUser = message.mentions.users.first();
						const userID = taggedUser.id;
						const userSearch = await findProfilebyID(client, userID);


						if (typeof userSearch == 'undefined') {
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

		main().catch(console.error);

		async function createProfile(client, newProfile) {
			const result = await client.db('turqdb').collection('profiles').insertOne(newProfile);
			console.log(`New profile created with the following id: ${result.insertedId}`);
			return result;
		}

		async function createPokemon(client, newPokemon) {
			const result = await client.db('turqdb').collection('pokémon').insertOne(newPokemon);
			console.log(`New Pokémon created with the following id: ${result.insertedId}`);
			return result;
		}

		async function findProfilebyID(client, userID) {
			const result = await client.db('turqdb').collection('profiles').findOne({ _id: userID });
			if (result) {
				console.log(`Found a profile associated with UserID: '${userID}'`);
				return result;
			}
			else {
				console.log(`No profile found with the UserID: '${userID}'`);
			}
		}
	},
};