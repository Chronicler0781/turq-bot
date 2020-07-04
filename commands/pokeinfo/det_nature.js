module.exports = function det_nature() {
	// name: det_nature.js
	// description: This function determines the nature and resultant stat multipliers of a new Pokémon.

	// choose a number between 0-24 to choose nature.
	const natureResult = Math.floor(Math.random() * (24 - 1 + 1));
	let nature = [];

	// multipliers = [Attack, Defense, Sp.Att, Sp.Def, Speed]
	let multipliers = [];

	// Determine nature and resultant multipliers from randomized roll
	switch(natureResult) {

	case 0:
		nature = 'Hardy';
		multipliers = [1, 1, 1, 1, 1];
		break;

	case 1:
		nature = 'Lonely';
		multipliers = [1.1, 0.9, 1, 1, 1];
		break;

	case 2:
		nature = 'Brave';
		multipliers = [1.1, 1, 1, 1, 0.9];
		break;

	case 3:
		nature = 'Adamant';
		multipliers = [1.1, 1, 0.9, 1, 1];
		break;

	case 4:
		nature = 'Naughty';
		multipliers = [1.1, 1, 1, 0.9, 1];
		break;

	case 5:
		nature = 'Bold';
		multipliers = [0.9, 1.1, 1, 1, 1];
		break;

	case 6:
		nature = 'Docile';
		multipliers = [1, 1, 1, 1, 1];
		break;

	case 7:
		nature = 'Relaxed';
		multipliers = [1, 1.1, 1, 1, 0.9];
		break;

	case 8:
		nature = 'Impish';
		multipliers = [1, 1.1, 0.9, 1, 1];
		break;

	case 9:
		nature = 'Lax';
		multipliers = [1, 1.1, 1, 0.9, 1];
		break;

	case 10:
		nature = 'Timid';
		multipliers = [0.9, 1, 1, 1, 1.1];
		break;

	case 11:
		nature = 'Hasty';
		multipliers = [1, 0.9, 1, 1, 1.1];
		break;

	case 12:
		nature = 'Serious';
		multipliers = [1, 1, 1, 1, 1];
		break;

	case 13:
		nature = 'Jolly';
		multipliers = [1, 1, 0.9, 1, 1.1];
		break;

	case 14:
		nature = 'Naive';
		multipliers = [1, 1, 1, 0.9, 1.1];
		break;

	case 15:
		nature = 'Modest';
		multipliers = [0.9, 1, 1.1, 1, 1];
		break;

	case 16:
		nature = 'Mild';
		multipliers = [1, 0.9, 1.1, 1, 1];
		break;

	case 17:
		nature = 'Quiet';
		multipliers = [1, 1, 1.1, 1, 0.9];
		break;

	case 18:
		nature = 'Bashful';
		multipliers = [1, 1, 1, 1, 1];
		break;

	case 19:
		nature = 'Rash';
		multipliers = [1, 1, 1.1, 0.9, 1];
		break;

	case 20:
		nature = 'Calm';
		multipliers = [0.9, 1, 1, 1.1, 1];
		break;

	case 21:
		nature = 'Gentle';
		multipliers = [1, 0.9, 1, 1.1, 1];
		break;

	case 22:
		nature = 'Sassy';
		multipliers = [1, 1, 1, 1.1, 0.9];
		break;

	case 23:
		nature = 'Careful';
		multipliers = [1, 1, 0.9, 1.1, 1];
		break;

	case 24:
		nature = 'Quirky';
		multipliers = [1, 1, 1, 1, 1];
		break;
	}

	// return object with nature name and array of multiplier values
	return { name: nature, mult: multipliers };
};