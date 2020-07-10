module.exports = function gen_pokemon(pkmn_name, lvl, item, owner) {
	// name: gen_pokemon.js
	// description: This function creates a database entry for a wild or trainer-owned Pokémon

	const movesets = require('./movesets.js');
	const det_gender = require('./det_gender.js');
	const det_stats = require('./det_stats.js');
	const det_ability = require('./det_ability.js');
	const det_nature = require('./det_nature.js');
	const det_shiny = require('./det_shiny.js');

	console.log(`Beginning creation of Pokémon, ${pkmn_name}.`);
	// determine Gender, HP, Ability, Nature, Moves, and Shininess of pokemon
	const gend = det_gender(pkmn_name);
	console.log(`Gender determined as: ${gend}`);

	const ability = det_ability(pkmn_name, []);
	console.log(`Ability ${ability.number} rolled: ${ability.name}`);

	const nature = det_nature();
	console.log(`${nature.name} nature rolled with multipliers: ${nature.mult}`);

	const stats = det_stats(pkmn_name, lvl, nature.mult);
	console.log(`Stats determined as: ${stats}`);

	const current_ms = movesets(pkmn_name, lvl, []);
	console.log(`Movelist determined as: ${current_ms}`);

	const shininess = det_shiny();
	console.log(`Is the Pokemon shiny?: ${shininess}`);

	// create new database entry for specified starter pokemon
	const newPokemon = {
		Pokémon: pkmn_name.charAt(0).toUpperCase() + pkmn_name.slice(1),
		Level: lvl,
		Gender: gend,
		CurrentHP: stats[0],
		MaxHP: stats[0],
		Status: 'None',
		AbilityNo: ability.number,
		Ability: ability.name,
		Nature: nature.name,
		NatureMultipliers: nature.mult,
		HeldItem: item,
		Nickname: 'None',
		CurrentTrainer: owner,
		OT: owner,
		Moves: current_ms,
		Experience: 0,
		Shiny: shininess,
	};

	return newPokemon;
};
