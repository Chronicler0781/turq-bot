const { signUpMessageID, trainerRoleID } = require('../config.json');
const createProfile = require('./functions/createProfile.js');

module.exports = async function reactionHandler(Discord, bot, reaction, user) {
	if (reaction.message.partial) {
		try {
			const msg = await reaction.message.fetch();

			if (msg.id === signUpMessageID) {
				console.log('Cached');
				await createProfile(Discord, bot, user, trainerRoleID, reaction);
			}
		}
		catch (err) {
			console.log(err);
		}
	}
	else {
		try {
			if (reaction.message.id === signUpMessageID) {
				console.log('Not a Partial');
				await createProfile(Discord, bot, user, trainerRoleID, reaction);
			}
		}
		catch (err) {
			console.log(err);
		}
	}
};