const { Pokemon, User } = require('../models');

module.exports = {
	name: 'set',
	description: 'this command generates a wild pokemon battle depending on where a user is',

	execute(message, args) {

		async function main() {

			try {

				// retrieve user profile from database
				const userID = message.author.id;
				let profile = await User.findOne({_id: userID});

				if (profile.battleID === '' || profile.battleID === 'None') {

					const updatedPokemon = { level: args[0]};
					const pokemon = await Pokemon.findOneAndUpdate({_id: profile.party[0]}, updatedPokemon, {new: true})

					message.channel.send(`>>> Your ${pokemon.pokemon}'s level has been set to ${pokemon.level}!`);

				}
				else {
					message.channel.send('>>> Please exit your battle before trying to adjust a Pokemon\'s level!');
				}

			// try ends
			}

			catch (e) {
				console.error(e);
			}
		}

		main().catch(console.error);

		// function that determines the wild pokemon level (between 2 and 60) from the highest level in the player's party
		async function levelcalc(profile) {
			const slot1 = await Pokemon.findOne({ _id: profile.party[0] });
			const slot2 = await Pokemon.findOne({ _id: profile.party[1] });
			const slot3 = await Pokemon.findOne({ _id: profile.party[2] });
			const slot4 = await Pokemon.findOne({ _id: profile.party[3] });
			const slot5 = await Pokemon.findOne({ _id: profile.party[4] });
			const slot6 = await Pokemon.findOne({ _id: profile.party[5] });

			let count = 0;
			const levels = [];
			if (slot1 !== null) {
				levels[count] = slot1.Level;
				count = count + 1;
			}
			if (slot2 !== null) {
				levels[count] = slot2.Level;
				count = count + 1;
			}
			if (slot3 !== null) {
				levels[count] = slot3.Level;
				count = count + 1;
			}
			if (slot4 !== null) {
				levels[count] = slot4.Level;
				count = count + 1;
			}
			if (slot5 !== null) {
				levels[count] = slot5.Level;
				count = count + 1;
			}
			if (slot6 !== null) {
				levels[count] = slot6.Level;
				count = count + 1;
			}

			const levelbase = Math.max(levels);

			// var LevelResult = Math.floor(Math.random() * ((levelbase+2) - (levelbase-4) + 1)) + ((levelbase-4) - 0); //old version that allowed wilds slightly stronger than the player's pokemon
			let LevelResult = Math.floor(Math.random() * ((levelbase - 1) - (levelbase - 7) + 1)) + ((levelbase - 7) - 0);
			// wild levels can't go below 2
			if (LevelResult < 2) {
				LevelResult = 2;
			}
			if (LevelResult > 60) {
				LevelResult = 60;
			}
			return LevelResult;
		}
	
	},
};