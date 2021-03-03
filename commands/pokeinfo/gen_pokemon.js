module.exports = function gen_pokemon(pkmn_name, nname, lvl, item, owner, userID) {
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

	// make sure that form-variations are adjusted so that names can be processed and shown correctly
	let imageName = pkmn_name;
	if (pkmn_name.match(/unown/g)){
		pkmn_name = 'unown';
	}
	if (pkmn_name.match(/basculin/g)){
		pkmn_name = 'basculin';
	}

	// Handle pokemon images names for gender-specific pokemon
	if(gend === 'Male') {
		if (pkmn_name === 'meowstic' || pkmn_name === 'josuche') {
			imageName = imageName + 'male';
		}
	}
	else if(gend === 'Female') {
		if (pkmn_name === 'meowstic' || pkmn_name === 'josuche') {
			imageName = imageName + 'female';
		}
	}

	// Handle pokemon image names for shiny pokemon
	if (shininess) {
		imageName = imageName + 'shiny';
	}

	// create new database entry for specified starter pokemon
	const newPokemon = {
		pokemon: pkmn_name.charAt(0).toUpperCase() + pkmn_name.slice(1),
		spriteName: imageName,
		nickname: nname,
		level: lvl,
		gender: gend,
		currentHP: stats[0],
		maxHP: stats[0],
		status: 'None',
		// abilityNo: ability.number,
		ability: ability.name,
		nature: nature.name,
		// natureMultipliers: nature.mult,
		heldItem: item,
		currentTrainer: userID,
		OT: owner,
		moves: current_ms,
		exp: 0,
		shiny: shininess,
	};

	return newPokemon;
};