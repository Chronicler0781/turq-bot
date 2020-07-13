module.exports = {
	name: 'travel',
	description: 'this command allows a user to travel to a different area in New Logora',

	execute(Discord, message, args) {

		// add client commands for mongodb
		const MongoClient = require('mongodb').MongoClient;

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

					const oldLocation = profile.Location.replace(/\s/g, '').toLowerCase();
					const oldArea = profile.Area.replace(/\s/g, '').toLowerCase();
					const newLocation = args[0].replace(/\s/g, '').toLowerCase();
					const badges = profile.Badges;
					const canFly = await flyCheck(client, profile);
					let canSurf = 'No';
					let newArea = '';
					let denied = 'No';
					if (args.length > 1) {
						newArea = args[1].replace(/\s/g, '').toLowerCase();
					}


					let location = oldLocation;
					let area = oldArea;


					// switch-case statement for checking requirements of travelling to new location
					switch(newLocation) {

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Leddin Town - Access to Route 600 South, Ferry
					case 'leddintown':
						if ((oldLocation == 'route600' && oldArea == 'south') || (canFly.able == 'Yes' && profile.Visited.includes(newLocation))) {
							location = 'Leddin Town';
							area = '';
							if (oldLocation == 'route600') {
								message.channel.send('>>> With naught but the sounds of Auriole chirping, you arrive in the quaint and peaceful Leddin Town. A nostalgic feeling wells up in you as lay eyes on Gadari\'s training field, where you got your first Pokémon and had your first battle. The feeling that Leddin Town gives off can be described as nothing short of warm and inviting as you return.');
							}
							else {
								message.channel.send(`>>> Auriole flutter away as strong wings from flying in disturb the peaceful air of Leddin Town. You thank your ${canFly.poke} and give them a loving pat for offering you a ride before returning them to their Poké Ball. A nostalgic feeling wells up in you as lay eyes on Gadari's training field, where you got your first Pokémon and had your first battle. The feeling that Leddin Town gives off can be described as nothing short of warm and inviting as you return.`);
							}
						}
						else {
							message.channel.send('>>> You cannot travel to Leddin Town from your current location.');
							denied = 'Yes';
						}
						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 600 - Access to Leddin Town, Dingbat Cave, Shrdlu Town
					case 'route600':
						if (oldLocation == 'leddintown' && newArea != 'north') {
							location = 'Route 600';
							area = 'South';
							message.channel.send('>>> Leaving Leddin Town, a long and vibrant path lays ahead, full of lively Pokémon you usually only see from afar. Be careful, a young and antsy wild Pokémon could attack at any moment! The entrance to Dingbat Cave looms in the far distance, waiting for the next trainer to brave its darkness.');
						}
						else if (oldLocation == 'shrdlutown' && newArea != 'south') {
							location = 'Route600';
							area = 'North';
							message.channel.send('>>> Leaving Shrdlu Town, you return to the short stretch of Route 600 that your traversed not too long ago. The wild Pokémon don\'t seem to startle you as much anymore, and the sight of the dreary Dingbat Cave up ahead doesn\'t seem as intimidating this time around. Onward!');
						}
						else if (oldLocation == 'dingbatcave' || (canFly.able == 'Yes' && profile.Visited.includes(newLocation))) {
							switch(newArea) {
							case 'north':
								location = 'Route 600';
								area = 'North';
								break;

							case 'south':
								location = 'Route 600';
								area = 'South';
								break;

							default:
								message.channel.send('>>> Please specify a listed area of Route 600 to travel to: North or South.');
								denied = 'Yes';
								break;
							}
							if (oldLocation != 'dingbatcave' && (area == 'North' || area == 'South')) {
								message.channel.send(`>>> Landing on the ${area} end of Route 600, you thank your ${canFly.poke} and give them a loving pat for offering you a ride before returning them to their Poké Ball. The wild Pokémon don't seem to startle you as much anymore, and the sight of the dreary Dingbat Cave up ahead doesn't seem as intimidating this time around. Onward!`);
							}
							else if(oldLocation == 'dingbatcave' && (area == 'North' || area == 'South')) {
								message.channel.send('>>> Emerging from the darkness of Dingbat Cave, your pupils constrict as the light from the sun initially blinds you. All you can think about is getting to the next town and taking a shower to get the grime and Dustley dust off.');
							}
						}
						else {
							if(newArea == 'north' || newArea == 'south') {
								message.channel.send(`>>> You cannot travel to Route 600 ${newArea} from your current location.`);
							}
							else {
								message.channel.send('>>> You cannot travel to Route 600 from your current location.');
							}
							denied = 'Yes';
						}
						break;


					// Dingbat Cave - Access to Route 600 North or South
					case 'dingbatcave':
						if (oldLocation == 'route600' || oldLocation == 'dingbatcave' || (canFly.able == 'Yes' && profile.Visited.includes(newLocation))) {
							let phrase = '';
							if (oldLocation != 'route600') {
								phrase = 'Landing outside the entrance to Dingbat Cave, you peer into the seemingly endless darkness before stepping inside.';
							}
							switch(newArea) {
							case 'uppercaverns':
								location = 'Dingbat Cave';
								area = 'Upper Caverns';
								message.channel.send(`>>> ${phrase}The inside of Dingbat Cave leaves one feeling claustrophobic and frankly a little damp. You sneeze every so often as dust is scattered through the open spaces with each step. You can try and traverse deeper into the abyss of the cave, or do your best to reach the other side as quickly as possible.`);
								break;

							case 'lowercaverns':
								if (badges.length >= 3) {
									location = 'Dingbat Cave';
									area = 'Lower Caverns';
									message.channel.send(`>>> ${phrase}Braving the depths, you traverse deeper and deeper into the abyss of the cave. You feel as if maybe you'll never see the light again. But who knows, maybe you'll find some of Dingbat Helmsley's 'supposed' treasure? `);
								}
								else {
									message.channel.send('>>> You do not have the require badge count needed to visit the Lower Caverns of Dingbat Cave.');
									denied = 'Yes';
								}
								break;

							default:
								location = 'Dingbat Cave';
								area = 'Upper Caverns';
								message.channel.send(`>>> ${phrase}The inside of Dingbat Cave leaves one feeling claustrophobic and frankly a little damp. You sneeze every so often as dust is scattered through the open spaces with each step. You can try and traverse deeper into the abyss of the cave, or do your best to reach the other side as quickly as possible.`);
								break;
							}
						}
						else {
							message.channel.send('>>> You cannot travel to Dingbat Cave from your current location.');
							denied = 'Yes';
						}
						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Shrdlu Town - Access to Route 600 North, Route 601
					case 'shrdlutown':

						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 601 - Access to Shrdlu Town, Allogra City/Kronea Island
					case 'route601':
						canSurf = await surfCheck(client, profile);
						if (oldLocation == 'shrdlutown' || oldLocation == 'allogracity' || (canFly == 'Yes' && profile.Visited.includes(newLocation))) {
							if (canSurf == 'Yes') {
								location = 'Route 601';
							}
							else {
								message.channel.send('>>> You must have a Pokémon in your party that knows Surf to access Route 601.');
								denied = 'Yes';
							}
						}
						else {
							message.channel.send('>>> You cannot travel to Route 601 from your current area.');
							denied = 'Yes';
						}
						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 602 - Access to Allogra City, Denath Village
					case 'route602':
						if (oldLocation == 'allogracity' || oldLocation == 'denathvillage' || (canFly == 'Yes' && profile.Visited.includes(newLocation))) {
							location = 'Route 602';
						}
						else {
							message.channel.send('>>> You cannot travel to Route 602 from your current location.');
							denied = 'Yes';
						}
						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 603 / Denath Plains - Access to Denath Village, Ambalchi Temple, Route 604
					case 'route603':

						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Ambalchi Temple - Access to Route 603 / Denath Plains
					case 'ambalchitemple':

						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 604
					case 'route604':

						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 605
					case 'route605':

						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 606
					case 'route606':

						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Acoatyl Tower - Access to Szlazan City
					case 'acoatyltower':

						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 607
					case 'route607':

						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Fulgurok Mountains - Access to Baaresa Town, Route 608
					case 'fulgurokmountains':

						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 608
					case 'route608':

						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Fulgurok Caves
					case 'fulgurokcaves':

						break;

					// Fulgurok Island
					case 'fulgurokisland':

						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 609
					case 'route609':

						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 610
					case 'route610':

						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 611
					case 'route611':

						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 612 / Xybryle Bridge
					case 'route612':

						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 613
					case 'route613':

						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Xybryle Bay
					case 'xybryle_bay':

						break;

					// Xybryle Bay (Submarine Safari)
					case 'submarinesafari':

						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Ton-Kura - Access to Xybryle Bay
					case 'tonkura':

						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 614
					case 'route614':

						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 615
					case 'route615':

						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 616
					case 'route616':

						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 617
					case 'route617':

						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Jarovesu Badlands - Access to Route 617, Route 618
					case 'jarovesubadlands':

						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 618
					case 'route618':

						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 619
					case 'route619':

						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 620
					case 'route620':

						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Alniraz Ruins / Victory Road - Access to Route 20, Pokémon League Headquarters
					case 'alnirazruins':

						break;

					default:
						if (oldLocation == newLocation) {
							message.channel.send(`>>> Your are entry of '${args[1]} is not valid. Please check your spelling and try again.`);
							denied = 'Yes';
						}
						else {
							message.channel.send(`>>> Your location entry of '${args[0]}' is not valid. Please check your spelling and try again.`);
							denied = 'Yes';
						}
						break;

                    // switch ends
					}

					if (location == oldLocation && area == oldArea) {
						if (denied == 'No') {
							message.channel.send('>>> You are already at that location');
						}
					}
					// Else, Update profile with new location and area
					else {
						await updateProfileByUserID(client, userID, { Location: location, Area: area });
					}
				}
				else {
					message.channel.send('>>> Please finish your current battle before travelling to a new area!');
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

		// function for checking if a Pokémon in the player's party knows Surf
		async function flyCheck(client, profile) {
			const slot1 = await client.db('turqdb').collection('pokémon').findOne({ _id: profile.PartySlot1 });
			const slot2 = await client.db('turqdb').collection('pokémon').findOne({ _id: profile.PartySlot2 });
			const slot3 = await client.db('turqdb').collection('pokémon').findOne({ _id: profile.PartySlot3 });
			const slot4 = await client.db('turqdb').collection('pokémon').findOne({ _id: profile.PartySlot4 });
			const slot5 = await client.db('turqdb').collection('pokémon').findOne({ _id: profile.PartySlot5 });
			const slot6 = await client.db('turqdb').collection('pokémon').findOne({ _id: profile.PartySlot6 });

			if (slot1 !== null) {
				if (slot1.Moves.includes('Fly')) {
					return { able: 'Yes', poke: slot1.Pokemon };
				}
			}
			else if (slot2 !== null) {
				if (slot2.Moves.includes('Fly')) {
					return { able: 'Yes', poke: slot2.Pokemon };
				}
			}
			else if (slot3 !== null) {
				if (slot3.Moves.includes('Fly')) {
					return { able: 'Yes', poke: slot3.Pokemon };
				}
			}
			else if (slot4 !== null) {
				if (slot4.Moves.includes('Fly')) {
					return { able: 'Yes', poke: slot4.Pokemon };
				}
			}
			else if (slot5 !== null) {
				if (slot5.Moves.includes('Fly')) {
					return { able: 'Yes', poke: slot5.Pokemon };
				}
			}
			else if (slot6 !== null) {
				if (slot6.Moves.includes('Fly')) {
					return { able: 'Yes', poke: slot6.Pokemon };
				}
			}
			else {
				return { able: 'No', poke: 'None' };
			}
		}

		// function for checking if a Pokémon in the player's party knows Surf
		async function surfCheck(client, profile) {
			const slot1 = await client.db('turqdb').collection('pokémon').findOne({ _id: profile.PartySlot1 });
			const slot2 = await client.db('turqdb').collection('pokémon').findOne({ _id: profile.PartySlot2 });
			const slot3 = await client.db('turqdb').collection('pokémon').findOne({ _id: profile.PartySlot3 });
			const slot4 = await client.db('turqdb').collection('pokémon').findOne({ _id: profile.PartySlot4 });
			const slot5 = await client.db('turqdb').collection('pokémon').findOne({ _id: profile.PartySlot5 });
			const slot6 = await client.db('turqdb').collection('pokémon').findOne({ _id: profile.PartySlot6 });

			if (slot1 !== null) {
				if (slot1.Moves.includes('Surf')) {
					return { able: 'Yes', poke: slot1.Pokemon };
				}
			}
			else if (slot2 !== null) {
				if (slot2.Moves.includes('Surf')) {
					return { able: 'Yes', poke: slot2.Pokemon };
				}
			}
			else if (slot3 !== null) {
				if (slot3.Moves.includes('Surf')) {
					return { able: 'Yes', poke: slot3.Pokemon };
				}
			}
			else if (slot4 !== null) {
				if (slot4.Moves.includes('Surf')) {
					return { able: 'Yes', poke: slot4.Pokemon };
				}
			}
			else if (slot5 !== null) {
				if (slot5.Moves.includes('Surf')) {
					return { able: 'Yes', poke: slot5.Pokemon };
				}
			}
			else if (slot6 !== null) {
				if (slot6.Moves.includes('Surf')) {
					return { able: 'Yes', poke: slot6.Pokemon };
				}
			}
			else {
				return { able: 'No', poke: 'None' };
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