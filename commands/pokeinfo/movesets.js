module.exports = function movesets(pokemon, level, current_ms) {
	// name: movesets.js
	// description: This function creates or updates the known moves of a Pokémon at a given level.

	let movelevels = [];
	let moves = [];
	const new_ms = current_ms;
	switch(pokemon) {

	case 'acafia':
		movelevels = [1, 1, 6, 10, 15, 19, 24, 28, 33, 37, 42, 46, 51];
		moves = ['Tackle', 'Growl', 'Razor Leaf', 'Horn Attack', 'Growth', 'Fury Attack',
			'Yawn', 'Seed Bomb', 'Curse', 'Amnesia', 'Play Rough', 'Endure', 'Wood Hammer'];
		break;

	case 'catalcia':
		movelevels = [1, 1, 6, 10, 15, 21, 27, 32, 38, 43, 49, 54, 60];
		moves = ['Tackle', 'Growl', 'Razor Leaf', 'Horn Attack', 'Growth', 'Needle Arm',
			'Yawn', 'Seed Bomb', 'Curse', 'Amnesia', 'Double-Edge', 'Endure', 'Wood Hammer'];
		break;

	case 'bossorna':
		movelevels = [1, 1, 6, 10, 15, 21, 27, 32, 32, 40, 46, 53, 59, 66];
		moves = ['Tackle', 'Growl', 'Razor Leaf', 'Horn Attack', 'Growth', 'Needle Arm',
			'Yawn', 'Seed Bomb', 'Poison Jab', 'Curse', 'Toxic Spikes', 'Double-Edge',
			'Endure', 'Wood Hammer'];
		break;

	case 'crocoal':
		movelevels = [1, 1, 7, 9, 15, 17, 23, 25, 31, 33, 39, 41, 47, 49];
		moves = ['Tackle', 'Howl', 'Coal Scatter', 'Odor Sleuth', 'Bite', 'Incinerate', 'Taunt',
			'Flame Burst', 'Stoke', 'Flamethrower', 'Crunch', 'Hot Coals', 'Fire Spin',
			'Ring of Fire'];
		break;

	case 'feucrota':
		movelevels = [1, 1, 7, 9, 15, 17, 24, 27, 34, 37, 44, 47, 54, 57];
		moves = ['Tackle', 'Howl', 'Coal Scatter', 'Odor Sleuth', 'Bite', 'Incinerate', 'Taunt',
			'Flame Burst', 'Stoke', 'Flamethrower', 'Crunch', 'Hot Coals', 'Fire Spin',
			'Ring of Fire'];
		break;

	case 'burungin':
		movelevels = [1, 1, 7, 9, 15, 17, 24, 27, 35, 39, 47, 51, 59, 63];
		moves = ['Tackle', 'Howl', 'Coal Scatter', 'Odor Sleuth', 'Bite', 'Incinerate', 'Taunt',
			'Flame Burst', 'Stoke', 'Flamethrower', 'Crunch', 'Hot Coals', 'Fire Spin',
			'Ring of Fire'];
		break;

	case 'spraylet':
		movelevels = [1, 4, 8, 11, 15, 18, 22, 25, 29, 32, 36, 39, 43];
		moves = ['Tackle', 'Leer', 'Aqua Jet', 'Focus Energy', 'Fury Swipes', 'Screech',
			'Water Pulse', 'Slash', 'Eagle Eye', 'Whirlwind', 'Brine', 'Mirror Move',
			'Maelstrom'];
		break;

	case 'pandive':
		movelevels = [1, 4, 8, 11, 15, 19, 24, 28, 33, 37, 42, 46, 51];
		moves = ['Tackle', 'Leer', 'Aqua Jet', 'Focus Energy', 'Fury Swipes', 'Screech',
			'Water Pulse', 'Slash', 'Eagle Eye', 'Tailwind', 'Dive', 'Mirror Move',
			'Maelstrom'];
		break;

	case 'osgrave':
		movelevels = [1, 4, 8, 11, 15, 19, 24, 28, 33, 39, 46, 52, 59];
		moves = ['Tackle', 'Leer', 'Aqua Jet', 'Focus Energy', 'Fury Swipes', 'Screech',
			'Water Pulse', 'Slash', 'Eagle Eye', 'Tailwind', 'Dive', 'Mirror Move',
			'Maelstrom'];
		break;

	}

	for (let i = 0; i < movelevels.length; i++) {
		if (level >= movelevels[i]) {
			// eslint-disable-next-line no-empty
			if (new_ms.includes(moves[i])) {
			}
			else {
				new_ms.push(moves[i]);
			}
		}
	}

	return new_ms;
};