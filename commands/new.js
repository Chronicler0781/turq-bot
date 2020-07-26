const { User, Pokemon, DexEntry } = require("../models");

module.exports = {
	name: 'new',
	description: 'this command generates a new profile for the tagged user',
	execute(Discord, bot, message, args) {

		// add /pokeinfo/ function files for generating a new pokemon
		const movesets = require('./pokeinfo/movesets.js');
		const det_gender = require('./pokeinfo/det_gender.js');
		const det_stats = require('./pokeinfo/det_stats.js');
		const det_ability = require('./pokeinfo/det_ability.js');
		const det_nature = require('./pokeinfo/det_nature.js');
		const det_shiny = require('./pokeinfo/det_shiny.js');

		// main function for 'new' command, will not run until called.
		async function main() {
			try {
				// switch to determine subcommand of -new command
				switch(args[0].toLowerCase()) {

				// subcommand to generate new user profile
				case 'profile':

					// search for user by specified usertag
					// eslint-disable-next-line no-case-declarations
					const taggedUser = message.guild.members.cache.find(m => m.user.tag === args[args.length - 1]);

					// if no correct user is mentioned, do not continue
					if (!taggedUser) {
						message.channel.send('>>> Please enter an existing server user when creating a profile.');
					}
					else {
						// get discord userID for tagged user
						const userID = taggedUser.user.id;

						// cannot use findById here because _id is expected to be an ObjectId type
						const user = await User.findById(userID);

						// if no mathcing profile is found, continue with profile creation
						if (!user) {
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

							const dexEntry = await DexEntry.findOne({name: args[4]})

							// create new database entry for specified starter pokemon
							const starter = await Pokemon.create({ 
								pokemon: dexEntry._id,
								level: 5,
								gender: gend,
								currentHP: stats[0],
								maxHP: stats[0],
								status: 'None',
								abilityNo: ability.number,
								ability: ability.name,
								nature: nature.name,
								natureMultipliers: nature.mult,
								heldItem: 'None',
								nickname: nname,
								currentTrainer: trainer,
								OT: trainer,
								moves: current_ms,
								exp: 0,
								shiny: shininess === "Yes",
							});

							// create new database entry for tagged user, assigns new starter's pokemon ID to PartySlot1
							const newUser = await User.create({
								_id: userID,
								username: taggedUser.user.username,
							    firstName: trainer.split(" ")[0],
							    lastName: trainer.split(" ")[1],
    							age: parseInt(args[2]),
								gender: args[3],
								money: 1000,
								badges: [],
								keyItems: [],
								tms: [],
								hms: [],
								party: [starter],
								badges: [],
								keyItems: [],
								generalItems: [{name: 'Oran Berry', quantity: 1}],
								pokeBalls: [{name: 'Poké Ball', quantity: 5}],
								tms: [],
								hms: [],
								rival: {
									name: rival,
									age: args[7],
									render: args[8],
									team: [rivalstarter]
								},
								visited: ['leddintown'],
								currentLocation: 'Leddin Town',
								area: '',
								battleID: '',
							});
							console.log(newUser);
							message.reply("profile created");
							return; // we can repurpose the code below maybe, break out for now
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
							// await updateProfileByUserID(client, userID, updatedProfile);

							await bot.channels.cache.get(`${newadv.id}`).send('>>> Welcome to your adventure!');

							message.channel.send(`>>> Profile successfully created for ${taggedUser.user.username}. \
								\nNew user profile channel created at <#${newprofile.id}>. \
								\nNew user adventure channel created at <#${newadv.id}>.`);
						}
						// exit out if profile was found matching user discord ID
						else {
							message.channel.send(`>>> Profile already exists for ${taggedUser.user.username}.`);
						}
					}
					break;
				}
			}
			catch (e) {
				console.error(e);
			}
		}

		// run main function
		main().catch(console.error);

		}

};