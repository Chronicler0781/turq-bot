const { User, Pokemon } = require('../../models');
const genPokemon = require('./genPokemon');
const profileQs = require('../lib/newProfileQuestions.json');
const utils = require('../lib/utils');

module.exports = async function createProfile(Discord, bot, user, trainerRole, reaction) {
	const emojiName = reaction.emoji.name;
	console.log(emojiName);
	const member = await reaction.message.guild.members.fetch(user.id);
	console.log(member);
	let reactionValues = null;
	let userReactedAlready = null;

	try {
		if (member) {
			console.log('Role and Member Found');

			// Create array with starters not chosen and boolean for a starter react having been chosen
			const starters = ['acafia', 'crocoal', 'spraylet'];
			const emojiStarter = starters.includes(emojiName);
			const starterIndex = starters.indexOf(emojiName);
			if (starterIndex > -1) {
				starters.splice(starterIndex, 1);
			}
			console.log(starters);

			// Find reactions of message, get user if anotther starter has already been reacted to
			reactionValues = Array.from(reaction.message.reactions.cache.values());
			for (let i = 0; i < reactionValues.length; i++) {
				if (reactionValues[i]._emoji.name === starters[0] || reactionValues[i]._emoji.name == starters[1]) {
					userReactedAlready = reactionValues[i].users.cache.find(mem => mem.id == user.id);
					if (userReactedAlready) {
						break;
					}
				}
			}

			// Find roles of user, get user if trainer role is already given
			const memberTrainer = member.roles.cache.find(r => r.id === trainerRole);
			console.log(memberTrainer);

			// Continue, otherwise send error messages if starter react not chosen, user has already reacted to another starter, or is already a trainer.
			if (emojiStarter === true) {
				if (!userReactedAlready) {
					if (!memberTrainer) {
						await member.roles.add(trainerRole);
						console.log('New profile about to be created');

						const userID = member.id;
						console.log(userID);
						// cannot use findById here because _id is expected to be an ObjectId type
						const player = await User.findOne({ _id: userID });
						const dmchannel = await member.createDM();

						if (!player) {
							await member.send('Note: We are now starting profile creation! You will be asked a series of questions to be answered with a single line reply. If a prompt is not answered within 10 minutes, profile creation will be aborted and you will need to re-react to the sign-up channel to begin again.');

							//
							let answer = null;
							let confirmation = null;
							let restartLoop = null;
							let timeout = null;
							let count = 0;
							let item = null;
							const answerList = [];
							const filter = m => m.author.id === userID;

							while (count < profileQs.length) {
								restartLoop = false;
								item = profileQs[count];
								console.log(item.question);
								console.log(`Question count: ${count}`);
								console.log('Start first awaitMessages');
								await dmchannel.send(item.question).then(async () => {
									await dmchannel.awaitMessages(filter, { max: 1, time: 600000, errors: ['time'] })
										.then(m => {
											answer = m.first().content.trim();
											console.log(`Answer: ${answer}`);
											if (answer.toLowerCase() === 'quit') {
												console.log('Quitting');
												count = profileQs.length;
												restartLoop = true;
												return;
											}
											switch (item.field) {
											case 'name':
												console.log(/[0-9a-zA-Z]/.test(answer));
												if (!answer || !/[0-9a-zA-Z]/.test(answer)) { // Reg expression to check for at least one alphanumeric character
													console.log('Name is not valid');
													dmchannel.send('That is not a valid name.');
													restartLoop = true;
													return;
												}
												break;

											case 'age':
												console.log(`Parsed float: ${parseFloat(answer)}`);
												if (parseFloat(answer) < 10 || parseFloat(answer) > 90 || Number.isNaN(parseFloat(answer)) || !Number.isInteger(parseFloat(answer))) {
													console.log('Number is outside range');
													dmchannel.send('That is not a valid age.');
													restartLoop = true;
													return;
												}
												break;

											case 'gender':
												if (!answer || !/[0-9a-zA-Z]/.test(answer)) { // Reg expression to check for at least one alphanumeric character
													console.log('Gender is not valid');
													dmchannel.send('That is not a valid gender.');
													restartLoop = true;
													return;
												}
												break;
											}
											dmchannel.send(`Is '${answer}' correct? [Please reply with 'Yes' to continue, 'No' to enter a new value, or 'Quit' to exit profile creation]`);

										}).then(async () => {
											if (restartLoop === true) {
												return;
											}
											console.log(`Count: ${count}`);
											console.log('Start second awaitMessages');
											await dmchannel.awaitMessages(filter, { max: 1, time: 600000, errors: ['time'] })
												.then(m => {
													confirmation = m.first().content.trim();
													console.log(`Confirm: ${confirmation}`);
													if (confirmation.toLowerCase() === 'quit' || confirmation.toLowerCase() === '\'quit\'') {
														console.log('Quitting');
														count = profileQs.length;
														return;
													}
													else if (!confirmation || (confirmation.toLowerCase() !== 'yes' && confirmation.toLowerCase() !== '\'yes\'' && confirmation.toLowerCase() !== 'y')) {
														console.log('Confirmation is no or invalid.');
														return;
													}
													console.log('Field is set');
													if (answer.toLowerCase() === 'none' || answer.toLowerCase() === '\'none\'') {
														answer = '';
														dmchannel.send(`${item.phrase}${item.field} has been skipped.`);
													}
													else {
														dmchannel.send(`${item.phrase}${item.field} has been set as '${answer}'`);
													}
													answerList.push(answer);
													count = count + 1;
												})
												.catch(() => {
													dmchannel.send('Uh-oh, your profile creation session has timed out! Please react to the sign-up channel with a new starter to begin again.');
													count = profileQs.length;
													restartLoop = true;
													timeout = true;
													return;

												});
										})
										.catch(() => {
											dmchannel.send('Uh-oh, your profile creation session has timed out! Please react to the sign-up channel with a new starter to begin again.');
											count = profileQs.length;
											timeout = true;
											return;
										});
								});
								console.log(count);
							}
							console.log(answerList.length);
							console.log(answerList);

							if (answerList.length === profileQs.length) {

								const pokemon = emojiName;

								// set rival starter pokemon
								let rivalStarter = null;
								switch(pokemon) {
								case 'spraylet':
									rivalStarter = 'acafia';
									break;
								case 'crocoal':
									rivalStarter = 'spraylet';
									break;
								case 'acafia':
									rivalStarter = 'crocoal';
									break;
								default:
									throw 'Invalid Starter';
								}

								// create new database entry for specified starter pokemon
								const pkmn_obj = genPokemon(pokemon, answerList[5], 5, userID, 'Gift');
								const starter = await Pokemon.create(pkmn_obj);
								console.log(starter);

								// create new database entry for tagged user, assigns new starter's pokemon ID to PartySlot1
								const newUser = await User.create({
									_id: userID,
									username: member.user.username,
									firstName: answerList[0],
									lastName: answerList[1],
									nickname: answerList[2],
									age: parseInt(answerList[3]),
									gender: answerList[4],
									money: 1000,
									badges: [],
									keyItems: [],
									revivalistJobsCompleted: [],
									generalItems: [{ name: 'Oran Berry', quantity: 1 }],
									pokeBalls: [{ name: 'Poké Ball', quantity: 5 }],
									tms: [],
									mapStatus: 'closed',
									services: [],
									party: [starter._id],
									boxes: utils.initiateNewBox([]),
									rival: {
										firstName: answerList[6],
										lastName: answerList[7],
										nickname: answerList[8],
										age: parseInt(answerList[9]),
										gender: answerList[10],
										team: [rivalStarter],
									},
									visited: ['leddintown'],
									currentLocation: 'leddintown',
									lastHealLocation: 'leddintown',
									battleID: '',
								});

								console.log(newUser);
								await dmchannel.send('Congratulations, your profile has been successfully created!');
								return;
							}
							else if (count === profileQs.length) {
								if (!timeout || timeout === false) {
									member.send('You have successfully quit profile creation. If you\'d like to start again, please react to the sign-up channel with a new starter.');
								}
								await member.roles.remove(trainerRole);
								reaction.users.remove(member.id);
							}
							else {
								member.send('Unfortunately, there was an error while creating your profile. Please react with a new starter to begin again, or post a screenshot of the error in #bug-reports if it persists.');
								await member.roles.remove(trainerRole);
								reaction.users.remove(member.id);
							}
						}
						else {
							member.send('It seems you already have a user profile. Please retire your current character before creating a new one.');
							reaction.users.remove(member.id);
						}
					}
					else {
						member.send('You are already a Trainer. If you do not have a profile created yet, please finish or quit the profile creation that you\'ve already started.');
						reaction.users.remove(user.id);
					}
				}
				else {
					member.send('You have already reacted to another starter. If you do not have a profile created yet and would like to swich starters, please quit your current profile creation and remove the react of the previous starter you chose.');
					reaction.users.remove(user.id);
				}
			}
			else {
				member.send('Please only react to the sign-up channel with a starter emoji.');
				reaction.remove();
			}
		}
	}
	catch (e) {
		console.error(e);
		await member.roles.remove(trainerRole);
		reaction.users.remove(member.id);
		member.send('An error was encountered during profile creation. Please try again later!');

	}
};