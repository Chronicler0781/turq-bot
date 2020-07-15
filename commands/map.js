module.exports = {
	name: 'map',
	description: 'this command allows a user to travel to pull up a map of their location or another specified location in New Logora',

	execute(Discord, message, args, fs) {

		// add client commands for mongodb
		const MongoClient = require('mongodb').MongoClient;
		const { createCanvas, Image } = require('canvas');

		async function main() {

			// connect to mongodb
			const conf = require('../config.json');
			const client = new MongoClient(conf.uri, { useNewUrlParser: true, useUnifiedTopology: true });

			try {
				await client.connect();

				// retrieve user profile from database
				const userID = message.author.id;
				const profile = await findProfilebyID(client, userID);

				if (profile.BattleID == '' || profile.BattleID == 'None') {

					// Only continue there are none, 1, or 2 arguments
					if (!args.length || args.length < 3) {

						let location = [];

						// if no arguments, get current location of player
						if (!args.length) {
							const locName = profile.Location;
							location = await findLocationbyName(client, locName);
						}
						// if 1 argument, get location specifified
						else if (args.length == 1) {

							// if one of below locations specified, set default area
							let tempArea = '';
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

							// find location from argument. If not found, search with alternate location name
							location = await findLocationbySimpNames(client, args[0], tempArea);
							if (typeof location == 'undefined') {
								location = await findLocationbyAltNames(client, args[0], tempArea);
							}
						}

						// if 2 arguments, get location / area specified. If not found, search with alternate location name
						else if (args.length == 2) {
							location = await findLocationbySimpNames(client, args[0], args[1]);
							if (typeof location == 'undefined') {
								location = await findLocationbyAltNames(client, args[0], args[1]);
							}
						}

						// Set variables/constants for parsing accessTo lists
						let splitLocArea = '';
						let altLocs = '';
						let tempLoc = [];
						const access = [];
						const trcode = [];

						// onyl set valid to true if location was not found from entered arguments
						let valid = false;
						if (typeof location != 'undefined') {
							valid = true;

							// For each location entry in the accessTo array of the original location
							for (let i = 0; i < location.accessTo.length; i++) {

								// check if location has an area by the underscore character, store location/area names in splitLocArea array
								if (location.accessTo[i].includes('_')) {
									splitLocArea = location.accessTo[i].split(/_+/);

									// check if location has an alternate name, store names in altLocs array
									if (splitLocArea[0].includes('/')) {
										altLocs = splitLocArea[0].split(/\/+/);

										// grab location and store location name in access array, store name/alt name and area in trcode array
										tempLoc = await findLocationbySimpNames(client, altLocs[0], splitLocArea[1]);
										access[i] = tempLoc.loc;
										trcode[i] = '(' + tempLoc.simpLoc + ' or ' + tempLoc.altSimpLoc + ') ' + tempLoc.simpArea;
									}
									// if no alternate name, just store location and area names
									else {
										tempLoc = await findLocationbySimpNames(client, splitLocArea[0], splitLocArea[1]);
										access[i] = tempLoc.loc;
										trcode[i] = tempLoc.simpLoc + ' ' + tempLoc.simpArea;
									}

								}
								// check if location has an alt name by the forward slash character, store location name/alt names
								else if (location.accessTo[i].includes('/')) {
									altLocs = location.accessTo[i].split(/\/+/);
									tempLoc = await findLocationbySimpNames(client, altLocs[0], '');
									access[i] = tempLoc.loc;
									trcode[i] = tempLoc.simpLoc + ' or ' + tempLoc.altSimpLoc;
								}
								// if no alt name,, store location name
								else {
									tempLoc = await findLocationbySimpNames(client, location.accessTo[i], '');
									access[i] = tempLoc.loc;
									trcode[i] = tempLoc.simpLoc;
								}
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
							const img2 = await loadImage(`./images/map/${location.simpLoc}.png`, merge);

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
								.setTitle(`New Logora - ${location.loc}`)
								.addField('__Access To:__', `-${access.join('\n-')}`, true)
								.addField('__Travel Code:__', `${trcode.join('\n')}`, true)
								.attachFiles(['./images/temp.png'])
								.setImage('attachment://temp.png');

							message.channel.send(mapEmbed);
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
			finally {
				await client.close();
			}
		}

		main().catch(console.error);

		// function for searching a profile by the discord ID.
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

		// function for searching a location by full name.
		async function findLocationbyName(client, location) {
			const result = await client.db('turqdb').collection('locations').findOne({ loc: location });
			if (result) {
				console.log(`Found a location associated with the name: '${location}'`);
				return result;
			}
			else {
				console.log(`No location found with the name: '${location}'`);
			}
		}

		// function for searching a profile by the simple location and area names.
		async function findLocationbySimpNames(client, loc, area) {
			const result = await client.db('turqdb').collection('locations').findOne({ simpLoc: loc, simpArea: area });
			if (result) {
				console.log(`Found a location associated with the location/area names: '${loc} / ${area}'`);
				return result;
			}
			else {
				console.log(`No location found with the location/area names: '${loc} / ${area}'`);
			}
		}

		async function findLocationbyAltNames(client, loc, area) {
			const result = await client.db('turqdb').collection('locations').findOne({ altSimpLoc: loc, simpArea: area });
			if (result) {
				console.log(`Found a location associated with the location/area names: '${loc} / ${area}'`);
				return result;
			}
			else {
				console.log(`No location found with the location/area names: '${loc} / ${area}'`);
			}
		}

	},
};