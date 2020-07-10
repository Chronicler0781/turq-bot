module.exports = function movesets(pokemon, level, current_ms) {
	// name: movesets.js
	// description: This function creates or updates the known moves of a Pokémon at a given level.

	// Create variables for moves and the levels they are learned at
	let movelevels = [];
	let moves = [];

	// set new moveset to be the same as the old moveset if pokemon if pre-existing, otherwise array is empty
	const new_ms = current_ms;
	switch(pokemon) {

	// set movelevels and moves depending on specified pokemon
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

	case 'auriole':
		movelevels = [1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41];
		moves = ['Peck', 'Sand Attack', 'Astonish', 'Sing', 'Wing Attack', 'Charm',
			'Mach Turn', 'Agility', 'Drill Peck', 'Me First', 'Frenzy Strike'];
		break;

	case 'icauriole':
		movelevels = [1, 5, 9, 13, 17, 21, 27, 33, 39, 45, 51, 56];
		moves = ['Peck', 'Sand Attack', 'Astonish', 'Sing', 'Wing Attack', 'Charm',
			'Mach Turn', 'Agility', 'Drill Peck', 'Me First', 'Frenzy Strike', 'Brave Bird'];
		break;

	case 'dustley':
		movelevels = [1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45];
		moves = ['Tackle', 'Sand Attack', 'Defense Curl', 'Bide', 'Bite', 'Cotton Spore',
			'Dig', 'Hyper Fang', 'Cotton Guard', 'Rollout', 'Super Fang', 'Substitute'];
		break;

	case 'aculago':
		movelevels = [1, 5, 9, 13, 17, 20, 24, 29, 35, 40, 44, 49, 53, 58];
		moves = ['Tackle', 'Sand Attack', 'Defense Curl', 'Bide', 'Bite', 'Sand Tomb',
			'Cotton Spore', 'Dig', 'Hyper Fang', 'Cotton Guard', 'Rollout', 'Super Fang',
			'Substitute', 'Sandstorm'];
		break;

	case 'kizziff':
		movelevels = [1, 1, 6, 9, 14, 17, 22, 25, 30, 33, 38, 41, 46, 49];
		moves = ['Leech Life', 'Leer', 'Poison Sting', 'Para Needle', 'Sweet Kiss', 'Bug Bite',
			'Shadow Sneak', 'Drain Life', 'Poison Fang', 'Slumber Fang', 'Toxic', 'Cross Poison',
			'X-Scissor', 'Backstab'];
		break;

	case 'murgaz':
		movelevels = [1, 1, 6, 9, 15, 18, 24, 27, 33, 36, 42, 45, 51, 54];
		moves = ['Leech Life', 'Leer', 'Poison Sting', 'Para Needle', 'Sweet Kiss', 'Bug Bite',
			'Shadow Sneak', 'Drain Life', 'Poison Fang', 'Slumber Fang', 'Toxic', 'Cross Poison',
			'X-Scissor', 'Backstab'];
		break;

	case 'chaszin':
		movelevels = [1, 1, 6, 9, 15, 18, 26, 29, 36, 39, 46, 49, 56, 59];
		moves = ['Leech Life', 'Leer', 'Poison Sting', 'Para Needle', 'Sweet Kiss', 'Bug Bite',
			'Shadow Sneak', 'Drain Life', 'Poison Fang', 'Slumber Fang', 'Toxic', 'Cross Poison',
			'X-Scissor', 'Backstab'];
		break;

	case 'bucarat':
		movelevels = [1, 3, 8, 10, 15, 17, 22, 24, 29, 31, 36, 38, 43];
		moves = ['Scratch', 'Tail Whip', 'Acid', 'Torment', 'Sludge', 'Fury Swipes', 'Hone Claws',
			'Vector Jab', 'Toxic', 'Poison Jab', 'Sucker Punch', 'Miasma Terrain', 'Gunk Shot'];
		break;

	case 'mortarat':
		movelevels = [1, 3, 8, 10, 15, 17, 22, 25, 32, 35, 42, 45, 52];
		moves = ['Scratch', 'Tail Whip', 'Acid', 'Torment', 'Sludge', 'Fury Swipes', 'Hone Claws',
			'Vector Jab', 'Toxic', 'Poison Jab', 'Bounce', 'Miasma Terrain', 'Gunk Shot'];
		break;

	case 'tinimer':
		movelevels = [1, 1, 5, 10, 14, 19, 23, 28, 32, 37, 41, 46, 50];
		moves = ['String Shot', 'Leech Life', 'Camouflage', 'Struggle Bug', 'Quick Attack',
			'Spider Web', 'Silver Wind', 'Tickle', 'Nature Power', 'Bug Buzz', 'Weather Ball',
			'Sticky Web', 'Flail'];
		break;

	}

	// iterate through list of movelevels
	for (let i = 0; i < movelevels.length; i++) {

		// if pokemon level is greater than the move level, check if move is already known
		if (level >= movelevels[i]) {
			// eslint-disable-next-line no-empty
			if (new_ms.includes(moves[i])) {
			// do nothing if move is already known
			}
			// if move is not known, add new move to new moveset
			else {
				new_ms.push(moves[i]);
			}
		}
	}

	return new_ms;
};