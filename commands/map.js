const { User, Location } = require('../models');

module.exports = {
	name: 'map',
	description: 'this command allows a user to travel to pull up a map of their location or another specified location in New Logora, and travel to/from that location',

	execute(Discord, message, args, fs) {

		// add requirements for map command
		const { createCanvas, Image } = require('canvas');
		const emojiCharacters = require('../scripts/emojiCharacters');
		const travelCheck = require('./functions/travelCheck');

		// Main function for map command
		async function main() {

			try {
				// retrieve user profile from database
				const userID = message.author.id;
				const access = {locID: [], locName: [], emoji: [], embedMsg: [], errorMsg: [], canAccess: []};

				let profile = await User.findOne({ _id: userID });
				let ferryCost = null;
				let location = null;
				let valid = false;
				let count = 0;

				if (!profile.battleID && profile.mapStatus === 'closed') {

					// Only continue if there are none, 1, or 2 arguments
					if (!args.length || args.length < 3) {

						// if no arguments, get current location of player and populate access object with option information
						if (!args.length) {
							const locID = profile.currentLocation;
							location = await Location.findOne({ _id: locID })
        						.populate({path: 'accessedBy', select: '_id name locNames areaName island usableHMs numRequiredBadges numRequiredRevJobs'});

							if (location) {
							
								valid = true;

								// For each location entry in the accessTo array of the original location
								for (const loc of location.accessedBy) {
									travelStatus = travelCheck(profile, loc);

									access.locID[count] = loc._id;
									access.locName[count] = loc.name;
									access.emoji[count] = emojiCharacters[count+1]
									access.embedMsg[count] = emojiCharacters[count+1] + ' ' + loc.name;
									
									if (travelStatus.canTravelTo) {
										access.canAccess[count] = true;
										access.errorMsg[count] = '';
									}
									else {
										access.canAccess[count] = false;
										access.errorMsg[count] = travelStatus.reason;
										access.embedMsg[count] = access.embedMsg[count] + ' 🔒';
									}
									count++;
								}

								// Add ferry to travel options if appplicable
								if (location.ferry[0]) {
									access.locID.push(location._id);
									access.locName.push(location.name);
									access.emoji.push(emojiCharacters.f);
									access.embedMsg.push(emojiCharacters.f + ' ' + 'Neptune Ferry');
									access.canAccess.push(true);
									access.errorMsg.push('');
								}

								// Add flying to travel options if appplicable
								if (location.usableHMs.indexOf('fly') !== -1 && profile.services.indexOf('Altaria Airways') !== -1) {
									access.locID.push(location._id);
									access.locName.push(location.name);
									access.emoji.push(emojiCharacters.a);
									access.embedMsg.push(emojiCharacters.a + ' ' + 'Altaria Airways');
									access.canAccess.push(true);
									access.errorMsg.push('');
								}
								else if (location.usableHMs.indexOf('fly') !== -1) {
									access.locID.push('');
									access.locName.push('');
									access.emoji.push(emojiCharacters.a);
									access.embedMsg.push(emojiCharacters.a + ' ' + 'Altaria Airways 🔒');
									access.canAccess.push(false);
									access.errorMsg.push('');
								}
							}
						}

						// if 1 argument, get location specified and populate access object with option information
						else if (args.length === 1) {

							// if one of below locations specified, set default area
							let tempArea = null;
							if (args[0] === 'routenl1') {
								tempArea = 'south';
							}
							if (args[0] === 'dingbatcave') {
								tempArea = 'uppercaverns';
							}
							if (args[0] === 'ambalchitemple') {
								tempArea = 'gardens';
							}
							if (args[0] === 'acoatyltower') {
								tempArea = 'lowerfloors';
							}
							if (args[0] === 'fulgurokmountains') {
								tempArea = 'mountainside';
							}
							if (args[0] === 'tonkura') {
								tempArea = 'seabed';
							}
							if (args[0] === 'jarovesubadlands') {
								tempArea = 'flatlands';
							}
							if (args[0] === 'alnirazruins' || args[0] === 'victoryroad') {
								tempArea = 'streets';
							}

							// find location from argument
							location = await Location.findOne({locNames: args[0], areaName: tempArea })
								.populate({path: 'accessedBy', select: '_id name locNames areaName island usableHMs numRequiredBadges numRequiredRevJobs'});
							if (!location) {
								location = await Location.findOne({_id: args[0]})
									.populate({path: 'accessedBy', select: '_id name locNames areaName island usableHMs numRequiredBadges numRequiredRevJobs'});
							}

							if (location) {

								valid = true;

								// Add ferry to travel options if appplicable
								if (location.ferry[0]) {
									for (const loc of location.ferry) {
										
										if (loc.id === profile.currentLocation && profile.money >= loc.cost) {
											ferryCost = loc.cost;
											access.locID.push(location._id);
											access.locName.push(location.name);
											access.emoji.push(emojiCharacters.f);
											access.embedMsg.push(`${emojiCharacters.f} Neptune Ferry - ${ferryCost}P`);
											access.canAccess.push(true);
											access.errorMsg.push('');
										}
										else if (loc.id === profile.currentLocation) {
											access.locID.push(location._id);
											access.locName.push(location.name);
											access.emoji.push(emojiCharacters.f);
											access.embedMsg.push(`${emojiCharacters.f} Neptune Ferry - ${loc.cost}P 🔒`);
											access.canAccess.push(false);
											access.errorMsg.push(`>>> Error: You do not have enough money to take the ferry to ${location.name}.`);
										}
									}
									if (!access.locID[0]) {
										access.locID.push(location._id);
										access.locName.push(location.name);
										access.emoji.push(emojiCharacters.f);
										access.embedMsg.push(`${emojiCharacters.f} Neptune Ferry 🔒`);
										access.canAccess.push(false);
										access.errorMsg.push(`>>> Error: There are no ports at your current location that connect to the ferry at ${location.name}.`);
									}
								}

								travelStatus = travelCheck(profile, location);

								// Add flying to travel options if appplicable
								if (location.usableHMs.indexOf('fly') !== -1 && profile.services.indexOf('Altaria Airways') !== -1 && travelStatus.canTravelTo) {
									access.locID.push(location._id);
									access.locName.push(location.name);
									access.emoji.push(emojiCharacters.a);
									access.embedMsg.push(emojiCharacters.a + ' ' + 'Altaria Airways');
									access.canAccess.push(true);
									access.errorMsg.push('');
								}
								else if (location.usableHMs.indexOf('fly') !== -1 && profile.services.indexOf('Altaria Airways') !== -1) {
									access.locID.push(location._id);
									access.locName.push(location.name);
									access.emoji.push(emojiCharacters.a);
									access.embedMsg.push(emojiCharacters.a + ' ' + 'Altaria Airways 🔒');
									access.canAccess.push(false)
									access.errorMsg.push(travelStatus.reason);
								}
								else if (location.usableHMs.indexOf('fly') !== -1) {
									access.locID.push(location._id);
									access.locName.push(location.name);
									access.emoji.push(emojiCharacters.a);
									access.embedMsg.push(emojiCharacters.a + ' ' + 'Altaria Airways 🔒');
									access.canAccess.push(false)
									access.errorMsg.push(travelStatus.reason+`Error: You haven't unlocked that service yet. Please visit Szlazan City after obtaining 4 badges, and complete the 'All Aboard Altaria Airways' sidequest.`);
								}
								else {
									access.embedMsg.push('None');
								}
							}
						}

						// if 2 arguments, get location / area specified and populate access object with option information
						else if (args.length == 2) {
							location = await Location.findOne({ locNames: args[0], areaName: args[1]})
								.populate({path: 'accessedBy', select: '_id name locNames areaName island usableHMs numRequiredBadges numRequiredRevJobs'});	

							if (location) {

								valid = true;
								travelStatus = travelCheck(profile, location);

								// Add flying to travel options if appplicable
								if (location.usableHMs.indexOf('fly') !== -1 && profile.services.indexOf('Altaria Airways') !== -1 && travelStatus.canTravelTo) {
									access.locID.push(location._id);
									access.locName.push(location.name);
									access.emoji.push(emojiCharacters.a);
									access.embedMsg.push(emojiCharacters.a + ' ' + 'Altaria Airways');
									access.canAccess.push(true);
									access.errorMsg.push('');
								}
								else if (location.usableHMs.indexOf('fly') !== -1 && profile.services.indexOf('Altaria Airways') !== -1) {
									access.locID.push(location._id);
									access.locName.push(location.name);
									access.emoji.push(emojiCharacters.a);
									access.embedMsg.push(emojiCharacters.a + ' ' + 'Altaria Airways 🔒');
									access.canAccess.push(false)
									access.errorMsg.push(travelStatus.reason);
								}
								else if (location.usableHMs.indexOf('fly') !== -1) {
									access.locID.push(location._id);
									access.locName.push(location.name);
									access.emoji.push(emojiCharacters.a);
									access.embedMsg.push(emojiCharacters.a + ' ' + 'Altaria Airways 🔒');
									access.canAccess.push(false)
									access.errorMsg.push(travelStatus.reason+``);
								}
								else {
									access.embedMsg.push('None');
								}
							}
						}

						// if valid location has been determined, open map menu
						if (valid) {

							// Set map status to open
							await User.findOneAndUpdate({ _id: userID }, { mapStatus: 'open' });

							// create canvas the same size as new logora map
							const canvas = createCanvas(400, 300);
							const ctx = canvas.getContext('2d');

							// load images for map and location tag images
							let imagesLoaded = 0;
							const img1 = await loadImage('./images/map/newlogora.png', merge);

							// if location has multiple names or an area, use first locNames value for matching to png image, otherwise use location id
							let img2 = null;
							if (location.locNames[0]) {
								img2 = await loadImage(`./images/map/${location.locNames[0]}.png`, merge);
							} else {
								img2 = await loadImage(`./images/map/${location._id}.png`, merge);
							}

							// run merge function
							await merge();

							// function to merge images if two images were found to be loaded
							// eslint-disable-next-line no-inner-declarations
							async function merge() {
								if(imagesLoaded == 2) {
									ctx.drawImage(img1, 0, 0);
									ctx.drawImage(img2, 0, 0);
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
							await fs.writeFileSync('./images/temp.png', buffer);

							// create discord embedded message with image of current location, accessible locations, and their travel codes listed.
							access.emoji.push('❎');
							const mapEmbed = new Discord.MessageEmbed()
								.setColor('#0099ff')
								.setAuthor(`New Logora - ${location.name}`, 'https://i.imgur.com/G9LRB6c.png')
								.addField('__Travel Options:__', `${access.embedMsg.join('\n')}`, true)
								.attachFiles(['./images/temp.png'])
								.setImage('attachment://temp.png')
								.setFooter('React with ❎ to close your map.');

							await message.channel.send(mapEmbed)
							.then(embed => {
								for (const emoji of access.emoji) {
									embed.react(emoji);
								}
								const filter = ( reaction, user) => {
									return access.emoji.indexOf(reaction.emoji.name) !== -1 && user.id === message.author.id;
								}
								return { embed, filter }
							})
							.then(async ({ embed, filter }) => {
								if (access.emoji.length > 0) {
									embed.awaitReactions(filter, { max: 1, time: 120000, errors: ['time'] })
									.then(async collected => {
										for (let i = 0; i < access.emoji.length; i++) {
											
											// Handle reactions for nearby locations
											if (access.emoji[i] === collected.first().emoji.name && access.emoji[i] !== emojiCharacters.a && access.emoji[i] !== emojiCharacters.f && access.emoji[i] !== '❎') {
												if (access.canAccess[i]) {
													let updatedProfile = {
														currentLocation: access.locID[i],
														visited: profile.visited,
														mapStatus: 'closed'
													}
													if (updatedProfile.visited.indexOf(access.locID[i]) === -1) {
														updatedProfile.visited.push(access.locID[i]);
													}
													profile = await User.findOneAndUpdate({_id: userID}, updatedProfile, { new: true});
													message.channel.send(`>>> You have successfully traveled to ${access.locName[i]}.`);
													console.log('New player location set as ' + profile.currentLocation);
													break;
												}
												else {
													message.channel.send(access.errorMsg[i]);
													await User.findOneAndUpdate({ _id: userID }, { mapStatus: 'closed' });
													break;
												}
											}

											// Handle reaction for flying
											else if (access.emoji[i] === collected.first().emoji.name && access.emoji[i] === emojiCharacters.a) {
												if (profile.currentLocation === access.locID[i]) {
													if (access.canAccess[i]) {
														await openFlyMenu(profile, location);
														break;
													}
													else {
														message.channel.send(`>>> Error: You haven't unlocked that service yet. Please visit Szlazan City after obtaining 4 badges, and complete the 'All Aboard Altaria Airways'  sidequest.`);
														await User.findOneAndUpdate({ _id: userID }, { mapStatus: 'closed' });
														break;
													}
												}
												else {
													if (profile.visited.indexOf(access.locID[i]) !== -1 && access.canAccess[i]) {
														let updatedProfile = {
															currentLocation: access.locID[i],
															mapStatus: 'closed'
														}
														profile = await User.findOneAndUpdate({_id: userID}, updatedProfile, { new: true});
														message.channel.send(`>>> You have arrived at your destination: ${access.locName[i]}. Thank you for flying with Altaria Airways!`);
														console.log('New player location set as ' + profile.currentLocation);
														break;
													}
													else if (access.canAccess[i]) {
														message.channel.send(`${access.errorMsg[i]}Error: Altaria Airways cannot navigate you to a location you haven't visited before.`);
														await User.findOneAndUpdate({ _id: userID }, { mapStatus: 'closed' });
														break;
													}
													else {
														message.channel.send(access.errorMsg[i]);
														await User.findOneAndUpdate({ _id: userID }, { mapStatus: 'closed' });
														break;
													}
												}
											}

											// Handle reaction for ferry 
											else if (access.emoji[i] === collected.first().emoji.name && access.emoji[i] === emojiCharacters.f) {
												if (profile.currentLocation === access.locID[i]) {
													await openFerryMenu(profile, location);
													break;
												}
												else {
													if (access.canAccess[i]) {
														let updatedProfile = {
															currentLocation: access.locID[i],
															money: profile.money - ferryCost,
															visited: profile.visited,
															mapStatus: 'closed'
														}
														if (updatedProfile.visited.indexOf(access.locID[i]) === -1) {
															updatedProfile.visited.push(access.locID[i]);
														}
														profile = await User.findOneAndUpdate({_id: userID}, updatedProfile, { new: true});
														message.channel.send(`>>> The Neptune Ferry has brought you to ${access.locName[i]}. You pay the fee of ${ferryCost}P.`);
														console.log('New player location set as ' + profile.currentLocation);
														break;
													}
													else {
														message.channel.send(access.errorMsg[i]);
														await User.findOneAndUpdate({ _id: userID }, { mapStatus: 'closed' });
														break;
													}
												}
											}
											else if (access.emoji[i] === collected.first().emoji.name && access.emoji[i] === '❎') {
												message.channel.send('>>> Map closed.');
												await User.findOneAndUpdate({ _id: userID }, { mapStatus: 'closed' });
												break;
											}
										}
										return;
									})
									.catch((error) => {
										console.log(error)
										message.channel.send('>>> Error: Your command has timed out. Please start again.')
										.then(async () => {
											await User.findOneAndUpdate({ _id: userID }, { mapStatus: 'closed' });
										});
										return;
									})
								}
								return;
							})

						}

						// if no valid area found, return error message
						else {
							message.channel.send('>>> Error: The location or area you specified cannot be found. Please check your spelling and try again.');
						}
					}
					// if too many arguments entered, return error message
					else {
						message.channel.send('>>> Error: You have entered too many arguments. The map command takes 1 location and 1 area command. Please refer to the help command as needed.');
					}

				}
				// if in a battle or map is already open, return error message
				else {
					if (profile.mapStatus === 'open') {
						message.channel.send('>>> Error: Your map is already open!');
					}
					else {
						message.channel.send('>>> Error: Please finish your current battle before opening up your map!');
					}
				}

			// try ends
			}

			catch (e) {
				console.error(e);
				User.findOneAndUpdate({ _id: message.author.id }, { mapStatus: 'closed' });
			}
		}

		// Call main function
		main().catch(console.error);

		// Function for generating menu of Flying options, and then processing menu change or location choice.
		async function openFlyMenu(profile, location) {

			const loadMessage = await message.channel.send('>>> Loading Locations...');

			const brolLocations = { id: [], name: [], embedMsg: [] };
			const kroneaLocations = { id: [], name: [], embedMsg: [] };
			const tilnenLocations1 = { id: [], name: [], embedMsg: [] };
			const tilnenLocations2 = { id: [], name: [], embedMsg: [] };
			const xybryleLocations1 = { id: [], name: [], embedMsg: [] };
			const xybryleLocations2 = { id: [], name: [], embedMsg: [] };
			const krtusoLocations = { id: [], name: [], embedMsg: [] };
			const adarziliraLocations = { id: [], name: [], embedMsg: [] };
			const locationEmojis1 = ['▶️'];
			const locationEmojis2 = ['◀️','▶️'];
			const locationEmojis3 = ['◀️'];
			const lists = getListArrays();

			let count = 0;
			let count1 = 0;
			let count2 = 0;
			let count3 = 0;

			// Sort visited locations into island objects with relevant information for postable embed w/reactions
			for (const loc of lists.locations) {
				if (profile.visited.indexOf(loc) !== -1 && loc !== profile.currentLocation) {
					const tempLoc = await Location.findOne({_id: loc});
					if (tempLoc.usableHMs.indexOf('fly') !== -1) {
						switch (tempLoc.island) {
							case 'Brol Island':
								locationEmojis1.push(lists.emojis[count1]);
								brolLocations.id.push(tempLoc._id)
								brolLocations.name.push(tempLoc.name);
								brolLocations.embedMsg.push(`${lists.emojis[count1]} ${tempLoc.name}`)
								count1++;
								break;
		
							case 'Kronea Island':
								locationEmojis1.push(lists.emojis[count1]);
								kroneaLocations.id.push(tempLoc._id)
								kroneaLocations.name.push(tempLoc.name);
								kroneaLocations.embedMsg.push(`${lists.emojis[count1]} ${tempLoc.name}`)
								count1++;
								break;
		
							case 'Tilnen Island':
								if (count < 20) {
									locationEmojis1.push(lists.emojis[count1]);
									tilnenLocations1.id.push(tempLoc._id)
									tilnenLocations1.name.push(tempLoc.name);
									tilnenLocations1.embedMsg.push(`${lists.emojis[count1]} ${tempLoc.name}`)
									count1++;
								}
								else {
									locationEmojis2.push(lists.emojis[count2]);
									tilnenLocations2.id.push(tempLoc._id)
									tilnenLocations2.name.push(tempLoc.name);
									tilnenLocations2.embedMsg.push(`${lists.emojis[count2]} ${tempLoc.name}`)
									count2++;
								}
								break;
		
							case 'Xybryle Island':
								if (count < 39) {
									locationEmojis2.push(lists.emojis[count2]);
									xybryleLocations1.id.push(tempLoc._id)
									xybryleLocations1.name.push(tempLoc.name);
									xybryleLocations1.embedMsg.push(`${lists.emojis[count2]} ${tempLoc.name}`)
									count2++;
								}
								else {
									locationEmojis3.push(lists.emojis[count3]);
									xybryleLocations2.id.push(tempLoc._id)
									xybryleLocations2.name.push(tempLoc.name);
									xybryleLocations2.embedMsg.push(`${lists.emojis[count3]} ${tempLoc.name}`)
									count3++;
								}
								break;
		
							case 'Krtuso Island':
								locationEmojis3.push(lists.emojis[count3]);
								krtusoLocations.id.push(tempLoc._id)
								krtusoLocations.name.push(tempLoc.name);
								krtusoLocations.embedMsg.push(`${lists.emojis[count3]} ${tempLoc.name}`)
								count3++;
								break;
		
							case 'Adar Zilira':
								locationEmojis3.push(lists.emojis[count3]);
								adarziliraLocations.id.push(tempLoc._id)
								adarziliraLocations.name.push(tempLoc.name);
								adarziliraLocations.embedMsg.push(`${lists.emojis[count3]} ${tempLoc.name}`)
								count3++;
								break;
						}
					}
				}
				count++;
			}
			
			if (!brolLocations.embedMsg[0]) brolLocations.embedMsg.push('None');
			if (!kroneaLocations.embedMsg[0]) kroneaLocations.embedMsg.push('None');
			if (!tilnenLocations1.embedMsg[0]) tilnenLocations1.embedMsg.push('None');
			if (!tilnenLocations2.embedMsg[0]) tilnenLocations2.embedMsg.push('None');
			if (!xybryleLocations1.embedMsg[0]) xybryleLocations1.embedMsg.push('None');
			if (!xybryleLocations2.embedMsg[0]) xybryleLocations2.embedMsg.push('None');
			if (!krtusoLocations.embedMsg[0]) krtusoLocations.embedMsg.push('None');
			if (!adarziliraLocations.embedMsg[0]) adarziliraLocations.embedMsg.push('None');

			const flyOptionSet1Embed = new Discord.MessageEmbed()
				.setColor('#0099ff')
				.setAuthor('Altaria Airways', 'attachment://altariaairways.png')
				.setTitle(`Available Destinations from ${location.name}`)
				.addField('__Brol Island:__', `${brolLocations.embedMsg.join('\n')}`, true)
				.addField('__Kronea Island:__', `${kroneaLocations.embedMsg.join('\n')}`, true)
				.addField('__Tilnen Island (1/2):__', `${tilnenLocations1.embedMsg.join('\n')}`, true)
				.attachFiles(['./images/icons/altariaairways.png'])
				.setFooter('React with ▶️ for more options, or ❎ to close your map.');

			const flyOptionSet2Embed = new Discord.MessageEmbed()
				.setColor('#0099ff')
				.setAuthor('Altaria Airways', 'attachment://altariaairways.png')
				.setTitle(`Available Destinations from ${location.name}`)
				.addField('__Tilnen Island (2/2):__', `${tilnenLocations2.embedMsg.join('\n')}`, true)
				.addField('__Xyrbyle Island (1/2):__', `${xybryleLocations1.embedMsg.join('\n')}`, true)
				.attachFiles(['./images/icons/altariaairways.png'])
				.setFooter('React with ◀️/▶️ for more options, or ❎ to close your map.');

			const flyOptionSet3Embed = new Discord.MessageEmbed()
				.setColor('#0099ff')
				.setAuthor('Altaria Airways', 'attachment://altariaairways.png')
				.setTitle(`Available Destinations from ${location.name}`)
				.addField('__Xyrbyle Island (2/2):__', `${xybryleLocations2.embedMsg.join('\n')}`, true)
				.addField('__Krtuso Island:__', `${krtusoLocations.embedMsg.join('\n')}`, true)
				.addField('__Adar Zilira:__', `${adarziliraLocations.embedMsg.join('\n')}`, true)
				.attachFiles(['./images/icons/altariaairways.png'])
				.setFooter('React with ◀️ to go back, or ❎ to close your map.');

			let decision = false;
			let optionSet = 1;
			let data = null;
			firstRun = true;

			while (!decision) {
				switch (optionSet) {
					case 1:
						if (firstRun) loadMessage.delete();
						data = await runFlyEmbed(flyOptionSet1Embed, locationEmojis1, brolLocations, kroneaLocations, tilnenLocations1, optionSet)
						optionSet = data.option;
						decision = data.decision;
						firstRun = false;
						break;

					case 2:
						data = await runFlyEmbed(flyOptionSet2Embed, locationEmojis2, tilnenLocations2, xybryleLocations1, { id: [], name: [], embedMsg: [] }, optionSet)
						optionSet = data.option;
						decision = data.decision;
						break;
					
					case 3:
						data = await runFlyEmbed(flyOptionSet3Embed, locationEmojis3, xybryleLocations2, krtusoLocations, adarziliraLocations, optionSet)
						optionSet = data.option;
						decision = data.decision;
						break;
				}
			}
		}

		// Function for retrieving full list of emoji choices (numbers + letters) and locations in game
		function getListArrays() {
			const locationList = ['leddintown', 'routenl1south', 'dingbatcaveuppercaverns', 'dingbatcavelowercaverns', 'routenl1north', 'shrdlutown', 'routenl2', 'allogracity',
				'routenl3', 'denathvillage', 'routenl4denathplains', 'ambalchitemplegardens', 'ambalchitempleruins', 'ambalchitempleshrine', 'routenl5', 'routenl6',
				'routenl7', 'szlazancity', 'acoatyltowerlowerfloors', 'acoatyltowerupperfloors', 'acoatyltowershrine', 'routenl8', 'baaresatown', 'fulgurokmountainsmountainside',
				'fulgurokmountainscaves', 'fulgurokmountainsshrine', 'fulgurokmountainslowpeaks', 'routenl9', 'fulgurokcaves', 'fulgurokisland', 'routenl10', 'diacity',
				'routenl11', 'routenl12falantrdocks', 'falantrcity', 'routenl13xybrylebridge', 'routenl14', 'runecity', 'xybrylebay', 'submarinesafari', 'tonkuraseabed',
				'tonkuracaves', 'tonkurashrine', 'routenl15', 'routenl16', 'versorectocity', 'routenl17', 'etaoincity', 'routnl18', 'jarovesubadlandsflatlands',
				'jarovesubadlandsheights', 'jarovesubadlandsshrine', 'routenl19', 'fracturacity', 'routenl20', 'routenl21', 'alnirazruinsvictoryroadstreets',
				'alnirazruinsvictoryroadbuildings', 'alnirazruinsvictoryroadshrine', 'pokemonleaguehq'];

			const emojiList = [emojiCharacters[1], emojiCharacters[2], emojiCharacters[3], emojiCharacters[4], emojiCharacters[5], emojiCharacters[6], emojiCharacters[7],
				emojiCharacters[8], emojiCharacters[9], emojiCharacters[10], emojiCharacters.a, emojiCharacters.b, emojiCharacters.c, emojiCharacters.d, emojiCharacters.e,
				emojiCharacters.f, emojiCharacters.g, emojiCharacters.h, emojiCharacters.i, emojiCharacters.j, 	emojiCharacters.k, emojiCharacters.l, emojiCharacters.m,
				emojiCharacters.n, emojiCharacters.o, emojiCharacters.p, emojiCharacters.q, emojiCharacters.r, emojiCharacters.s, emojiCharacters.t, emojiCharacters.u,
				emojiCharacters.v, emojiCharacters.w, emojiCharacters.x, emojiCharacters.y, emojiCharacters.z];

			return { locations: locationList, emojis: emojiList }
		}

		// Function for posting emded with fly options for a set of three islands, returning new option or location choice
		async function runFlyEmbed(flyEmbed, emojiList, island1, island2, island3, oldOption) {
			let populateReacts = true;

			idList = [''].concat(island1.id.concat(island2.id.concat(island3.id)));
			nameList = [''].concat(island1.name.concat(island2.name.concat(island3.name)));
			emojiList.push('❎');

			const embed = await message.channel.send(flyEmbed);

			for (const emoji of emojiList) {
				if (populateReacts)
					embed.react(emoji);
			}

			try {
				const filter = ( reaction, user) => {
					return emojiList.indexOf(reaction.emoji.name) !== -1 && user.id === message.author.id;
				}
				const collected = await embed.awaitReactions(filter, { max: 1, time: 120000, errors: ['time'] });			
				for (let i = 0; i < emojiList.length; i++) {
					if (emojiList[i] === collected.first().emoji.name && emojiList[i] !== '▶️' && emojiList[i] !== '◀️' && emojiList[i] !== '❎') {
						let j = null;
						if (emojiList[1] === '▶️') j = i - 1;
						else j = i;
						let updatedProfile = {
							currentLocation: idList[j],
							mapStatus: 'closed'
						}
						const profile = await User.findOneAndUpdate({_id: message.author.id}, updatedProfile, { new: true});
						message.channel.send(`>>> You have arrived at your destination: ${nameList[j]}. Thank you for flying with Altaria Airways!`);
						console.log('New player location set as ' + profile.currentLocation);
						populateReacts = false;
						decision = true;
						break;
					}
					else if (emojiList[i] === collected.first().emoji.name && emojiList[i] === '▶️') {
						if (oldOption === 1) option = 2; 
						if (oldOption === 2) option = 3;
						populateReacts = false;
						decision = false;
						console.log(option);
						break;
					}
					else if (emojiList[i] === collected.first().emoji.name && emojiList[i] === '◀️') {
						if (oldOption === 2) option = 1; 
						if (oldOption === 3) option = 2;
						populateReacts = false;
						decision = false;
						break;
					}
					else if (emojiList[i] === collected.first().emoji.name && emojiList[i] === '❎') {
						message.channel.send('>>> Map closed.');
						await User.findOneAndUpdate({ _id: message.author.id }, { mapStatus: 'closed' });
						decision = true;
						break;
					}
				}
				console.log('1. ' + option + decision);
			}
			catch (error) {
				console.log(error)
				await message.channel.send('>>> Error: Your command has timed out. Please start again.')
				await User.findOneAndUpdate({ _id: message.author.id }, { mapStatus: 'closed' });
				populateReacts = false;
				decision = true;
				console.log('Catch: ' + option + ' ' + decision);
			}

			console.log('2. ' + option + decision);
			return { option, decision };
		}

		// Function for generating menu of Ferry options, adn then processing choice and payment
		async function openFerryMenu(profile, location) {

			const brolFerries = [];
			const kroneaFerries = [];
			const tilnenFerries = [];
			const xybryleFerries = [];
			const krtusoFerries = [];
			const ferryNumEmoji = [];
			const ferryLocNames = [];

			for (let i = 0; i < location.ferry.length; i++) {
				ferryNumEmoji.push(emojiCharacters[i+1]);
				const tempLoc = await Location.findOne({_id: location.ferry[i].id});
				ferryLocNames[i] = tempLoc.name;
				let costLocked = '';
				if (profile.money < location.ferry[i].cost) costLocked = ' 🔒';
				
				switch (tempLoc.island) {
					case 'Brol Island':
						brolFerries.push(`${ferryNumEmoji[i]} ${location.ferry[i].cost}P - ${tempLoc.name}${costLocked}`);
						break;

					case 'Kronea Island':
						kroneaFerries.push(`${ferryNumEmoji[i]} ${location.ferry[i].cost}P - ${tempLoc.name}${costLocked}`)
						break;

					case 'Tilnen Island':
						tilnenFerries.push(`${ferryNumEmoji[i]} ${location.ferry[i].cost}P - ${tempLoc.name}${costLocked}`)
						break;

					case 'Xybryle Island':
						xybryleFerries.push(`${ferryNumEmoji[i]} ${location.ferry[i].cost}P - ${tempLoc.name}${costLocked}`)
						break;

					case 'Krtuso Island':
						krtusoFerries.push(`${ferryNumEmoji[i]} ${location.ferry[i].cost}P - ${tempLoc.name}${costLocked}`)
						break;
				}
			}

			ferryNumEmoji.push('❎');
			const ferryEmbed = new Discord.MessageEmbed()
				.setColor('#0099ff')
				.setAuthor('Neptune Ferry', 'attachment://neptuneferry.png')
				.setTitle(`Available Ports from ${location.name}`)
				.addField('__Brol Island:__', `${brolFerries.join('\n')}`, true)
				.addField('__Kronea Island:__', `${kroneaFerries.join('\n')}`, true)
				.addField('__Tilnen Island:__', `${tilnenFerries.join('\n')}`, true)
				.addField('__Xybryle Island:__', `${xybryleFerries.join('\n')}`, true)
				.addField('__Krtuso Island:__', `${krtusoFerries.join('\n')}`, true)
				.attachFiles(['./images/icons/neptuneferry.png'])
				.setFooter('React with ❎ to close your map.');

			await message.channel.send(ferryEmbed)
			.then(embed => {
				for (const emoji of ferryNumEmoji) {
					embed.react(emoji);
				}
				const filter = ( reaction, user) => {
					return ferryNumEmoji.indexOf(reaction.emoji.name) !== -1 && user.id === message.author.id;
				}
				return { embed, filter }
			})
			.then(async ({ embed, filter }) => {
				embed.awaitReactions(filter, { max: 1, time: 120000, errors: ['time'] })
				.then(async collected => {
					for (let i = 0; i < ferryNumEmoji.length; i++) {
						if (ferryNumEmoji[i] === collected.first().emoji.name && ferryNumEmoji[i] !== '❎') {
							if (profile.money >= location.ferry[i].cost) {
								let updatedProfile = {
									currentLocation: location.ferry[i].id,
									money: profile.money - location.ferry[i].cost,
									visited: profile.visited,
									mapStatus: 'closed'
								}
								if (updatedProfile.visited.indexOf(location.ferry[i].id) === -1) {
									updatedProfile.visited.push(location.ferry[i].id);
								}
								profile = await User.findOneAndUpdate({_id: profile._id}, updatedProfile, { new: true});
								message.channel.send(`>>> The Neptune Ferry has brought you to ${ferryLocNames[i]}. You pay the fee of ${location.ferry[i].cost}P.`);
								console.log('New player location set as ' + profile.currentLocation);
								break;
							}
							else {
								message.channel.send(`>>> Error: You do not have enough money to take the ferry to ${ferryLocNames[i]}.`);
								await User.findOneAndUpdate({ _id: profile._id }, { mapStatus: 'closed' });
								break;
							}
						}
						else if (ferryNumEmoji[i] === collected.first().emoji.name && ferryNumEmoji[i] === '❎') {
							message.channel.send('>>> Map closed.');
							await User.findOneAndUpdate({ _id: profile._id }, { mapStatus: 'closed' });
							break;
						}
					}
					return;
				})
				.catch((error) => {
					console.log(error)
					message.channel.send('>>> Error: Your command has timed out. Please start again.')
					.then(async () => {
						await User.findOneAndUpdate({ _id: profile._id }, { mapStatus: 'closed' });
					});
					return;
				})
				return;
			})

		}
	},
};