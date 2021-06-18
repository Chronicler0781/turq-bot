const { Battle, Pokemon, User } = require('../../models');

module.exports = {
	name: 'run',
	description: 'this command generates a wild pokemon battle depending on where a user is',

	execute(message) {

		async function main() {

			try {

				// retrieve user profile from database
				const userID = message.author.id;
				let profile = await User.findOne({ _id: userID });

				if (profile.battleID) {

					const battle = await Battle.findOneAndRemove({ _id: profile.battleID });
					for (const pokemon of battle.opponentParty) {
						await Pokemon.findOneAndRemove({ _id: pokemon._id }, () => {
							console.log('Pokemon successfully deleted with following ID: ' + pokemon._id);
						});
					}

					// Update user's profile with battle ID removed.
					const updatedProfile = { battleID: '' };
					profile = await User.findOneAndUpdate({ _id: userID }, updatedProfile, { new: true });

				}
				else {
					console.log('There was an error with ending the battle.');
					// message.channel.send('>>> This command only works if you are currently in a battle!');
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
