const utils = require('../lib/utils');
const dex = require('../../data/pokedex');

// Description: This function creates a database entry for a wild or trainer-owned Pokémon
module.exports = function generatePokemon(pokemon, nname, level, profile, type, item, specialMoves, abilityNum) {

	let owner = '';
	if (type === 'Gift') {
		owner = profile.firstName;
		if (profile.lastName) owner = owner + ' ' + profile.lastName;
	}

	// Set species for cosmetic formes
	const speciesName = pokemon;
	if (pokemon.match(/unown/g)) {
		pokemon = 'unown';
	}

	// determine Gender, HP, Ability, Nature, Moves, and Shininess of pokemon
	const gender = utils.getGender(pokemon);
	const ability = utils.getAbility(pokemon, abilityNum);
	const nature = utils.getNature();
	const stats = utils.getStats(pokemon, level, nature.mult);
	const moveset = utils.upsertMoveset(pokemon, level, specialMoves, false);
	const exp = utils.expLookup(pokemon, level);
	const happiness = dex[pokemon].baseHappiness;
	let shiny = false;

	if (type === 'Wild') {
		item = utils.getItem(pokemon);
		shiny = utils.isShiny();
	}

	// Create new database entry for specified starter pokemon
	const newPokemon = {
		pokemon: pokemon.charAt(0).toUpperCase() + pokemon.slice(1),
		species: speciesName,
		nickname: (nname || ''),
		level: level,
		gender: gender,
		currentHP: stats[0],
		maxHP: stats[0],
		status: '',
		abilityNo: ability.number,
		ability: ability.name,
		nature: nature.name,
		natureMultipliers: nature.mult,
		heldItem: (item || ''),
		currentTrainer: owner,
		originalTrainer: owner,
		moves: moveset,
		setMoves: moveset.length > 4 ? moveset.slice(-4) : moveset,
		exp: {
			current: exp.current,
			percentage: exp.percent,
			nextLevel: exp.nextLevel,
		},
		happiness: happiness,
		shiny: shiny,
	};

	console.log(`${newPokemon.pokemon} successfully generated.
	Nickname: ${newPokemon.nname}
	Level: ${newPokemon.level}
	Gender: ${newPokemon.gender}
	HP: ${newPokemon.currentHP}/${newPokemon.maxHP}
	Status: ${newPokemon.status}
	Ability: ${newPokemon.ability} (${newPokemon.abilityNo})
	Nature: ${newPokemon.nature} ${newPokemon.natureMultipliers}
	Held Item: ${newPokemon.heldItem}
	Happiness: ${newPokemon.happiness}
	Shiny: ${newPokemon.shiny}`);

	return newPokemon;
};