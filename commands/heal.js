const { Pokemon, User } = require('../models');

module.exports = {
	name: 'heal',
	description: 'this command takes the user to a Pokemon Center to heal',

	execute(message) {

		async function main() {

			try {

				// retrieve user profile from database
				const userID = message.author.id;
				let profile = await User.findOne({_id: userID});

				for (const pokemonID of profile.party) {
					pokemon = await Pokemon.findOne({_id: pokemonID});
					pokemon.currentHP = pokemon.maxHP;
					pokemon.status = 'None';
					await Pokemon.findOneAndUpdate({_id: pokemonID}, pokemon);
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