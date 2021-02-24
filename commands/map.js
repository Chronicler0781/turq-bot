const { User, Location } = require('../models');

module.exports = {
	name: 'map',
	description: 'this command allows a user to travel to pull up a map of their location or another specified location in New Logora',

	execute(Discord, message, args, fs) {

		// add canvas tools
		const { createCanvas, Image } = require('canvas');

		async function main() {

			try {
				// retrieve user profile from database
				const userID = message.author.id;
				let profile = await User.findOne({ _id: userID });

				if (profile.battleID == '' || profile.battleID == 'None') {

					// Only continue if there are none, 1, or 2 arguments
					if (!args.length || args.length < 3) {

						let location = null;

						// if no arguments, get current location of player
						if (!args.length) {
							const locID = profile.currentLocation;
							location = await Location.findOne({ _id: locID })
        						.populate({path: 'accessedBy', select: '_id name locNames areaName island usableHMs'});
						}
						// if 1 argument, get location specified
						else if (args.length == 1) {

							// if one of below locations specified, set default area
							let tempArea = null;
							if (args[0] == 'routenl1') {
								tempArea = 'south';
							}
							if (args[0] == 'dingbatcave') {
								tempArea = 'uppercaverns';
							}
							if (args[0] == 'ambalchitemple') {
								tempArea = 'gardens';
							}
							if (args[0] == 'acoatyltower') {
								tempArea = 'lowerfloors';
							}
							if (args[0] == 'fulgurokmountains') {
								tempArea = 'mountainside';
							}
							if (args[0] == 'ton-kura') {
								tempArea = 'seabed';
							}
							if (args[0] == 'jarovesubadlands') {
								tempArea = 'flatlands';
							}
							if (args[0] == 'alnirazruins' || args[0] == 'victoryroad') {
								tempArea = 'streets';
							}

							// find location from argument
							location = await Location.findOne({locNames: args[0], areaName: tempArea })
								.populate({path: 'accessedBy', select: '_id name locNames areaName island usableHMs'});
							if (location === null) {
								location = await Location.findOne({_id: args[0]})
									.populate({path: 'accessedBy', select: '_id name locNames areaName island usableHMs'});
							}

						}

						// if 2 arguments, get location / area specified
						else if (args.length == 2) {
							location = await Location.findOne({ locNames: args[0], areaName: args[1]})
								.populate({path: 'accessedBy', select: '_id name locNames areaName island usableHMs'});	
						}

						// Set variables/constants for parsing accessTo lists
						const access = [];
						const trcode = [];
						const numEmoji = [];
						const emojiCharacters = require('../scripts/emojiCharacters');

						// only set valid to true if location was not found from entered arguments
						let valid = false;
						if (typeof location !== 'undefined' && location !== null) {
							valid = true;

							// For each location entry in the accessTo array of the original location
							for (let i = 0; i < location.accessedBy.length; i++) {

								// convert index number to emoji for numbered location list in access
								numEmoji[i] = emojiCharacters[i+1];

								// create temporary object for location in accessTo list, populate access location name and travel code arrays
								access[i] = numEmoji[i] + ' ' + location.accessedBy[i].name;

								if (typeof location.accessedBy[i].areaName != 'undefined') {
									trcode[i] = location.accessedBy[i].locNames[0] + ' ' + location.accessedBy[i].areaName;
								}
								else if (typeof location.accessedBy[i].locNames[0] != 'undefined') {
									trcode[i] = location.accessedBy[i].locNames[0];
								}
								else {
									trcode[i] = location.accessedBy[i]._id;
								}
							}

							// Add flying to travel options if appplicable
							if (location.usableHMs.indexOf('fly') != -1) {
								numEmoji.push(emojiCharacters.a);
								access.push(emojiCharacters.a + ' ' + 'Altaria Airways');
							}

							// Add flying to travel options if appplicable
							if (typeof location.ferry[0] !== 'undefined') {
								numEmoji.push(emojiCharacters.f);
								access.push(emojiCharacters.f + ' ' + 'Neptune Ferry');
							}

						}

						// if valid location has been determined, use canvas to generate merged image
						if (valid == true) {
							// create canvas the same size as new logora map
							const canvas = createCanvas(400, 300);
							const ctx = canvas.getContext('2d');

							// load images for map and location tag images
							let imagesLoaded = 0;
							const img1 = await loadImage('./images/map/newlogora.png', merge);

							// if location has multiple names or an area, use first locNames value for matching to png image, otherwise use location id
							let img2 = null;
							if (typeof location.locNames[0] != 'undefined') {
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
							const mapEmbed = new Discord.MessageEmbed()
								.setColor('#0099ff')
								.setTitle(`New Logora - ${location.name}`)
								.addField('__Travel Options:__', `${access.join('\n')}`, true)
								.addField('__Travel Code:__', `${trcode.join('\n')}`, true)
								.attachFiles(['./images/temp.png'])
								.setImage('attachment://temp.png');

							await message.channel.send(mapEmbed)
							.then(embed => {
								for (const emoji of numEmoji) {
									embed.react(emoji);
								}
								const filter = ( reaction, user) => {
									return numEmoji.indexOf(reaction.emoji.name) !== -1 && user.id === message.author.id;
								}
								return { embed, filter }
							})
							.then(async ({ embed, filter }) => {
								embed.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
								.then(async collected => {
									for (let i = 0; i < numEmoji.length; i++) {

										if (numEmoji[i] === collected.first().emoji.name && numEmoji[i] !== emojiCharacters.a && numEmoji[i] !== emojiCharacters.f ) {
											
											let updatedProfile = {
												currentLocation: location.accessedBy[i]._id,
												visited: profile.visited
											}
											if (updatedProfile.visited.indexOf(location.accessedBy[i]._id) === -1) {
												updatedProfile.visited.push(location.accessedBy[i]._id);
											}
											console.log(updatedProfile);
											profile = await User.findOneAndUpdate({_id: userID}, updatedProfile, { new: true});
											message.channel.send(`You have successfully traveled to ${location.accessedBy[i].name}.`);
											console.log('New player location set as ' + profile.currentLocation);
											// Add badge req, revivalist job req, and surf checks
											return;
										}

										else if (numEmoji[i] === collected.first().emoji.name && numEmoji[i] !== emojiCharacters.f) {
											message.channel.send(`Unfortunately, you haven't unlocked that service yet. Please visit Szlazan City after obtaining 4 badges`)
											console.log('Fly Options');
											return;
											// Add fly check
										}

										else if (numEmoji[i] === collected.first().emoji.name) {
											message.channel.send(`The Neptune Ferry service is coming soon to a port near you!`)
											console.log('Ferry Options');
											return;
											// Add ferry check
										}
									}
								})
								.catch((error) => {
									console.log(error)
									message.channel.send('Your command has timed out. Please start again.');
								})

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
				// if in a battle, return error message
				else {
					message.channel.send('>>> Error: Please finish your current battle before opening up your map!');
				}

			// try ends
			}

			catch (e) {
				console.error(e);
			}
		}

		main().catch(console.error);

	},
};