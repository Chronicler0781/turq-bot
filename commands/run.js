const { Battle, Pokemon, User } = require('../models');

module.exports = {
	name: 'run',
	description: 'this command generates a wild pokemon battle depending on where a user is',

	execute(message) {

		async function main() {

			try {

				// retrieve user profile from database
				const userID = message.author.id;
				let profile = await User.findOne({_id: userID});

				if (profile.battleID) {

					const battleInfo = await Battle.findOneAndRemove({_id: profile.battleID});
					const wildPokemon = await Pokemon.findOneAndRemove({_id: battleInfo.wildPokemon});

					// Update user's profile with battle ID removed.
					const updatedProfile = { battleID: ''};
					profile = await User.findOneAndUpdate({_id: userID}, updatedProfile, {new: true});

					message.channel.send('>>> You have succesfully run away!');

				}
				else {
					message.channel.send('>>> This command only works if you are currently in a wild battle!');
				}

			// try ends
			}

			catch (e) {
				console.error(e);
			}
		}

		main().catch(console.error);
	}
}