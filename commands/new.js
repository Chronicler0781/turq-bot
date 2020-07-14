module.exports = {
	name: 'new',
	description: 'this command generates a new profile for the tagged user',
	execute(Discord, bot, message, args) {

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
			const conf = require('../config.json');
			const client = new MongoClient(conf.uri, { useNewUrlParser: true, useUnifiedTopology: true });

			try {
				await client.connect();

				// switch to determine subcommand of -new command
				switch(args[0].toLowerCase()) {

				// subcommand to generate new user profile
				case 'profile':

					// search for user by specified usertag
					// eslint-disable-next-line no-case-declarations
					const taggedUser = message.guild.members.cache.find(m => m.user.tag === args[args.length - 1]);

					// if no correct user is mentioned, do not continue
					if (typeof taggedUser == 'undefined') {
						message.channel.send('>>> Please enter an existing server user when creating a profile.');
					}
					else {
						// get discord userID for tagged user
						const userID = taggedUser.user.id;

						// search for pre-existing profile in profile database with discord ID
						const userSearch = await findProfilebyID(client, userID);

						// if no mathcing profile is found, continue with profile creation
						if (typeof userSearch == 'undefined') {

							// convert starter pokemon name to lower case, replace underscores with spaces in names
							const pokemon = args[4].toLowerCase();
							const trainer = args[1].replace(/_/g, ' ');
							const nname = args[5].replace(/_/g, ' ');
							const rival = args[6].replace(/_/g, ' ');

							// set rival starter pokemon
							let rivalstarter = [];
							if(pokemon == 'crocoal') {
								rivalstarter = 'spraylet';
							}
							else if(pokemon == 'spraylet') {
								rivalstarter = 'acafia';
							}
							else {
								rivalstarter = 'crocoal';
							}

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
									Pokemon: args[4],
									Level: 5,
									Gender: gend,
									CurrentHP: stats[0],
									MaxHP: stats[0],
									Status: 'None',
									AbilityNo: ability.number,
									Ability: ability.name,
									Nature: nature.name,
									NatureMultipliers: nature.mult,
									HeldItem: 'None',
									Nickname: nname,
									CurrentTrainer: trainer,
									OT: trainer,
									Moves: current_ms,
									Experience: 0,
									Shiny: shininess,
								},
							);

							// create new database entry for tagged user, assigns new starter's pokemon ID to PartySlot1
							await createProfile(client,
								{
									_id: userID,
									Name: trainer,
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
									RivalName: rival,
									RivalAge: args[7],
									RivalGender: args[8],
									RivalTeam: [rivalstarter],
									PartySlot1: starter.insertedId.toString(),
									PartySlot2: 'Empty',
									PartySlot3: 'Empty',
									PartySlot4: 'Empty',
									PartySlot5: 'Empty',
									PartySlot6: 'Empty',
									Visited: ['leddintown'],
									Location: 'Leddin Town',
									Area: '',
									BattleID: '',
									ProfilePost: '',
									Slot1Post: '',
									Slot2Post: '',
									Slot3Post: '',
									Slot4Post: '',
									Slot5Post: '',
									Slot6Post: '',
									GlobalPlazaPost: '',
									PCPosts: [],

								},
							);

							// find profile and adventure categories, create new channels under them for new player
							const profilecat = message.guild.channels.cache.find(cat=> cat.name === 'RPG Profiles');
							const adventurecat = message.guild.channels.cache.find(cat=> cat.name === 'Adventures');
							const newprofile = await message.guild.channels.create(`${taggedUser.user.username}-profile`, {
								type: 'text',
								parent: profilecat.id,
							});
							const newadv = await message.guild.channels.create(`${taggedUser.user.username}-adv`, {
								type: 'text',
								parent: adventurecat.id,
							});

							// create embed for profile post
							const profileEmbed = new Discord.MessageEmbed()
								.setColor('#0099ff')
								.setAuthor(`${taggedUser.user.username}'s Profile`, taggedUser.user.avatarURL())
								.setTitle(`__Name:__ ${trainer} \t\t__Age:__ ${args[2]} \t\t__Gender:__ ${args[3]}`)
								.setDescription('__**Bio:**__ None')
								.addFields(
									{ name: '__Inventory__', value: '**Money:** 1000P \
													\n**Badges:** None \
													\n**Key Items:** None  \
													\n**TM\'s:** None \
													\n**HM\'s:** None', inline: true },
									{ name: '__General Items__', value: 'Oran Berry (1)', inline: true },
									{ name: '__Poké Balls__', value: 'Poké Ball (5)', inline: true },
									{ name: '\u200B', value: '\u200B' },
								)
								.addField('__Rival Info:__', `**Name:** ${rival} \n**Age:** ${args[7]} \n**Gender:** ${args[8]}`)
								.setImage(`http://turquoise.alteredorigin.net/images/pseudosprites/${rivalstarter}.png`)
								.setFooter('Last Updated', taggedUser.user.avatarURL())
								.setTimestamp();

							// create progress bar for start pokemon exp
							const ProgressBar = require('./ProgressBar.js');
							const progressBar = new ProgressBar(0, 100, 20);
							const bar = progressBar.createBar();

							// Create gender emoji variable to male or female
							let gend_emoji = [];
							if(gend == 'Male') {
								gend_emoji = message.guild.emojis.cache.find(emoji => emoji.name === 'm_');
							}
							else if(gend == 'Female') {
								gend_emoji = message.guild.emojis.cache.find(emoji => emoji.name === 'f_');
							}
							const pokemonEmbed = new Discord.MessageEmbed()
								.setColor('#0099ff')
								.setAuthor('Party Slot 1', 'http://turquoise.alteredorigin.net/forumstuff/sprites/pokeball.png')
								.setTitle(`Lvl. 5 ${args[4]} ${gend_emoji}`)
								.setURL(`http://turquoise.alteredorigin.net/pokemon/${pokemon}/`)
								.setDescription(`**HP:** ${stats[0]}/${stats[0]}`)
								.addFields(
									{ name: '__Info:__ ', value: `**Ability:** ${ability.name} \
								\n**Nature:** ${nature.name} \
								\n**Nickname:** ${nname} \
								\n**OT:** ${trainer}`, inline: true },
									{ name: '__Moves:__', value: `${current_ms.join(', ')}`, inline: true },
								)
								.setImage(`http://turquoise.alteredorigin.net/images/pseudosprites/${pokemon}.png`)
								.setFooter(`${bar}  •  Last Updated`, 'https://i.imgur.com/KK6AcrY.png')
								.setTimestamp();

							// Send standard profile posts to new profile channel
							const profPost = await bot.channels.cache.get(`${newprofile.id}`).send(profileEmbed);
							const s1Post = await bot.channels.cache.get(`${newprofile.id}`).send(pokemonEmbed);
							const s2Post = await bot.channels.cache.get(`${newprofile.id}`).send('>>> **Party Slot 2:** Vacant');
							const s3Post = await bot.channels.cache.get(`${newprofile.id}`).send('>>> **Party Slot 3:** Vacant');
							const s4Post = await bot.channels.cache.get(`${newprofile.id}`).send('>>> **Party Slot 4:** Vacant');
							const s5Post = await bot.channels.cache.get(`${newprofile.id}`).send('>>> **Party Slot 5:** Vacant');
							const s6Post = await bot.channels.cache.get(`${newprofile.id}`).send('>>> **Party Slot 6:** Vacant');
							const gPlazaPost = await bot.channels.cache.get(`${newprofile.id}`).send('>>> __**Global Plaza**__');
							const box1Post = await bot.channels.cache.get(`${newprofile.id}`).send('>>> __**Box 1**__');

							// Update user's profile with postID's for profile posts
							const updatedProfile = { ProfilePost: profPost.id,
								Slot1Post: s1Post.id,
								Slot2Post: s2Post.id,
								Slot3Post: s3Post.id,
								Slot4Post: s4Post.id,
								Slot5Post: s5Post.id,
								Slot6Post: s6Post.id,
								GlobalPlazaPost: gPlazaPost.id,
								PCPosts: [box1Post.id],
							};
							await updateProfileByUserID(client, userID, updatedProfile);

							await bot.channels.cache.get(`${newadv.id}`).send('>>> Welcome to your adventure!');

							message.channel.send(`>>> Profile successfully created for ${taggedUser.user.username}. \
								\nNew user profile channel created at <#${newprofile.id}>. \
								\nNew user adventure channel created at <#${newadv.id}>.`);
						}
						// exit out if profile was found matching user discord ID
						else if (userID == userSearch._id) {
							message.channel.send(`>>> Profile already exists for ${taggedUser.user.username}.`);
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
			const result = await client.db('turqdb').collection('pokemon').insertOne(newPokemon);
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

		async function updateProfileByUserID(client, userID, updatedProfile) {
			const result = await client.db('turqdb').collection('profiles').updateOne(
				{ _id: userID },
				{ $set: updatedProfile },
			);

			console.log(`${result.matchedCount} document(s) matched the query criteria.`);
			console.log(`${result.modifiedCount} document(s) was/were updated.`);
		}
	},
};