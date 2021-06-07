module.exports = function movesets(pokemon, level, currentMoveset) {
	// name: movesets.js
	// description: This function creates or updates the known moves of a Pokémon at a given level.

	// Create variables for moves and the levels they are learned at
	let moveLevels = [],
		levelUpMoves = [],
		relearnMoves = [],
		evoMoves = [],
		tmMoves = [],
		tutorMoves = [],
		eggMoves = [];

	// set new moveset to be the same as the old moveset if pokemon if pre-existing, otherwise array is empty
	const newMoveset = currentMoveset;
	switch(pokemon) {

	// set moveLevels and moves depending on specified pokemon
	case 'acafia':
		moveLevels = [1, 1, 6, 10, 15, 19, 24, 28, 33, 37, 42, 46, 51];
		levelUpMoves = ['Tackle', 'Growl', 'Leafage', 'Growth', 'Razor Leaf', 'Horn Attack', 'Yawn', 'Seed Bomb', 'Curse', 'Amnesia', 'Play Rough', 'Endure', 'Wood Hammer'];
		relearnMoves = [];
		evoMoves = [];
		tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Protect', 'Safeguard', 'Frustration', 'Solar Beam', 'Return', 'Double Team', 'Reflect', 'Rock Tomb', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Round', 'Echoed Voice', 'Energy Ball', 'False Swipe', 'Payback', 'Flash', 'Swords Dance', 'Poison Jab', 'Grass Knot', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Nature Power', 'Confide', 'Cut', 'Strength', 'Stinger Lance', 'Berry Juicer', 'Crosscut Leaf', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Bullet Seed', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endeavor', 'Endure', 'Enthrall', 'Fury Cutter', 'Giga Drain', 'Grass Pledge', 'Headbutt', 'Iron Head', 'Iron Tail', 'Natural Gift', 'Power Garden', 'Secret Power', 'Seed Bomb', 'Smart Strike', 'Snore', 'Synthesis', 'Work Up', 'Worry Seed', 'Zen Headbutt'];
        eggMoves = ['Close Combat', 'Focus Energy', 'Grassy Terrain', 'Horn Leech', 'Megahorn', 'Pin Missile', 'Poison Sting', 'Rage', 'Stomp'];
		break;

	case 'catalcia':
		moveLevels = [1, 1, 6, 10, 15, 21, 27, 32, 38, 43, 49, 54, 60];
		levelUpMoves = ['Tackle', 'Growl', 'Leafage', 'Growth', 'Razor Leaf', 'Horn Attack', 'Yawn', 'Seed Bomb', 'Curse', 'Amnesia', 'Double-Edge', 'Endure', 'Wood Hammer'];
		relearnMoves = [];
        evoMoves = ['Needle Arm'];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Protect', 'Safeguard', 'Frustration', 'Solar Beam', 'Return', 'Brick Break', 'Double Team', 'Reflect', 'Rock Tomb', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Low Sweep', 'Round', 'Echoed Voice', 'Energy Ball', 'False Swipe', 'Fling', 'Payback', 'Flash', 'Swords Dance', 'Poison Jab', 'Grass Knot', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Nature Power', 'Power-Up Punch', 'Confide', 'Cut', 'Strength', 'Stinger Lance', 'Berry Juicer', 'Crosscut Leaf', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Bullet Seed', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Drain Punch', 'Endeavor', 'Endure', 'Enthrall', 'Focus Punch', 'Fury Cutter', 'Giga Drain', 'Grass Pledge', 'Headbutt', 'Iron Head', 'Iron Tail', 'Low Kick', 'Natural Gift', 'Power Garden', 'Secret Power', 'Seed Bomb', 'Smart Strike', 'Snore', 'Synthesis', 'Thunder Punch', 'Work Up', 'Worry Seed', 'Zen Headbutt'];
        eggMoves = ['Close Combat', 'Focus Energy', 'Grassy Terrain', 'Horn Leech', 'Megahorn', 'Pin Missile', 'Poison Sting', 'Rage', 'Stomp']
		break;

	case 'bossorna':
		moveLevels = [1, 1, 6, 10, 15, 21, 27, 32, 40, 46, 53, 59, 66];
		levelUpMoves = ['Tackle', 'Growl', 'Leafage', 'Growth', 'Razor Leaf', 'Horn Attack', 'Yawn', 'Seed Bomb', 'Curse', 'Toxic Spikes', 'Double-Edge', 'Endure', 'Wood Hammer'];
		relearnMoves = ['Spiky Shield', 'Horn Leech', 'Acupressure'];
        evoMoves = ['Poison Jab'];
        tmMoves = ['Roar', 'Toxic', 'Bulk Up', 'Venoshock', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Protect', 'Safeguard', 'Frustration', 'Solar Beam', 'Earthquake', 'Return', 'Brick Break', 'Double Team', 'Reflect', 'Sludge Bomb', 'Rock Tomb', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Low Sweep', 'Round', 'Echoed Voice', 'Focus Blast', 'Energy Ball', 'False Swipe', 'Fling', 'Payback', 'Giga Impact', 'Flash', 'Stone Edge', 'Swords Dance', 'Bulldoze', 'Rock Slide', 'Poison Jab', 'Grass Knot', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Nature Power', 'Power-Up Punch', 'Confide', 'Cut', 'Strength', 'Stinger Lance', 'Daring Dash', 'Aftershock', 'Miasma Terrain', 'Compost Bomb', 'Piledriver', 'Berry Juicer', 'Lariat', 'Crosscut Leaf', 'Restrain', 'Berry Share', 'Hidden Gift', 'Clear Sky', 'Acid Rain'];
        tutorMoves = ['Amaze', 'Body Press', 'Brutal Swing', 'Bullet Seed', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Drain Punch', 'Endeavor', 'Endure', 'Enthrall', 'Focus Punch', 'Frenzy Plant', 'Fury Cutter', 'Giga Drain', 'Grass Pledge', 'Headbutt', 'Iron Head', 'Iron Tail', 'Low Kick', 'Natural Gift', 'Outrage', 'Power Garden', 'Rock Climb', 'Secret Power', 'Seed Bomb', 'Smart Strike', 'Snore', 'Stomping Tantrum', 'Superpower', 'Synthesis', 'Throat Chop', 'Thunder Punch', 'Work Up', 'Worry Seed', 'Zen Headbutt'];
        eggMoves = ['Close Combat', 'Focus Energy', 'Grassy Terrain', 'Horn Leech', 'Megahorn', 'Pin Missile', 'Poison Sting', 'Rage', 'Stomp']
		break;

	case 'crocoal':
		moveLevels = [1, 1, 7, 9, 15, 17, 23, 25, 31, 33, 39, 41, 47, 49];
		levelUpMoves = ['Nip', 'Howl', 'Coal Scatter', 'Odor Sleuth', 'Bite', 'Incinerate', 'Taunt', 'Flame Burst', 'Stoke', 'Flamethrower', 'Crunch', 'Psych Out', 'Fire Spin', 'Ring of Fire'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Roar', 'Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Protect', 'Frustration', 'Return', 'Dig', 'Double Team', 'Flamethrower', 'Fire Blast', 'Rock Tomb', 'Torment', 'Facade', 'Flame Charge', 'Rest', 'Attract', 'Thief', 'Round', 'Echoed Voice', 'Overheat', 'Incinerate', 'Will-O-Wisp', 'Embargo', 'Payback', 'Psych Up', 'Grass Knot', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Snarl', 'Nature Power', 'Confide', 'Cut', 'Strength', 'Bravado', 'Daring Dash', 'Phoenix Fire', 'Psych Out', 'Burning Strike', 'Burn Away', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Fire Pledge', 'Foul Play', 'Headbutt', 'Heat Wave', 'Hyper Voice', 'Iron Tail', 'Natural Gift', 'Secret Power', 'Snatch', 'Snore', 'Spite', 'Sucker Punch', 'Swift', 'Trip Up', 'Uproar', 'Work Up', 'Zen Headbutt'];
        eggMoves = ['Blaze Kick', 'Burn Up', 'Fire Fang', 'Flame Wheel', 'Flatter', 'Grudge', 'Punishment', 'Revenge', 'Smokescreen', 'Smog']
		break;

	case 'feucrota':
		moveLevels = [1, 1, 7, 9, 15, 17, 24, 27, 34, 37, 44, 47, 54, 57];
		levelUpMoves = ['Nip', 'Howl', 'Coal Scatter', 'Odor Sleuth', 'Bite', 'Incinerate', 'Taunt','Flame Burst', 'Stoke', 'Flamethrower', 'Crunch', 'Psych Out', 'Fire Spin','Ring of Fire'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Roar', 'Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Protect', 'Frustration', 'Return', 'Dig', 'Double Team', 'Flamethrower', 'Fire Blast', 'Rock Tomb', 'Torment', 'Facade', 'Flame Charge', 'Rest', 'Attract', 'Thief', 'Round', 'Echoed Voice', 'Overheat', 'Incinerate', 'Will-O-Wisp', 'Embargo', 'Payback', 'Psych Up', 'Grass Knot', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Snarl', 'Nature Power', 'Confide', 'Cut', 'Strength', 'Bravado', 'Daring Dash', 'Banshee Howl', 'Phoenix Fire', 'Psych Out', 'Burning Strike', 'Burn Away', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Fire Pledge', 'Foul Play', 'Headbutt', 'Heat Wave', 'Hyper Voice', 'Iron Tail', 'Natural Gift', 'Secret Power', 'Snatch', 'Snore', 'Spite', 'Sucker Punch', 'Swift', 'Trip Up', 'Uproar', 'Work Up', 'Zen Headbutt'];
        eggMoves = ['Blaze Kick', 'Burn Up', 'Fire Fang', 'Flame Wheel', 'Flatter', 'Grudge', 'Punishment', 'Revenge', 'Smokescreen', 'Smog']
		break;

	case 'burungin':
		moveLevels = [1, 1, 7, 9, 15, 17, 24, 27, 35, 39, 47, 51, 59, 63];
		levelUpMoves = ['Nip', 'Howl', 'Coal Scatter', 'Odor Sleuth', 'Bite', 'Incinerate', 'Taunt', 'Flame Burst', 'Stoke', 'Flamethrower', 'Crunch', 'Psych Out', 'Fire Spin', 'Ring of Fire'];
		relearnMoves = ['Ring of Fire', 'Mystical Fire', 'Punishment', 'Confuse Ray'];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Calm Mind', 'Roar', 'Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Hyper Beam', 'Protect', 'Frustration', 'Solar Beam', 'Earthquake', 'Return', 'Dig', 'Psychic', 'Shadow Ball', 'Brick Break', 'Double Team', 'Flamethrower', 'Fire Blast', 'Rock Tomb', 'Aerial Ace', 'Torment', 'Facade', 'Flame Charge', 'Rest', 'Attract', 'Thief', 'Round', 'Echoed Voice', 'Overheat', 'Focus Blast', 'Energy Ball', 'Fling', 'Incinerate', 'Will-O-Wisp', 'Embargo', 'Shadow Claw', 'Payback', 'Retaliate', 'Giga Impact', 'Swords Dance', 'Psych Up', 'Bulldoze', 'Rock Slide', 'Dream Eater', 'Grass Knot', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Snarl', 'Nature Power', 'Dark Pulse', 'Power-Up Punch', 'Confide', 'Cut', 'Strength', 'Spirit Punch', 'Bravado', 'Daring Dash', 'Aftershock', 'Banshee Howl', 'Shadow Dart', 'Phoenix Fire', 'Psych Out', 'Burning Strike', 'Hyper-Focus', 'Lariat', 'Burn Away', 'Brain Press', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Blast Burn', 'Brutal Swing', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Drain Punch', 'Endure', 'Enthrall', 'Fire Pledge', 'Fire Punch', 'Focus Punch', 'Foul Play', 'Headbutt', 'Heat Wave', 'Hyper Voice', 'Iron Tail', 'Low Kick', 'Natural Gift', 'Ominous Wind', 'Pain Split', 'Rock Climb', 'Role Play', 'Secret Power', 'Snatch', 'Snore', 'Spite', 'Sucker Punch', 'Swift', 'Thunder Punch', 'Trip Up', 'Uproar', 'Work Up', 'Zen Headbutt'];
        eggMoves = ['Blaze Kick', 'Burn Up', 'Fire Fang', 'Flame Wheel', 'Flatter', 'Grudge', 'Punishment', 'Revenge', 'Smokescreen', 'Smog']
		break;

	case 'spraylet':
		moveLevels = [1, 4, 8, 11, 15, 18, 22, 25, 29, 32, 36, 39, 43];
		levelUpMoves = ['Tackle', 'Leer', 'Aqua Jet', 'Focus Energy', 'Fury Swipes', 'Screech', 'Water Pulse', 'Slash', 'Eagle Eye', 'Whirlwind', 'Brine', 'Mirror Move', 'Tsunami Rush'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Toxic', 'Hail', 'Hidden Power', 'Ice Beam', 'Blizzard', 'Protect', 'Rain Dance', 'Roost', 'Frustration', 'Return', 'Double Team', 'Rock Tomb', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Round', 'Echoed Voice', 'Steel Wing', 'False Swipe', 'Scald', 'Shadow Claw', 'Swords Dance', 'X-Scissor', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Rock Smash', 'Confide', 'Cut', 'Daring Dash', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Air Cutter', 'Amaze', 'Aqua Tail', 'Brine', 'Captivate', 'Confound', 'Dazzle', 'Defog', 'Demolish', 'Eagle Eye', 'Endeavor', 'Endure', 'Enthrall', 'Fury Cutter', 'Headbutt', 'Ice Water', 'Icy Wind', 'Iron Tail', 'Natural Gift', 'Ominous Wind', 'Pluck', 'Rock Climb', 'Secret Power', 'Snore', 'Tailwind', 'Twister', 'Uproar', 'Water Pledge', 'Water Pulse'];
        eggMoves = ['Air Slash', 'Cannonball', 'Fake Out', 'Feather Dance', 'Flip Turn', 'Haze', 'Hurricane', 'Pursuit', 'Soak', 'Supersonic', 'Water Sport']
		break;

	case 'pandive':
		moveLevels = [1, 4, 8, 11, 15, 19, 24, 28, 33, 37, 42, 46, 51];
		levelUpMoves = ['Tackle', 'Leer', 'Aqua Jet', 'Focus Energy', 'Fury Swipes', 'Screech', 'Water Pulse', 'Slash', 'Eagle Eye', 'Tailwind', 'Dive', 'Mirror Move', 'Tsunami Rush'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Toxic', 'Hail', 'Hidden Power', 'Ice Beam', 'Blizzard', 'Protect', 'Rain Dance', 'Roost', 'Frustration', 'Return', 'Double Team', 'Rock Tomb', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Round', 'Echoed Voice', 'Steel Wing', 'False Swipe', 'Scald', 'Shadow Claw', 'Swords Dance', 'X-Scissor', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Rock Smash', 'Confide', 'Cut', 'Fly', 'Surf', 'Strength', 'Waterfall', 'Dive', 'Drag Under', 'Windstorm', 'Daring Dash', 'High-Speed Dive', 'Turbulence', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Air Cutter', 'Amaze', 'Aqua Tail', 'Brine', 'Captivate', 'Confound', 'Dazzle', 'Defog', 'Demolish', 'Eagle Eye', 'Endeavor', 'Endure', 'Enthrall', 'Fury Cutter', 'Headbutt', 'Ice Water', 'Icy Wind', 'Iron Tail', 'Natural Gift', 'Ominous Wind', 'Pluck', 'Rock Climb', 'Secret Power', 'Snore', 'Tailwind', 'Twister', 'Uproar', 'Water Pledge', 'Water Pulse'];
        eggMoves = ['Air Slash', 'Cannonball', 'Fake Out', 'Feather Dance', 'Flip Turn', 'Haze', 'Hurricane', 'Pursuit', 'Soak', 'Supersonic', 'Water Sport']
		break;

	case 'osgrave':
		moveLevels = [1, 4, 8, 11, 15, 19, 24, 28, 33, 39, 46, 52, 59];
		levelUpMoves = ['Tackle', 'Leer', 'Aqua Jet', 'Focus Energy', 'Fury Swipes', 'Screech', 'Water Pulse', 'Slash', 'Eagle Eye', 'Tailwind', 'Dive', 'Mirror Move', 'Tsunami Rush'];
		relearnMoves = ['Hydro Pump', 'Mach Turn', 'Frozen Blade', 'Feather Rain'];
        evoMoves = ['Brave Bird'];
        tmMoves = ['Hone Claws', 'Roar', 'Toxic', 'Hail', 'Hidden Power', 'Ice Beam', 'Blizzard', 'Hyper Beam', 'Protect', 'Rain Dance', 'Roost', 'Frustration', 'Earthquake', 'Return', 'Double Team', 'Rock Tomb', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Round', 'Echoed Voice', 'Steel Wing', 'False Swipe', 'Scald', 'Sky Drop', 'Shadow Claw', 'Giga Impact', 'Swords Dance', 'Bulldoze', 'Rock Slide', 'X-Scissor', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Rock Smash', 'Confide', 'Cut', 'Fly', 'Surf', 'Strength', 'Waterfall', 'Dive', 'Drag Under', 'Windstorm', 'Daring Dash', 'Aftershock', 'High-Speed Dive', 'Turbulence', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Air Cutter', 'Amaze', 'Aqua Tail', 'Avalanche', 'Brine', 'Captivate', 'Confound', 'Dazzle', 'Defog', 'Demolish', 'Eagle Eye', 'Endeavor', 'Endure', 'Enthrall', 'Fury Cutter', 'Headbutt', 'Hydro Cannon', 'Ice Water', 'Icy Wind', 'Iron Tail', 'Laser Focus', 'Liquidation', 'Natural Gift', 'Ominous Wind', 'Pluck', 'Rock Climb', 'Secret Power', 'Sky Attack', 'Snore', 'Tailwind', 'Twister', 'Uproar', 'Water Pledge', 'Water Pulse'];
        eggMoves = ['Air Slash', 'Cannonball', 'Fake Out', 'Feather Dance', 'Flip Turn', 'Haze', 'Hurricane', 'Pursuit', 'Soak', 'Supersonic', 'Water Sport'];
        break;

	case 'auriole':
		moveLevels = [1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41];
		levelUpMoves = ['Peck', 'Sand Attack', 'Astonish', 'Sing', 'Wing Attack', 'Charm', 'Mach Turn', 'Agility', 'Drill Peck', 'Me First', 'Frenzy Strike'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Protect', 'Rain Dance', 'Roost', 'Frustration', 'Return', 'Double Team', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Echoed Voice', 'Steel Wing', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Confide', 'Fly', 'Windstorm', 'Daring Dash', 'Turbulence', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Air Cutter', 'Amaze', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Defog', 'Demolish', 'Eagle Eye', 'Endeavor', 'Endure', 'Enthrall', 'Heat Wave', 'Natural Gift', 'Ominous Wind', 'Pluck', 'Secret Power', 'Snore', 'Swift', 'Tailwind', 'Twister', 'Uproar', 'Work Up'];
        eggMoves = ['Air Slash', 'Feint Attack', 'Feather Dance', 'Feather Rain', 'Mirror Move', 'Pursuit', 'Quick Attack', 'Take Down'];
        break;

	case 'icauriole':
		moveLevels = [1, 5, 9, 13, 17, 21, 27, 33, 39, 45, 51, 56];
		levelUpMoves = ['Peck', 'Sand Attack', 'Astonish', 'Sing', 'Wing Attack', 'Charm', 'Mach Turn', 'Agility', 'Drill Peck', 'Me First', 'Frenzy Strike', 'Brave Bird'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Protect', 'Rain Dance', 'Roost', 'Frustration', 'Return', 'Double Team', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Echoed Voice', 'Steel Wing', 'Giga Impact', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Confide', 'Fly', 'Bravado', 'Windstorm', 'Daring Dash', 'High-Speed Dive', 'Turbulence', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Air Cutter', 'Amaze', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Defog', 'Demolish', 'Eagle Eye', 'Endeavor', 'Endure', 'Enthrall', 'Heat Wave', 'Natural Gift', 'Ominous Wind', 'Pluck', 'Secret Power', 'Sky Attack', 'Snore', 'Swift', 'Tailwind', 'Twister', 'Uproar', 'Work Up'];
        eggMoves = ['Air Slash', 'Feint Attack', 'Feather Dance', 'Feather Rain', 'Mirror Move', 'Pursuit', 'Quick Attack', 'Take Down'];
        break;

	case 'dustley':
		moveLevels = [1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45];
		levelUpMoves = ['Nip', 'Sand Attack', 'Defense Curl', 'Bide', 'Bite', 'Cotton Spore', 'Dig', 'Hyper Fang', 'Cotton Guard', 'Shore Up', 'Super Fang', 'Substitute'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Bulk Up', 'Hidden Power', 'Sunny Day', 'Protect', 'Frustration', 'Return', 'Dig', 'Double Team', 'Sandstorm', 'Rock Tomb', 'Facade', 'Rest', 'Attract', 'Round', 'Retaliate', 'Swagger', 'Sleep Talk', 'Substitute', 'Confide', 'Cut', 'Sandblast', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Bounce', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Dust Guard', 'Endure', 'Enthrall', 'Gunk Shot', 'Headbutt', 'Last Resort', 'Natural Gift', 'Recycle', 'Rollout', 'Secret Power', 'Snore', 'Super Fang', 'Swift', 'Work Up', 'Zen Headbutt'];
        eggMoves = ['Belly Drum', 'Bestow', 'Charm', 'Crunch', 'Spikes', 'Tickle'];
        break;

	case 'aculago':
		moveLevels = [1, 5, 9, 13, 17, 20, 24, 29, 35, 40, 44, 49, 53, 58];
		levelUpMoves = ['Nip', 'Sand Attack', 'Defense Curl', 'Bide', 'Bite', 'Sand Tomb', 'Cotton Spore', 'Dig', 'Hyper Fang', 'Cotton Guard', 'Shore Up', 'Super Fang', 'Substitute', 'Sandstorm'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Bulk Up', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Protect', 'Frustration', 'Earthquake', 'Return', 'Dig', 'Double Team', 'Sandstorm', 'Rock Tomb', 'Facade', 'Rest', 'Attract', 'Round', 'Retaliate', 'Giga Impact', 'Bulldoze', 'Rock Slide', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Confide', 'Cut', 'Aftershock', 'Sandblast', 'Mudslide', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Bounce', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Dust Guard', 'Earth Power', 'Endure', 'Enthrall', 'Gunk Shot', 'Headbutt', 'Last Resort', 'Natural Gift', 'Recycle', 'Rollout', 'Secret Power', 'Snore', 'Stealth Rock', 'Super Fang', 'Swift', 'Work Up', 'Zen Headbutt'];
        eggMoves = ['Belly Drum', 'Bestow', 'Charm', 'Crunch', 'Spikes', 'Tickle'];
        break;

	case 'kizziff':
		moveLevels = [1, 1, 6, 9, 14, 17, 22, 25, 30, 33, 38, 41, 46, 49];
		levelUpMoves = ['Drain Life', 'Leer', 'Poison Sting', 'Para Needle', 'Sweet Kiss', 'Bug Bite', 'Shadow Sneak', 'Leech Life', 'Poison Fang', 'Slumber Fang', 'Toxic', 'Cross Poison', 'X-Scissor', 'Backstab'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Toxic', 'Venoshock', 'Hidden Power', 'Sunny Day', 'Protect', 'Frustration', 'Return', 'Double Team', 'Sludge Bomb', 'Aerial Ace', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'False Swipe', 'Payback', 'Struggle Bug', 'Infestation', 'Poison Jab', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Confide', 'Cut', 'Stinger Lance', 'Miasma Terrain', 'Noxious Acid', 'Berry Share', 'Hidden Gift', 'Clear Sky', 'Acid Rain'];
        tutorMoves = ['Amaze', 'Bug Bite', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Dust Guard', 'Endure', 'Enthrall', 'Fury Cutter', 'Giga Drain', 'Knock Off', 'Leech Life', 'Natural Gift', 'Secret Power', 'Snore'];
        eggMoves = ['Acupressure', 'Bug Buzz', 'Draining Kiss', 'Focus Energy', 'Fury Swipes', 'Night Slash', 'Pin Missile', 'Supersonic', 'Toxic Spikes', 'Viral Gale'];
        break;

	case 'murgaz':
		moveLevels = [1, 1, 6, 9, 15, 18, 24, 27, 33, 36, 42, 45, 51, 54];
		levelUpMoves = ['Drain Life', 'Leer', 'Poison Sting', 'Para Needle', 'Sweet Kiss', 'Bug Bite', 'Shadow Sneak', 'Leech Life', 'Poison Fang', 'Slumber Fang', 'Toxic', 'Cross Poison', 'X-Scissor', 'Backstab'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Toxic', 'Venoshock', 'Hidden Power', 'Sunny Day', 'Protect', 'Frustration', 'Return', 'Double Team', 'Sludge Bomb', 'Aerial Ace', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'False Swipe', 'Shadow Claw', 'Payback', 'Swords Dance', 'Struggle Bug', 'Infestation', 'Poison Jab', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Confide', 'Cut', 'Stinger Lance', 'Miasma Terrain', 'Noxious Acid', 'Berry Share', 'Hidden Gift', 'Clear Sky', 'Acid Rain'];
        tutorMoves = ['Air Cutter', 'Amaze', 'Bug Bite', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Dust Guard', 'Endure', 'Enthrall', 'Fury Cutter', 'Giga Drain', 'Knock Off', 'Leech Life', 'Natural Gift', 'Ominous Wind', 'Secret Power', 'Silver Wind', 'Snore', 'Tailwind'];
        eggMoves = ['Acupressure', 'Bug Buzz', 'Draining Kiss', 'Focus Energy', 'Fury Swipes', 'Night Slash', 'Pin Missile', 'Supersonic', 'Toxic Spikes', 'Viral Gale'];
        break;

	case 'chaszin':
		moveLevels = [1, 1, 6, 9, 15, 18, 26, 29, 36, 39, 46, 49, 56, 59];
		levelUpMoves = ['Drain Life', 'Leer', 'Poison Sting', 'Para Needle', 'Sweet Kiss', 'Bug Bite', 'Shadow Sneak', 'Leech Life', 'Poison Fang', 'Slumber Fang', 'Toxic', 'Cross Poison', 'X-Scissor', 'Backstab'];
		relearnMoves = ['Viral Gale', 'Viral Strike'];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Toxic', 'Venoshock', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Protect', 'Frustration', 'Return', 'Double Team', 'Sludge Bomb', 'Aerial Ace', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'False Swipe', 'Shadow Claw', 'Payback', 'Giga Impact', 'Swords Dance', 'Struggle Bug', 'Infestation', 'Poison Jab', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Confide', 'Cut', 'Stinger Lance', 'Miasma Terrain', 'Noxious Acid', 'Berry Share', 'Hidden Gift', 'Clear Sky', 'Acid Rain'];
        tutorMoves = ['Air Cutter', 'Amaze', 'Bug Bite', 'Captivate', 'Confound', 'Dazzle', 'Defog', 'Demolish', 'Dust Guard', 'Endure', 'Enthrall', 'Fury Cutter', 'Giga Drain', 'Knock Off', 'Leech Life', 'Natural Gift', 'Ominous Wind', 'Secret Power', 'Silver Wind', 'Snore', 'Tailwind', 'Throat Chop'];
        eggMoves = ['Acupressure', 'Bug Buzz', 'Draining Kiss', 'Focus Energy', 'Fury Swipes', 'Night Slash', 'Pin Missile', 'Supersonic', 'Toxic Spikes', 'Viral Gale'];
        break;

	case 'bucarat':
		moveLevels = [1, 3, 8, 10, 15, 17, 22, 24, 29, 31, 36, 38, 43];
		levelUpMoves = ['Scratch', 'Tail Whip', 'Germ Spray', 'Torment', 'Sludge', 'Fury Swipes', 'Hone Claws', 'Venoshock', 'Toxic', 'Viral Strike', 'Sucker Punch', 'Miasma Terrain', 'Plague Storm'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Toxic', 'Venoshock', 'Hidden Power', 'Sunny Day', 'Protect', 'Rain Dance', 'Frustration', 'Thunderbolt', 'Thunder', 'Return', 'Dig', 'Shadow Ball', 'Brick Break', 'Double Team', 'Sludge Wave', 'Sludge Bomb', 'Aerial Ace', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'False Swipe', 'Fling', 'Incinerate', 'Embargo', 'Shadow Claw', 'Payback', 'Thunder Wave', 'Infestation', 'Poison Jab', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Snarl', 'Dark Pulse', 'Power-Up Punch', 'Confide', 'Cut', 'Miasma Terrain', 'Compost Bomb', 'Shadow Dart', 'Oil Slick', 'Noxious Acid', 'Berry Share', 'Hidden Gift', 'Clear Sky', 'Acid Rain'];
        tutorMoves = ['Amaze', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Endeavor', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Foul Play', 'Fury Cutter', 'Gastro Acid', 'Gunk Shot', 'Headbutt', 'Ice Punch', 'Iron Tail', 'Knock Off', 'Natural Gift', 'Pain Split', 'Secret Power', 'Shock Wave', 'Snatch', 'Snore', 'Spite', 'Sucker Punch', 'Thunder Punch', 'Trip Up', 'Work Up'];
        eggMoves = ['Acupressure', 'Assurance', 'Backstab', 'Corrode', 'Feint Attack', 'Poison Sting', 'Recover', 'Revenge', 'Toxic Spikes', 'Venom Drench'];
        break;

	case 'mortarat':
		moveLevels = [1, 3, 8, 10, 15, 17, 22, 25, 32, 35, 42, 45, 52];
		levelUpMoves = ['Scratch', 'Tail Whip', 'Germ Spray', 'Torment', 'Sludge', 'Fury Swipes', 'Hone Claws', 'Venoshock', 'Toxic', 'Viral Strike', 'Bounce', 'Miasma Terrain', 'Plague Storm'];
		relearnMoves = ['Viral Gale'];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Toxic', 'Venoshock', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Protect', 'Rain Dance', 'Frustration', 'Thunderbolt', 'Thunder', 'Return', 'Dig', 'Shadow Ball', 'Brick Break', 'Double Team', 'Sludge Wave', 'Sludge Bomb', 'Aerial Ace', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Focus Blast', 'False Swipe', 'Fling', 'Incinerate', 'Acrobatics', 'Embargo', 'Shadow Claw', 'Payback', 'Giga Impact', 'Thunder Wave', 'Infestation', 'Poison Jab', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Snarl', 'Dark Pulse', 'Power-Up Punch', 'Confide', 'Cut', 'Miasma Terrain', 'Compost Bomb', 'Shadow Dart', 'Oil Slick', 'Noxious Acid', 'Berry Share', 'Hidden Gift', 'Clear Sky', 'Acid Rain'];
        tutorMoves = ['Amaze', 'Aqua Tail', 'Bounce', 'Brutal Swing', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Endeavor', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Foul Play', 'Fury Cutter', 'Gastro Acid', 'Gunk Shot', 'Headbutt', 'Ice Punch', 'Iron Tail', 'Knock Off', 'Natural Gift', 'Pain Split', 'Secret Power', 'Shock Wave', 'Snatch', 'Snore', 'Spite', 'Sucker Punch', 'Thunder Punch', 'Trip Up', 'Work Up'];
        eggMoves = ['Acupressure', 'Assurance', 'Backstab', 'Corrode', 'Feint Attack', 'Poison Sting', 'Recover', 'Revenge', 'Toxic Spikes', 'Venom Drench'];
        break;

	case 'tinimer':
		moveLevels = [1, 1, 5, 10, 14, 19, 23, 28, 32, 37, 41, 46, 50];
		levelUpMoves = ['String Shot', 'Drain Life', 'Camouflage', 'Struggle Bug', 'Quick Attack', 'Spider Web', 'Silver Wind', 'Tickle', 'Nature Power', 'Bug Buzz', 'Weather Ball', 'Sticky Web', 'Flail'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Protect', 'Rain Dance', 'Safeguard', 'Frustration', 'Return', 'Double Team', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Shadow Claw', 'Struggle Bug', 'X-Scissor', 'Infestation', 'Poison Jab', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Nature Power', 'Confide', 'Cut', 'Noxious Acid', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Bug Bite', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Dust Guard', 'Electroweb', 'Endure', 'Enthrall', 'Fury Cutter', 'Giga Drain', 'Knock Off', 'Leech Life', 'Natural Gift', 'Secret Power', 'Signal Beam', 'Silver Wind', 'Snore'];
        eggMoves = ['Astonish', 'Defense Curl', 'Encore', 'Fell Stinger', 'Fury Swipes', 'Gust', 'Poison Fang', 'Poison Sting', 'Pursuit'];
        break;

	case 'emperobe':
		moveLevels = [1, 1, 5, 10, 14, 19, 23, 28, 30, 32, 37, 41, 46, 50];
		levelUpMoves = ['String Shot', 'Drain Life', 'Camouflage', 'Fairy Ring', 'Quick Attack', 'Spider Web', 'Draining Kiss', 'Charm', 'Wish', 'Magic Coat', 'Bug Buzz', 'Spellbind', 'Sticky Web', 'Lunar Beam'];
		relearnMoves = ['Mirror Coat', 'Quiver Dance'];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Light Screen', 'Protect', 'Rain Dance', 'Safeguard', 'Frustration', 'Return', 'Dig', 'Psychic', 'Double Team', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Shadow Claw', 'Giga Impact', 'Flash', 'Struggle Bug', 'X-Scissor', 'Infestation', 'Poison Jab', 'Grass Knot', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Nature Power', 'Dazzling Gleam', 'Confide', 'Cut', 'Lunar Beam', 'Rainbow Wall', 'Noxious Acid', 'Shimmer Shot', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Bug Bite', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Dust Guard', 'Electroweb', 'Endure', 'Enthrall', 'Fury Cutter', 'Giga Drain', 'Knock Off', 'Leech Life', 'Magic Coat', 'Natural Gift', 'Secret Power', 'Signal Beam', 'Silver Wind', 'Snore'];
        eggMoves = ['Astonish', 'Defense Curl', 'Encore', 'Fell Stinger', 'Fury Swipes', 'Gust', 'Poison Fang', 'Poison Sting', 'Pursuit'];
        break;

	case 'altavault':
		moveLevels = [1, 1, 5, 10, 14, 19, 23, 28, 30, 32, 37, 41, 46, 50];
		levelUpMoves = ['String Shot', 'Drain Life', 'Camouflage', 'Smack Down', 'Feint', 'Spider Web', 'Rock Tomb', 'Screech', 'Bounce', 'Agility', 'Bug Buzz', 'Rock Climb', 'Sticky Web', 'Stone Edge'];
		relearnMoves = ['Acrobatics', 'First Impression'];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Protect', 'Rain Dance', 'Safeguard', 'Frustration', 'Smack Down', 'Return', 'Dig', 'Double Team', 'Sandstorm', 'Rock Tomb', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Acrobatics', 'Shadow Claw', 'Giga Impact', 'Rock Polish', 'Stone Edge', 'Struggle Bug', 'Rock Slide', 'X-Scissor', 'Infestation', 'Poison Jab', 'Grass Knot', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Nature Power', 'Confide', 'Cut', 'Daring Dash', 'Sandblast', 'Noxious Acid', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Bounce', 'Bug Bite', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Dust Guard', 'Electroweb', 'Endure', 'Enthrall', 'Fury Cutter', 'Giga Drain', 'Knock Off', 'Leech Life', 'Natural Gift', 'Rock Climb', 'Secret Power', 'Signal Beam', 'Silver Wind', 'Snore', 'Stealth Rock'];
        eggMoves = ['Astonish', 'Defense Curl', 'Encore', 'Fell Stinger', 'Fury Swipes', 'Gust', 'Poison Fang', 'Poison Sting', 'Pursuit'];
        break;

	case 'belmarine':
		moveLevels = [1, 1, 5, 10, 14, 19, 23, 28, 30, 32, 37, 41, 46, 50];
		levelUpMoves = ['String Shot', 'Drain Life', 'Camouflage', 'Bubble', 'Aqua Jet', 'Spider Web', 'Bubble Beam', 'Waterlog', 'Dive', 'Aqua Ring', 'Bug Buzz', 'Ice Water', 'Sticky Web', 'Foam Geyser'];
		relearnMoves = ['Haze', 'Lunge'];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hail', 'Hidden Power', 'Sunny Day', 'Ice Beam', 'Blizzard', 'Hyper Beam', 'Protect', 'Rain Dance', 'Safeguard', 'Frustration', 'Return', 'Dig', 'Double Team', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Scald', 'Shadow Claw', 'Giga Impact', 'Struggle Bug', 'X-Scissor', 'Infestation', 'Poison Jab', 'Grass Knot', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Nature Power', 'Confide', 'Cut', 'Surf', 'Waterfall', 'Dive', 'Drag Under', 'Cold Shower', 'Noxious Acid', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Brine', 'Bug Bite', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Dust Guard', 'Electroweb', 'Endure', 'Enthrall', 'Fury Cutter', 'Giga Drain', 'Knock Off', 'Leech Life', 'Natural Gift', 'Secret Power', 'Signal Beam', 'Silver Wind', 'Snore', 'Water Pulse'];
        eggMoves = ['Astonish', 'Defense Curl', 'Encore', 'Fell Stinger', 'Fury Swipes', 'Gust', 'Poison Fang', 'Poison Sting', 'Pursuit'];
        break;

	case 'vaquerado':
		moveLevels = [1, 1, 5, 10, 14, 19, 23, 28, 30, 32, 37, 41, 46, 50];
		levelUpMoves = ['String Shot', 'Drain Life', 'Camouflage', 'Sand Tomb', 'Pressure Wave', 'Spider Web', 'Sandblast', 'Scary Face', 'Dig', 'Quicksand', 'Bug Buzz', 'Sucker Punch', 'Sticky Web', 'Earth Power'];
		relearnMoves = ['Restrain', 'Lunge'];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Protect', 'Rain Dance', 'Safeguard', 'Frustration', 'Smack Down', 'Earthquake', 'Return', 'Dig', 'Double Team', 'Rock Tomb', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'False Swipe', 'Shadow Claw', 'Payback', 'Giga Impact', 'Struggle Bug', 'Bulldoze', 'Rock Slide', 'X-Scissor', 'Infestation', 'Poison Jab', 'Grass Knot', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Nature Power', 'Confide', 'Cut', 'Bravado', 'Daring Dash', 'Aftershock', 'Sandblast', 'Mudslide', 'Noxious Acid', 'Rug Pull', 'Restrain', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Bind', 'Bug Bite', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Dust Guard', 'Earth Power', 'Electroweb', 'Endure', 'Enthrall', 'Fury Cutter', 'Giga Drain', 'Knock Off', 'Leech Life', 'Natural Gift', 'Secret Power', 'Signal Beam', 'Silver Wind', 'Snatch', 'Snore', 'Stealth Rock', 'Sucker Punch', 'Trip Up'];
        eggMoves = ['Astonish', 'Defense Curl', 'Encore', 'Fell Stinger', 'Fury Swipes', 'Gust', 'Poison Fang', 'Poison Sting', 'Pursuit'];
        break;

	case 'buneary':
		moveLevels = [1, 1, 1, 1, 6, 10, 13, 16, 23, 26, 33, 36, 43, 46, 53, 56, 63];
		levelUpMoves = ['Splash', 'Pound', 'Defense Curl', 'Foresight', 'Endure', 'Baby-Doll Eyes', 'Frustration', 'Quick Attack', 'Jump Kick', 'Baton Pass', 'Agility', 'Dizzy Punch', 'After You', 'Charm', 'Entrainment', 'Bounce', 'Healing Wish'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Ice Beam', 'Protect', 'Frustration', 'Solar Beam', 'Thunderbolt', 'Return', 'Dig', 'Shadow Ball', 'Double Team', 'Facade', 'Rest', 'Attract', 'Round', 'Fling', 'Charge Beam', 'Retaliate', 'Thunder Wave', 'Grass Knot', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Power-Up Punch', 'Confide', 'Cut', 'Daring Dash', 'Whirling Dance', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['After You', 'Amaze', 'Bounce', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Drain Punch', 'Endeavor', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Headbutt', 'Heal Bell', 'Helping Hand', 'Ice Punch', 'Iron Tail', 'Last Resort', 'Low Kick', 'Natural Gift', 'Revel Dance', 'Role Play', 'Secret Power', 'Shock Wave', 'Snore', 'Swift', 'Thunder Punch', 'Uproar', 'Water Pulse', 'Work Up'];
        eggMoves = ['Circle Throw', 'Copycat', 'Cosmic Power', 'Double Hit', 'Encore', 'Fake Out', 'Fake Tears', 'Flail', 'Mud Sport', 'Sky Uppercut', 'Sweet Kiss', 'Switcheroo', 'Teeter Dance'];
        break;

	case 'lopunny':
		moveLevels = [1, 1, 1, 1, 6, 13, 16, 23, 26, 33, 36, 43, 46, 53, 56, 63, 66];
		levelUpMoves = ['Splash', 'Pound', 'Defense Curl', 'Foresight', 'Endure', 'Return', 'Quick Attack', 'Jump Kick', 'Baton Pass', 'Agility', 'Dizzy Punch', 'After You', 'Charm', 'Entrainment', 'Bounce', 'Healing Wish', 'High Jump Kick'];
		relearnMoves = ['Healing Wish', 'Bounce', 'Rototiller', 'Mirror Coat', 'Magic Coat'];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Ice Beam', 'Blizzard', 'Hyper Beam', 'Protect', 'Frustration', 'Solar Beam', 'Thunderbolt', 'Thunder', 'Return', 'Dig', 'Shadow Ball', 'Double Team', 'Facade', 'Rest', 'Attract', 'Low Sweep', 'Round', 'Focus Blast', 'Fling', 'Charge Beam', 'Retaliate', 'Giga Impact', 'Thunder Wave', 'Grass Knot', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Power-Up Punch', 'Confide', 'Cut', 'Strength', 'Daring Dash', 'Whirling Dance', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['After You', 'Amaze', 'Bounce', 'Brutal Swing', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Drain Punch', 'Endeavor', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Headbutt', 'Heal Bell', 'Helping Hand', 'Ice Punch', 'Iron Tail', 'Last Resort', 'Low Kick', 'Magic Coat', 'Natural Gift', 'Revel Dance', 'Role Play', 'Secret Power', 'Shock Wave', 'Snore', 'Swift', 'Thunder Punch', 'Uproar', 'Water Pulse', 'Work Up'];
        eggMoves = ['Circle Throw', 'Copycat', 'Cosmic Power', 'Double Hit', 'Encore', 'Fake Out', 'Fake Tears', 'Flail', 'Mud Sport', 'Sky Uppercut', 'Sweet Kiss', 'Switcheroo', 'Teeter Dance'];
        break;

	case 'jackravage':
		moveLevels = [1, 1, 1, 1, 6, 13, 16, 23, 26, 33, 36, 43, 46, 53, 56, 63, 66];
		levelUpMoves = ['Splash', 'Pound', 'Defense Curl', 'Foresight', 'Endure', 'Frustration', 'Mach Punch', 'Jump Kick', 'Torment', 'Bulk Up', 'Chip Away', 'Sucker Punch', 'Belly Drum', 'Thrash', 'Bounce', 'Final Gambit', 'High Jump Kick'];
		relearnMoves = ['Final Gambit', 'Bounce', 'Play Rough', 'Counter', 'Detect'];
        evoMoves = [];
        tmMoves = ['Toxic', 'Bulk Up', 'Hidden Power', 'Ice Beam', 'Blizzard', 'Hyper Beam', 'Protect', 'Frustration', 'Solar Beam', 'Thunderbolt', 'Thunder', 'Return', 'Dig', 'Shadow Ball', 'Double Team', 'Torment', 'Facade', 'Rest', 'Attract', 'Low Sweep', 'Round', 'Focus Blast', 'Fling', 'Charge Beam', 'Payback', 'Retaliate', 'Giga Impact', 'Thunder Wave', 'Rock Slide', 'Grass Knot', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Power-Up Punch', 'Confide', 'Cut', 'Strength', 'Spirit Punch', 'Bravado', 'Daring Dash', 'Whirling Dance', 'Piledriver', 'Lariat', 'Brain Press', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['After You', 'Amaze', 'Bounce', 'Brutal Swing', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Drain Punch', 'Dual Chop', 'Endeavor', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Foul Play', 'Headbutt', 'Heal Bell', 'Helping Hand', 'Ice Punch', 'Iron Tail', 'Last Resort', 'Low Kick', 'Magic Coat', 'Natural Gift', 'Revel Dance', 'Role Play', 'Secret Power', 'Shock Wave', 'Snore', 'Sucker Punch', 'Swift', 'Throat Chop', 'Thunder Punch', 'Trip Up', 'Uproar', 'Vacuum Wave', 'Water Pulse', 'Work Up'];
        eggMoves = ['Circle Throw', 'Copycat', 'Cosmic Power', 'Double Hit', 'Encore', 'Fake Out', 'Fake Tears', 'Flail', 'Mud Sport', 'Sky Uppercut', 'Sweet Kiss', 'Switcheroo', 'Teeter Dance'];
        break;

	case 'pachirisu':
		moveLevels = [1, 1, 5, 9, 13, 17, 19, 21, 25, 29, 33, 37, 41, 45, 49];
		levelUpMoves = ['Growl', 'Bide', 'Quick Attack', 'Charm', 'Spark', 'Endure', 'Nuzzle', 'Swift', 'Electro Ball', 'Sweet Kiss', 'Thunder Wave', 'Super Fang', 'Discharge', 'Last Resort', 'Hyper Fang'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Light Screen', 'Protect', 'Frustration', 'Thunderbolt', 'Thunder', 'Return', 'Dig', 'Double Team', 'Facade', 'Rest', 'Attract', 'Round', 'Echoed Voice', 'Fling', 'Charge Beam', 'Flash', 'Volt Switch', 'Thunder Wave', 'Grass Knot', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Confide', 'Cut', 'Static Strike', 'Whirling Dance', 'Pulse Storm', 'Berry Juicer', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Electroweb', 'Endure', 'Enthrall', 'Gunk Shot', 'Headbutt', 'Helping Hand', 'Iron Tail', 'Jump-Start', 'Laser Focus', 'Last Resort', 'Magnet Rise', 'Natural Gift', 'Rollout', 'Secret Power', 'Seed Bomb', 'Shock Wave', 'Snore', 'Super Fang', 'Swift', 'Thunder Punch', 'Uproar'];
        eggMoves = ['Bestow', 'Bite', 'Charge', 'Defense Curl', 'Fake Tears', 'Flail', 'Flatter', 'Follow Me', 'Ion Deluge', 'Tail Whip'];
        break;

	case 'marazuma':
		moveLevels = [1, 1, 5, 9, 13, 17, 19, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61];
		levelUpMoves = ['Growl', 'Bide', 'Quick Attack', 'Defense Curl', 'Spark', 'Endure', 'Nuzzle', 'Swift', 'Electro Ball', 'Slack Off', 'Thunder Wave', 'Super Fang', 'Discharge', 'Dig', 'Last Resort', 'Hyper Fang', 'Yawn', 'Thunder'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Hyper Beam', 'Light Screen', 'Protect', 'Frustration', 'Thunderbolt', 'Thunder', 'Return', 'Dig', 'Double Team', 'Facade', 'Rest', 'Attract', 'Round', 'Echoed Voice', 'Focus Blast', 'Fling', 'Charge Beam', 'Giga Impact', 'Flash', 'Volt Switch', 'Thunder Wave', 'Gyro Ball', 'Grass Knot', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Wild Charge', 'Confide', 'Cut', 'Static Strike', 'Whirling Dance', 'Pulse Storm', 'Berry Juicer', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Body Press', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Electroweb', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Gunk Shot', 'Headbutt', 'Helping Hand', 'Ice Punch', 'Iron Tail', 'Jump-Start', 'Laser Focus', 'Last Resort', 'Magnet Rise', 'Natural Gift', 'Rollout', 'Secret Power', 'Seed Bomb', 'Shock Wave', 'Signal Beam', 'Snore', 'Super Fang', 'Swift', 'Thunder Punch', 'Uproar'];
        eggMoves = ['Bestow', 'Bite', 'Charge', 'Defense Curl', 'Fake Tears', 'Flail', 'Flatter', 'Follow Me', 'Ion Deluge', 'Tail Whip'];
        break;

	case 'paras':
		moveLevels = [1, 6, 6, 11, 17, 22, 27, 33, 38, 43, 49, 54];
		levelUpMoves = ['Scratch', 'Stun Spore', 'Poison Powder', 'Absorb', 'Fury Cutter', 'Spore', 'Slash', 'Growth', 'Giga Drain', 'Aromatherapy', 'Rage Powder', 'X-Scissor'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Toxic', 'Venoshock', 'Hidden Power', 'Sunny Day', 'Light Screen', 'Protect', 'Rain Dance', 'Frustration', 'Solar Beam', 'Return', 'Dig', 'Brick Break', 'Double Team', 'Sludge Bomb', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Energy Ball', 'False Swipe', 'Flash', 'Swords Dance', 'Struggle Bug', 'X-Scissor', 'Grass Knot', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Nature Power', 'Confide', 'Cut', 'Stinger Lance', 'Compost Bomb', 'Berry Juicer', 'Noxious Acid', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['After You', 'Amaze', 'Bug Bite', 'Bullet Seed', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Dust Guard', 'Endure', 'Enthrall', 'Fury Cutter', 'Giga Drain', 'Knock Off', 'Leech Life', 'Natural Gift', 'Pepper Powder', 'Power Garden', 'Puzzle Powder', 'Secret Power', 'Seed Bomb', 'Snore', 'Synthesis', 'Worry Seed'];
        eggMoves = ['Agility', 'Counter', 'Cross Poison', 'Fell Stinger', 'Flail', 'Leech Seed', 'Metal Claw', 'Psybeam', 'Pursuit', 'Rototiller', 'Screech', 'Sweet Scent', 'Wide Guard'];
        break;

	case 'parasect':
		moveLevels = [1, 6, 6, 11, 17, 22, 29, 37, 44, 51, 59, 66];
		levelUpMoves = ['Scratch', 'Stun Spore', 'Poison Powder', 'Absorb', 'Fury Cutter', 'Spore', 'Slash', 'Growth', 'Giga Drain', 'Aromatherapy', 'Rage Powder', 'X-Scissor'];
		relearnMoves = ['Cross Poison'];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Toxic', 'Venoshock', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Light Screen', 'Protect', 'Rain Dance', 'Frustration', 'Solar Beam', 'Return', 'Dig', 'Brick Break', 'Double Team', 'Sludge Bomb', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Energy Ball', 'False Swipe', 'Giga Impact', 'Flash', 'Swords Dance', 'Struggle Bug', 'X-Scissor', 'Grass Knot', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Nature Power', 'Confide', 'Cut', 'Stinger Lance', 'Compost Bomb', 'Berry Juicer', 'Noxious Acid', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['After You', 'Amaze', 'Bug Bite', 'Bullet Seed', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Dust Guard', 'Endure', 'Enthrall', 'Fury Cutter', 'Giga Drain', 'Knock Off', 'Leech Life', 'Natural Gift', 'Pepper Powder', 'Power Garden', 'Puzzle Powder', 'Secret Power', 'Seed Bomb', 'Snore', 'Synthesis', 'Throat Chop', 'Worry Seed'];
        eggMoves = ['Agility', 'Counter', 'Cross Poison', 'Fell Stinger', 'Flail', 'Leech Seed', 'Metal Claw', 'Psybeam', 'Pursuit', 'Rototiller', 'Screech', 'Sweet Scent', 'Wide Guard'];
        break;

	case 'paracordis':
		moveLevels = [1, 6, 6, 11, 17, 22, 29, 37, 44, 51, 59, 66];
		levelUpMoves = ['Scratch', 'Stun Spore', 'Poison Powder', 'Absorb', 'Fury Cutter', 'Spore', 'Crush Claw', 'Growth', 'Giga Drain', 'Worry Seed', 'Rage Powder', 'X-Scissor'];
		relearnMoves = ['Amnesia', 'Cross Poison'];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Toxic', 'Venoshock', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Light Screen', 'Protect', 'Rain Dance', 'Frustration', 'Solar Beam', 'Return', 'Dig', 'Brick Break', 'Double Team', 'Sludge Bomb', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Energy Ball', 'False Swipe', 'Shadow Claw', 'Giga Impact', 'Flash', 'Swords Dance', 'Struggle Bug', 'X-Scissor', 'Infestation', 'Grass Knot', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Nature Power', 'Confide', 'Cut', 'Stinger Lance', 'Compost Bomb', 'Berry Juicer', 'Noxious Acid', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['After You', 'Amaze', 'Bug Bite', 'Bullet Seed', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Dust Guard', 'Endure', 'Enthrall', 'Fury Cutter', 'Giga Drain', 'Knock Off', 'Leech Life', 'Natural Gift', 'Pepper Powder', 'Power Garden', 'Puzzle Powder', 'Secret Power', 'Seed Bomb', 'Snore', 'Synthesis', 'Throat Chop', 'Worry Seed'];
        eggMoves = ['Agility', 'Counter', 'Cross Poison', 'Fell Stinger', 'Flail', 'Leech Seed', 'Metal Claw', 'Psybeam', 'Pursuit', 'Rototiller', 'Screech', 'Sweet Scent', 'Wide Guard'];
        break;

	case 'gowatu':
		moveLevels = [1, 1, 6, 8, 11, 15, 18, 21, 25, 28, 31, 35, 38, 41, 45];
		levelUpMoves = ['Splash', 'Gust', 'Growl', 'Razor Leaf', 'Sonic Boom', 'Supersonic', 'Torment', 'Feather Rain', 'Uproar', 'Screech', 'Leaf Blade', 'Air Slash', 'Worry Seed', 'Hyper Voice', 'Ear Splitter'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Protect', 'Roost', 'Safeguard', 'Frustration', 'Solar Beam', 'Return', 'Double Team', 'Aerial Ace', 'Torment', 'Facade', 'Rest', 'Attract', 'Round', 'Echoed Voice', 'Steel Wing', 'Energy Ball', 'Flash', 'Swords Dance', 'Grass Knot', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Nature Power', 'Confide', 'Cut', 'Fly', 'Windstorm', 'Berry Juicer', 'Crosscut Leaf', 'Turbulence', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Air Cutter', 'Amaze', 'Bullet Seed', 'Captivate', 'Confound', 'Dazzle', 'Defog', 'Demolish', 'Dust Guard', 'Eagle Eye', 'Endeavor', 'Endure', 'Enthrall', 'Fury Cutter', 'Giga Drain', 'Hyper Voice', 'Natural Gift', 'Ominous Wind', 'Pluck', 'Secret Power', 'Seed Bomb', 'Snore', 'Synthesis', 'Tailwind', 'Uproar', 'White Garden', 'Worry Seed'];
        eggMoves = ['Boomburst', 'Fake Tears', 'Feather Dance', 'Grass Whistle', 'Leaf Storm', 'Lucky Chant', 'Magical Leaf'];
        break;

	case 'turatal':
		moveLevels = [1, 1, 6, 8, 11, 15, 18, 21, 25, 30, 35, 41, 46, 51, 57];
		levelUpMoves = ['Splash', 'Gust', 'Growl', 'Razor Leaf', 'Sonic Boom', 'Supersonic', 'Torment', 'Feather Rain', 'Uproar', 'Screech', 'Leaf Blade', 'Air Slash', 'Worry Seed', 'Hyper Voice', 'Ear Splitter'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Protect', 'Roost', 'Safeguard', 'Frustration', 'Solar Beam', 'Return', 'Double Team', 'Aerial Ace', 'Torment', 'Facade', 'Rest', 'Attract', 'Round', 'Echoed Voice', 'Steel Wing', 'Energy Ball', 'Giga Impact', 'Flash', 'Swords Dance', 'Grass Knot', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Nature Power', 'Confide', 'Cut', 'Fly', 'Windstorm', 'High-Speed Dive', 'Berry Juicer', 'Crosscut Leaf', 'Turbulence', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Air Cutter', 'Amaze', 'Bullet Seed', 'Captivate', 'Confound', 'Dazzle', 'Defog', 'Demolish', 'Dust Guard', 'Eagle Eye', 'Endeavor', 'Endure', 'Enthrall', 'Fury Cutter', 'Giga Drain', 'Hyper Voice', 'Natural Gift', 'Ominous Wind', 'Pluck', 'Secret Power', 'Seed Bomb', 'Sky Attack', 'Snore', 'Synthesis', 'Tailwind', 'Uproar', 'White Garden', 'Worry Seed'];
        eggMoves = ['Boomburst', 'Fake Tears', 'Feather Dance', 'Grass Whistle', 'Leaf Storm', 'Lucky Chant', 'Magical Leaf'];
        break;

	case 'mefflora':
		moveLevels = [1, 1, 5, 8, 12, 15, 19, 22, 26, 29, 33, 36, 40, 43, 47];
		levelUpMoves = ['Flutter Jump', 'Sweet Scent', 'Absorb', 'Growth', 'Leech Seed', 'Mega Drain', 'Poison Powder', 'Stun Spore', 'Draining Kiss', 'Sleep Powder', 'Grassy Terrain', 'Giga Drain', 'Aromatherapy', 'Pixie Dust', 'Petal Dance'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Light Screen', 'Protect', 'Safeguard', 'Frustration', 'Solar Beam', 'Return', 'Dig', 'Psychic', 'Double Team', 'Reflect', 'Facade', 'Rest', 'Attract', 'Round', 'Energy Ball', 'Flash', 'Swords Dance', 'Grass Knot', 'Swagger', 'Sleep Talk', 'Substitute', 'Nature Power', 'Dazzling Gleam', 'Confide', 'Cut', 'Lunar Beam', 'Compost Bomb', 'Berry Juicer', 'Rainbow Wall', 'Shimmer Shot', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['After You', 'Amaze', 'Bullet Seed', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Dust Guard', 'Endure', 'Enthrall', 'Fury Cutter', 'Giga Drain', 'Headbutt', 'Helping Hand', 'Iron Tail', 'Magic Coat', 'Mental Garden', 'Natural Gift', 'Pepper Powder', 'Power Garden', 'Puzzle Powder', 'Revel Dance', 'Secret Power', 'Seed Bomb', 'Snore', 'Synthesis', 'White Garden', 'Worry Seed'];
        eggMoves = ['Acid Spray', 'Bestow', 'Fairy Dance', 'Floral Healing', 'Flower Shield', 'Haze', 'Heal Pulse', 'Leaf Storm', 'Misty Terrain', 'Moonblast', 'Petal Blizzard'];
        break;

	case 'mephodil':
		moveLevels = [1, 1, 5, 8, 12, 15, 19, 23, 28, 32, 37, 41, 46, 50, 55];
		levelUpMoves = ['Flutter Jump', 'Sweet Scent', 'Absorb', 'Growth', 'Leech Seed', 'Mega Drain', 'Poison Powder', 'Stun Spore', 'Draining Kiss', 'Sleep Powder', 'Grassy Terrain', 'Giga Drain', 'Aromatherapy', 'Pixie Dust', 'Petal Dance'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Light Screen', 'Protect', 'Safeguard', 'Frustration', 'Solar Beam', 'Return', 'Dig', 'Psychic', 'Double Team', 'Reflect', 'Facade', 'Rest', 'Attract', 'Round', 'Energy Ball', 'Fling', 'Flash', 'Swords Dance', 'Grass Knot', 'Swagger', 'Sleep Talk', 'Substitute', 'Nature Power', 'Power-Up Punch', 'Dazzling Gleam', 'Confide', 'Cut', 'Lunar Beam', 'Compost Bomb', 'Whirling Dance', 'Berry Juicer', 'Rainbow Wall', 'Shimmer Shot', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['After You', 'Amaze', 'Bullet Seed', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Drain Punch', 'Dust Guard', 'Endure', 'Enthrall', 'Focus Punch', 'Fury Cutter', 'Giga Drain', 'Headbutt', 'Helping Hand', 'Iron Tail', 'Magic Coat', 'Mental Garden', 'Natural Gift', 'Pepper Powder', 'Power Garden', 'Puzzle Powder', 'Revel Dance', 'Secret Power', 'Seed Bomb', 'Snore', 'Synthesis', 'White Garden', 'Worry Seed'];
        eggMoves = ['Acid Spray', 'Bestow', 'Fairy Dance', 'Floral Healing', 'Flower Shield', 'Haze', 'Heal Pulse', 'Leaf Storm', 'Misty Terrain', 'Moonblast', 'Petal Blizzard'];
        break;

	case 'spilotalis':
		moveLevels = [1, 1, 5, 8, 12, 15, 19, 23, 28, 32, 39, 45, 52, 58, 65];
		levelUpMoves = ['Flutter Jump', 'Sweet Scent', 'Absorb', 'Growth', 'Leech Seed', 'Mega Drain', 'Poison Powder', 'Stun Spore', 'Draining Kiss', 'Sleep Powder', 'Grassy Terrain', 'Giga Drain', 'Aromatherapy', 'Pixie Dust', 'Petal Dance'];
		relearnMoves = ['Aromatic Mist', 'Flower Shield', 'Lunar Beam'];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Light Screen', 'Protect', 'Safeguard', 'Frustration', 'Solar Beam', 'Return', 'Dig', 'Psychic', 'Double Team', 'Reflect', 'Facade', 'Rest', 'Attract', 'Round', 'Focus Blast', 'Energy Ball', 'Fling', 'Giga Impact', 'Flash', 'Swords Dance', 'Grass Knot', 'Swagger', 'Sleep Talk', 'Substitute', 'Nature Power', 'Power-Up Punch', 'Dazzling Gleam', 'Confide', 'Cut', 'Lunar Beam', 'Compost Bomb', 'Whirling Dance', 'Berry Juicer', 'Rainbow Wall', 'Shimmer Shot', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['After You', 'Amaze', 'Bullet Seed', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Drain Punch', 'Dust Guard', 'Endure', 'Enthrall', 'Focus Punch', 'Fury Cutter', 'Giga Drain', 'Headbutt', 'Helping Hand', 'Iron Tail', 'Low Kick', 'Magic Coat', 'Mental Garden', 'Natural Gift', 'Pepper Powder', 'Power Garden', 'Puzzle Powder', 'Revel Dance', 'Secret Power', 'Seed Bomb', 'Snore', 'Synthesis', 'White Garden', 'Worry Seed'];
        eggMoves = ['Acid Spray', 'Bestow', 'Fairy Dance', 'Floral Healing', 'Flower Shield', 'Haze', 'Heal Pulse', 'Leaf Storm', 'Misty Terrain', 'Moonblast', 'Petal Blizzard'];
        break;

	case 'exeggcute':
		moveLevels = [1, 1, 1, 7, 11, 17, 19, 21, 23, 27, 33, 37, 43, 47, 50];
		levelUpMoves = ['Barrage', 'Hypnosis', 'Uproar', 'Reflect', 'Leech Seed', 'Bullet Seed', 'Stun Spore', 'Poison Powder', 'Sleep Powder', 'Confusion', 'Worry Seed', 'Natural Gift', 'Solar Beam', 'Extrasensory', 'Bestow'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Light Screen', 'Protect', 'Frustration', 'Solar Beam', 'Return', 'Psychic', 'Double Team', 'Reflect', 'Sludge Bomb', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Energy Ball', 'Explosion', 'Flash', 'Swords Dance', 'Psych Up', 'Dream Eater', 'Grass Knot', 'Swagger', 'Sleep Talk', 'Substitute', 'Trick Room', 'Nature Power', 'Confide', 'Strength', 'Mind Shatter', 'Berry Juicer', 'Hyper-Focus', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Ancient Power', 'Block', 'Bullet Seed', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Giga Drain', 'Gravity', 'Link Pulse', 'Mental Garden', 'Natural Gift', 'Pepper Powder', 'Puzzle Powder', 'Rollout', 'Secret Power', 'Seed Bomb', 'Skill Swap', 'Snore', 'Synthesis', 'Telekinesis', 'Worry Seed'];
        eggMoves = ['Curse', 'Grassy Terrain', 'Ingrain', 'Leaf Storm', 'Lucky Chant', 'Moonlight', 'Power Swap'];
        break;

	case 'exeggutor':
		moveLevels = [1, 1, 17, 27, 37, 47];
		levelUpMoves = ['Barrage', 'Hypnosis', 'Psyshock', 'Egg Bomb', 'Wood Hammer', 'Leaf Storm'];
        evoMoves = [];
        tmMoves = ['Psyshock', 'Toxic', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Light Screen', 'Protect', 'Frustration', 'Solar Beam', 'Return', 'Psychic', 'Double Team', 'Reflect', 'Sludge Bomb', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Energy Ball', 'Explosion', 'Giga Impact', 'Flash', 'Swords Dance', 'Psych Up', 'Dream Eater', 'Grass Knot', 'Swagger', 'Sleep Talk', 'Substitute', 'Trick Room', 'Nature Power', 'Confide', 'Strength', 'Mind Shatter', 'Berry Juicer', 'Hyper-Focus', 'Crosscut Leaf', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Ancient Power', 'Block', 'Bullet Seed', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Giga Drain', 'Gravity', 'Headbutt', 'Link Pulse', 'Low Kick', 'Mental Garden', 'Natural Gift', 'Pepper Powder', 'Puzzle Powder', 'Rollout', 'Secret Power', 'Seed Bomb', 'Skill Swap', 'Snore', 'Stomping Tantrum', 'Synthesis', 'Telekinesis', 'Worry Seed', 'Zen Headbutt'];
        eggMoves = ['Curse', 'Grassy Terrain', 'Ingrain', 'Leaf Storm', 'Lucky Chant', 'Moonlight', 'Power Swap'];
        break;

	case 'feebas':
		moveLevels = [1, 15, 30];
		levelUpMoves = ['Splash', 'Tackle', 'Flail'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hail', 'Hidden Power', 'Ice Beam', 'Blizzard', 'Protect', 'Rain Dance', 'Frustration', 'Return', 'Double Team', 'Facade', 'Rest', 'Attract', 'Round', 'Scald', 'Swagger', 'Sleep Talk', 'Substitute', 'Confide', 'Surf', 'Waterfall', 'Dive', 'Drag Under', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Brine', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Ice Water', 'Icy Wind', 'Natural Gift', 'Secret Power', 'Snore', 'Water Pulse'];
        eggMoves = ['Confuse Ray', 'Dragon Pulse', 'Dragon Breath', 'Haze', 'Hypnosis', 'Mirror Coat', 'Mist', 'Mud Sport', 'Tickle'];
        break;

	case 'milotic':
		moveLevels = [1, 1, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56];
		levelUpMoves = ['Wrap', 'Water Gun', 'Disarming Voice', 'Twister', 'Aqua Ring', 'Attract', 'Life Dew', 'Dragon Tail', 'Recover', 'Aqua Tail', 'Safeguard', 'Surf', 'Rain Dance', 'Coil', 'Hydro Pump', 'Elegant Wave'];
		relearnMoves = [];
        evoMoves = ['Water Pulse'];
        tmMoves = ['Toxic', 'Hail', 'Hidden Power', 'Ice Beam', 'Blizzard', 'Hyper Beam', 'Protect', 'Rain Dance', 'Frustration', 'Return', 'Double Team', 'Facade', 'Rest', 'Attract', 'Round', 'Scald', 'Giga Impact', 'Bulldoze', 'Dragon Tail', 'Swagger', 'Sleep Talk', 'Substitute', 'Confide', 'Surf', 'Waterfall', 'Dive', 'Drag Under', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Aqua Tail', 'Avalanche', 'Bind', 'Breaking Swipe', 'Brine', 'Brutal Swing', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Ice Water', 'Icy Wind', 'Iron Head', 'Iron Tail', 'Laser Focus', 'Magic Coat', 'Natural Gift', 'Secret Power', 'Snore', 'Twister', 'Water Pulse'];
        eggMoves = ['Confuse Ray', 'Dragon Pulse', 'Dragon Breath', 'Haze', 'Hypnosis', 'Mirror Coat', 'Mist', 'Mud Sport', 'Tickle'];
        break;

	case 'petilil':
		moveLevels = [1, 4, 8, 10, 13, 17, 19, 22, 26, 28, 31, 35, 37, 40, 44, 46];
		levelUpMoves = ['Absorb', 'Growth', 'Leech Seed', 'Sleep Powder', 'Mega Drain', 'Synthesis', 'Magical Leaf', 'Stun Spore', 'Giga Drain', 'Aromatherapy', 'Helping Hand', 'Energy Ball', 'Entrainment', 'Sunny Day', 'After You', 'Leaf Storm'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Protect', 'Safeguard', 'Frustration', 'Solar Beam', 'Return', 'Double Team', 'Facade', 'Rest', 'Attract', 'Round', 'Energy Ball', 'Flash', 'Dream Eater', 'Grass Knot', 'Swagger', 'Sleep Talk', 'Substitute', 'Nature Power', 'Confide', 'Cut', 'Berry Juicer', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['After You', 'Amaze', 'Bullet Seed', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Giga Drain', 'Heal Bell', 'Helping Hand', 'Mental Garden', 'Natural Gift', 'Pepper Powder', 'Puzzle Powder', 'Secret Power', 'Seed Bomb', 'Snore', 'Synthesis', 'Worry Seed'];
        eggMoves = ['Charm', 'Grass Whistle', 'Healing Wish', 'Ingrain', 'Sweet Scent'];
        break;

	case 'lilligant':
		moveLevels = [1, 1, 1, 1, 10, 28, 46, 50];
		levelUpMoves = ['Growth', 'Leech Seed', 'Mega Drain', 'Synthesis', 'Teeter Dance', 'Quiver Dance', 'Petal Dance', 'Petal Blizzard'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Light Screen', 'Protect', 'Safeguard', 'Frustration', 'Solar Beam', 'Return', 'Double Team', 'Facade', 'Rest', 'Attract', 'Round', 'Energy Ball', 'Giga Impact', 'Flash', 'Swords Dance', 'Dream Eater', 'Grass Knot', 'Swagger', 'Sleep Talk', 'Substitute', 'Nature Power', 'Confide', 'Cut', 'Whirling Dance', 'Berry Juicer', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['After You', 'Amaze', 'Bullet Seed', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Giga Drain', 'Headbutt', 'Heal Bell', 'Helping Hand', 'Mental Garden', 'Natural Gift', 'Pepper Powder', 'Puzzle Powder', 'Revel Dance', 'Role Play', 'Secret Power', 'Seed Bomb', 'Snore', 'Synthesis', 'Worry Seed'];
        eggMoves = ['Charm', 'Grass Whistle', 'Healing Wish', 'Ingrain', 'Sweet Scent'];
        break;

	case 'kangaskhan':
		moveLevels = [11, 1, 7, 10, 13, 19, 22, 25, 31, 34, 37, 43, 46, 49, 50];
		levelUpMoves = ['Comet Punch', 'Leer', 'Fake Out', 'Tail Whip', 'Bite', 'Double Hit', 'Rage', 'Mega Punch', 'Chip Away', 'Dizzy Punch', 'Crunch', 'Endure', 'Outrage', 'Sucker Punch', 'Reversal'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Roar', 'Toxic', 'Hail', 'Hidden Power', 'Sunny Day', 'Ice Beam', 'Blizzard', 'Hyper Beam', 'Protect', 'Rain Dance', 'Safeguard', 'Frustration', 'Solar Beam', 'Thunderbolt', 'Thunder', 'Earthquake', 'Return', 'Dig', 'Shadow Ball', 'Brick Break', 'Double Team', 'Flamethrower', 'Sandstorm', 'Fire Blast', 'Rock Tomb', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Focus Blast', 'Fling', 'Incinerate', 'Shadow Claw', 'Retaliate', 'Giga Impact', 'Bulldoze', 'Rock Slide', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Power-Up Punch', 'Confide', 'Cut', 'Surf', 'Strength', 'Spirit Punch', 'Bravado', 'Daring Dash', 'Aftershock', 'Piledriver', 'Lariat', 'Hero Rally', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Aqua Tail', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Drain Punch', 'Endeavor', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Fury Cutter', 'Headbutt', 'Helping Hand', 'Ice Punch', 'Icy Wind', 'Iron Tail', 'Low Kick', 'Natural Gift', 'Outrage', 'Rock Climb', 'Secret Power', 'Shock Wave', 'Snore', 'Sucker Punch', 'Swift', 'Thunder Punch', 'Uproar', 'Water Pulse', 'Work Up'];
        eggMoves = ['Circle Throw', 'Counter', 'Crush Claw', 'Disable', 'Double-Edge', 'Focus Energy', 'Foresight', 'Hammer Arm', 'Stomp', 'Trump Card'];
        break;

	case 'petrocka':
		moveLevels = [1, 7, 13, 19, 25, 31, 37, 43, 49, 55, 61, 67];
		levelUpMoves = ['Comet Punch', 'Tail Whip', 'Rock Throw', 'Double Kick', 'Piston Kick', 'Rock Polish', 'Rock Slide', 'Jump Kick', 'Sky Uppercut', 'Quick Guard', 'Bounce', 'Boulder Crash'];
		relearnMoves = ['Power-Up Punch'];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Toxic', 'Bulk Up', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Protect', 'Frustration', 'Smack Down', 'Earthquake', 'Return', 'Dig', 'Brick Break', 'Double Team', 'Sandstorm', 'Rock Tomb', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Round', 'Focus Blast', 'Fling', 'Acrobatics', 'Payback', 'Retaliate', 'Giga Impact', 'Rock Polish', 'Stone Edge', 'Bulldoze', 'Rock Slide', 'Poison Jab', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Rock Smash', 'Power-Up Punch', 'Confide', 'Cut', 'Strength', 'Spirit Punch', 'Bravado', 'Diamond Claw', 'Daring Dash', 'Aftershock', 'Crystallize', 'Sandblast', 'Lariat', 'Brain Press', 'Jewel Blast', 'Pulverize', 'Hero Rally', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Ancient Power', 'Aqua Tail', 'Bounce', 'Brutal Swing', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Dual Chop', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Headbutt', 'Helping Hand', 'Ice Punch', 'Iron Defense', 'Iron Head', 'Iron Tail', 'Knock Off', 'Low Kick', 'Natural Gift', 'Rock Climb', 'Secret Power', 'Snore', 'Stealth Rock', 'Sucker Punch', 'Superpower', 'Thunder Punch', 'Vacuum Wave', 'Work Up'];
        eggMoves = ['Accelerock', 'Dizzy Punch', 'Fake Out', 'Foresight', 'Head Smash', 'Mach Punch', 'Mega Punch', 'Revenge', 'Rocket Kick'];
        break;

	case 'basculin':
		moveLevels = [1, 1, 4, 7, 10, 13, 16, 20, 24, 28, 32, 36, 41, 46, 51, 56];
		levelUpMoves = ['Tackle', 'Water Gun', 'Uproar', 'Headbutt', 'Bite', 'Aqua Jet', 'Chip Away', 'Take Down', 'Crunch', 'Aqua Tail', 'Soak', 'Double-Edge', 'Scary Face', 'Flail', 'Final Gambit', 'Thrash'];
		relearnMoves = ['Thrash', 'Flail'];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hail', 'Hidden Power', 'Taunt', 'Ice Beam', 'Protect', 'Rain Dance', 'Frustration', 'Return', 'Double Team', 'Facade', 'Rest', 'Attract', 'Round', 'Scald', 'Swagger', 'Sleep Talk', 'Substitute', 'Confide', 'Surf', 'Strength', 'Waterfall', 'Dive', 'Bravado', 'Drag Under', 'Daring Dash', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Aqua Tail', 'Bounce', 'Brine', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endeavor', 'Endure', 'Enthrall', 'Headbutt', 'Ice Water', 'Icy Wind', 'Liquidation', 'Natural Gift', 'Secret Power', 'Snore', 'Swift', 'Water Pulse', 'Zen Headbutt'];
        eggMoves = ['Agility', 'Bubble Beam', 'Muddy Water', 'Mud Shot', 'Rage', 'Revenge', 'Whirlpool'];
        break;

	case 'siamacho':
		moveLevels = [1, 1, 4, 7, 10, 13, 16, 20, 24, 28, 32, 36, 41, 46, 51, 56];
		levelUpMoves = ['Tackle', 'Water Gun', 'Uproar', 'Brutal Swing', 'Bite', 'Mach Punch', 'Chip Away', 'Submission', 'Crunch', 'Aqua Tail', 'Soak', 'Double-Edge', 'Scary Face', 'Reversal', 'Final Gambit', 'Thrash'];
		relearnMoves = ['Thrash', 'Reversal', 'Brick Break'];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hail', 'Bulk Up', 'Hidden Power', 'Taunt', 'Ice Beam', 'Blizzard', 'Hyper Beam', 'Protect', 'Rain Dance', 'Frustration', 'Return', 'Brick Break', 'Double Team', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Focus Blast', 'Scald', 'Fling', 'Retaliate', 'Giga Impact', 'Poison Jab', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Power-Up Punch', 'Confide', 'Surf', 'Strength', 'Waterfall', 'Dive', 'Spirit Punch', 'Bravado', 'Drag Under', 'Daring Dash', 'Piledriver', 'Lariat', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Aqua Tail', 'Bounce', 'Brine', 'Brutal Swing', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Dual Chop', 'Endeavor', 'Endure', 'Enthrall', 'Focus Punch', 'Headbutt', 'Ice Punch', 'Ice Water', 'Icy Wind', 'Iron Tail', 'Knock Off', 'Liquidation', 'Natural Gift', 'Secret Power', 'Snore', 'Sucker Punch', 'Superpower', 'Swift', 'Throat Chop', 'Vacuum Wave', 'Water Pulse', 'Work Up', 'Zen Headbutt'];
        eggMoves = ['Agility', 'Bubble Beam', 'Muddy Water', 'Mud Shot', 'Rage', 'Revenge', 'Whirlpool'];
        break;

	case 'gravendou':
		moveLevels = [1, 1, 8, 10, 13, 20, 22, 25, 32, 34, 37, 44, 46];
		levelUpMoves = ['Fury Attack', 'Tail Whip', 'Bide', 'Horn Attack', 'Curse', 'Rock Blast', 'Rapid Spin', 'Protect', 'Spikes', 'Spire Lance', 'Stealth Rock', 'Stone Edge', 'Horn Drill'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Protect', 'Frustration', 'Smack Down', 'Return', 'Dig', 'Double Team', 'Sandstorm', 'Rock Tomb', 'Facade', 'Rest', 'Attract', 'Round', 'Payback', 'Rock Polish', 'Stone Edge', 'Gyro Ball', 'Bulldoze', 'Rock Slide', 'Poison Jab', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Confide', 'Cut', 'Strength', 'Diamond Claw', 'Crystallize', 'Sandblast', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Ancient Power', 'Aqua Tail', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Drill Run', 'Earth Power', 'Endure', 'Enthrall', 'Fury Cutter', 'Headbutt', 'Iron Defense', 'Iron Head', 'Iron Tail', 'Natural Gift', 'Rock Climb', 'Rollout', 'Secret Power', 'Smart Strike', 'Snore', 'Stealth Rock', 'Superpower'];
        eggMoves = ['Boulder Crash', 'Defense Curl', 'Double-Edge', 'Icicle Spear', 'Megahorn', 'Pin Missile', 'Rock Throw', 'Toxic Spikes'];
        break;

	case 'cragendou':
		moveLevels = [1, 1, 8, 10, 13, 21, 24, 28, 36, 39, 43, 51, 54];
		levelUpMoves = ['Fury Attack', 'Tail Whip', 'Bide', 'Horn Attack', 'Curse', 'Rock Blast', 'Rapid Spin', 'Protect', 'Spikes', 'Spire Lance', 'Stealth Rock', 'Stone Edge', 'Horn Drill'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Protect', 'Frustration', 'Smack Down', 'Earthquake', 'Return', 'Dig', 'Double Team', 'Sandstorm', 'Rock Tomb', 'Facade', 'Rest', 'Attract', 'Round', 'Payback', 'Rock Polish', 'Stone Edge', 'Gyro Ball', 'Bulldoze', 'Rock Slide', 'Poison Jab', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Confide', 'Cut', 'Strength', 'Diamond Claw', 'Aftershock', 'Crystallize', 'Sandblast', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Ancient Power', 'Aqua Tail', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Drill Run', 'Earth Power', 'Endure', 'Enthrall', 'Fury Cutter', 'Headbutt', 'Iron Defense', 'Iron Head', 'Iron Tail', 'Natural Gift', 'Rock Climb', 'Rollout', 'Secret Power', 'Smart Strike', 'Snore', 'Stealth Rock', 'Superpower'];
        eggMoves = ['Boulder Crash', 'Defense Curl', 'Double-Edge', 'Icicle Spear', 'Megahorn', 'Pin Missile', 'Rock Throw', 'Toxic Spikes'];
        break;

	case 'quarendou':
		moveLevels = [1, 1, 8, 10, 13, 21, 24, 28, 36, 41, 47, 56, 61];
		levelUpMoves = ['Fury Attack', 'Tail Whip', 'Bide', 'Horn Attack', 'Curse', 'Rock Blast', 'Rapid Spin', 'Protect', 'Spikes', 'Spire Lance', 'Stealth Rock', 'Stone Edge', 'Horn Drill'];
		relearnMoves = ['Spike Cannon', 'Rock Climb'];
        evoMoves = [];
        tmMoves = ['Roar', 'Toxic', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Protect', 'Frustration', 'Smack Down', 'Earthquake', 'Return', 'Dig', 'Double Team', 'Sandstorm', 'Rock Tomb', 'Facade', 'Rest', 'Attract', 'Round', 'Payback', 'Giga Impact', 'Rock Polish', 'Stone Edge', 'Gyro Ball', 'Bulldoze', 'Rock Slide', 'Poison Jab', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Confide', 'Cut', 'Strength', 'Diamond Claw', 'Aftershock', 'Crystallize', 'Sandblast', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Ancient Power', 'Aqua Tail', 'Avalanche', 'Body Press', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Drill Run', 'Earth Power', 'Endure', 'Enthrall', 'Fury Cutter', 'Headbutt', 'Iron Defense', 'Iron Head', 'Iron Tail', 'Natural Gift', 'Rock Climb', 'Rollout', 'Secret Power', 'Smart Strike', 'Snore', 'Stealth Rock', 'Stomping Tantrum', 'Superpower'];
        eggMoves = ['Boulder Crash', 'Defense Curl', 'Double-Edge', 'Icicle Spear', 'Megahorn', 'Pin Missile', 'Rock Throw', 'Toxic Spikes'];
        break;

	case 'cherubi':
		moveLevels = [1, 1, 7, 10, 13, 19, 22, 28, 31, 37, 40, 47];
		levelUpMoves = ['Morning Sun', 'Tackle', 'Growth', 'Leech Seed', 'Helping Hand', 'Magical Leaf', 'Sunny Day', 'Worry Seed', 'Take Down', 'Solar Beam', 'Lucky Chant', 'Petal Blizzard'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Protect', 'Safeguard', 'Frustration', 'Solar Beam', 'Return', 'Double Team', 'Facade', 'Rest', 'Attract', 'Round', 'Energy Ball', 'Flash', 'Swords Dance', 'Grass Knot', 'Swagger', 'Sleep Talk', 'Substitute', 'Nature Power', 'Dazzling Gleam', 'Confide', 'Berry Juicer', 'Rainbow Wall', 'Shimmer Shot', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Bullet Seed', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Giga Drain', 'Helping Hand', 'Natural Gift', 'Power Garden', 'Rollout', 'Secret Power', 'Seed Bomb', 'Snore', 'Synthesis', 'Worry Seed'];
        eggMoves = ['Aromatherapy', 'Defense Curl', 'Flower Shield', 'Grass Whistle', 'Heal Pulse', 'Healing Wish', 'Razor Leaf', 'Sweet Scent', 'Tickle', 'Weather Ball'];
        break;

	case 'cherrim':
		moveLevels = [1, 1, 7, 10, 13, 19, 22, 25, 28, 30, 35, 43, 48];
		levelUpMoves = ['Morning Sun', 'Tackle', 'Growth', 'Leech Seed', 'Helping Hand', 'Magical Leaf', 'Sunny Day', 'Petal Dance', 'Worry Seed', 'Take Down', 'Solar Beam', 'Lucky Chant', 'Petal Blizzard'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Protect', 'Safeguard', 'Frustration', 'Solar Beam', 'Return', 'Double Team', 'Facade', 'Rest', 'Attract', 'Round', 'Energy Ball', 'Giga Impact', 'Flash', 'Swords Dance', 'Grass Knot', 'Swagger', 'Sleep Talk', 'Substitute', 'Nature Power', 'Dazzling Gleam', 'Confide', 'Whirling Dance', 'Berry Juicer', 'Rainbow Wall', 'Shimmer Shot', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Bullet Seed', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Giga Drain', 'Helping Hand', 'Laser Focus', 'Natural Gift', 'Power Garden', 'Rollout', 'Secret Power', 'Seed Bomb', 'Snore', 'Synthesis', 'Worry Seed'];
        eggMoves = ['Aromatherapy', 'Defense Curl', 'Flower Shield', 'Grass Whistle', 'Heal Pulse', 'Healing Wish', 'Razor Leaf', 'Sweet Scent', 'Tickle', 'Weather Ball'];
        break;

	case 'cerisol':
		moveLevels = [1, 1, 7, 10, 13, 19, 22, 25, 28, 30, 35, 43, 48, 50];
		levelUpMoves = ['Morning Sun', 'Tackle', 'Growth', 'Leech Seed', 'Helping Hand', 'Magical Leaf', 'Sunny Day', 'Petal Dance', 'Worry Seed', 'Flame Burst', 'Solar Beam', 'Lucky Chant', 'Petal Blizzard', 'Fiery Dance'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Protect', 'Safeguard', 'Frustration', 'Solar Beam', 'Return', 'Double Team', 'Flamethrower', 'Fire Blast', 'Facade', 'Flame Charge', 'Rest', 'Attract', 'Thief', 'Round', 'Overheat', 'Energy Ball', 'Fling', 'Incinerate', 'Will-O-Wisp', 'Giga Impact', 'Flash', 'Swords Dance', 'Grass Knot', 'Swagger', 'Sleep Talk', 'Substitute', 'Nature Power', 'Dazzling Gleam', 'Confide', 'Whirling Dance', 'Berry Juicer', 'Rainbow Wall', 'Burn Away', 'Shimmer Shot', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Bullet Seed', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Fire Punch', 'Fury Cutter', 'Giga Drain', 'Heat Wave', 'Helping Hand', 'Laser Focus', 'Natural Gift', 'Power Garden', 'Revel Dance', 'Rollout', 'Secret Power', 'Seed Bomb', 'Snore', 'Synthesis', 'Worry Seed'];
        eggMoves = ['Aromatherapy', 'Defense Curl', 'Flower Shield', 'Grass Whistle', 'Heal Pulse', 'Healing Wish', 'Razor Leaf', 'Sweet Scent', 'Tickle', 'Weather Ball'];
        break;

    // Start here
	case 'nincada':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Toxic', 'Hidden Power', 'Sunny Day', 'Protect', 'Frustration', 'Solar Beam', 'Return', 'Dig', 'Shadow Ball', 'Double Team', 'Sandstorm', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Round', 'False Swipe', 'Flash', 'Struggle Bug', 'X-Scissor', 'Swagger', 'Sleep Talk', 'Substitute', 'Confide', 'Cut', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Bug Bite', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Fury Cutter', 'Giga Drain', 'Leech Life', 'Natural Gift', 'Secret Power', 'Silver Wind', 'Snatch', 'Snore', 'Trip Up', 'Uproar'];
        eggMoves = ['Bug Buzz', 'Feint Attack', 'Final Gambit', 'Gust', 'Night Slash'];
        break;

	case 'ninjask':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Bug Bite'];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Toxic', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Protect', 'Roost', 'Frustration', 'Solar Beam', 'Return', 'Dig', 'Shadow Ball', 'Double Team', 'Sandstorm', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'False Swipe', 'Giga Impact', 'Flash', 'Struggle Bug', 'X-Scissor', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Confide', 'Cut', 'Stinger Lance', 'Daring Dash', 'Hyper-Focus', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Air Cutter', 'Amaze', 'Bug Bite', 'Captivate', 'Confound', 'Dazzle', 'Defog', 'Demolish', 'Eagle Eye', 'Endure', 'Enthrall', 'Fury Cutter', 'Giga Drain', 'Leech Life', 'Natural Gift', 'Ominous Wind', 'Secret Power', 'Silver Wind', 'Snatch', 'Snore', 'Swift', 'Trip Up', 'Uproar'];
        eggMoves = ['Bug Buzz', 'Feint Attack', 'Final Gambit', 'Gust', 'Night Slash'];
        break;

	case 'shedinja':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Toxic', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Protect', 'Roost', 'Frustration', 'Solar Beam', 'Return', 'Dig', 'Shadow Ball', 'Double Team', 'Sandstorm', 'Aerial Ace', 'Facade', 'Rest', 'Thief', 'Round', 'False Swipe', 'Will-O-Wisp', 'Shadow Claw', 'Giga Impact', 'Flash', 'Struggle Bug', 'X-Scissor', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Confide', 'Cut', 'Shadow Dart', 'Polter Juggle', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Bug Bite', 'Confound', 'Dazzle', 'Demolish', 'Eagle Eye', 'Endure', 'Enthrall', 'Fury Cutter', 'Giga Drain', 'Leech Life', 'Natural Gift', 'Secret Power', 'Silver Wind', 'Snatch', 'Snore', 'Sucker Punch', 'Swift', 'Telekinesis', 'Trick', 'Trip Up'];
        eggMoves = ['Bug Buzz', 'Feint Attack', 'Final Gambit', 'Gust', 'Night Slash'];
        break;

	case 'minccino':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Calm Mind', 'Toxic', 'Hidden Power', 'Sunny Day', 'Protect', 'Rain Dance', 'Safeguard', 'Frustration', 'Thunderbolt', 'Return', 'Dig', 'Double Team', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Echoed Voice', 'Fling', 'Retaliate', 'Thunder Wave', 'Grass Knot', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Dazzling Gleam', 'Confide', 'Daring Dash', 'Whirling Dance', 'Shimmer Shot', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['After You', 'Amaze', 'Aqua Tail', 'Bullet Seed', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Focus Punch', 'Gunk Shot', 'Headbutt', 'Helping Hand', 'Hyper Voice', 'Iron Tail', 'Knock Off', 'Last Resort', 'Natural Gift', 'Secret Power', 'Seed Bomb', 'Shock Wave', 'Snore', 'Swift', 'Uproar', 'Water Pulse', 'Work Up'];
        eggMoves = ['Fake Tears', 'Flail', 'Tail Whip'];
        break;

	case 'cinccino':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Bullet Seed', 'Rock Blast'];
        evoMoves = [];
        tmMoves = ['Calm Mind', 'Toxic', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Light Screen', 'Protect', 'Rain Dance', 'Safeguard', 'Frustration', 'Thunderbolt', 'Thunder', 'Return', 'Dig', 'Double Team', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Echoed Voice', 'Focus Blast', 'Fling', 'Retaliate', 'Giga Impact', 'Thunder Wave', 'Grass Knot', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Dazzling Gleam', 'Confide', 'Daring Dash', 'Whirling Dance', 'Shimmer Shot', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['After You', 'Amaze', 'Aqua Tail', 'Bullet Seed', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Focus Punch', 'Gunk Shot', 'Headbutt', 'Helping Hand', 'Hyper Voice', 'Iron Tail', 'Knock Off', 'Laser Focus', 'Last Resort', 'Natural Gift', 'Secret Power', 'Seed Bomb', 'Shock Wave', 'Snore', 'Swift', 'Uproar', 'Water Pulse', 'Work Up'];
        eggMoves = ['Fake Tears', 'Flail', 'Tail Whip'];
        break;

	case 'zangoose':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Roar', 'Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Ice Beam', 'Blizzard', 'Protect', 'Rain Dance', 'Frustration', 'Solar Beam', 'Thunderbolt', 'Thunder', 'Return', 'Dig', 'Shadow Ball', 'Brick Break', 'Double Team', 'Flamethrower', 'Fire Blast', 'Rock Tomb', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Focus Blast', 'False Swipe', 'Fling', 'Incinerate', 'Embargo', 'Shadow Claw', 'Payback', 'Retaliate', 'Swords Dance', 'Rock Slide', 'X-Scissor', 'Poison Jab', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Power-Up Punch', 'Confide', 'Strength', 'Bravado', 'Daring Dash', 'Lariat', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endeavor', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Fury Cutter', 'Giga Drain', 'Headbutt', 'Ice Punch', 'Icy Wind', 'Iron Tail', 'Knock Off', 'Last Resort', 'Low Kick', 'Natural Gift', 'Rollout', 'Secret Power', 'Shock Wave', 'Snore', 'Swift', 'Throat Chop', 'Thunder Punch', 'Water Pulse', 'Work Up'];
        eggMoves = ['Counter', 'Curse', 'Disable', 'Double Hit', 'Double Kick', 'Feint', 'Final Gambit', 'Flail', 'Fury Swipes', 'Metal Claw', 'Night Slash', 'Quick Guard', 'Razor Wind'];
        break;

	case 'zanthera':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Roar', 'Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Ice Beam', 'Blizzard', 'Hyper Beam', 'Protect', 'Rain Dance', 'Frustration', 'Solar Beam', 'Thunderbolt', 'Thunder', 'Earthquake', 'Return', 'Dig', 'Shadow Ball', 'Brick Break', 'Double Team', 'Flamethrower', 'Fire Blast', 'Rock Tomb', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Thief', 'Low Sweep', 'Round', 'Focus Blast', 'False Swipe', 'Fling', 'Incinerate', 'Embargo', 'Shadow Claw', 'Payback', 'Retaliate', 'Giga Impact', 'Swords Dance', 'Bulldoze', 'Rock Slide', 'X-Scissor', 'Poison Jab', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Snarl', 'Power-Up Punch', 'Confide', 'Cut', 'Strength', 'Bravado', 'Daring Dash', 'Aftershock', 'Piledriver', 'Lariat', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Brutal Swing', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endeavor', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Fury Cutter', 'Giga Drain', 'Headbutt', 'Ice Punch', 'Icy Wind', 'Iron Tail', 'Knock Off', 'Last Resort', 'Low Kick', 'Natural Gift', 'Rollout', 'Secret Power', 'Shock Wave', 'Snore', 'Sucker Punch', 'Swift', 'Throat Chop', 'Thunder Punch', 'Water Pulse', 'Work Up'];
        eggMoves = ['Counter', 'Curse', 'Disable', 'Double Hit', 'Double Kick', 'Feint', 'Final Gambit', 'Flail', 'Fury Swipes', 'Metal Claw', 'Night Slash', 'Quick Guard', 'Razor Wind'];
        break;

	case 'seviper':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Venoshock', 'Hidden Power', 'Sunny Day', 'Taunt', 'Protect', 'Rain Dance', 'Frustration', 'Earthquake', 'Return', 'Dig', 'Double Team', 'Sludge Wave', 'Flamethrower', 'Sludge Bomb', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Payback', 'Bulldoze', 'Dragon Tail', 'Infestation', 'Poison Jab', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Dark Pulse', 'Confide', 'Strength', 'Stinger Lance', 'Aftershock', 'Miasma Terrain', 'Psych Out', 'Oil Slick', 'Restrain', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Aqua Tail', 'Bind', 'Brutal Swing', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Fury Cutter', 'Gastro Acid', 'Giga Drain', 'Headbutt', 'Iron Tail', 'Knock Off', 'Natural Gift', 'Secret Power', 'Snatch', 'Snore', 'Sucker Punch', 'Swift', 'Throat Chop', 'Trip Up'];
        eggMoves = ['Assurance', 'Body Slam', 'Final Gambit', 'Punishment', 'Scary Face', 'Spit Up', 'Stockpile', 'Swallow', 'Switcheroo'];
        break;

	case 'seviron':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Dragon Claw', 'Roar', 'Toxic', 'Venoshock', 'Hidden Power', 'Sunny Day', 'Taunt', 'Hyper Beam', 'Protect', 'Rain Dance', 'Frustration', 'Earthquake', 'Return', 'Dig', 'Double Team', 'Sludge Wave', 'Flamethrower', 'Sludge Bomb', 'Fire Blast', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'False Swipe', 'Payback', 'Retaliate', 'Giga Impact', 'Swords Dance', 'Bulldoze', 'Dragon Tail', 'Infestation', 'Poison Jab', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Dark Pulse', 'Confide', 'Cut', 'Strength', 'Stinger Lance', 'Aftershock', 'Miasma Terrain', 'Dragon Roar', 'Golden Flame', 'Psych Out', 'Oil Slick', 'Radiant Claw', 'Restrain', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Aqua Tail', 'Bind', 'Breaking Swipe', 'Brutal Swing', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Dragon Pulse', 'Endure', 'Enthrall', 'Fury Cutter', 'Gastro Acid', 'Giga Drain', 'Headbutt', 'Invigorate', 'Iron Tail', 'Knock Off', 'Natural Gift', 'Secret Power', 'Snatch', 'Snore', 'Sucker Punch', 'Swift', 'Throat Chop', 'Trip Up', 'Twister'];
        eggMoves = ['Assurance', 'Body Slam', 'Final Gambit', 'Punishment', 'Scary Face', 'Spit Up', 'Stockpile', 'Swallow', 'Switcheroo'];
        break;

	case 'espurr':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Psyshock', 'Calm Mind', 'Toxic', 'Hidden Power', 'Sunny Day', 'Light Screen', 'Protect', 'Rain Dance', 'Safeguard', 'Frustration', 'Thunderbolt', 'Return', 'Dig', 'Psychic', 'Double Team', 'Reflect', 'Torment', 'Facade', 'Rest', 'Attract', 'Round', 'Echoed Voice', 'Energy Ball', 'Charge Beam', 'Payback', 'Flash', 'Thunder Wave', 'Psych Up', 'Dream Eater', 'Swagger', 'Sleep Talk', 'Substitute', 'Trick Room', 'Dark Pulse', 'Confide', 'Cut', 'Spirit Punch', 'Mind Shatter', 'Psych Out', 'Hyper-Focus', 'Rainbow Wall', 'Brain Press', 'Shimmer Shot', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Eagle Eye', 'Endure', 'Enthrall', 'Gravity', 'Headbutt', 'Heal Bell', 'Helping Hand', 'Link Pulse', 'Magic Coat', 'Magic Room', 'Natural Gift', 'Recycle', 'Role Play', 'Secret Power', 'Shock Wave', 'Signal Beam', 'Snatch', 'Snore', 'Sucker Punch', 'Telekinesis', 'Trick', 'Trip Up', 'Wonder Room', 'Zen Headbutt'];
        eggMoves = ['Assist', 'Barrier', 'Yawn'];
        break;

	case 'meowstic':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Quick Guard', 'Mean Look', 'Helping Hand'];
        evoMoves = [];
        tmMoves = ['Psyshock', 'Calm Mind', 'Toxic', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Light Screen', 'Protect', 'Rain Dance', 'Safeguard', 'Frustration', 'Thunderbolt', 'Return', 'Dig', 'Psychic', 'Shadow Ball', 'Double Team', 'Reflect', 'Torment', 'Facade', 'Rest', 'Attract', 'Round', 'Echoed Voice', 'Energy Ball', 'Charge Beam', 'Payback', 'Giga Impact', 'Flash', 'Thunder Wave', 'Psych Up', 'Dream Eater', 'Swagger', 'Sleep Talk', 'Substitute', 'Trick Room', 'Dark Pulse', 'Power-Up Punch', 'Confide', 'Cut', 'Spirit Punch', 'Lunar Beam', 'Shadow Dart', 'Mind Shatter', 'Psych Out', 'Hyper-Focus', 'Rainbow Wall', 'Brain Press', 'Shimmer Shot', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Eagle Eye', 'Endure', 'Enthrall', 'Gravity', 'Headbutt', 'Heal Bell', 'Helping Hand', 'Link Pulse', 'Magic Coat', 'Magic Room', 'Natural Gift', 'Recycle', 'Role Play', 'Secret Power', 'Shock Wave', 'Signal Beam', 'Snatch', 'Snore', 'Sucker Punch', 'Telekinesis', 'Trick', 'Trip Up', 'Wonder Room', 'Zen Headbutt'];
        eggMoves = ['Assist', 'Barrier', 'Yawn'];
        break;

	case 'josuche':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Face Slap', 'Powder', 'Rage Powder', 'Wake-Up Slap', 'Pixie Dust'];
        evoMoves = [];
        tmMoves = ['Calm Mind', 'Toxic', 'Bulk Up', 'Hidden Power', 'Sunny Day', 'Taunt', 'Hyper Beam', 'Protect', 'Rain Dance', 'Roost', 'Safeguard', 'Frustration', 'Return', 'Double Team', 'Aerial Ace', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Low Sweep', 'Round', 'Steel Wing', 'Focus Blast', 'False Swipe', 'Acrobatics', 'Payback', 'Retaliate', 'Giga Impact', 'Swords Dance', 'Psych Up', 'X-Scissor', 'Poison Jab', 'Grass Knot', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Rock Smash', 'Nature Power', 'Confide', 'Cut', 'Fly', 'Strength', 'Spirit Punch', 'Bravado', 'Windstorm', 'Daring Dash', 'Whirling Dance', 'High-Speed Dive', 'Hyper-Focus', 'Lariat', 'Brain Press', 'Turbulence', 'Hero Rally', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Air Cutter', 'Amaze', 'Bounce', 'Captivate', 'Confound', 'Dazzle', 'Defog', 'Demolish', 'Dual Chop', 'Dust Guard', 'Eagle Eye', 'Endeavor', 'Endure', 'Enthrall', 'Fury Cutter', 'Headbutt', 'Heat Wave', 'Helping Hand', 'Iron Tail', 'Knock Off', 'Laser Focus', 'Low Kick', 'Magic Coat', 'Natural Gift', 'Ominous Wind', 'Pepper Powder', 'Pluck', 'Puzzle Powder', 'Role Play', 'Secret Power', 'Silver Wind', 'Sky Attack', 'Snatch', 'Snore', 'Sucker Punch', 'Swift', 'Tailwind', 'Throat Chop', 'Trip Up', 'Twister', 'Vacuum Wave', 'Work Up', 'Zen Headbutt'];
        eggMoves = ['Agility', 'Detect', 'Double Hit', 'Fake Out', 'Feather Rain', 'Feint', 'Razor Wind', 'Slash', 'Whirlwind'];
        break;

	case 'farfetch\'d':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Brave Bird', 'Poison Jab'];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Protect', 'Roost', 'Frustration', 'Return', 'Double Team', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Steel Wing', 'False Swipe', 'Acrobatics', 'Retaliate', 'Swords Dance', 'Psych Up', 'Poison Jab', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Confide', 'Cut', 'Fly', 'Bravado', 'Windstorm', 'Turbulence', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Air Cutter', 'Amaze', 'Brutal Swing', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Defog', 'Demolish', 'Eagle Eye', 'Endure', 'Enthrall', 'Fury Cutter', 'Headbutt', 'Iron Tail', 'Knock Off', 'Laser Focus', 'Last Resort', 'Natural Gift', 'Ominous Wind', 'Pluck', 'Secret Power', 'Snore', 'Swift', 'Tailwind', 'Throat Chop', 'Trip Up', 'Twister', 'Uproar', 'Work Up'];
        eggMoves = ['Curse', 'Feather Dance', 'Flail', 'Foresight', 'Gust', 'Leaf Blade', 'Mirror Move', 'Mud-Slap', 'Quick Attack', 'Revenge', 'Simple Beam', 'Trump Card'];
        break;

	case 'rapscalion':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Brave Bird', 'Double Hit', 'Poison Jab'];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Protect', 'Rain Dance', 'Roost', 'Frustration', 'Return', 'Brick Break', 'Double Team', 'Aerial Ace', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Steel Wing', 'False Swipe', 'Acrobatics', 'Retaliate', 'Giga Impact', 'Swords Dance', 'Psych Up', 'X-Scissor', 'Poison Jab', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Rock Smash', 'Confide', 'Cut', 'Fly', 'Bravado', 'Windstorm', 'Whirling Dance', 'High-Speed Dive', 'Brain Press', 'Turbulence', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Air Cutter', 'Amaze', 'Brutal Swing', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Defog', 'Demolish', 'Dual Chop', 'Eagle Eye', 'Endure', 'Enthrall', 'Fury Cutter', 'Headbutt', 'Iron Tail', 'Knock Off', 'Laser Focus', 'Last Resort', 'Natural Gift', 'Ominous Wind', 'Pluck', 'Secret Power', 'Sky Attack', 'Snore', 'Swift', 'Tailwind', 'Throat Chop', 'Trip Up', 'Twister', 'Uproar', 'Work Up'];
        eggMoves = ['Curse', 'Feather Dance', 'Flail', 'Foresight', 'Gust', 'Leaf Blade', 'Mirror Move', 'Mud-Slap', 'Quick Attack', 'Revenge', 'Simple Beam', 'Trump Card'];
        break;

	case 'chatot':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Hyper Voice', 'Chatter', 'Confide', 'Taunt'];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Protect', 'Rain Dance', 'Roost', 'Frustration', 'Return', 'Double Team', 'Aerial Ace', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Echoed Voice', 'Steel Wing', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Confide', 'Fly', 'Windstorm', 'Banshee Howl', 'Dragon Roar', 'Turbulence', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Air Cutter', 'Amaze', 'Captivate', 'Confound', 'Dazzle', 'Defog', 'Demolish', 'Eagle Eye', 'Endure', 'Enthrall', 'Heat Wave', 'Hyper Voice', 'Natural Gift', 'Ominous Wind', 'Pluck', 'Role Play', 'Secret Power', 'Sky Attack', 'Snore', 'Swift', 'Tailwind', 'Twister', 'Uproar', 'Work Up'];
        eggMoves = ['Agility', 'Boomburst', 'Encore', 'Nasty Plot', 'Night Shade', 'Supersonic'];
        break;

	case 'lyrissimo':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Hyper Voice', 'Chatter', 'Confide', 'Taunt', 'Memento'];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Hyper Beam', 'Protect', 'Rain Dance', 'Roost', 'Frustration', 'Return', 'Shadow Ball', 'Double Team', 'Aerial Ace', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Echoed Voice', 'Steel Wing', 'Giga Impact', 'Psych Up', 'Dream Eater', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Confide', 'Fly', 'Windstorm', 'Banshee Howl', 'Dragon Roar', 'Psych Out', 'High-Speed Dive', 'Turbulence', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Air Cutter', 'Amaze', 'Captivate', 'Confound', 'Dazzle', 'Defog', 'Demolish', 'Eagle Eye', 'Endure', 'Enthrall', 'Heal Bell', 'Heat Wave', 'Hyper Voice', 'Natural Gift', 'Ominous Wind', 'Pluck', 'Role Play', 'Secret Power', 'Sky Attack', 'Snore', 'Swift', 'Tailwind', 'Twister', 'Uproar', 'Work Up'];
        eggMoves = ['Agility', 'Boomburst', 'Encore', 'Nasty Plot', 'Night Shade', 'Supersonic'];
        break;

	case 'swablu':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Ice Beam', 'Protect', 'Rain Dance', 'Roost', 'Safeguard', 'Frustration', 'Solar Beam', 'Return', 'Double Team', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Echoed Voice', 'Steel Wing', 'Psych Up', 'Dream Eater', 'Swagger', 'Sleep Talk', 'Substitute', 'Dazzling Gleam', 'Confide', 'Fly', 'Lunar Beam', 'Windstorm', 'Shimmer Shot', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Air Cutter', 'Amaze', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Dragon Pulse', 'Eagle Eye', 'Endure', 'Enthrall', 'Heal Bell', 'Heat Wave', 'Hyper Voice', 'Natural Gift', 'Ominous Wind', 'Outrage', 'Pluck', 'Secret Power', 'Snore', 'Swift', 'Tailwind', 'Twister', 'Uproar'];
        eggMoves = ['Agility', 'Dragon Rush', 'Feather Dance', 'Haze', 'Power Swap', 'Pursuit', 'Rage'];
        break;

	case 'altaria':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Sky Attack', 'Pluck'];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Dragon Claw', 'Toxic', 'Hidden Power', 'Sunny Day', 'Ice Beam', 'Hyper Beam', 'Protect', 'Rain Dance', 'Roost', 'Safeguard', 'Frustration', 'Solar Beam', 'Earthquake', 'Return', 'Double Team', 'Flamethrower', 'Fire Blast', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Echoed Voice', 'Steel Wing', 'Incinerate', 'Giga Impact', 'Psych Up', 'Bulldoze', 'Dream Eater', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Dazzling Gleam', 'Confide', 'Fly', 'Lunar Beam', 'Windstorm', 'Aftershock', 'Dragon Roar', 'Phoenix Fire', 'Golden Flame', 'High-Speed Dive', 'Radiant Claw', 'Turbulence', 'Shimmer Shot', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Air Cutter', 'Amaze', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Draco Meteor', 'Dragon Pulse', 'Eagle Eye', 'Endure', 'Enthrall', 'Heal Bell', 'Heat Wave', 'Hyper Voice', 'Invigorate', 'Iron Tail', 'Natural Gift', 'Ominous Wind', 'Outrage', 'Pluck', 'Revel Dance', 'Secret Power', 'Sky Attack', 'Snore', 'Swift', 'Tailwind', 'Twister', 'Uproar', 'Wonder Room'];
        eggMoves = ['Agility', 'Dragon Rush', 'Feather Dance', 'Haze', 'Power Swap', 'Pursuit', 'Rage'];
        break;

	case 'chantirrus':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Sky Attack', 'Heal Pulse'];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Psyshock', 'Calm Mind', 'Toxic', 'Hidden Power', 'Sunny Day', 'Ice Beam', 'Hyper Beam', 'Light Screen', 'Protect', 'Rain Dance', 'Roost', 'Safeguard', 'Frustration', 'Solar Beam', 'Return', 'Psychic', 'Double Team', 'Reflect', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Echoed Voice', 'Steel Wing', 'Energy Ball', 'Incinerate', 'Giga Impact', 'Flash', 'Psych Up', 'Dream Eater', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Rock Smash', 'Dazzling Gleam', 'Confide', 'Fly', 'Lunar Beam', 'Windstorm', 'Daring Dash', 'Phoenix Fire', 'High-Speed Dive', 'Rainbow Wall', 'Radiant Claw', 'Turbulence', 'Shimmer Shot', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Air Cutter', 'Amaze', 'Captivate', 'Confound', 'Dazzle', 'Defog', 'Demolish', 'Dragon Pulse', 'Dust Guard', 'Eagle Eye', 'Endure', 'Enthrall', 'Heal Bell', 'Heat Wave', 'Hyper Voice', 'Iron Tail', 'Magic Room', 'Natural Gift', 'Ominous Wind', 'Outrage', 'Pluck', 'Revel Dance', 'Secret Power', 'Sky Attack', 'Snore', 'Swift', 'Tailwind', 'Twister', 'Uproar'];
        eggMoves = ['Agility', 'Dragon Rush', 'Feather Dance', 'Haze', 'Power Swap', 'Pursuit', 'Rage'];
        break;

	case 'vulkhet':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Protect', 'Roost', 'Frustration', 'Return', 'Double Team', 'Flamethrower', 'Sludge Bomb', 'Fire Blast', 'Aerial Ace', 'Torment', 'Facade', 'Flame Charge', 'Rest', 'Attract', 'Thief', 'Round', 'Overheat', 'Steel Wing', 'Incinerate', 'Will-O-Wisp', 'Embargo', 'Payback', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Confide', 'Fly', 'Windstorm', 'Phoenix Fire', 'Psych Out', 'Burning Strike', 'Burn Away', 'Turbulence', 'Jewel Blast', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Air Cutter', 'Amaze', 'Captivate', 'Confound', 'Dazzle', 'Defog', 'Demolish', 'Eagle Eye', 'Endeavor', 'Endure', 'Enthrall', 'Foul Play', 'Gastro Acid', 'Heat Wave', 'Natural Gift', 'Ominous Wind', 'Pluck', 'Secret Power', 'Sky Attack', 'Snatch', 'Snore', 'Spite', 'Sucker Punch', 'Swift', 'Tailwind', 'Trip Up', 'Twister'];
        eggMoves = ['Air Slash', 'Assurance', 'Belch', 'Brave Bird', 'Flare Blitz', 'Nasty Plot', 'Perish Song', 'Pursuit', 'Screech', 'Wing Attack'];
        break;

	case 'nekhetura':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Curse', 'Belch', 'Burn Up'];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Hyper Beam', 'Protect', 'Roost', 'Frustration', 'Solar Beam', 'Return', 'Double Team', 'Flamethrower', 'Sludge Bomb', 'Fire Blast', 'Aerial Ace', 'Torment', 'Facade', 'Flame Charge', 'Rest', 'Attract', 'Thief', 'Round', 'Overheat', 'Steel Wing', 'Incinerate', 'Will-O-Wisp', 'Embargo', 'Payback', 'Giga Impact', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Dark Pulse', 'Confide', 'Fly', 'Windstorm', 'Phoenix Fire', 'Psych Out', 'High-Speed Dive', 'Burning Strike', 'Burn Away', 'Turbulence', 'Jewel Blast', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Air Cutter', 'Amaze', 'Captivate', 'Confound', 'Dazzle', 'Defog', 'Demolish', 'Eagle Eye', 'Endeavor', 'Endure', 'Enthrall', 'Foul Play', 'Gastro Acid', 'Heat Wave', 'Natural Gift', 'Ominous Wind', 'Pluck', 'Secret Power', 'Sky Attack', 'Snatch', 'Snore', 'Spite', 'Sucker Punch', 'Swift', 'Tailwind', 'Trip Up', 'Twister'];
        eggMoves = ['Air Slash', 'Assurance', 'Belch', 'Brave Bird', 'Flare Blitz', 'Nasty Plot', 'Perish Song', 'Pursuit', 'Screech', 'Wing Attack'];
        break;

	case 'natu':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Psyshock', 'Calm Mind', 'Toxic', 'Hidden Power', 'Sunny Day', 'Light Screen', 'Protect', 'Rain Dance', 'Roost', 'Frustration', 'Return', 'Psychic', 'Shadow Ball', 'Double Team', 'Reflect', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Steel Wing', 'Flash', 'Thunder Wave', 'Psych Up', 'Dream Eater', 'Grass Knot', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Trick Room', 'Dazzling Gleam', 'Confide', 'Shadow Dart', 'Mind Shatter', 'Psych Out', 'Hyper-Focus', 'Shimmer Shot', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Air Cutter', 'Amaze', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Eagle Eye', 'Endure', 'Enthrall', 'Giga Drain', 'Heat Wave', 'Link Pulse', 'Magic Coat', 'Magic Room', 'Natural Gift', 'Ominous Wind', 'Pain Split', 'Pluck', 'Secret Power', 'Signal Beam', 'Silver Wind', 'Skill Swap', 'Snore', 'Sucker Punch', 'Swift', 'Tailwind', 'Telekinesis', 'Trick', 'Twister', 'Zen Headbutt'];
        eggMoves = ['Ally Switch', 'Drill Peck', 'Feint Attack', 'Feather Dance', 'Haze', 'Quick Attack', 'Refresh', 'Simple Beam', 'Synchronoise'];
        break;

	case 'xatu':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Tailwind'];
        evoMoves = [];
        tmMoves = ['Psyshock', 'Calm Mind', 'Toxic', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Light Screen', 'Protect', 'Rain Dance', 'Roost', 'Frustration', 'Return', 'Psychic', 'Shadow Ball', 'Double Team', 'Reflect', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Steel Wing', 'Giga Impact', 'Flash', 'Thunder Wave', 'Psych Up', 'Dream Eater', 'Grass Knot', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Trick Room', 'Dazzling Gleam', 'Confide', 'Fly', 'Windstorm', 'Daring Dash', 'Shadow Dart', 'Mind Shatter', 'Psych Out', 'High-Speed Dive', 'Hyper-Focus', 'Turbulence', 'Shimmer Shot', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Air Cutter', 'Amaze', 'Captivate', 'Confound', 'Dazzle', 'Defog', 'Demolish', 'Eagle Eye', 'Endure', 'Enthrall', 'Foul Play', 'Giga Drain', 'Heat Wave', 'Laser Focus', 'Link Pulse', 'Magic Coat', 'Magic Room', 'Natural Gift', 'Ominous Wind', 'Pain Split', 'Pluck', 'Secret Power', 'Signal Beam', 'Silver Wind', 'Skill Swap', 'Sky Attack', 'Snore', 'Sucker Punch', 'Swift', 'Tailwind', 'Telekinesis', 'Trick', 'Twister', 'Zen Headbutt'];
        eggMoves = ['Ally Switch', 'Drill Peck', 'Feint Attack', 'Feather Dance', 'Haze', 'Quick Attack', 'Refresh', 'Simple Beam', 'Synchronoise'];
        break;

	case 'nahualatu':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Dragon Pulse', 'Perish Song', 'Tailwind', 'Hidden Power'];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Dragon Claw', 'Psyshock', 'Calm Mind', 'Toxic', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Light Screen', 'Protect', 'Rain Dance', 'Roost', 'Frustration', 'Return', 'Psychic', 'Shadow Ball', 'Double Team', 'Reflect', 'Flamethrower', 'Fire Blast', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Steel Wing', 'Focus Blast', 'Energy Ball', 'Fling', 'Charge Beam', 'Sky Drop', 'Incinerate', 'Giga Impact', 'Flash', 'Thunder Wave', 'Psych Up', 'Dream Eater', 'Grass Knot', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Trick Room', 'Dazzling Gleam', 'Confide', 'Fly', 'Windstorm', 'Daring Dash', 'Shadow Dart', 'Phoenix Fire', 'Mind Shatter', 'Golden Flame', 'Psych Out', 'High-Speed Dive', 'Hyper-Focus', 'Rainbow Wall', 'Radiant Claw', 'Turbulence', 'Shimmer Shot', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Air Cutter', 'Amaze', 'Ancient Power', 'Captivate', 'Confound', 'Dazzle', 'Defog', 'Demolish', 'Draco Meteor', 'Dragon Pulse', 'Eagle Eye', 'Endure', 'Enthrall', 'Foul Play', 'Giga Drain', 'Heat Wave', 'Invigorate', 'Laser Focus', 'Link Pulse', 'Magic Coat', 'Magic Room', 'Natural Gift', 'Ominous Wind', 'Outrage', 'Pain Split', 'Pluck', 'Secret Power', 'Signal Beam', 'Silver Wind', 'Skill Swap', 'Sky Attack', 'Snore', 'Sucker Punch', 'Swift', 'Tailwind', 'Telekinesis', 'Trick', 'Twister', 'Zen Headbutt'];
        eggMoves = ['Ally Switch', 'Drill Peck', 'Feint Attack', 'Feather Dance', 'Haze', 'Quick Attack', 'Refresh', 'Simple Beam', 'Synchronoise'];
        break;

	case 'transmite':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Taunt', 'Light Screen', 'Protect', 'Rain Dance', 'Roost', 'Frustration', 'Thunderbolt', 'Thunder', 'Return', 'Double Team', 'Aerial Ace', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Steel Wing', 'Charge Beam', 'Acrobatics', 'Flash', 'Volt Switch', 'Thunder Wave', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Wild Charge', 'Confide', 'Fly', 'Windstorm', 'Daring Dash', 'Static Strike', 'Pulse Storm', 'Turbulence', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Air Cutter', 'Amaze', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Defog', 'Demolish', 'Electroweb', 'Endeavor', 'Endure', 'Enthrall', 'Heat Wave', 'Helping Hand', 'Jump-Start', 'Natural Gift', 'Ominous Wind', 'Pluck', 'Secret Power', 'Shock Wave', 'Signal Beam', 'Sky Attack', 'Snatch', 'Snore', 'Sucker Punch', 'Super Fang', 'Swift', 'Tailwind', 'Twister', 'Uproar'];
        eggMoves = ['Air Slash', 'Astonish', 'Bite', 'Ear Splitter', 'Extrasensory', 'Feint', 'Psywave', 'Pursuit', 'Screech', 'Spark'];
        break;

	case 'tianglis':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Roar', 'Toxic', 'Hidden Power', 'Taunt', 'Protect', 'Rain Dance', 'Roost', 'Frustration', 'Return', 'Shadow Ball', 'Double Team', 'Aerial Ace', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Steel Wing', 'Acrobatics', 'Embargo', 'Shadow Claw', 'Payback', 'Retaliate', 'Psych Up', 'Dream Eater', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Snarl', 'Dark Pulse', 'Confide', 'Fly', 'Windstorm', 'Daring Dash', 'Banshee Howl', 'Shadow Dart', 'Psych Out', 'Turbulence', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Air Cutter', 'Amaze', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Defog', 'Demolish', 'Endeavor', 'Endure', 'Enthrall', 'Foul Play', 'Headbutt', 'Heat Wave', 'Helping Hand', 'Hyper Voice', 'Iron Tail', 'Natural Gift', 'Ominous Wind', 'Secret Power', 'Sky Attack', 'Snatch', 'Snore', 'Spite', 'Sucker Punch', 'Tailwind', 'Trick', 'Trip Up', 'Twister', 'Uproar', 'Work Up'];
        eggMoves = ['Assurance', 'Astonish', 'Beat Up', 'Crunch', 'Feint', 'Future Sight', 'Pursuit', 'Screech', 'Supersonic'];
        break;

	case 'humbuzz':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Light Screen', 'Protect', 'Rain Dance', 'Roost', 'Safeguard', 'Frustration', 'Thunderbolt', 'Thunder', 'Return', 'Double Team', 'Reflect', 'Aerial Ace', 'Torment', 'Facade', 'Flame Charge', 'Rest', 'Attract', 'Round', 'Overheat', 'Steel Wing', 'False Swipe', 'Charge Beam', 'Flash', 'Volt Switch', 'Thunder Wave', 'Poison Jab', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Flash Cannon', 'Wild Charge', 'Dazzling Gleam', 'Confide', 'Fly', 'Windstorm', 'Daring Dash', 'Static Strike', 'Pulse Storm', 'Turbulence', 'Shimmer Shot', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Air Cutter', 'Amaze', 'Captivate', 'Confound', 'Dazzle', 'Defog', 'Demolish', 'Eagle Eye', 'Endeavor', 'Endure', 'Enthrall', 'Fury Cutter', 'Heat Wave', 'Jump-Start', 'Magnet Rise', 'Natural Gift', 'Ominous Wind', 'Pluck', 'Secret Power', 'Shock Wave', 'Signal Beam', 'Snore', 'Swift', 'Tailwind', 'Twister'];
        eggMoves = ['Acupressure', 'Air Slash', 'Drill Peck', 'Fury Attack', 'Parabolic Charge', 'Razor Wind', 'Refresh'];
        break;

	case 'klaitning':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Ion Deluge'];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Hyper Beam', 'Light Screen', 'Protect', 'Rain Dance', 'Roost', 'Safeguard', 'Frustration', 'Thunderbolt', 'Thunder', 'Return', 'Double Team', 'Reflect', 'Aerial Ace', 'Torment', 'Facade', 'Flame Charge', 'Rest', 'Attract', 'Round', 'Overheat', 'Steel Wing', 'False Swipe', 'Charge Beam', 'Giga Impact', 'Flash', 'Volt Switch', 'Thunder Wave', 'Poison Jab', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Flash Cannon', 'Wild Charge', 'Dazzling Gleam', 'Confide', 'Fly', 'Windstorm', 'Daring Dash', 'Static Strike', 'Pulse Storm', 'High-Speed Dive', 'Turbulence', 'Shimmer Shot', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Air Cutter', 'Amaze', 'Captivate', 'Confound', 'Dazzle', 'Defog', 'Demolish', 'Eagle Eye', 'Endeavor', 'Endure', 'Enthrall', 'Fury Cutter', 'Heat Wave', 'Jump-Start', 'Laser Focus', 'Magnet Rise', 'Natural Gift', 'Ominous Wind', 'Pluck', 'Secret Power', 'Shock Wave', 'Signal Beam', 'Sky Attack', 'Snore', 'Swift', 'Tailwind', 'Twister'];
        eggMoves = ['Acupressure', 'Air Slash', 'Drill Peck', 'Fury Attack', 'Parabolic Charge', 'Razor Wind', 'Refresh'];
        break;

	case 'nuwill':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Light Screen', 'Protect', 'Rain Dance', 'Frustration', 'Thunderbolt', 'Thunder', 'Return', 'Double Team', 'Rock Tomb', 'Facade', 'Flame Charge', 'Rest', 'Attract', 'Round', 'Charge Beam', 'Payback', 'Flash', 'Volt Switch', 'Thunder Wave', 'Bulldoze', 'Rock Slide', 'Swagger', 'Sleep Talk', 'Substitute', 'Wild Charge', 'Rock Smash', 'Confide', 'Strength', 'Bravado', 'Daring Dash', 'Static Strike', 'Pulse Storm', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Bounce', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Headbutt', 'Iron Head', 'Iron Tail', 'Jump-Start', 'Magnet Rise', 'Natural Gift', 'Secret Power', 'Shock Wave', 'Signal Beam', 'Smart Strike', 'Snore', 'Superpower', 'Swift', 'Work Up', 'Zen Headbutt'];
        eggMoves = ['Body Slam', 'Horn Attack', 'Pursuit', 'Stomp', 'Tail Whip', 'Take Down', 'Thrash', 'Thunder Shock'];
        break;

	case 'nulohm':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Thunderclap', 'Mow Down', 'Head Smash'];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Hyper Beam', 'Light Screen', 'Protect', 'Rain Dance', 'Frustration', 'Thunderbolt', 'Thunder', 'Earthquake', 'Return', 'Double Team', 'Rock Tomb', 'Facade', 'Flame Charge', 'Rest', 'Attract', 'Round', 'Charge Beam', 'Payback', 'Giga Impact', 'Flash', 'Stone Edge', 'Volt Switch', 'Thunder Wave', 'Bulldoze', 'Rock Slide', 'Swagger', 'Sleep Talk', 'Substitute', 'Wild Charge', 'Rock Smash', 'Confide', 'Strength', 'Bravado', 'Daring Dash', 'Aftershock', 'Static Strike', 'Pulse Storm', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Bounce', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Headbutt', 'Iron Head', 'Iron Tail', 'Jump-Start', 'Magnet Rise', 'Natural Gift', 'Secret Power', 'Shock Wave', 'Signal Beam', 'Smart Strike', 'Snore', 'Stomping Tantrum', 'Superpower', 'Swift', 'Work Up', 'Zen Headbutt'];
        eggMoves = ['Body Slam', 'Horn Attack', 'Pursuit', 'Stomp', 'Tail Whip', 'Take Down', 'Thrash', 'Thunder Shock'];
        break;

	case 'donarith':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Toxic', 'Hidden Power', 'Hyper Beam', 'Light Screen', 'Protect', 'Rain Dance', 'Frustration', 'Thunderbolt', 'Thunder', 'Return', 'Brick Break', 'Double Team', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Focus Blast', 'False Swipe', 'Fling', 'Charge Beam', 'Acrobatics', 'Shadow Claw', 'Giga Impact', 'Flash', 'Volt Switch', 'Thunder Wave', 'Swords Dance', 'Struggle Bug', 'X-Scissor', 'Infestation', 'Poison Jab', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Wild Charge', 'Rock Smash', 'Power-Up Punch', 'Confide', 'Cut', 'Bravado', 'Daring Dash', 'Static Strike', 'Pulse Storm', 'Lariat', 'Turbulence', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Air Cutter', 'Amaze', 'Brutal Swing', 'Bug Bite', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Dust Guard', 'Eagle Eye', 'Electroweb', 'Endeavor', 'Endure', 'Enthrall', 'Focus Punch', 'Fury Cutter', 'Giga Drain', 'Headbutt', 'Ice Punch', 'Jump-Start', 'Leech Life', 'Low Kick', 'Magnet Rise', 'Natural Gift', 'Secret Power', 'Shock Wave', 'Signal Beam', 'Silver Wind', 'Snore', 'Swift', 'Thunder Punch'];
        eggMoves = ['Baton Pass', 'Electro Ball', 'Fury Swipes', 'Growth', 'Quick Attack', 'Slash'];
        break;

	case 'mareep':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Light Screen', 'Protect', 'Rain Dance', 'Safeguard', 'Frustration', 'Thunderbolt', 'Thunder', 'Return', 'Double Team', 'Facade', 'Rest', 'Attract', 'Round', 'Echoed Voice', 'Charge Beam', 'Flash', 'Volt Switch', 'Thunder Wave', 'Swagger', 'Sleep Talk', 'Substitute', 'Wild Charge', 'Confide', 'Static Strike', 'Pulse Storm', 'Shimmer Shot', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['After You', 'Amaze', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Electroweb', 'Endure', 'Enthrall', 'Headbutt', 'Heal Bell', 'Iron Tail', 'Jump-Start', 'Magnet Rise', 'Natural Gift', 'Secret Power', 'Shock Wave', 'Signal Beam', 'Snore', 'Swift'];
        eggMoves = ['Agility', 'Body Slam', 'Eerie Impulse', 'Electric Terrain', 'Flatter', 'Odor Sleuth', 'Sand Attack', 'Screech'];
        break;

	case 'flaaffy':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Light Screen', 'Protect', 'Rain Dance', 'Safeguard', 'Frustration', 'Thunderbolt', 'Thunder', 'Return', 'Brick Break', 'Double Team', 'Facade', 'Rest', 'Attract', 'Round', 'Echoed Voice', 'Fling', 'Charge Beam', 'Flash', 'Volt Switch', 'Thunder Wave', 'Swagger', 'Sleep Talk', 'Substitute', 'Wild Charge', 'Rock Smash', 'Power-Up Punch', 'Confide', 'Strength', 'Static Strike', 'Pulse Storm', 'Shimmer Shot', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['After You', 'Amaze', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Electroweb', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Headbutt', 'Heal Bell', 'Iron Tail', 'Jump-Start', 'Magnet Rise', 'Natural Gift', 'Secret Power', 'Shock Wave', 'Signal Beam', 'Snore', 'Swift', 'Thunder Punch'];
        eggMoves = ['Agility', 'Body Slam', 'Eerie Impulse', 'Electric Terrain', 'Flatter', 'Odor Sleuth', 'Sand Attack', 'Screech'];
        break;

	case 'ampharos':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Zap Cannon', 'Ion Deluge', 'Dragon Pulse', 'Fire Punch'];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Hyper Beam', 'Light Screen', 'Protect', 'Rain Dance', 'Safeguard', 'Frustration', 'Thunderbolt', 'Thunder', 'Return', 'Brick Break', 'Double Team', 'Facade', 'Rest', 'Attract', 'Round', 'Echoed Voice', 'Focus Blast', 'Fling', 'Charge Beam', 'Giga Impact', 'Flash', 'Volt Switch', 'Thunder Wave', 'Bulldoze', 'Swagger', 'Sleep Talk', 'Substitute', 'Wild Charge', 'Rock Smash', 'Power-Up Punch', 'Confide', 'Strength', 'Bravado', 'Static Strike', 'Pulse Storm', 'Shimmer Shot', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['After You', 'Amaze', 'Brutal Swing', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Dragon Pulse', 'Electroweb', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Headbutt', 'Heal Bell', 'Iron Tail', 'Jump-Start', 'Laser Focus', 'Magnet Rise', 'Natural Gift', 'Outrage', 'Rock Climb', 'Secret Power', 'Shock Wave', 'Signal Beam', 'Snore', 'Swift', 'Thunder Punch'];
        eggMoves = ['Agility', 'Body Slam', 'Eerie Impulse', 'Electric Terrain', 'Flatter', 'Odor Sleuth', 'Sand Attack', 'Screech'];
        break;

	case 'ramfere':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Static Strike', 'Ion Deluge', 'Foul Play', 'Power Trip'];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Taunt', 'Hyper Beam', 'Light Screen', 'Protect', 'Rain Dance', 'Safeguard', 'Frustration', 'Thunderbolt', 'Thunder', 'Return', 'Brick Break', 'Double Team', 'Torment', 'Facade', 'Flame Charge', 'Rest', 'Attract', 'Round', 'Echoed Voice', 'Overheat', 'Focus Blast', 'Fling', 'Charge Beam', 'Payback', 'Retaliate', 'Giga Impact', 'Flash', 'Volt Switch', 'Thunder Wave', 'Bulldoze', 'Rock Slide', 'Swagger', 'Sleep Talk', 'Substitute', 'Wild Charge', 'Rock Smash', 'Snarl', 'Dark Pulse', 'Power-Up Punch', 'Confide', 'Strength', 'Bravado', 'Daring Dash', 'Static Strike', 'Pulse Storm', 'Shimmer Shot', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['After You', 'Amaze', 'Brutal Swing', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Dragon Pulse', 'Electroweb', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Foul Play', 'Headbutt', 'Heal Bell', 'Iron Tail', 'Jump-Start', 'Laser Focus', 'Magnet Rise', 'Natural Gift', 'Outrage', 'Rock Climb', 'Secret Power', 'Shock Wave', 'Signal Beam', 'Snore', 'Stomping Tantrum', 'Superpower', 'Swift', 'Thunder Punch', 'Trip Up', 'Zen Headbutt'];
        eggMoves = ['Agility', 'Body Slam', 'Eerie Impulse', 'Electric Terrain', 'Flatter', 'Odor Sleuth', 'Sand Attack', 'Screech'];
        break;

	case 'lamlie':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Roar', 'Toxic', 'Hidden Power', 'Sunny Day', 'Protect', 'Frustration', 'Earthquake', 'Return', 'Dig', 'Double Team', 'Sandstorm', 'Rock Tomb', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Payback', 'Bulldoze', 'Rock Slide', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Snarl', 'Confide', 'Strength', 'Bravado', 'Daring Dash', 'Aftershock', 'Static Strike', 'Sandblast', 'Mudslide', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Earth Power', 'Endure', 'Enthrall', 'Headbutt', 'Helping Hand', 'Iron Tail', 'Natural Gift', 'Rock Climb', 'Secret Power', 'Snore', 'Stealth Rock', 'Sucker Punch', 'Trip Up', 'Work Up'];
        eggMoves = ['Beat Up', 'Counter', 'Fire Fang', 'Follow Me', 'Magnitude', 'Pressure Wave', 'Pursuit', 'Quicksand', 'Sand Tomb', 'Thunder Fang'];
        break;

	case 'lobovo':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Roar', 'Toxic', 'Hidden Power', 'Sunny Day', 'Protect', 'Frustration', 'Earthquake', 'Return', 'Dig', 'Double Team', 'Sandstorm', 'Rock Tomb', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Payback', 'Bulldoze', 'Rock Slide', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Snarl', 'Confide', 'Strength', 'Bravado', 'Daring Dash', 'Aftershock', 'Static Strike', 'Sandblast', 'Mudslide', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Earth Power', 'Endure', 'Enthrall', 'Headbutt', 'Helping Hand', 'Iron Tail', 'Natural Gift', 'Rock Climb', 'Secret Power', 'Snore', 'Stealth Rock', 'Sucker Punch', 'Trip Up', 'Work Up'];
        eggMoves = ['Beat Up', 'Counter', 'Fire Fang', 'Follow Me', 'Magnitude', 'Pressure Wave', 'Pursuit', 'Quicksand', 'Sand Tomb', 'Thunder Fang'];
        break;

	case 'luvaris':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Lariat', 'Pressure Wave'];
        evoMoves = ['Close Combat'];
        tmMoves = ['Roar', 'Toxic', 'Bulk Up', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Protect', 'Frustration', 'Earthquake', 'Return', 'Dig', 'Brick Break', 'Double Team', 'Sandstorm', 'Rock Tomb', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Thief', 'Low Sweep', 'Round', 'Focus Blast', 'Fling', 'Payback', 'Retaliate', 'Giga Impact', 'Stone Edge', 'Swords Dance', 'Bulldoze', 'Rock Slide', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Snarl', 'Power-Up Punch', 'Confide', 'Strength', 'Spirit Punch', 'Bravado', 'Daring Dash', 'Aftershock', 'Static Strike', 'Sandblast', 'Lariat', 'Mudslide', 'Brain Press', 'Rug Pull', 'Hero Rally', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Brutal Swing', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Dual Chop', 'Earth Power', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Headbutt', 'Helping Hand', 'Iron Head', 'Iron Tail', 'Laser Focus', 'Low Kick', 'Natural Gift', 'Rock Climb', 'Role Play', 'Secret Power', 'Snore', 'Stealth Rock', 'Stomping Tantrum', 'Sucker Punch', 'Thunder Punch', 'Trip Up', 'Vacuum Wave', 'Work Up', 'Zen Headbutt'];
        eggMoves = ['Beat Up', 'Counter', 'Fire Fang', 'Follow Me', 'Magnitude', 'Pressure Wave', 'Pursuit', 'Quicksand', 'Sand Tomb', 'Thunder Fang'];
        break;

	case 'rakateis':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hail', 'Hidden Power', 'Ice Beam', 'Blizzard', 'Hyper Beam', 'Protect', 'Rain Dance', 'Roost', 'Frustration', 'Return', 'Double Team', 'Aerial Ace', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Steel Wing', 'False Swipe', 'Giga Impact', 'Frost Breath', 'Poison Jab', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Rock Smash', 'Confide', 'Cut', 'Fly', 'Windstorm', 'Daring Dash', 'Winter Lance', 'Crystallize', 'High-Speed Dive', 'Glacier Crush', 'Turbulence', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Air Cutter', 'Amaze', 'Avalanche', 'Captivate', 'Confound', 'Dazzle', 'Defog', 'Demolish', 'Drill Run', 'Eagle Eye', 'Endeavor', 'Endure', 'Enthrall', 'Fury Cutter', 'Icy Wind', 'Laser Focus', 'Natural Gift', 'Ominous Wind', 'Pluck', 'Rock Climb', 'Secret Power', 'Sky Attack', 'Snore', 'Tailwind', 'Twister', 'Uproar'];
        eggMoves = ['Beak Smash', 'Brave Bird', 'Frozen Blade', 'Fury Attack', 'Haze', 'Mach Turn', 'Night Slash', 'Slash', 'Whirlwind'];
        break;

	case 'cubly':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hail', 'Hidden Power', 'Ice Beam', 'Blizzard', 'Protect', 'Rain Dance', 'Frustration', 'Return', 'Dig', 'Double Team', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Psych Up', 'Frost Breath', 'Swagger', 'Sleep Talk', 'Substitute', 'Confide', 'Winter Lance', 'Cold Shower', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['After You', 'Amaze', 'Aurora Veil', 'Avalanche', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Headbutt', 'Heal Bell', 'Helping Hand', 'Ice Water', 'Icy Wind', 'Iron Tail', 'Natural Gift', 'Secret Power', 'Snore', 'Water Pulse'];
        eggMoves = ['Baby-Doll Eyes', 'Disarming Voice', 'Feint Attack', 'Follow Me', 'Freeze-Dry', 'Ice Fang', 'Ice Shard', 'Mist', 'Refresh', 'Switcheroo', 'Wish'];
        break;

	case 'arctangel':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = ['Aurora Beam'];
        tmMoves = ['Toxic', 'Hail', 'Hidden Power', 'Ice Beam', 'Blizzard', 'Hyper Beam', 'Light Screen', 'Protect', 'Rain Dance', 'Safeguard', 'Frustration', 'Return', 'Dig', 'Shadow Ball', 'Double Team', 'Reflect', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Giga Impact', 'Psych Up', 'Frost Breath', 'Grass Knot', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Snarl', 'Dazzling Gleam', 'Confide', 'Bravado', 'Daring Dash', 'Winter Lance', 'Cold Shower', 'Shimmer Shot', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['After You', 'Amaze', 'Aurora Veil', 'Avalanche', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Headbutt', 'Heal Bell', 'Helping Hand', 'Ice Water', 'Icy Wind', 'Iron Tail', 'Natural Gift', 'Secret Power', 'Snore', 'Water Pulse'];
        eggMoves = ['Baby-Doll Eyes', 'Disarming Voice', 'Feint Attack', 'Follow Me', 'Freeze-Dry', 'Ice Fang', 'Ice Shard', 'Mist', 'Refresh', 'Switcheroo', 'Wish'];
        break;

	case 'snorunt':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hail', 'Hidden Power', 'Ice Beam', 'Blizzard', 'Light Screen', 'Protect', 'Rain Dance', 'Safeguard', 'Frustration', 'Return', 'Shadow Ball', 'Double Team', 'Sludge Bomb', 'Facade', 'Rest', 'Attract', 'Round', 'Flash', 'Frost Breath', 'Swagger', 'Sleep Talk', 'Substitute', 'Confide', 'Winter Lance', 'Crystallize', 'Cold Shower', 'Snow Throw', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Avalanche', 'Block', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Headbutt', 'Ice Water', 'Icy Wind', 'Natural Gift', 'Rollout', 'Secret Power', 'Snore', 'Spite', 'Water Pulse'];
        eggMoves = ['Bide', 'Disable', 'Fake Tears', 'Hex', 'Spikes', 'Switcheroo', 'Weather Ball'];
        break;

	case 'glalie':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Sheer Cold'];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hail', 'Hidden Power', 'Taunt', 'Ice Beam', 'Blizzard', 'Hyper Beam', 'Light Screen', 'Protect', 'Rain Dance', 'Safeguard', 'Frustration', 'Earthquake', 'Return', 'Shadow Ball', 'Double Team', 'Sludge Bomb', 'Torment', 'Facade', 'Rest', 'Attract', 'Round', 'Explosion', 'Payback', 'Giga Impact', 'Flash', 'Gyro Ball', 'Bulldoze', 'Frost Breath', 'Swagger', 'Sleep Talk', 'Substitute', 'Dark Pulse', 'Confide', 'Aftershock', 'Winter Lance', 'Crystallize', 'Glacier Crush', 'Cold Shower', 'Snow Throw', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Avalanche', 'Block', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Headbutt', 'Ice Water', 'Icy Wind', 'Iron Head', 'Laser Focus', 'Natural Gift', 'Rollout', 'Secret Power', 'Signal Beam', 'Snore', 'Spite', 'Super Fang', 'Water Pulse'];
        eggMoves = ['Bide', 'Disable', 'Fake Tears', 'Hex', 'Spikes', 'Switcheroo', 'Weather Ball'];
        break;

	case 'froslass':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Destiny Bond'];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hail', 'Hidden Power', 'Taunt', 'Ice Beam', 'Blizzard', 'Hyper Beam', 'Light Screen', 'Protect', 'Rain Dance', 'Safeguard', 'Frustration', 'Thunderbolt', 'Thunder', 'Return', 'Psychic', 'Shadow Ball', 'Double Team', 'Sludge Bomb', 'Torment', 'Facade', 'Rest', 'Attract', 'Round', 'Fling', 'Embargo', 'Payback', 'Giga Impact', 'Flash', 'Thunder Wave', 'Psych Up', 'Frost Breath', 'Dream Eater', 'Swagger', 'Sleep Talk', 'Substitute', 'Dark Pulse', 'Confide', 'Banshee Howl', 'Whirling Dance', 'Shadow Dart', 'Winter Lance', 'Crystallize', 'Psych Out', 'Haunted Terrain', 'Cold Shower', 'Snow Throw', 'Polter Juggle', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Aurora Veil', 'Avalanche', 'Block', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Headbutt', 'Ice Punch', 'Ice Water', 'Icy Wind', 'Iron Head', 'Laser Focus', 'Natural Gift', 'Ominous Wind', 'Pain Split', 'Rollout', 'Secret Power', 'Signal Beam', 'Snatch', 'Snore', 'Spite', 'Sucker Punch', 'Telekinesis', 'Trick', 'Water Pulse'];
        eggMoves = ['Bide', 'Disable', 'Fake Tears', 'Hex', 'Spikes', 'Switcheroo', 'Weather Ball'];
        break;

	case 'meditite':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Psyshock', 'Calm Mind', 'Toxic', 'Bulk Up', 'Hidden Power', 'Sunny Day', 'Light Screen', 'Protect', 'Rain Dance', 'Frustration', 'Return', 'Psychic', 'Shadow Ball', 'Brick Break', 'Double Team', 'Reflect', 'Rock Tomb', 'Facade', 'Rest', 'Attract', 'Low Sweep', 'Round', 'Focus Blast', 'Fling', 'Retaliate', 'Flash', 'Psych Up', 'Rock Slide', 'Poison Jab', 'Dream Eater', 'Grass Knot', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Power-Up Punch', 'Confide', 'Strength', 'Spirit Punch', 'Shadow Dart', 'Mind Shatter', 'Hyper-Focus', 'Brain Press', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Drain Punch', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Gravity', 'Headbutt', 'Helping Hand', 'Ice Punch', 'Link Pulse', 'Low Kick', 'Magic Coat', 'Natural Gift', 'Pain Split', 'Recycle', 'Role Play', 'Secret Power', 'Signal Beam', 'Snore', 'Swift', 'Telekinesis', 'Thunder Punch', 'Trick', 'Vacuum Wave', 'Work Up', 'Zen Headbutt'];
        eggMoves = ['Baton Pass', 'Bullet Punch', 'Dynamic Punch', 'Fake Out', 'Foresight', 'Guard Swap', 'Power Swap', 'Psycho Cut', 'Quick Guard'];
        break;

	case 'medicham':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Zen Headbutt', 'Fire Punch', 'Thunder Punch', 'Ice Punch'];
        evoMoves = [];
        tmMoves = ['Psyshock', 'Calm Mind', 'Toxic', 'Bulk Up', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Light Screen', 'Protect', 'Rain Dance', 'Frustration', 'Return', 'Psychic', 'Shadow Ball', 'Brick Break', 'Double Team', 'Reflect', 'Rock Tomb', 'Facade', 'Rest', 'Attract', 'Low Sweep', 'Round', 'Focus Blast', 'Energy Ball', 'Fling', 'Retaliate', 'Giga Impact', 'Flash', 'Psych Up', 'Rock Slide', 'Poison Jab', 'Dream Eater', 'Grass Knot', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Power-Up Punch', 'Confide', 'Strength', 'Spirit Punch', 'Shadow Dart', 'Mind Shatter', 'Hyper-Focus', 'Lariat', 'Brain Press', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Drain Punch', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Gravity', 'Headbutt', 'Helping Hand', 'Ice Punch', 'Laser Focus', 'Link Pulse', 'Low Kick', 'Magic Coat', 'Natural Gift', 'Pain Split', 'Recycle', 'Role Play', 'Secret Power', 'Signal Beam', 'Snore', 'Swift', 'Telekinesis', 'Thunder Punch', 'Trick', 'Vacuum Wave', 'Work Up', 'Zen Headbutt'];
        eggMoves = ['Baton Pass', 'Bullet Punch', 'Dynamic Punch', 'Fake Out', 'Foresight', 'Guard Swap', 'Power Swap', 'Psycho Cut', 'Quick Guard'];
        break;

	case 'invicunya':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hail', 'Hidden Power', 'Ice Beam', 'Blizzard', 'Protect', 'Rain Dance', 'Frustration', 'Return', 'Double Team', 'Sludge Bomb', 'Facade', 'Rest', 'Attract', 'Round', 'Frost Breath', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Confide', 'Strength', 'Winter Lance', 'Glacier Crush', 'Cold Shower', 'Noxious Acid', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Avalanche', 'Brine', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Gastro Acid', 'Headbutt', 'Helping Hand', 'Ice Water', 'Icy Wind', 'Natural Gift', 'Rock Climb', 'Secret Power', 'Snore', 'Water Pulse', 'Zen Headbutt'];
        eggMoves = ['Belch', 'Cotton Guard', 'Cotton Spore', 'Germ Spray', 'Ice Shard', 'Jump Kick', 'Reversal', 'Sheer Cold'];
        break;

	case 'heladalca':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Dynamic Punch', 'Circle Throw', 'Vital Throw'];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hail', 'Bulk Up', 'Hidden Power', 'Ice Beam', 'Blizzard', 'Hyper Beam', 'Protect', 'Rain Dance', 'Frustration', 'Earthquake', 'Return', 'Brick Break', 'Double Team', 'Sludge Bomb', 'Rock Tomb', 'Facade', 'Rest', 'Attract', 'Low Sweep', 'Round', 'Focus Blast', 'Fling', 'Payback', 'Retaliate', 'Giga Impact', 'Stone Edge', 'Bulldoze', 'Frost Breath', 'Rock Slide', 'Poison Jab', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Power-Up Punch', 'Confide', 'Strength', 'Spirit Punch', 'Aftershock', 'Piledriver', 'Winter Lance', 'Lariat', 'Glacier Crush', 'Cold Shower', 'Noxious Acid', 'Snow Throw', 'Brain Press', 'Hero Rally', 'Restrain', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Avalanche', 'Body Press', 'Brine', 'Brutal Swing', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Dual Chop', 'Endure', 'Enthrall', 'Focus Punch', 'Gastro Acid', 'Headbutt', 'Helping Hand', 'Ice Punch', 'Ice Water', 'Icy Wind', 'Low Kick', 'Natural Gift', 'Rock Climb', 'Secret Power', 'Snore', 'Superpower', 'Throat Chop', 'Thunder Punch', 'Vacuum Wave', 'Water Pulse', 'Work Up', 'Zen Headbutt'];
        eggMoves = ['Belch', 'Cotton Guard', 'Cotton Spore', 'Germ Spray', 'Ice Shard', 'Jump Kick', 'Reversal', 'Sheer Cold'];
        break;

	case 'cryogonal':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hail', 'Hidden Power', 'Ice Beam', 'Blizzard', 'Hyper Beam', 'Light Screen', 'Protect', 'Rain Dance', 'Frustration', 'Solar Beam', 'Return', 'Double Team', 'Reflect', 'Facade', 'Rest', 'Attract', 'Round', 'Acrobatics', 'Explosion', 'Frost Breath', 'Poison Jab', 'Swagger', 'Sleep Talk', 'Substitute', 'Flash Cannon', 'Confide', 'Lunar Beam', 'Winter Lance', 'Crystallize', 'Glacier Crush', 'Rainbow Wall', 'Cold Shower', 'Shimmer Shot', 'Restrain', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Aurora Veil', 'Avalanche', 'Bind', 'Brine', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Ice Water', 'Icy Wind', 'Iron Defense', 'Knock Off', 'Magic Coat', 'Natural Gift', 'Secret Power', 'Signal Beam', 'Snore'];
        eggMoves = [];
        break;

	case 'rasqueon':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Outrage', 'Devastation'];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Dragon Claw', 'Roar', 'Toxic', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Protect', 'Rain Dance', 'Frustration', 'Thunderbolt', 'Thunder', 'Earthquake', 'Return', 'Dig', 'Double Team', 'Flamethrower', 'Sandstorm', 'Fire Blast', 'Rock Tomb', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Round', 'Incinerate', 'Payback', 'Giga Impact', 'Stone Edge', 'Thunder Wave', 'Gyro Ball', 'Bulldoze', 'Rock Slide', 'Dragon Tail', 'Poison Jab', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Snarl', 'Confide', 'Cut', 'Surf', 'Strength', 'Bravado', 'Stinger Lance', 'Diamond Claw', 'Daring Dash', 'Aftershock', 'Dragon Roar', 'Phoenix Fire', 'Sandblast', 'Golden Flame', 'Radiant Claw', 'Pulverize', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Aqua Tail', 'Block', 'Body Press', 'Breaking Swipe', 'Brutal Swing', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Draco Meteor', 'Dragon Pulse', 'Endure', 'Enthrall', 'Fury Cutter', 'Headbutt', 'Iron Defense', 'Iron Head', 'Iron Tail', 'Magnet Rise', 'Natural Gift', 'Outrage', 'Rock Climb', 'Rollout', 'Secret Power', 'Snore', 'Stealth Rock', 'Steel Beam', 'Stomping Tantrum', 'Sucker Punch', 'Super Fang', 'Superpower', 'Twister', 'Water Pulse'];
        eggMoves = ['Curse', 'Fire Fang', 'Ice Fang', 'Metal Sound', 'Pursuit', 'Thrash', 'Thunder Fang'];
        break;

	case 'garapaima':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Water Hammer', 'Jaw Lock'];
        evoMoves = [];
        tmMoves = ['Roar', 'Toxic', 'Hail', 'Hidden Power', 'Ice Beam', 'Blizzard', 'Hyper Beam', 'Protect', 'Rain Dance', 'Frustration', 'Return', 'Double Team', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Scald', 'Payback', 'Giga Impact', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Confide', 'Surf', 'Strength', 'Waterfall', 'Dive', 'Bravado', 'Drag Under', 'Daring Dash', 'Glacier Crush', 'Mudslide', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Aqua Tail', 'Avalanche', 'Bounce', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Headbutt', 'Ice Water', 'Icy Wind', 'Iron Head', 'Iron Tail', 'Knock Off', 'Liquidation', 'Natural Gift', 'Secret Power', 'Snore', 'Super Fang', 'Superpower', 'Water Pulse', 'Zen Headbutt'];
        eggMoves = ['Chip Away', 'Double-Edge', 'Flail', 'Head Smash', 'Ice Fang', 'Mud Sport', 'Water Bash'];
        break;

	case 'remoraid':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Ice Beam', 'Blizzard', 'Hyper Beam', 'Protect', 'Rain Dance', 'Frustration', 'Smack Down', 'Return', 'Psychic', 'Double Team', 'Flamethrower', 'Fire Blast', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Scald', 'Charge Beam', 'Incinerate', 'Thunder Wave', 'Swagger', 'Sleep Talk', 'Substitute', 'Confide', 'Surf', 'Waterfall', 'Dive', 'Drag Under', 'Shadow Dart', 'Cold Shower', 'Snow Throw', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Bounce', 'Brine', 'Bullet Seed', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Eagle Eye', 'Endure', 'Enthrall', 'Gunk Shot', 'Ice Water', 'Icy Wind', 'Natural Gift', 'Secret Power', 'Seed Bomb', 'Signal Beam', 'Snore', 'Swift', 'Water Pulse'];
        eggMoves = ['Acid Spray', 'Entrainment', 'Flail', 'Haze', 'Mud Shot', 'Octazooka', 'Rock Blast', 'Screech', 'Supersonic', 'Water Sport', 'Water Spout'];
        break;

	case 'octillery':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Gunk Shot', 'Rock Blast'];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Ice Beam', 'Blizzard', 'Hyper Beam', 'Protect', 'Rain Dance', 'Frustration', 'Smack Down', 'Return', 'Psychic', 'Double Team', 'Sludge Wave', 'Flamethrower', 'Sludge Bomb', 'Fire Blast', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Energy Ball', 'Scald', 'Charge Beam', 'Incinerate', 'Payback', 'Giga Impact', 'Thunder Wave', 'Swagger', 'Sleep Talk', 'Substitute', 'Flash Cannon', 'Confide', 'Surf', 'Waterfall', 'Dive', 'Drag Under', 'Shadow Dart', 'Oil Slick', 'Cold Shower', 'Snow Throw', 'Restrain', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Bind', 'Bounce', 'Brine', 'Bullet Seed', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Eagle Eye', 'Endure', 'Enthrall', 'Gunk Shot', 'Ice Water', 'Icy Wind', 'Natural Gift', 'Secret Power', 'Seed Bomb', 'Signal Beam', 'Snore', 'Swift', 'Water Pulse'];
        eggMoves = ['Acid Spray', 'Entrainment', 'Flail', 'Haze', 'Mud Shot', 'Octazooka', 'Rock Blast', 'Screech', 'Supersonic', 'Water Sport', 'Water Spout'];
        break;

	case 'kelfee':
		moveLevels = [1, 1, 1, 8, 11, 18, 21, 28, 31, 38, 41, 48, 51];
		levelUpMoves = ['Constrict', 'Bubble', 'Leafage', 'Water Sport', 'Water Gun', 'Growth', 'Grass Knot', 'Refresh', 'Aqua Jet', 'Brine', 'Ingrain', 'Energy Ball', 'Drag Under'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hail', 'Hidden Power', 'Sunny Day', 'Ice Beam', 'Blizzard', 'Protect', 'Rain Dance', 'Frustration', 'Solar Beam', 'Return', 'Double Team', 'Reflect', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Energy Ball', 'Scald', 'Flash', 'Swords Dance', 'Grass Knot', 'Swagger', 'Sleep Talk', 'Substitute', 'Nature Power', 'Confide', 'Cut', 'Surf', 'Waterfall', 'Dive', 'Drag Under', 'Crosscut Leaf', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Aqua Tail', 'Bind', 'Brine', 'Bullet Seed', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Fury Cutter', 'Giga Drain', 'Headbutt', 'Ice Water', 'Icy Wind', 'Iron Tail', 'Knock Off', 'Natural Gift', 'Power Garden', 'Secret Power', 'Seed Bomb', 'Snore', 'Synthesis', 'Twister', 'Water Pulse', 'Worry Seed'];
        eggMoves = ['Absorb', 'Charm', 'Dragon Dance', 'Magical Leaf', 'Mud Bomb', 'Power Whip', 'Soak', 'Tickle'];
        break;

	case 'drakella':
		moveLevels = [1, 1, 1, 8, 11, 18, 21, 28, 32, 40, 44, 52, 56];
		levelUpMoves = ['Constrict', 'Bubble', 'Leafage', 'Water Sport', 'Water Gun', 'Growth', 'Grass Knot', 'Refresh', 'Aqua Jet', 'Brine', 'Ingrain', 'Energy Ball', 'Drag Under'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hail', 'Hidden Power', 'Sunny Day', 'Ice Beam', 'Blizzard', 'Hyper Beam', 'Protect', 'Rain Dance', 'Frustration', 'Solar Beam', 'Return', 'Double Team', 'Reflect', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Energy Ball', 'Scald', 'Giga Impact', 'Flash', 'Swords Dance', 'Grass Knot', 'Swagger', 'Sleep Talk', 'Substitute', 'Nature Power', 'Confide', 'Cut', 'Surf', 'Waterfall', 'Dive', 'Drag Under', 'Crosscut Leaf', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Aqua Tail', 'Bind', 'Brine', 'Bullet Seed', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Dragon Pulse', 'Endure', 'Enthrall', 'Fury Cutter', 'Giga Drain', 'Headbutt', 'Ice Water', 'Icy Wind', 'Iron Tail', 'Knock Off', 'Natural Gift', 'Power Garden', 'Secret Power', 'Seed Bomb', 'Snore', 'Synthesis', 'Twister', 'Water Pulse', 'Worry Seed'];
        eggMoves = ['Absorb', 'Charm', 'Dragon Dance', 'Magical Leaf', 'Mud Bomb', 'Power Whip', 'Soak', 'Tickle'];
        break;

	case 'clauncher':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Venoshock', 'Hidden Power', 'Ice Beam', 'Protect', 'Rain Dance', 'Frustration', 'Smack Down', 'Return', 'Double Team', 'Sludge Wave', 'Sludge Bomb', 'Facade', 'Rest', 'Attract', 'Round', 'Scald', 'Swords Dance', 'Rock Slide', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Flash Cannon', 'Confide', 'Cut', 'Surf', 'Waterfall', 'Dive', 'Drag Under', 'Shadow Dart', 'Oil Slick', 'Mudslide', 'Cold Shower', 'Snow Throw', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Brine', 'Bullet Seed', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Gunk Shot', 'Helping Hand', 'Ice Water', 'Icy Wind', 'Knock Off', 'Natural Gift', 'Secret Power', 'Snore', 'Swift', 'Water Pulse'];
        eggMoves = ['Crabhammer', 'Entrainment'];
        break;

	case 'clawitzer':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Heal Pulse', 'Dark Pulse', 'Dragon Pulse', 'Aura Sphere', 'Link Pulse', 'Pulse Storm', 'Pulse Jet'];
        evoMoves = [];
        tmMoves = ['Toxic', 'Venoshock', 'Hidden Power', 'Ice Beam', 'Hyper Beam', 'Protect', 'Rain Dance', 'Frustration', 'Smack Down', 'Return', 'Shadow Ball', 'Double Team', 'Sludge Wave', 'Sludge Bomb', 'Facade', 'Rest', 'Attract', 'Round', 'Focus Blast', 'Scald', 'Giga Impact', 'Swords Dance', 'Rock Slide', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Flash Cannon', 'Dark Pulse', 'Confide', 'Cut', 'Surf', 'Waterfall', 'Dive', 'Drag Under', 'Shadow Dart', 'Pulse Storm', 'Oil Slick', 'Mudslide', 'Cold Shower', 'Snow Throw', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Avalanche', 'Brine', 'Bullet Seed', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Dragon Pulse', 'Endure', 'Enthrall', 'Gunk Shot', 'Helping Hand', 'Ice Water', 'Icy Wind', 'Knock Off', 'Laser Focus', 'Link Pulse', 'Liquidation', 'Natural Gift', 'Secret Power', 'Snore', 'Swift', 'Water Pulse'];
        eggMoves = ['Crabhammer', 'Entrainment'];
        break;

	case 'skrelp':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hail', 'Venoshock', 'Hidden Power', 'Protect', 'Rain Dance', 'Frustration', 'Thunderbolt', 'Return', 'Shadow Ball', 'Double Team', 'Sludge Wave', 'Sludge Bomb', 'Facade', 'Rest', 'Attract', 'Round', 'Scald', 'Swagger', 'Sleep Talk', 'Substitute', 'Confide', 'Surf', 'Waterfall', 'Dive', 'Drag Under', 'Miasma Terrain', 'Shadow Dart', 'Oil Slick', 'Mudslide', 'Berry Share', 'Hidden Gift', 'Clear Sky', 'Acid Rain'];
        tutorMoves = ['Amaze', 'Aqua Tail', 'Brine', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Dragon Pulse', 'Endure', 'Enthrall', 'Gastro Acid', 'Gunk Shot', 'Ice Water', 'Natural Gift', 'Secret Power', 'Snore', 'Water Pledge'];
        eggMoves = ['Acid Armor', 'Haze', 'Play Rough', 'Toxic Spikes', 'Venom Drench'];
        break;

	case 'dragalge':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Dragon Tail', 'Twister'];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hail', 'Venoshock', 'Hidden Power', 'Hyper Beam', 'Protect', 'Rain Dance', 'Frustration', 'Thunderbolt', 'Thunder', 'Return', 'Shadow Ball', 'Double Team', 'Sludge Wave', 'Sludge Bomb', 'Facade', 'Rest', 'Attract', 'Round', 'Focus Blast', 'Scald', 'Giga Impact', 'Dragon Tail', 'Swagger', 'Sleep Talk', 'Substitute', 'Confide', 'Surf', 'Waterfall', 'Dive', 'Drag Under', 'Miasma Terrain', 'Shadow Dart', 'Oil Slick', 'Mudslide', 'Berry Share', 'Hidden Gift', 'Clear Sky', 'Acid Rain'];
        tutorMoves = ['Amaze', 'Aqua Tail', 'Brine', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Draco Meteor', 'Dragon Pulse', 'Endure', 'Enthrall', 'Gastro Acid', 'Gunk Shot', 'Ice Water', 'Invigorate', 'Iron Tail', 'Natural Gift', 'Outrage', 'Secret Power', 'Snore', 'Twister', 'Water Pledge'];
        eggMoves = ['Acid Armor', 'Haze', 'Play Rough', 'Toxic Spikes', 'Venom Drench'];
        break;

	case 'aeolagio':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hail', 'Venoshock', 'Hidden Power', 'Ice Beam', 'Blizzard', 'Hyper Beam', 'Protect', 'Rain Dance', 'Safeguard', 'Frustration', 'Return', 'Psychic', 'Shadow Ball', 'Double Team', 'Sludge Wave', 'Sludge Bomb', 'Facade', 'Rest', 'Attract', 'Round', 'Steel Wing', 'Scald', 'Acrobatics', 'Giga Impact', 'Flash', 'Poison Jab', 'Dream Eater', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Confide', 'Surf', 'Waterfall', 'Miasma Terrain', 'Oil Slick', 'Cold Shower', 'Turbulence', 'Berry Share', 'Hidden Gift', 'Clear Sky', 'Acid Rain'];
        tutorMoves = ['Amaze', 'Aqua Tail', 'Brine', 'Captivate', 'Confound', 'Dazzle', 'Defog', 'Demolish', 'Endure', 'Enthrall', 'Gastro Acid', 'Giga Drain', 'Ice Water', 'Icy Wind', 'Iron Tail', 'Knock Off', 'Magic Coat', 'Natural Gift', 'Ominous Wind', 'Pain Split', 'Secret Power', 'Signal Beam', 'Snore', 'Swift', 'Tailwind', 'Twister', 'Water Pulse'];
        eggMoves = ['Aqua Ring', 'Camouflage', 'Confuse Ray', 'Mist', 'Psybeam', 'Spit Up', 'Stockpile', 'Swallow', 'Toxic Spikes', 'Yawn'];
        break;

	case 'turistar':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Calm Mind', 'Toxic', 'Hail', 'Hidden Power', 'Ice Beam', 'Blizzard', 'Protect', 'Rain Dance', 'Frustration', 'Return', 'Double Team', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Round', 'False Swipe', 'Scald', 'Acrobatics', 'Shadow Claw', 'Gyro Ball', 'Swords Dance', 'Poison Jab', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Rock Smash', 'Confide', 'Cut', 'Surf', 'Waterfall', 'Dive', 'Drag Under', 'Daring Dash', 'Shadow Dart', 'Hyper-Focus', 'Mudslide', 'Turbulence', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Air Cutter', 'Amaze', 'Aqua Tail', 'Brine', 'Captivate', 'Confound', 'Dazzle', 'Defog', 'Demolish', 'Eagle Eye', 'Endeavor', 'Endure', 'Enthrall', 'Fury Cutter', 'Ice Water', 'Icy Wind', 'Iron Defense', 'Iron Tail', 'Knock Off', 'Laser Focus', 'Liquidation', 'Natural Gift', 'Rollout', 'Secret Power', 'Snore', 'Stealth Rock', 'Sucker Punch', 'Swift', 'Tailwind', 'Trip Up', 'Twister', 'Water Pulse'];
        eggMoves = ['Agility', 'Mach Turn', 'Counter', 'Hydro Pump', 'Frozen Blade', 'Mind Reader', 'Pursuit', 'Razor Wind', 'Shell Smash', 'Whirlpool'];
        break;

	case 'turumaken':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Frenzy Strike', 'Night Slash', 'Vanish'];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Calm Mind', 'Toxic', 'Hail', 'Hidden Power', 'Ice Beam', 'Blizzard', 'Hyper Beam', 'Protect', 'Rain Dance', 'Frustration', 'Return', 'Double Team', 'Sandstorm', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Round', 'Steel Wing', 'False Swipe', 'Scald', 'Acrobatics', 'Shadow Claw', 'Giga Impact', 'Rock Polish', 'Stone Edge', 'Gyro Ball', 'Swords Dance', 'Poison Jab', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Flash Cannon', 'Rock Smash', 'Confide', 'Cut', 'Surf', 'Waterfall', 'Dive', 'Drag Under', 'Daring Dash', 'Shadow Dart', 'Magnet Switch', 'Hyper-Focus', 'Mudslide', 'Turbulence', 'Rug Pull', 'Pulverize', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Air Cutter', 'Amaze', 'Aqua Tail', 'Avalanche', 'Brine', 'Captivate', 'Confound', 'Dazzle', 'Defog', 'Demolish', 'Eagle Eye', 'Endeavor', 'Endure', 'Enthrall', 'Fury Cutter', 'Ice Water', 'Icy Wind', 'Iron Defense', 'Iron Head', 'Iron Tail', 'Knock Off', 'Laser Focus', 'Liquidation', 'Natural Gift', 'Rollout', 'Secret Power', 'Snore', 'Stealth Rock', 'Steel Beam', 'Sucker Punch', 'Swift', 'Tailwind', 'Trip Up', 'Twister', 'Water Pulse'];
        eggMoves = ['Agility', 'Mach Turn', 'Counter', 'Hydro Pump', 'Frozen Blade', 'Mind Reader', 'Pursuit', 'Razor Wind', 'Shell Smash', 'Whirlpool'];
        break;

	case 'freye':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hail', 'Hidden Power', 'Ice Beam', 'Blizzard', 'Protect', 'Rain Dance', 'Frustration', 'Earthquake', 'Return', 'Dig', 'Double Team', 'Sludge Wave', 'Sludge Bomb', 'Sandstorm', 'Rock Tomb', 'Facade', 'Rest', 'Attract', 'Round', 'Scald', 'Stone Edge', 'Bulldoze', 'Rock Slide', 'Swagger', 'Sleep Talk', 'Substitute', 'Confide', 'Surf', 'Waterfall', 'Dive', 'Drag Under', 'Aftershock', 'Sandblast', 'Oil Slick', 'Mudslide', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Aqua Tail', 'Brine', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Earth Power', 'Endure', 'Enthrall', 'Headbutt', 'Ice Water', 'Icy Wind', 'Natural Gift', 'Secret Power', 'Snore', 'Stealth Rock', 'Water Pulse'];
        eggMoves = ['Amnesia', 'Aqua Ring', 'Body Slam', 'Curse', 'Fissure', 'Magnitude', 'Soak', 'Yawn'];
        break;

	case 'floundirt':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hail', 'Hidden Power', 'Ice Beam', 'Blizzard', 'Protect', 'Rain Dance', 'Frustration', 'Earthquake', 'Return', 'Dig', 'Double Team', 'Sludge Wave', 'Sludge Bomb', 'Sandstorm', 'Rock Tomb', 'Facade', 'Rest', 'Attract', 'Round', 'Scald', 'Stone Edge', 'Bulldoze', 'Rock Slide', 'Swagger', 'Sleep Talk', 'Substitute', 'Confide', 'Surf', 'Waterfall', 'Dive', 'Drag Under', 'Aftershock', 'Sandblast', 'Oil Slick', 'Mudslide', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Aqua Tail', 'Brine', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Earth Power', 'Endure', 'Enthrall', 'Headbutt', 'Ice Water', 'Icy Wind', 'Natural Gift', 'Secret Power', 'Snore', 'Stealth Rock', 'Water Pulse'];
        eggMoves = ['Amnesia', 'Aqua Ring', 'Body Slam', 'Curse', 'Fissure', 'Magnitude', 'Soak', 'Yawn'];
        break;

	case 'halirth':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hail', 'Hidden Power', 'Ice Beam', 'Blizzard', 'Hyper Beam', 'Protect', 'Rain Dance', 'Frustration', 'Earthquake', 'Return', 'Dig', 'Double Team', 'Sludge Wave', 'Sludge Bomb', 'Sandstorm', 'Rock Tomb', 'Facade', 'Rest', 'Attract', 'Round', 'Scald', 'Giga Impact', 'Stone Edge', 'Bulldoze', 'Rock Slide', 'Swagger', 'Sleep Talk', 'Substitute', 'Confide', 'Surf', 'Waterfall', 'Dive', 'Drag Under', 'Aftershock', 'Sandblast', 'Oil Slick', 'Glacier Crush', 'Mudslide', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Aqua Tail', 'Avalanche', 'Body Press', 'Brine', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Earth Power', 'Endure', 'Enthrall', 'Headbutt', 'Ice Water', 'Icy Wind', 'Natural Gift', 'Secret Power', 'Snore', 'Stealth Rock', 'Water Pulse'];
        eggMoves = ['Amnesia', 'Aqua Ring', 'Body Slam', 'Curse', 'Fissure', 'Magnitude', 'Soak', 'Yawn'];
        break;

	case 'latikrai':
		moveLevels = [1, 1, 8, 10, 17, 19, 26, 28, 35, 37, 44, 46, 53];
		levelUpMoves = ['Constrict', 'Water Sport', 'Poison Sting', 'Leer', 'Water Pulse', 'Haze', 'Flail', 'Poison Fang', 'Cold Shower', 'Whirlpool', 'Coil', 'Rain Dance', 'Hydro Pump'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hail', 'Venoshock', 'Hidden Power', 'Ice Beam', 'Blizzard', 'Protect', 'Rain Dance', 'Frustration', 'Return', 'Double Team', 'Sludge Wave', 'Sludge Bomb', 'Facade', 'Rest', 'Attract', 'Round', 'Scald', 'Poison Jab', 'Swagger', 'Sleep Talk', 'Substitute', 'Confide', 'Surf', 'Waterfall', 'Dive', 'Drag Under', 'Oil Slick', 'Cold Shower', 'Berry Share', 'Hidden Gift', 'Clear Sky', 'Acid Rain'];
        tutorMoves = ['Amaze', 'Aqua Tail', 'Bind', 'Brine', 'Brutal Swing', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Gastro Acid', 'Headbutt', 'Ice Water', 'Icy Wind', 'Iron Tail', 'Natural Gift', 'Secret Power', 'Signal Beam', 'Snore', 'Water Pulse'];
        eggMoves = ['Aqua Jet', 'Bite', 'Dragon Dance', 'Ice Fang', 'Slam', 'Soak', 'Toxic Spikes'];
        break;

	case 'kraitra':
		moveLevels = [1, 1, 8, 10, 17, 19, 26, 28, 34, 37, 40, 49, 52, 61];
		levelUpMoves = ['Constrict', 'Water Sport', 'Poison Sting', 'Leer', 'Water Pulse', 'Haze', 'Flail', 'Poison Fang', 'Tri Attack', 'Cold Shower', 'Whirlpool', 'Coil', 'Rain Dance', 'Hydro Pump'];
		relearnMoves = ['Venom Drench'];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hail', 'Venoshock', 'Hidden Power', 'Ice Beam', 'Blizzard', 'Hyper Beam', 'Protect', 'Rain Dance', 'Frustration', 'Return', 'Double Team', 'Sludge Wave', 'Sludge Bomb', 'Facade', 'Rest', 'Attract', 'Round', 'Scald', 'Giga Impact', 'Dragon Tail', 'Poison Jab', 'Swagger', 'Sleep Talk', 'Substitute', 'Confide', 'Surf', 'Waterfall', 'Dive', 'Drag Under', 'Miasma Terrain', 'Oil Slick', 'Glacier Crush', 'Cold Shower', 'Restrain', 'Berry Share', 'Hidden Gift', 'Clear Sky', 'Acid Rain'];
        tutorMoves = ['Amaze', 'Aqua Tail', 'Avalanche', 'Bind', 'Breaking Swipe', 'Brine', 'Brutal Swing', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Dragon Pulse', 'Endure', 'Enthrall', 'Gastro Acid', 'Headbutt', 'Ice Water', 'Icy Wind', 'Iron Tail', 'Natural Gift', 'Outrage', 'Secret Power', 'Signal Beam', 'Snore', 'Twister', 'Water Pulse'];
        eggMoves = ['Aqua Jet', 'Bite', 'Dragon Dance', 'Ice Fang', 'Slam', 'Soak', 'Toxic Spikes'];
        break;

	case 'carvanha':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hail', 'Hidden Power', 'Taunt', 'Ice Beam', 'Blizzard', 'Protect', 'Rain Dance', 'Frustration', 'Return', 'Double Team', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Scald', 'Payback', 'Retaliate', 'Swagger', 'Sleep Talk', 'Substitute', 'Snarl', 'Dark Pulse', 'Confide', 'Surf', 'Waterfall', 'Dive', 'Bravado', 'Drag Under', 'Daring Dash', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Ancient Power', 'Bounce', 'Brine', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Fury Cutter', 'Ice Water', 'Icy Wind', 'Natural Gift', 'Secret Power', 'Snore', 'Spite', 'Super Fang', 'Swift', 'Uproar', 'Water Pulse', 'Zen Headbutt'];
        eggMoves = ['Destiny Bond', 'Double-Edge', 'Hydro Pump', 'Jaw Thrash', 'Psychic Fangs', 'Thrash', 'Tsunami Rush'];
        break;

	case 'sharpedo':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Night Slash', 'Feint', 'Tsunami Rush'];
        evoMoves = [];
        tmMoves = ['Roar', 'Toxic', 'Hail', 'Hidden Power', 'Taunt', 'Ice Beam', 'Blizzard', 'Hyper Beam', 'Protect', 'Rain Dance', 'Frustration', 'Earthquake', 'Return', 'Double Team', 'Rock Tomb', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'False Swipe', 'Scald', 'Payback', 'Retaliate', 'Giga Impact', 'Bulldoze', 'Poison Jab', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Snarl', 'Dark Pulse', 'Confide', 'Surf', 'Strength', 'Waterfall', 'Dive', 'Bravado', 'Drag Under', 'Daring Dash', 'Aftershock', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Ancient Power', 'Avalanche', 'Bounce', 'Brine', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Fury Cutter', 'Ice Water', 'Icy Wind', 'Liquidation', 'Natural Gift', 'Secret Power', 'Snore', 'Spite', 'Super Fang', 'Swift', 'Uproar', 'Water Pulse', 'Zen Headbutt'];
        eggMoves = ['Destiny Bond', 'Double-Edge', 'Hydro Pump', 'Jaw Thrash', 'Psychic Fangs', 'Thrash', 'Tsunami Rush'];
        break;

	case 'khargonaut':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Curse', 'Belly Flop', 'Jaw Lock'];
        evoMoves = [];
        tmMoves = ['Roar', 'Toxic', 'Hail', 'Hidden Power', 'Taunt', 'Ice Beam', 'Blizzard', 'Hyper Beam', 'Protect', 'Rain Dance', 'Frustration', 'Earthquake', 'Return', 'Double Team', 'Sandstorm', 'Rock Tomb', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'False Swipe', 'Scald', 'Payback', 'Retaliate', 'Giga Impact', 'Gyro Ball', 'Bulldoze', 'Rock Slide', 'Poison Jab', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Snarl', 'Dark Pulse', 'Confide', 'Surf', 'Strength', 'Waterfall', 'Dive', 'Bravado', 'Drag Under', 'Daring Dash', 'Aftershock', 'Glacier Crush', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Ancient Power', 'Aqua Tail', 'Avalanche', 'Bounce', 'Brine', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Fury Cutter', 'Headbutt', 'Ice Water', 'Icy Wind', 'Iron Defense', 'Iron Head', 'Liquidation', 'Natural Gift', 'Outrage', 'Secret Power', 'Snore', 'Spite', 'Steel Beam', 'Super Fang', 'Swift', 'Uproar', 'Water Pulse', 'Zen Headbutt'];
        eggMoves = ['Destiny Bond', 'Double-Edge', 'Hydro Pump', 'Jaw Thrash', 'Psychic Fangs', 'Thrash', 'Tsunami Rush'];
        break;

	case 'wyrmal':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Protect', 'Rain Dance', 'Frustration', 'Return', 'Double Team', 'Sludge Wave', 'Flamethrower', 'Sludge Bomb', 'Sandstorm', 'Fire Blast', 'Facade', 'Rest', 'Attract', 'Round', 'Overheat', 'Scald', 'Incinerate', 'Will-O-Wisp', 'Payback', 'Swagger', 'Sleep Talk', 'Substitute', 'Confide', 'Golden Flame', 'Oil Slick', 'Mudslide', 'Burn Away', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Ancient Power', 'Brine', 'Brutal Swing', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Dragon Pulse', 'Earth Power', 'Endure', 'Enthrall', 'Gastro Acid', 'Gunk Shot', 'Headbutt', 'Heat Wave', 'Natural Gift', 'Secret Power', 'Snore', 'Stealth Rock', 'Swift', 'Twister', 'Water Pulse'];
        eggMoves = ['Crunch', 'Haze', 'Hydro Pump', 'Octazooka', 'Poison Gas', 'Refresh', 'Spit Up', 'Stockpile', 'Swallow', 'Wring Out'];
        break;

	case 'ventorm':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Coil', 'Hydroshock'];
        evoMoves = [];
        tmMoves = ['Roar', 'Toxic', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Protect', 'Rain Dance', 'Frustration', 'Return', 'Double Team', 'Sludge Wave', 'Flamethrower', 'Sludge Bomb', 'Sandstorm', 'Fire Blast', 'Rock Tomb', 'Facade', 'Rest', 'Attract', 'Round', 'Overheat', 'Scald', 'Incinerate', 'Will-O-Wisp', 'Explosion', 'Payback', 'Giga Impact', 'Rock Polish', 'Stone Edge', 'Gyro Ball', 'Rock Slide', 'Swagger', 'Sleep Talk', 'Substitute', 'Confide', 'Miasma Terrain', 'Crystallize', 'Sandblast', 'Golden Flame', 'Oil Slick', 'Mudslide', 'Burn Away', 'Berry Share', 'Hidden Gift', 'Clear Sky', 'Acid Rain'];
        tutorMoves = ['Amaze', 'Ancient Power', 'Brine', 'Brutal Swing', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Dragon Pulse', 'Earth Power', 'Endure', 'Enthrall', 'Gastro Acid', 'Gunk Shot', 'Headbutt', 'Heat Wave', 'Iron Defense', 'Natural Gift', 'Rollout', 'Secret Power', 'Snore', 'Stealth Rock', 'Swift', 'Twister', 'Water Pulse'];
        eggMoves = ['Crunch', 'Haze', 'Hydro Pump', 'Octazooka', 'Poison Gas', 'Refresh', 'Spit Up', 'Stockpile', 'Swallow', 'Wring Out'];
        break;

	case 'slugma':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Light Screen', 'Protect', 'Frustration', 'Return', 'Double Team', 'Reflect', 'Flamethrower', 'Fire Blast', 'Rock Tomb', 'Facade', 'Flame Charge', 'Rest', 'Attract', 'Round', 'Overheat', 'Incinerate', 'Will-O-Wisp', 'Rock Slide', 'Infestation', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Nature Power', 'Confide', 'Sandblast', 'Burning Strike', 'Mudslide', 'Burn Away', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['After You', 'Amaze', 'Ancient Power', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Earth Power', 'Endure', 'Enthrall', 'Heat Wave', 'Iron Defense', 'Natural Gift', 'Pain Split', 'Rollout', 'Secret Power', 'Snore'];
        eggMoves = ['Acid Armor', 'Curse', 'Guard Swap', 'Inferno', 'Memento', 'Smokescreen', 'Spit Up', 'Stockpile', 'Swallow'];
        break;

	case 'magcargo':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Earth Power'];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Light Screen', 'Protect', 'Frustration', 'Solar Beam', 'Earthquake', 'Return', 'Double Team', 'Reflect', 'Flamethrower', 'Sandstorm', 'Fire Blast', 'Rock Tomb', 'Facade', 'Flame Charge', 'Rest', 'Attract', 'Round', 'Overheat', 'Incinerate', 'Will-O-Wisp', 'Explosion', 'Giga Impact', 'Rock Polish', 'Stone Edge', 'Gyro Ball', 'Bulldoze', 'Rock Slide', 'Infestation', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Nature Power', 'Confide', 'Strength', 'Aftershock', 'Crystallize', 'Sandblast', 'Burning Strike', 'Mudslide', 'Burn Away', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['After You', 'Amaze', 'Ancient Power', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Earth Power', 'Endure', 'Enthrall', 'Heat Wave', 'Iron Defense', 'Natural Gift', 'Pain Split', 'Rollout', 'Secret Power', 'Snore', 'Stomping Tantrum'];
        eggMoves = ['Acid Armor', 'Curse', 'Guard Swap', 'Inferno', 'Memento', 'Smokescreen', 'Spit Up', 'Stockpile', 'Swallow'];
        break;

	case 'ignelix':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Eruption', 'Earth Power', 'Rock Wrecker', 'Volcano Bomb'];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Light Screen', 'Protect', 'Frustration', 'Solar Beam', 'Smack Down', 'Earthquake', 'Return', 'Double Team', 'Reflect', 'Flamethrower', 'Sandstorm', 'Fire Blast', 'Rock Tomb', 'Facade', 'Flame Charge', 'Rest', 'Attract', 'Round', 'Overheat', 'Incinerate', 'Will-O-Wisp', 'Explosion', 'Giga Impact', 'Rock Polish', 'Stone Edge', 'Gyro Ball', 'Bulldoze', 'Rock Slide', 'Infestation', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Nature Power', 'Confide', 'Strength', 'Aftershock', 'Crystallize', 'Sandblast', 'Burning Strike', 'Mudslide', 'Burn Away', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['After You', 'Amaze', 'Ancient Power', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Earth Power', 'Endure', 'Enthrall', 'Heat Wave', 'Iron Defense', 'Natural Gift', 'Pain Split', 'Rollout', 'Secret Power', 'Snore', 'Stomping Tantrum'];
        eggMoves = ['Acid Armor', 'Curse', 'Guard Swap', 'Inferno', 'Memento', 'Smokescreen', 'Spit Up', 'Stockpile', 'Swallow'];
        break;

	case 'scraggy':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Dragon Claw', 'Roar', 'Toxic', 'Bulk Up', 'Hidden Power', 'Sunny Day', 'Taunt', 'Protect', 'Rain Dance', 'Frustration', 'Smack Down', 'Return', 'Dig', 'Brick Break', 'Double Team', 'Sludge Bomb', 'Rock Tomb', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Low Sweep', 'Round', 'Focus Blast', 'Fling', 'Incinerate', 'Payback', 'Retaliate', 'Stone Edge', 'Rock Slide', 'Dragon Tail', 'Poison Jab', 'Grass Knot', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Snarl', 'Dark Pulse', 'Power-Up Punch', 'Confide', 'Strength', 'Spirit Punch', 'Bravado', 'Psych Out', 'Radiant Claw', 'Brain Press', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Dragon Pulse', 'Drain Punch', 'Dual Chop', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Foul Play', 'Headbutt', 'Ice Punch', 'Iron Defense', 'Iron Head', 'Iron Tail', 'Knock Off', 'Low Kick', 'Natural Gift', 'Rock Climb', 'Secret Power', 'Snatch', 'Snore', 'Spite', 'Sucker Punch', 'Super Fang', 'Thunder Punch', 'Trip Up', 'Vacuum Wave', 'Work Up', 'Zen Headbutt'];
        eggMoves = ['Amnesia', 'Counter', 'Detect', 'Dragon Dance', 'Fake Out', 'Quick Guard'];
        break;

	case 'scrafty':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Dragon Claw', 'Roar', 'Toxic', 'Bulk Up', 'Hidden Power', 'Sunny Day', 'Taunt', 'Hyper Beam', 'Protect', 'Rain Dance', 'Frustration', 'Smack Down', 'Return', 'Dig', 'Brick Break', 'Double Team', 'Sludge Bomb', 'Rock Tomb', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Low Sweep', 'Round', 'Focus Blast', 'Fling', 'Incinerate', 'Payback', 'Retaliate', 'Giga Impact', 'Stone Edge', 'Rock Slide', 'Dragon Tail', 'Poison Jab', 'Grass Knot', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Snarl', 'Dark Pulse', 'Power-Up Punch', 'Confide', 'Strength', 'Spirit Punch', 'Bravado', 'Psych Out', 'Lariat', 'Radiant Claw', 'Brain Press', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Dragon Pulse', 'Drain Punch', 'Dual Chop', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Foul Play', 'Headbutt', 'Ice Punch', 'Iron Defense', 'Iron Head', 'Iron Tail', 'Knock Off', 'Low Kick', 'Natural Gift', 'Outrage', 'Rock Climb', 'Secret Power', 'Snatch', 'Snore', 'Spite', 'Sucker Punch', 'Super Fang', 'Superpower', 'Throat Chop', 'Thunder Punch', 'Trip Up', 'Vacuum Wave', 'Work Up', 'Zen Headbutt'];
        eggMoves = ['Amnesia', 'Counter', 'Detect', 'Dragon Dance', 'Fake Out', 'Quick Guard'];
        break;

	case 'virlich':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Psyshock', 'Calm Mind', 'Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Light Screen', 'Protect', 'Safeguard', 'Frustration', 'Thunderbolt', 'Return', 'Psychic', 'Double Team', 'Reflect', 'Flamethrower', 'Fire Blast', 'Torment', 'Facade', 'Flame Charge', 'Rest', 'Attract', 'Thief', 'Round', 'Overheat', 'Fling', 'Incinerate', 'Will-O-Wisp', 'Flash', 'Psych Up', 'Dream Eater', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Trick Room', 'Dazzling Gleam', 'Confide', 'Bravado', 'Lunar Beam', 'Whirling Dance', 'Phoenix Fire', 'Burning Strike', 'Rainbow Wall', 'Burn Away', 'Shimmer Shot', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Headbutt', 'Heat Wave', 'Magic Coat', 'Magic Room', 'Natural Gift', 'Revel Dance', 'Role Play', 'Secret Power', 'Snatch', 'Snore', 'Spite', 'Swift', 'Thunder Punch', 'Trick', 'Trip Up'];
        eggMoves = ['Confuse Ray', 'Disable', 'Fire Spin', 'Hypnosis', 'Lava Plume', 'Memento', 'Aqua Jet', 'Poison Gas', 'Shadow Sneak', 'Smokescreen'];
        break;

	case 'gasvirlich':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Fire Punch', 'Fairy Ring', 'Fairy Dance'];
        evoMoves = [];
        tmMoves = ['Psyshock', 'Calm Mind', 'Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Hyper Beam', 'Light Screen', 'Protect', 'Safeguard', 'Frustration', 'Solar Beam', 'Thunderbolt', 'Return', 'Psychic', 'Double Team', 'Reflect', 'Flamethrower', 'Fire Blast', 'Torment', 'Facade', 'Flame Charge', 'Rest', 'Attract', 'Thief', 'Round', 'Overheat', 'Focus Blast', 'Fling', 'Incinerate', 'Will-O-Wisp', 'Giga Impact', 'Flash', 'Psych Up', 'Dream Eater', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Trick Room', 'Dazzling Gleam', 'Confide', 'Spirit Punch', 'Bravado', 'Lunar Beam', 'Whirling Dance', 'Phoenix Fire', 'Burning Strike', 'Hyper-Focus', 'Rainbow Wall', 'Burn Away', 'Brain Press', 'Shimmer Shot', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Headbutt', 'Heat Wave', 'Iron Tail', 'Magic Coat', 'Magic Room', 'Natural Gift', 'Revel Dance', 'Role Play', 'Secret Power', 'Snatch', 'Snore', 'Spite', 'Swift', 'Thunder Punch', 'Trick', 'Trip Up'];
        eggMoves = ['Confuse Ray', 'Disable', 'Fire Spin', 'Hypnosis', 'Lava Plume', 'Memento', 'Aqua Jet', 'Poison Gas', 'Shadow Sneak', 'Smokescreen'];
        break;

	case 'quimpy':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Toxic', 'Bulk Up', 'Hidden Power', 'Sunny Day', 'Protect', 'Rain Dance', 'Frustration', 'Return', 'Dig', 'Brick Break', 'Double Team', 'Rock Tomb', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Thief', 'Low Sweep', 'Round', 'Echoed Voice', 'Focus Blast', 'False Swipe', 'Fling', 'Retaliate', 'Swords Dance', 'Rock Slide', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Power-Up Punch', 'Confide', 'Cut', 'Banshee Howl', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Fury Cutter', 'Headbutt', 'Helping Hand', 'Hyper Voice', 'Ice Punch', 'Iron Tail', 'Low Kick', 'Natural Gift', 'Rock Climb', 'Role Play', 'Secret Power', 'Snore', 'Sucker Punch', 'Thunder Punch', 'Trip Up', 'Uproar', 'Vacuum Wave', 'Work Up'];
        eggMoves = ['Ear Splitter', 'Fire Fang', 'Howl', 'Ice Fang', 'Jaw Lock', 'Rage', 'Thrash', 'Thunder Fang'];
        break;

	case 'valazman':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = ['Double Kick'];
        tmMoves = ['Hone Claws', 'Toxic', 'Bulk Up', 'Hidden Power', 'Sunny Day', 'Taunt', 'Hyper Beam', 'Protect', 'Rain Dance', 'Frustration', 'Earthquake', 'Return', 'Dig', 'Brick Break', 'Double Team', 'Rock Tomb', 'Aerial Ace', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Low Sweep', 'Round', 'Echoed Voice', 'Focus Blast', 'False Swipe', 'Fling', 'Shadow Claw', 'Payback', 'Retaliate', 'Giga Impact', 'Stone Edge', 'Swords Dance', 'Bulldoze', 'Rock Slide', 'X-Scissor', 'Poison Jab', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Snarl', 'Power-Up Punch', 'Confide', 'Cut', 'Strength', 'Spirit Punch', 'Bravado', 'Daring Dash', 'Aftershock', 'Banshee Howl', 'Piledriver', 'Lariat', 'Brain Press', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Aqua Tail', 'Body Press', 'Brutal Swing', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Dual Chop', 'Endeavor', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Fury Cutter', 'Headbutt', 'Helping Hand', 'Hyper Voice', 'Ice Punch', 'Iron Tail', 'Low Kick', 'Natural Gift', 'Outrage', 'Rock Climb', 'Role Play', 'Secret Power', 'Snatch', 'Snore', 'Stomping Tantrum', 'Sucker Punch', 'Super Fang', 'Superpower', 'Throat Chop', 'Thunder Punch', 'Trip Up', 'Uproar', 'Vacuum Wave', 'Work Up'];
        eggMoves = ['Ear Splitter', 'Fire Fang', 'Howl', 'Ice Fang', 'Jaw Lock', 'Rage', 'Thrash', 'Thunder Fang'];
        break;

	case 'misdreavus':
		moveLevels = [1, 1, 5, 10, 14, 19, 23, 28, 32, 37, 41, 46, 50, 55, 59, 64];
		levelUpMoves = ['Growl', 'Psywave', 'Spite', 'Astonish', 'Confuse Ray', 'Mean Look', 'Hex', 'Psybeam', 'Pain Split', 'Banshee Howl', 'Payback', 'Shadow Ball', 'Perish Song', 'Grudge', 'Power Gem', 'Ear Splitter'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Calm Mind', 'Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Protect', 'Rain Dance', 'Frustration', 'Thunderbolt', 'Thunder', 'Return', 'Psychic', 'Shadow Ball', 'Double Team', 'Aerial Ace', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Echoed Voice', 'Energy Ball', 'Charge Beam', 'Will-O-Wisp', 'Embargo', 'Payback', 'Flash', 'Thunder Wave', 'Psych Up', 'Dream Eater', 'Swagger', 'Sleep Talk', 'Substitute', 'Trick Room', 'Dark Pulse', 'Dazzling Gleam', 'Confide', 'Lunar Beam', 'Banshee Howl', 'Shadow Dart', 'Mind Shatter', 'Psych Out', 'Haunted Terrain', 'Shimmer Shot', 'Polter Juggle', 'Jewel Blast', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Foul Play', 'Headbutt', 'Heal Bell', 'Hyper Voice', 'Icy Wind', 'Magic Coat', 'Magic Room', 'Natural Gift', 'Ominous Wind', 'Pain Split', 'Secret Power', 'Shock Wave', 'Skill Swap', 'Snatch', 'Snore', 'Spite', 'Sucker Punch', 'Swift', 'Telekinesis', 'Trick', 'Trip Up', 'Uproar', 'Wonder Room'];
        eggMoves = ['Curse', 'Destiny Bond', 'Imprison', 'Me First', 'Memento', 'Nasty Plot', 'Screech', 'Shadow Sneak'];
        break;

	case 'mismagius':
		moveLevels = [1, 1, 1, 1, 37, 46, 64];
        levelUpMoves = ['Growl', 'Psywave', 'Spite', 'Astonish', 'Banshee Howl', 'Tritone Chant', 'Ear Splitter'];
		relearnMoves = ['Mystical Fire', 'Power Gem', 'Phantom Force', 'Lucky Chant', 'Magical Leaf'];
        evoMoves = [];
        tmMoves = ['Calm Mind', 'Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Hyper Beam', 'Protect', 'Rain Dance', 'Frustration', 'Thunderbolt', 'Thunder', 'Return', 'Psychic', 'Shadow Ball', 'Double Team', 'Aerial Ace', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Echoed Voice', 'Energy Ball', 'Charge Beam', 'Will-O-Wisp', 'Embargo', 'Payback', 'Giga Impact', 'Flash', 'Thunder Wave', 'Psych Up', 'Dream Eater', 'Swagger', 'Sleep Talk', 'Substitute', 'Trick Room', 'Dark Pulse', 'Dazzling Gleam', 'Confide', 'Lunar Beam', 'Banshee Howl', 'Shadow Dart', 'Mind Shatter', 'Psych Out', 'Haunted Terrain', 'Shimmer Shot', 'Polter Juggle', 'Jewel Blast', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Foul Play', 'Headbutt', 'Heal Bell', 'Hyper Voice', 'Icy Wind', 'Laser Focus', 'Magic Coat', 'Magic Room', 'Natural Gift', 'Ominous Wind', 'Pain Split', 'Secret Power', 'Shock Wave', 'Skill Swap', 'Snatch', 'Snore', 'Spite', 'Sucker Punch', 'Swift', 'Telekinesis', 'Trick', 'Trip Up', 'Uproar', 'Wonder Room'];
        eggMoves = ['Curse', 'Destiny Bond', 'Imprison', 'Me First', 'Memento', 'Nasty Plot', 'Screech', 'Shadow Sneak'];
        break;

	case 'thunderma':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Roar', 'Toxic', 'Venoshock', 'Hidden Power', 'Light Screen', 'Protect', 'Rain Dance', 'Frustration', 'Thunderbolt', 'Thunder', 'Return', 'Dig', 'Double Team', 'Sludge Wave', 'Sludge Bomb', 'Torment', 'Facade', 'Rest', 'Attract', 'Round', 'False Swipe', 'Charge Beam', 'Incinerate', 'Shadow Claw', 'Payback', 'Flash', 'Volt Switch', 'Thunder Wave', 'Dragon Tail', 'Poison Jab', 'Swagger', 'Sleep Talk', 'Substitute', 'Wild Charge', 'Rock Smash', 'Confide', 'Cut', 'Strength', 'Miasma Terrain', 'Static Strike', 'Pulse Storm', 'Berry Share', 'Hidden Gift', 'Clear Sky', 'Acid Rain'];
        tutorMoves = ['Amaze', 'Aqua Tail', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Electroweb', 'Endure', 'Enthrall', 'Fury Cutter', 'Gastro Acid', 'Headbutt', 'Iron Tail', 'Jump-Start', 'Magnet Rise', 'Natural Gift', 'Secret Power', 'Shock Wave', 'Signal Beam', 'Snore', 'Swift'];
        eggMoves = ['Body Slam', 'Corrode', 'Eerie Impulse', 'Night Slash', 'Poison Tail', 'Thunder Shock'];
        break;

	case 'caslot':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Psyshock', 'Calm Mind', 'Roar', 'Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Protect', 'Rain Dance', 'Frustration', 'Thunderbolt', 'Thunder', 'Return', 'Dig', 'Psychic', 'Shadow Ball', 'Double Team', 'Aerial Ace', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'False Swipe', 'Charge Beam', 'Embargo', 'Shadow Claw', 'Payback', 'Retaliate', 'Flash', 'Thunder Wave', 'Psych Up', 'Grass Knot', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Trick Room', 'Snarl', 'Dark Pulse', 'Dazzling Gleam', 'Confide', 'Cut', 'Strength', 'Bravado', 'Lunar Beam', 'Daring Dash', 'Banshee Howl', 'Whirling Dance', 'Shadow Dart', 'Psych Out', 'Hyper-Focus', 'Rainbow Wall', 'Brain Press', 'Shimmer Shot', 'Polter Juggle', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Aqua Tail', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Fury Cutter', 'Gravity', 'Gunk Shot', 'Headbutt', 'Helping Hand', 'Hyper Voice', 'Iron Tail', 'Knock Off', 'Magic Coat', 'Magic Room', 'Natural Gift', 'Ominous Wind', 'Pain Split', 'Revel Dance', 'Secret Power', 'Shock Wave', 'Snatch', 'Snore', 'Spite', 'Sucker Punch', 'Trick', 'Trip Up', 'Uproar', 'Wonder Room', 'Zen Headbutt'];
        eggMoves = ['Confuse Ray', 'Copycat', 'Face Slap', 'Future Sight', 'Hex', 'Night Slash', 'Perish Song', 'Pixie Dust', 'Psywave', 'Tri Attack', 'Trump Card'];
        break;

	case 'heloptile':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Light Screen', 'Protect', 'Rain Dance', 'Frustration', 'Thunderbolt', 'Thunder', 'Return', 'Dig', 'Double Team', 'Sandstorm', 'Rock Tomb', 'Facade', 'Rest', 'Attract', 'Low Sweep', 'Round', 'Charge Beam', 'Flash', 'Volt Switch', 'Thunder Wave', 'Psych Up', 'Bulldoze', 'Dragon Tail', 'Grass Knot', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Wild Charge', 'Dark Pulse', 'Confide', 'Cut', 'Surf', 'Bravado', 'Daring Dash', 'Static Strike', 'Sandblast', 'Pulse Storm', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Electroweb', 'Endure', 'Enthrall', 'Headbutt', 'Iron Tail', 'Jump-Start', 'Magnet Rise', 'Natural Gift', 'Secret Power', 'Shock Wave', 'Signal Beam', 'Snore', 'Swift', 'Work Up'];
        eggMoves = ['Agility', 'Camouflage', 'Glare'];
        break;

	case 'heliolisk':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Eerie Impulse', 'Electrify', 'Razor Wind'];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Hyper Beam', 'Light Screen', 'Protect', 'Rain Dance', 'Frustration', 'Thunderbolt', 'Thunder', 'Return', 'Dig', 'Double Team', 'Sandstorm', 'Rock Tomb', 'Facade', 'Rest', 'Attract', 'Low Sweep', 'Round', 'Focus Blast', 'Charge Beam', 'Giga Impact', 'Flash', 'Volt Switch', 'Thunder Wave', 'Psych Up', 'Bulldoze', 'Dragon Tail', 'Grass Knot', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Wild Charge', 'Dark Pulse', 'Confide', 'Cut', 'Surf', 'Bravado', 'Daring Dash', 'Static Strike', 'Sandblast', 'Pulse Storm', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Breaking Swipe', 'Brutal Swing', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Dragon Pulse', 'Electroweb', 'Endure', 'Enthrall', 'Fire Punch', 'Headbutt', 'Iron Tail', 'Jump-Start', 'Low Kick', 'Magnet Rise', 'Natural Gift', 'Secret Power', 'Shock Wave', 'Signal Beam', 'Snore', 'Swift', 'Thunder Punch', 'Work Up'];
        eggMoves = ['Agility', 'Camouflage', 'Glare'];
        break;

	case 'curlsa':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Roar', 'Toxic', 'Hidden Power', 'Sunny Day', 'Light Screen', 'Protect', 'Rain Dance', 'Frustration', 'Return', 'Dig', 'Brick Break', 'Double Team', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Echoed Voice', 'Fling', 'Psych Up', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Power-Up Punch', 'Dazzling Gleam', 'Confide', 'Strength', 'Lunar Beam', 'Whirling Dance', 'Berry Juicer', 'Rainbow Wall', 'Shimmer Shot', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Gunk Shot', 'Headbutt', 'Heal Bell', 'Hyper Voice', 'Ice Punch', 'Knock Off', 'Last Resort', 'Magic Coat', 'Natural Gift', 'Revel Dance', 'Secret Power', 'Seed Bomb', 'Snore', 'Sucker Punch', 'Superpower', 'Swift', 'Thunder Punch', 'Trick', 'Trip Up', 'Uproar'];
        eggMoves = ['Belch', 'Crush Claw', 'Disarming Voice', 'Fairy Jinx', 'Fake Tears', 'Parting Shot', 'Present', 'Rage', 'Slack Off'];
        break;

	case 'coiffaire':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Roar', 'Toxic', 'Hidden Power', 'Sunny Day', 'Light Screen', 'Protect', 'Rain Dance', 'Frustration', 'Return', 'Dig', 'Brick Break', 'Double Team', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Echoed Voice', 'Fling', 'Psych Up', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Power-Up Punch', 'Dazzling Gleam', 'Confide', 'Strength', 'Lunar Beam', 'Whirling Dance', 'Berry Juicer', 'Rainbow Wall', 'Shimmer Shot', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Gunk Shot', 'Headbutt', 'Heal Bell', 'Hyper Voice', 'Ice Punch', 'Knock Off', 'Last Resort', 'Magic Coat', 'Natural Gift', 'Revel Dance', 'Secret Power', 'Seed Bomb', 'Snore', 'Sucker Punch', 'Superpower', 'Swift', 'Thunder Punch', 'Trick', 'Trip Up', 'Uproar'];
        eggMoves = ['Belch', 'Crush Claw', 'Disarming Voice', 'Fairy Jinx', 'Fake Tears', 'Parting Shot', 'Present', 'Rage', 'Slack Off'];
        break;

	case 'ostento':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Roar', 'Toxic', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Light Screen', 'Protect', 'Rain Dance', 'Frustration', 'Earthquake', 'Return', 'Dig', 'Brick Break', 'Double Team', 'Facade', 'Rest', 'Attract', 'Thief', 'Low Sweep', 'Round', 'Echoed Voice', 'Focus Blast', 'Fling', 'Quash', 'Shadow Claw', 'Giga Impact', 'Swords Dance', 'Psych Up', 'Bulldoze', 'Rock Slide', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Power-Up Punch', 'Dazzling Gleam', 'Confide', 'Cut', 'Strength', 'Bravado', 'Lunar Beam', 'Aftershock', 'Whirling Dance', 'Piledriver', 'Berry Juicer', 'Lariat', 'Rainbow Wall', 'Shimmer Shot', 'Rug Pull', 'Restrain', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Body Press', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Fury Cutter', 'Gunk Shot', 'Headbutt', 'Heal Bell', 'Hyper Voice', 'Ice Punch', 'Knock Off', 'Last Resort', 'Low Kick', 'Magic Coat', 'Natural Gift', 'Revel Dance', 'Secret Power', 'Seed Bomb', 'Snore', 'Stomping Tantrum', 'Sucker Punch', 'Superpower', 'Swift', 'Thunder Punch', 'Trick', 'Trip Up', 'Uproar'];
        eggMoves = ['Belch', 'Crush Claw', 'Disarming Voice', 'Fairy Jinx', 'Fake Tears', 'Parting Shot', 'Present', 'Rage', 'Slack Off'];
        break;

	case 'minijina':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Protect', 'Rain Dance', 'Frustration', 'Thunderbolt', 'Return', 'Dig', 'Psychic', 'Shadow Ball', 'Brick Break', 'Double Team', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Fling', 'Charge Beam', 'Will-O-Wisp', 'Embargo', 'Shadow Claw', 'Payback', 'Thunder Wave', 'Psych Up', 'Dream Eater', 'Swagger', 'Sleep Talk', 'Substitute', 'Trick Room', 'Rock Smash', 'Snarl', 'Dark Pulse', 'Power-Up Punch', 'Confide', 'Strength', 'Spirit Punch', 'Miasma Terrain', 'Banshee Howl', 'Shadow Dart', 'Psych Out', 'Haunted Terrain', 'Brain Press', 'Polter Juggle', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Drain Punch', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Foul Play', 'Headbutt', 'Ice Punch', 'Icy Wind', 'Knock Off', 'Magic Room', 'Natural Gift', 'Ominous Wind', 'Pain Split', 'Role Play', 'Secret Power', 'Shock Wave', 'Snatch', 'Snore', 'Spite', 'Sucker Punch', 'Telekinesis', 'Thunder Punch', 'Trick', 'Trip Up'];
        eggMoves = ['Fake Out', 'Feint Attack', 'Hex', 'Hypnosis', 'Imprison', 'Mist', 'Moonlight', 'Nightmare', 'Night Shade', 'Pursuit'];
        break;

	case 'bojina':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Protect', 'Rain Dance', 'Frustration', 'Thunderbolt', 'Return', 'Dig', 'Psychic', 'Shadow Ball', 'Brick Break', 'Double Team', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Fling', 'Charge Beam', 'Will-O-Wisp', 'Embargo', 'Shadow Claw', 'Payback', 'Thunder Wave', 'Psych Up', 'Dream Eater', 'Swagger', 'Sleep Talk', 'Substitute', 'Trick Room', 'Rock Smash', 'Snarl', 'Dark Pulse', 'Power-Up Punch', 'Confide', 'Strength', 'Spirit Punch', 'Miasma Terrain', 'Banshee Howl', 'Shadow Dart', 'Psych Out', 'Haunted Terrain', 'Brain Press', 'Polter Juggle', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Drain Punch', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Foul Play', 'Headbutt', 'Ice Punch', 'Icy Wind', 'Knock Off', 'Magic Room', 'Natural Gift', 'Ominous Wind', 'Pain Split', 'Role Play', 'Secret Power', 'Shock Wave', 'Snatch', 'Snore', 'Spite', 'Sucker Punch', 'Telekinesis', 'Thunder Punch', 'Trick', 'Trip Up'];
        eggMoves = ['Fake Out', 'Feint Attack', 'Hex', 'Hypnosis', 'Imprison', 'Mist', 'Moonlight', 'Nightmare', 'Night Shade', 'Pursuit'];
        break;

	case 'noperajina':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Retribution'];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Roar', 'Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Hyper Beam', 'Protect', 'Rain Dance', 'Frustration', 'Thunderbolt', 'Earthquake', 'Return', 'Dig', 'Psychic', 'Shadow Ball', 'Brick Break', 'Double Team', 'Aerial Ace', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Low Sweep', 'Round', 'Focus Blast', 'False Swipe', 'Fling', 'Charge Beam', 'Will-O-Wisp', 'Embargo', 'Shadow Claw', 'Payback', 'Giga Impact', 'Thunder Wave', 'Psych Up', 'Bulldoze', 'Rock Slide', 'Dream Eater', 'Swagger', 'Sleep Talk', 'Substitute', 'Trick Room', 'Rock Smash', 'Snarl', 'Dark Pulse', 'Power-Up Punch', 'Confide', 'Cut', 'Strength', 'Spirit Punch', 'Aftershock', 'Miasma Terrain', 'Banshee Howl', 'Piledriver', 'Shadow Dart', 'Psych Out', 'Haunted Terrain', 'Lariat', 'Brain Press', 'Polter Juggle', 'Rug Pull', 'Restrain', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Body Press', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Drain Punch', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Foul Play', 'Fury Cutter', 'Headbutt', 'Ice Punch', 'Icy Wind', 'Knock Off', 'Magic Room', 'Natural Gift', 'Ominous Wind', 'Pain Split', 'Role Play', 'Secret Power', 'Shock Wave', 'Snatch', 'Snore', 'Spite', 'Stomping Tantrum', 'Sucker Punch', 'Superpower', 'Telekinesis', 'Thunder Punch', 'Trick', 'Trip Up'];
        eggMoves = ['Fake Out', 'Feint Attack', 'Hex', 'Hypnosis', 'Imprison', 'Mist', 'Moonlight', 'Nightmare', 'Night Shade', 'Pursuit'];
        break;

	case 'heatmor':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Hone Claws'];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Toxic', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Protect', 'Frustration', 'Solar Beam', 'Return', 'Dig', 'Double Team', 'Flamethrower', 'Fire Blast', 'Rock Tomb', 'Aerial Ace', 'Facade', 'Flame Charge', 'Rest', 'Attract', 'Thief', 'Round', 'Overheat', 'Focus Blast', 'Fling', 'Incinerate', 'Will-O-Wisp', 'Shadow Claw', 'Giga Impact', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Power-Up Punch', 'Confide', 'Cut', 'Bravado', 'Burning Strike', 'Berry Juicer', 'Burn Away', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Bind', 'Bug Bite', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Gastro Acid', 'Giga Drain', 'Headbutt', 'Heat Wave', 'Knock Off', 'Low Kick', 'Natural Gift', 'Recycle', 'Rock Climb', 'Secret Power', 'Snatch', 'Snore', 'Stomping Tantrum', 'Sucker Punch', 'Superpower', 'Swift', 'Throat Chop', 'Thunder Punch'];
        eggMoves = ['Belch', 'Body Slam', 'Curse', 'Feint Attack', 'Night Slash', 'Pursuit', 'Tickle', 'Wrap'];
        break;

	case 'durant':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Guillotine', 'Iron Defense', 'Metal Sound'];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Toxic', 'Hidden Power', 'Hyper Beam', 'Protect', 'Frustration', 'Return', 'Dig', 'Double Team', 'Sandstorm', 'Rock Tomb', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Round', 'Energy Ball', 'False Swipe', 'Shadow Claw', 'Retaliate', 'Giga Impact', 'Rock Polish', 'Stone Edge', 'Struggle Bug', 'Rock Slide', 'X-Scissor', 'Swagger', 'Sleep Talk', 'Substitute', 'Flash Cannon', 'Rock Smash', 'Confide', 'Cut', 'Strength', 'Diamond Claw', 'Daring Dash', 'Sandblast', 'Noxious Acid', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Bug Bite', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endeavor', 'Endure', 'Enthrall', 'Headbutt', 'Iron Defense', 'Iron Head', 'Magnet Rise', 'Natural Gift', 'Rock Climb', 'Secret Power', 'Snore', 'Steel Beam', 'Superpower'];
        eggMoves = ['Baton Pass', 'Feint Attack', 'Screech', 'Thunder Fang'];
        break;

	case 'phanpy':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Roar', 'Toxic', 'Hidden Power', 'Sunny Day', 'Protect', 'Frustration', 'Earthquake', 'Return', 'Double Team', 'Sandstorm', 'Rock Tomb', 'Facade', 'Rest', 'Attract', 'Round', 'Echoed Voice', 'Bulldoze', 'Rock Slide', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Confide', 'Strength', 'Aftershock', 'Sandblast', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Ancient Power', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Earth Power', 'Endure', 'Enthrall', 'Frenzy Plant', 'Gunk Shot', 'Headbutt', 'Hyper Voice', 'Iron Tail', 'Knock Off', 'Last Resort', 'Natural Gift', 'Rollout', 'Secret Power', 'Seed Bomb', 'Snore', 'Stealth Rock', 'Superpower'];
        eggMoves = ['Body Slam', 'Boulder Crash', 'Counter', 'Fissure', 'Focus Energy', 'Head Smash', 'Heavy Slam', 'Ice Shard', 'Play Rough'];
        break;

	case 'donphan':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Fire Fang', 'Thunder Fang'];
        evoMoves = [];
        tmMoves = ['Roar', 'Toxic', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Protect', 'Frustration', 'Earthquake', 'Return', 'Double Team', 'Sandstorm', 'Rock Tomb', 'Facade', 'Rest', 'Attract', 'Round', 'Echoed Voice', 'Giga Impact', 'Rock Polish', 'Stone Edge', 'Gyro Ball', 'Bulldoze', 'Rock Slide', 'Poison Jab', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Confide', 'Strength', 'Aftershock', 'Sandblast', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Ancient Power', 'Block', 'Bounce', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Earth Power', 'Endure', 'Enthrall', 'Frenzy Plant', 'Gunk Shot', 'Headbutt', 'Hyper Voice', 'Iron Defense', 'Iron Tail', 'Knock Off', 'Last Resort', 'Natural Gift', 'Rollout', 'Secret Power', 'Seed Bomb', 'Snore', 'Stealth Rock', 'Stomping Tantrum', 'Superpower'];
        eggMoves = ['Body Slam', 'Boulder Crash', 'Counter', 'Fissure', 'Focus Energy', 'Head Smash', 'Heavy Slam', 'Ice Shard', 'Play Rough'];
        break;

	case 'fallorite':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Protect', 'Frustration', 'Smack Down', 'Earthquake', 'Return', 'Double Team', 'Flamethrower', 'Fire Blast', 'Rock Tomb', 'Facade', 'Flame Charge', 'Rest', 'Round', 'Overheat', 'Incinerate', 'Will-O-Wisp', 'Explosion', 'Rock Polish', 'Stone Edge', 'Gyro Ball', 'Bulldoze', 'Rock Slide', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Confide', 'Strength', 'Aftershock', 'Phoenix Fire', 'Crystallize', 'Sandblast', 'Burning Strike', 'Magnet Switch', 'Burn Away', 'Jewel Blast', 'Pulverize', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Ancient Power', 'Body Press', 'Confound', 'Dazzle', 'Demolish', 'Earth Power', 'Endure', 'Enthrall', 'Headbutt', 'Heat Wave', 'Iron Defense', 'Iron Head', 'Natural Gift', 'Rollout', 'Secret Power', 'Snore', 'Stealth Rock', 'Stomping Tantrum', 'Superpower', 'Swift'];
        eggMoves = [];
        break;

	case 'volstarite':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Flare Blitz', 'Burn Up', 'Skull Bash'];
        evoMoves = [];
        tmMoves = ['Roar', 'Toxic', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Protect', 'Frustration', 'Solar Beam', 'Smack Down', 'Earthquake', 'Return', 'Double Team', 'Flamethrower', 'Fire Blast', 'Rock Tomb', 'Facade', 'Flame Charge', 'Rest', 'Round', 'Overheat', 'Incinerate', 'Will-O-Wisp', 'Explosion', 'Giga Impact', 'Rock Polish', 'Stone Edge', 'Gyro Ball', 'Bulldoze', 'Rock Slide', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Confide', 'Strength', 'Lunar Beam', 'Aftershock', 'Phoenix Fire', 'Crystallize', 'Sandblast', 'Golden Flame', 'Burning Strike', 'Magnet Switch', 'Burn Away', 'Jewel Blast', 'Pulverize', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Ancient Power', 'Body Press', 'Confound', 'Dazzle', 'Demolish', 'Draco Meteor', 'Dragon Pulse', 'Earth Power', 'Endure', 'Enthrall', 'Headbutt', 'Heat Wave', 'Iron Defense', 'Iron Head', 'Natural Gift', 'Rollout', 'Secret Power', 'Snore', 'Stealth Rock', 'Stomping Tantrum', 'Superpower', 'Swift'];
        eggMoves = ['Curse', 'Fire Spin', 'Self-Destruct'];
        break;

	case 'murkrow':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Calm Mind', 'Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Protect', 'Rain Dance', 'Roost', 'Frustration', 'Return', 'Psychic', 'Shadow Ball', 'Double Team', 'Aerial Ace', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Steel Wing', 'Quash', 'Embargo', 'Payback', 'Retaliate', 'Thunder Wave', 'Psych Up', 'Dream Eater', 'Swagger', 'Sleep Talk', 'Substitute', 'Snarl', 'Dark Pulse', 'Confide', 'Fly', 'Bravado', 'Windstorm', 'Shadow Dart', 'Psych Out', 'Turbulence', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Air Cutter', 'Amaze', 'Captivate', 'Confound', 'Dazzle', 'Defog', 'Demolish', 'Eagle Eye', 'Endure', 'Enthrall', 'Foul Play', 'Heat Wave', 'Icy Wind', 'Natural Gift', 'Ominous Wind', 'Pluck', 'Secret Power', 'Sky Attack', 'Snatch', 'Snore', 'Spite', 'Sucker Punch', 'Swift', 'Tailwind', 'Trip Up', 'Twister', 'Uproar'];
        eggMoves = ['Assurance', 'Brave Bird', 'Confuse Ray', 'Drill Peck', 'Feather Dance', 'Flatter', 'Mirror Coat', 'Perish Song', 'Psycho Shift', 'Screech', 'Whirlwind'];
        break;

	case 'honchkrow':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Night Slash', 'Sucker Punch'];
        evoMoves = [];
        tmMoves = ['Calm Mind', 'Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Hyper Beam', 'Protect', 'Rain Dance', 'Roost', 'Frustration', 'Return', 'Psychic', 'Shadow Ball', 'Double Team', 'Aerial Ace', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Steel Wing', 'Incinerate', 'Quash', 'Embargo', 'Payback', 'Retaliate', 'Giga Impact', 'Thunder Wave', 'Psych Up', 'Dream Eater', 'Swagger', 'Sleep Talk', 'Substitute', 'Snarl', 'Dark Pulse', 'Confide', 'Fly', 'Bravado', 'Windstorm', 'Shadow Dart', 'Psych Out', 'High-Speed Dive', 'Turbulence', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Air Cutter', 'Amaze', 'Captivate', 'Confound', 'Dazzle', 'Defog', 'Demolish', 'Eagle Eye', 'Endure', 'Enthrall', 'Foul Play', 'Heat Wave', 'Icy Wind', 'Natural Gift', 'Ominous Wind', 'Pluck', 'Secret Power', 'Sky Attack', 'Snatch', 'Snore', 'Spite', 'Sucker Punch', 'Superpower', 'Swift', 'Tailwind', 'Trip Up', 'Twister', 'Uproar'];
        eggMoves = ['Assurance', 'Brave Bird', 'Confuse Ray', 'Drill Peck', 'Feather Dance', 'Flatter', 'Mirror Coat', 'Perish Song', 'Psycho Shift', 'Screech', 'Whirlwind'];
        break;

	case 'sableye':
		moveLevels = [1, 1, 4, 6, 9, 11, 14, 16, 19, 21, 24, 26, 29, 31, 34, 36, 39, 41, 44, 46];
		levelUpMoves = ['Leer', 'Scratch', 'Foresight', 'Night Shade', 'Astonish', 'Fury Swipes', 'Detect', 'Shadow Sneak', 'Feint Attack', 'Fake Out', 'Punishment', 'Knock Off', 'Shadow Claw', 'Confuse Ray', 'Zen Headbutt', 'Power Gem', 'Shadow Ball', 'Foul Play', 'Quash', 'Mean Look'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Calm Mind', 'Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Protect', 'Rain Dance', 'Frustration', 'Return', 'Dig', 'Psychic', 'Shadow Ball', 'Double Team', 'Rock Tomb', 'Aerial Ace', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Low Sweep', 'Round', 'Fling', 'Incinerate', 'Quash', 'Will-O-Wisp', 'Shadow Claw', 'Payback', 'Retaliate', 'Flash', 'Psych Up', 'Poison Jab', 'Dream Eater', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Snarl', 'Dark Pulse', 'Power-Up Punch', 'Dazzling Gleam', 'Confide', 'Cut', 'Spirit Punch', 'Diamond Claw', 'Shadow Dart', 'Crystallize', 'Psych Out', 'Haunted Terrain', 'Hyper-Focus', 'Brain Press', 'Shimmer Shot', 'Polter Juggle', 'Jewel Blast', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Eagle Eye', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Foul Play', 'Fury Cutter', 'Gravity', 'Headbutt', 'Ice Punch', 'Icy Wind', 'Knock Off', 'Low Kick', 'Magic Coat', 'Natural Gift', 'Ominous Wind', 'Pain Split', 'Role Play', 'Secret Power', 'Shock Wave', 'Signal Beam', 'Snatch', 'Snore', 'Spite', 'Sucker Punch', 'Telekinesis', 'Thunder Punch', 'Trick', 'Trip Up', 'Wonder Room', 'Zen Headbutt'];
        eggMoves = ['Feint', 'Flatter', 'Imprison', 'Mean Look', 'Metal Burst', 'Moonlight', 'Nasty Plot', 'Recover'];
        break;

	case 'mawile':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Play Rough', 'Iron Head'];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Ice Beam', 'Hyper Beam', 'Protect', 'Rain Dance', 'Frustration', 'Solar Beam', 'Return', 'Shadow Ball', 'Brick Break', 'Double Team', 'Flamethrower', 'Sludge Bomb', 'Sandstorm', 'Fire Blast', 'Rock Tomb', 'Torment', 'Facade', 'Rest', 'Attract', 'Round', 'Focus Blast', 'False Swipe', 'Fling', 'Charge Beam', 'Incinerate', 'Embargo', 'Payback', 'Giga Impact', 'Stone Edge', 'Swords Dance', 'Psych Up', 'Rock Slide', 'Grass Knot', 'Swagger', 'Sleep Talk', 'Substitute', 'Flash Cannon', 'Rock Smash', 'Confide', 'Strength', 'Whirling Dance', 'Piledriver', 'Sandblast', 'Psych Out', 'Magnet Switch', 'Rug Pull', 'Pulverize', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Ancient Power', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Focus Punch', 'Foul Play', 'Headbutt', 'Ice Punch', 'Icy Wind', 'Iron Defense', 'Iron Head', 'Knock Off', 'Laser Focus', 'Last Resort', 'Magnet Rise', 'Natural Gift', 'Pain Split', 'Revel Dance', 'Secret Power', 'Snatch', 'Snore', 'Stealth Rock', 'Steel Beam', 'Sucker Punch', 'Super Fang', 'Thunder Punch', 'Trip Up'];
        eggMoves = ['Fire Fang', 'Guard Swap', 'Ice Fang', 'Metal Burst', 'Misty Terrain', 'Poison Fang', 'Punishment', 'Seismic Toss', 'Slam', 'Thunder Fang', 'Tickle'];
        break;

	case 'sparcoil':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Starshot'];
        evoMoves = [];
        tmMoves = ['Toxic', 'Bulk Up', 'Hidden Power', 'Sunny Day', 'Taunt', 'Hyper Beam', 'Protect', 'Frustration', 'Solar Beam', 'Return', 'Brick Break', 'Double Team', 'Flamethrower', 'Fire Blast', 'Torment', 'Facade', 'Flame Charge', 'Rest', 'Attract', 'Thief', 'Low Sweep', 'Round', 'Overheat', 'Focus Blast', 'Fling', 'Incinerate', 'Will-O-Wisp', 'Acrobatics', 'Payback', 'Giga Impact', 'Flash', 'Swords Dance', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Rock Smash', 'Power-Up Punch', 'Confide', 'Strength', 'Spirit Punch', 'Bravado', 'Daring Dash', 'Whirling Dance', 'Phoenix Fire', 'Psych Out', 'Burning Strike', 'Lariat', 'Burn Away', 'Brain Press', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Bounce', 'Brutal Swing', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Drain Punch', 'Endeavor', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Foul Play', 'Headbutt', 'Heat Wave', 'Helping Hand', 'Iron Tail', 'Knock Off', 'Low Kick', 'Natural Gift', 'Revel Dance', 'Rock Climb', 'Role Play', 'Secret Power', 'Snatch', 'Snore', 'Spite', 'Sucker Punch', 'Swift', 'Thunder Punch', 'Trip Up', 'Uproar', 'Work Up'];
        eggMoves = ['Assurance', 'Blaze Kick', 'Focus Energy', 'High Jump Kick', 'Play Rough', 'Punishment', 'Revenge', 'Teeter Dance'];
        break;

	case 'lamanda':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Dragon Claw', 'Toxic', 'Hidden Power', 'Sunny Day', 'Protect', 'Rain Dance', 'Safeguard', 'Frustration', 'Return', 'Dig', 'Double Team', 'Flamethrower', 'Fire Blast', 'Rock Tomb', 'Facade', 'Rest', 'Attract', 'Round', 'Incinerate', 'Dragon Tail', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Confide', 'Phoenix Fire', 'Golden Flame', 'Radiant Claw', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Ancient Power', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Draco Meteor', 'Dragon Pulse', 'Endure', 'Enthrall', 'Headbutt', 'Invigorate', 'Iron Tail', 'Natural Gift', 'Secret Power', 'Snore', 'Swift', 'Twister'];
        eggMoves = ['Amnesia', 'Bite', 'Chip Away', 'Crunch', 'Disable', 'Slash', 'Yawn'];
        break;

	case 'marvelisk':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = ['Dragon Breath'];
        tmMoves = ['Hone Claws', 'Dragon Claw', 'Roar', 'Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Ice Beam', 'Blizzard', 'Hyper Beam', 'Protect', 'Rain Dance', 'Safeguard', 'Frustration', 'Thunderbolt', 'Thunder', 'Earthquake', 'Return', 'Dig', 'Brick Break', 'Double Team', 'Flamethrower', 'Fire Blast', 'Rock Tomb', 'Aerial Ace', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Low Sweep', 'Round', 'Focus Blast', 'False Swipe', 'Fling', 'Incinerate', 'Quash', 'Embargo', 'Shadow Claw', 'Giga Impact', 'Thunder Wave', 'Psych Up', 'Bulldoze', 'Rock Slide', 'Dragon Tail', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Power-Up Punch', 'Confide', 'Strength', 'Spirit Punch', 'Bravado', 'Daring Dash', 'Aftershock', 'Dragon Roar', 'Phoenix Fire', 'Golden Flame', 'Psych Out', 'Hyper-Focus', 'Lariat', 'Radiant Claw', 'Burn Away', 'Hero Rally', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Ancient Power', 'Aqua Tail', 'Breaking Swipe', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Draco Meteor', 'Dragon Pulse', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Fury Cutter', 'Headbutt', 'Ice Punch', 'Invigorate', 'Iron Tail', 'Low Kick', 'Natural Gift', 'Outrage', 'Rock Climb', 'Secret Power', 'Snore', 'Swift', 'Thunder Punch', 'Twister'];
        eggMoves = ['Amnesia', 'Bite', 'Chip Away', 'Crunch', 'Disable', 'Slash', 'Yawn'];
        break;

	case 'hawlucha':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Toxic', 'Bulk Up', 'Hidden Power', 'Sunny Day', 'Taunt', 'Protect', 'Rain Dance', 'Roost', 'Frustration', 'Return', 'Dig', 'Brick Break', 'Double Team', 'Rock Tomb', 'Aerial Ace', 'Torment', 'Facade', 'Rest', 'Attract', 'Low Sweep', 'Round', 'Steel Wing', 'Focus Blast', 'False Swipe', 'Fling', 'Sky Drop', 'Acrobatics', 'Payback', 'Retaliate', 'Giga Impact', 'Stone Edge', 'Swords Dance', 'Rock Slide', 'X-Scissor', 'Poison Jab', 'Grass Knot', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Rock Smash', 'Power-Up Punch', 'Confide', 'Cut', 'Fly', 'Strength', 'Spirit Punch', 'Bravado', 'Windstorm', 'Daring Dash', 'High-Speed Dive', 'Lariat', 'Brain Press', 'Turbulence', 'Hero Rally', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Air Cutter', 'Amaze', 'Body Press', 'Bounce', 'Captivate', 'Confound', 'Dazzle', 'Defog', 'Demolish', 'Dual Chop', 'Eagle Eye', 'Endeavor', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Fury Cutter', 'Headbutt', 'Heat Wave', 'Helping Hand', 'Laser Focus', 'Low Kick', 'Natural Gift', 'Ominous Wind', 'Pluck', 'Secret Power', 'Sky Attack', 'Snore', 'Superpower', 'Swift', 'Tailwind', 'Throat Chop', 'Thunder Punch', 'Twister', 'Vacuum Wave', 'Work Up'];
        eggMoves = ['Ally Switch', 'Baton Pass', 'Entrainment', 'Feint', 'Me First', 'Mean Look', 'Quick Guard'];
        break;

	case 'onzarudo':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Roar', 'Toxic', 'Bulk Up', 'Hidden Power', 'Sunny Day', 'Taunt', 'Protect', 'Rain Dance', 'Frustration', 'Smack Down', 'Earthquake', 'Return', 'Dig', 'Shadow Ball', 'Brick Break', 'Double Team', 'Rock Tomb', 'Aerial Ace', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Low Sweep', 'Round', 'Focus Blast', 'False Swipe', 'Fling', 'Embargo', 'Payback', 'Retaliate', 'Giga Impact', 'Stone Edge', 'Swords Dance', 'Bulldoze', 'Rock Slide', 'X-Scissor', 'Poison Jab', 'Grass Knot', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Rock Smash', 'Snarl', 'Power-Up Punch', 'Confide', 'Cut', 'Strength', 'Spirit Punch', 'Bravado', 'Daring Dash', 'Aftershock', 'Piledriver', 'Shadow Dart', 'Psych Out', 'Oil Slick', 'Lariat', 'Brain Press', 'Rug Pull', 'Pulverize', 'Restrain', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Body Press', 'Brutal Swing', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Dual Chop', 'Endeavor', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Foul Play', 'Fury Cutter', 'Headbutt', 'Helping Hand', 'Ice Punch', 'Iron Head', 'Iron Tail', 'Knock Off', 'Laser Focus', 'Last Resort', 'Low Kick', 'Natural Gift', 'Outrage', 'Rock Climb', 'Secret Power', 'Snatch', 'Snore', 'Spite', 'Stomping Tantrum', 'Sucker Punch', 'Superpower', 'Throat Chop', 'Thunder Punch', 'Trip Up', 'Vacuum Wave', 'Work Up', 'Zen Headbutt'];
        eggMoves = ['Ally Switch', 'Circle Throw', 'Fire Fang', 'Ice Fang', 'Power Trip', 'Rolling Kick', 'Sand Attack', 'Thunder Fang'];
        break;

	case 'shuckle':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Sticky Web'];
        evoMoves = [];
        tmMoves = ['Toxic', 'Venoshock', 'Hidden Power', 'Sunny Day', 'Protect', 'Safeguard', 'Frustration', 'Smack Down', 'Earthquake', 'Return', 'Dig', 'Double Team', 'Sludge Wave', 'Sludge Bomb', 'Sandstorm', 'Rock Tomb', 'Facade', 'Rest', 'Attract', 'Round', 'Rock Polish', 'Flash', 'Stone Edge', 'Gyro Ball', 'Struggle Bug', 'Bulldoze', 'Rock Slide', 'Infestation', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Confide', 'Strength', 'Aftershock', 'Compost Bomb', 'Crystallize', 'Sandblast', 'Oil Slick', 'Berry Juicer', 'Mudslide', 'Noxious Acid', 'Berry Share', 'Hidden Gift', 'Clear Sky', 'Acid Rain'];
        tutorMoves = ['After You', 'Amaze', 'Ancient Power', 'Bind', 'Bug Bite', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Earth Power', 'Endure', 'Enthrall', 'Gastro Acid', 'Headbutt', 'Helping Hand', 'Knock Off', 'Natural Gift', 'Rollout', 'Secret Power', 'Snore', 'Stealth Rock'];
        eggMoves = ['Acid', 'Acupressure', 'Final Gambit', 'Mud-Slap', 'Rock Blast', 'Sand Tomb', 'Sweet Scent'];
        break;

	case 'numel':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Hidden Power', 'Sunny Day', 'Protect', 'Frustration', 'Earthquake', 'Return', 'Dig', 'Double Team', 'Flamethrower', 'Sandstorm', 'Fire Blast', 'Rock Tomb', 'Facade', 'Flame Charge', 'Rest', 'Attract', 'Round', 'Echoed Voice', 'Overheat', 'Incinerate', 'Will-O-Wisp', 'Bulldoze', 'Rock Slide', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Nature Power', 'Confide', 'Strength', 'Aftershock', 'Sandblast', 'Burning Strike', 'Mudslide', 'Burn Away', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['After You', 'Amaze', 'Ancient Power', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Earth Power', 'Endure', 'Enthrall', 'Headbutt', 'Heat Wave', 'Iron Head', 'Natural Gift', 'Rollout', 'Secret Power', 'Snore', 'Stealth Rock'];
        eggMoves = ['Body Slam', 'Defense Curl', 'Growth', 'Howl', 'Mud Bomb', 'Scary Face', 'Spit Up', 'Stockpile', 'Stomp', 'Swallow'];
        break;

	case 'camerupt':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Fissure', 'Eruption'];
        evoMoves = [];
        tmMoves = ['Roar', 'Toxic', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Protect', 'Frustration', 'Solar Beam', 'Earthquake', 'Return', 'Dig', 'Double Team', 'Flamethrower', 'Sandstorm', 'Fire Blast', 'Rock Tomb', 'Facade', 'Flame Charge', 'Rest', 'Attract', 'Round', 'Echoed Voice', 'Overheat', 'Incinerate', 'Will-O-Wisp', 'Explosion', 'Giga Impact', 'Rock Polish', 'Stone Edge', 'Bulldoze', 'Rock Slide', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Nature Power', 'Confide', 'Strength', 'Aftershock', 'Sandblast', 'Burning Strike', 'Mudslide', 'Burn Away', 'Pulverize', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['After You', 'Amaze', 'Ancient Power', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Earth Power', 'Endure', 'Enthrall', 'Headbutt', 'Heat Wave', 'Iron Head', 'Natural Gift', 'Rollout', 'Secret Power', 'Snore', 'Stealth Rock', 'Stomping Tantrum'];
        eggMoves = ['Body Slam', 'Defense Curl', 'Growth', 'Howl', 'Mud Bomb', 'Scary Face', 'Spit Up', 'Stockpile', 'Stomp', 'Swallow'];
        break;

	case 'torranel':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Morning Sun', 'Thunder Fang', 'Burn Away'];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Dragon Claw', 'Roar', 'Toxic', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Protect', 'Frustration', 'Solar Beam', 'Earthquake', 'Return', 'Brick Break', 'Double Team', 'Flamethrower', 'Fire Blast', 'Rock Tomb', 'Aerial Ace', 'Facade', 'Flame Charge', 'Rest', 'Attract', 'Round', 'Overheat', 'Focus Blast', 'Energy Ball', 'False Swipe', 'Fling', 'Incinerate', 'Will-O-Wisp', 'Shadow Claw', 'Payback', 'Giga Impact', 'Stone Edge', 'Bulldoze', 'Rock Slide', 'Dragon Tail', 'Swagger', 'Sleep Talk', 'Substitute', 'Wild Charge', 'Rock Smash', 'Confide', 'Cut', 'Strength', 'Bravado', 'Daring Dash', 'Aftershock', 'Dragon Roar', 'Phoenix Fire', 'Golden Flame', 'Radiant Claw', 'Burn Away', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Ancient Power', 'Body Press', 'Breaking Swipe', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Draco Meteor', 'Dragon Pulse', 'Earth Power', 'Endure', 'Enthrall', 'Fire Punch', 'Fury Cutter', 'Headbutt', 'Heat Wave', 'Iron Tail', 'Natural Gift', 'Outrage', 'Secret Power', 'Snore', 'Stomping Tantrum', 'Swift', 'Twister'];
        eggMoves = ['Chip Away', 'Dragon Breath', 'Dragon Dance', 'Dragon Rage', 'Inferno', 'Jaw Thrash', 'Take Down', 'Wide Guard', 'Yawn'];
        break;

	case 'smeargle':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = [];
        tutorMoves = [];
        eggMoves = [];
        break;

	case 'galorindle':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Calm Mind', 'Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Light Screen', 'Protect', 'Rain Dance', 'Safeguard', 'Frustration', 'Thunderbolt', 'Thunder', 'Return', 'Psychic', 'Shadow Ball', 'Double Team', 'Reflect', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Energy Ball', 'Fling', 'Charge Beam', 'Will-O-Wisp', 'Embargo', 'Shadow Claw', 'Payback', 'Flash', 'Thunder Wave', 'Psych Up', 'Grass Knot', 'Swagger', 'Sleep Talk', 'Substitute', 'Flash Cannon', 'Trick Room', 'Rock Smash', 'Dark Pulse', 'Power-Up Punch', 'Dazzling Gleam', 'Confide', 'Spirit Punch', 'Lunar Beam', 'Shadow Dart', 'Haunted Terrain', 'Shimmer Shot', 'Polter Juggle', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['After You', 'Amaze', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Drain Punch', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Helping Hand', 'Ice Punch', 'Icy Wind', 'Knock Off', 'Laser Focus', 'Natural Gift', 'Ominous Wind', 'Pain Split', 'Recycle', 'Role Play', 'Secret Power', 'Shock Wave', 'Signal Beam', 'Snatch', 'Snore', 'Spite', 'Sucker Punch', 'Swift', 'Telekinesis', 'Thunder Punch', 'Trick', 'Trip Up'];
        eggMoves = ['Confuse Ray', 'Feint Attack', 'Fake Out', 'Follow Me', 'Hex', 'Hypnosis', 'Imprison', 'Night Shade', 'Phantom Force'];
        break;

	case 'galaraud':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Thief', 'Snatch'];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Calm Mind', 'Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Hyper Beam', 'Light Screen', 'Protect', 'Rain Dance', 'Safeguard', 'Frustration', 'Thunderbolt', 'Thunder', 'Return', 'Psychic', 'Shadow Ball', 'Brick Break', 'Double Team', 'Reflect', 'Aerial Ace', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Focus Blast', 'Energy Ball', 'Fling', 'Charge Beam', 'Will-O-Wisp', 'Embargo', 'Shadow Claw', 'Payback', 'Giga Impact', 'Flash', 'Thunder Wave', 'Psych Up', 'Grass Knot', 'Swagger', 'Sleep Talk', 'Substitute', 'Flash Cannon', 'Trick Room', 'Rock Smash', 'Dark Pulse', 'Power-Up Punch', 'Dazzling Gleam', 'Confide', 'Spirit Punch', 'Lunar Beam', 'Shadow Dart', 'Psych Out', 'Haunted Terrain', 'Brain Press', 'Shimmer Shot', 'Polter Juggle', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['After You', 'Amaze', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Drain Punch', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Helping Hand', 'Ice Punch', 'Icy Wind', 'Knock Off', 'Laser Focus', 'Low Kick', 'Natural Gift', 'Ominous Wind', 'Pain Split', 'Recycle', 'Role Play', 'Secret Power', 'Shock Wave', 'Signal Beam', 'Snatch', 'Snore', 'Spite', 'Sucker Punch', 'Swift', 'Telekinesis', 'Thunder Punch', 'Trick', 'Trip Up'];
        eggMoves = ['Confuse Ray', 'Feint Attack', 'Fake Out', 'Follow Me', 'Hex', 'Hypnosis', 'Imprison', 'Night Shade', 'Phantom Force'];
        break;

	case 'galoryph':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Hidden Power', 'Guard Swap'];
        evoMoves = [];
        tmMoves = ['Psyshock', 'Calm Mind', 'Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Hyper Beam', 'Light Screen', 'Protect', 'Rain Dance', 'Safeguard', 'Frustration', 'Thunderbolt', 'Thunder', 'Return', 'Psychic', 'Shadow Ball', 'Brick Break', 'Double Team', 'Reflect', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Focus Blast', 'Energy Ball', 'Fling', 'Charge Beam', 'Will-O-Wisp', 'Embargo', 'Shadow Claw', 'Payback', 'Giga Impact', 'Flash', 'Thunder Wave', 'Psych Up', 'Dream Eater', 'Grass Knot', 'Swagger', 'Sleep Talk', 'Substitute', 'Flash Cannon', 'Trick Room', 'Rock Smash', 'Dark Pulse', 'Power-Up Punch', 'Dazzling Gleam', 'Confide', 'Spirit Punch', 'Lunar Beam', 'Shadow Dart', 'Mind Shatter', 'Haunted Terrain', 'Hyper-Focus', 'Brain Press', 'Shimmer Shot', 'Polter Juggle', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['After You', 'Amaze', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Drain Punch', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Gravity', 'Helping Hand', 'Ice Punch', 'Icy Wind', 'Knock Off', 'Laser Focus', 'Link Pulse', 'Magic Coat', 'Magic Room', 'Natural Gift', 'Ominous Wind', 'Pain Split', 'Recycle', 'Role Play', 'Secret Power', 'Shock Wave', 'Signal Beam', 'Skill Swap', 'Snatch', 'Snore', 'Spite', 'Sucker Punch', 'Swift', 'Telekinesis', 'Thunder Punch', 'Trick', 'Trip Up', 'Zen Headbutt'];
        eggMoves = ['Confuse Ray', 'Feint Attack', 'Fake Out', 'Follow Me', 'Hex', 'Hypnosis', 'Imprison', 'Night Shade', 'Phantom Force'];
        break;

	case 'pindillo':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Toxic', 'Hidden Power', 'Sunny Day', 'Protect', 'Safeguard', 'Frustration', 'Return', 'Dig', 'Double Team', 'Sandstorm', 'Rock Tomb', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Echoed Voice', 'False Swipe', 'Shadow Claw', 'Gyro Ball', 'Swords Dance', 'Bulldoze', 'X-Scissor', 'Poison Jab', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Confide', 'Cut', 'Strength', 'Lunar Beam', 'Rainbow Wall', 'Shimmer Shot', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['After You', 'Amaze', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Fury Cutter', 'Headbutt', 'Helping Hand', 'Hyper Voice', 'Iron Defense', 'Iron Head', 'Last Resort', 'Natural Gift', 'Revel Dance', 'Rock Climb', 'Rollout', 'Secret Power', 'Snore', 'Stealth Rock', 'Uproar'];
        eggMoves = ['Belly Drum', 'Fairy Ring', 'Follow Me', 'Metal Claw', 'Pixie Dust', 'Play Nice', 'Pressure Wave', 'Rototiller', 'Sand Tomb', 'Slash'];
        break;

	case 'charandillo':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Fairy Dance'];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Toxic', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Protect', 'Safeguard', 'Frustration', 'Earthquake', 'Return', 'Dig', 'Brick Break', 'Double Team', 'Sandstorm', 'Rock Tomb', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Echoed Voice', 'Focus Blast', 'False Swipe', 'Fling', 'Shadow Claw', 'Giga Impact', 'Rock Polish', 'Stone Edge', 'Gyro Ball', 'Swords Dance', 'Bulldoze', 'Rock Slide', 'X-Scissor', 'Poison Jab', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Power-Up Punch', 'Confide', 'Cut', 'Strength', 'Lunar Beam', 'Diamond Claw', 'Aftershock', 'Whirling Dance', 'Sandblast', 'Lariat', 'Rainbow Wall', 'Mudslide', 'Shimmer Shot', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['After You', 'Amaze', 'Aqua Tail', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Earth Power', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Fury Cutter', 'Headbutt', 'Helping Hand', 'Hyper Voice', 'Iron Defense', 'Iron Head', 'Iron Tail', 'Last Resort', 'Low Kick', 'Magic Coat', 'Natural Gift', 'Revel Dance', 'Rock Climb', 'Rollout', 'Secret Power', 'Snore', 'Stealth Rock', 'Stomping Tantrum', 'Thunder Punch', 'Uproar'];
        eggMoves = ['Belly Drum', 'Fairy Ring', 'Follow Me', 'Metal Claw', 'Pixie Dust', 'Play Nice', 'Pressure Wave', 'Rototiller', 'Sand Tomb', 'Slash'];
        break;

	case 'drilbur':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Toxic', 'Hidden Power', 'Protect', 'Frustration', 'Earthquake', 'Return', 'Dig', 'Brick Break', 'Double Team', 'Sludge Bomb', 'Sandstorm', 'Rock Tomb', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Round', 'Fling', 'Shadow Claw', 'Swords Dance', 'Bulldoze', 'Rock Slide', 'X-Scissor', 'Poison Jab', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Confide', 'Cut', 'Strength', 'Aftershock', 'Sandblast', 'Mudslide', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Ancient Power', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Drill Run', 'Earth Power', 'Endure', 'Enthrall', 'Fury Cutter', 'Headbutt', 'Iron Defense', 'Natural Gift', 'Rollout', 'Secret Power', 'Snore', 'Stealth Rock'];
        eggMoves = ['Crush Claw', 'Metal Sound', 'Quicksand', 'Skull Bash', 'Submission'];
        break;

	case 'excadrill':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Rototiller'];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Toxic', 'Hidden Power', 'Hyper Beam', 'Protect', 'Frustration', 'Earthquake', 'Return', 'Dig', 'Brick Break', 'Double Team', 'Sludge Bomb', 'Sandstorm', 'Rock Tomb', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Round', 'Focus Blast', 'Fling', 'Shadow Claw', 'Giga Impact', 'Swords Dance', 'Bulldoze', 'Rock Slide', 'X-Scissor', 'Poison Jab', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Confide', 'Cut', 'Strength', 'Aftershock', 'Piledriver', 'Sandblast', 'Lariat', 'Mudslide', 'Pulverize', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Ancient Power', 'Brutal Swing', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Drill Run', 'Earth Power', 'Endure', 'Enthrall', 'Fury Cutter', 'Headbutt', 'Iron Defense', 'Iron Head', 'Natural Gift', 'Rollout', 'Secret Power', 'Smart Strike', 'Snore', 'Stealth Rock', 'Steel Beam', 'Stomping Tantrum'];
        eggMoves = ['Crush Claw', 'Metal Sound', 'Quicksand', 'Skull Bash', 'Submission'];
        break;

	case 'sandile':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Roar', 'Toxic', 'Hidden Power', 'Taunt', 'Protect', 'Frustration', 'Earthquake', 'Return', 'Dig', 'Double Team', 'Sludge Bomb', 'Sandstorm', 'Rock Tomb', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Incinerate', 'Embargo', 'Payback', 'Retaliate', 'Stone Edge', 'Bulldoze', 'Rock Slide', 'Grass Knot', 'Swagger', 'Sleep Talk', 'Substitute', 'Snarl', 'Dark Pulse', 'Confide', 'Cut', 'Bravado', 'Diamond Claw', 'Aftershock', 'Sandblast', 'Psych Out', 'Mudslide', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Aqua Tail', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Eagle Eye', 'Earth Power', 'Endure', 'Enthrall', 'Foul Play', 'Headbutt', 'Iron Tail', 'Natural Gift', 'Secret Power', 'Snatch', 'Snore', 'Spite', 'Stealth Rock', 'Sucker Punch', 'Trip Up', 'Uproar'];
        eggMoves = ['Beat Up', 'Counter', 'Double-Edge', 'Fire Fang', 'Focus Energy', 'Jaw Thrash', 'Mean Look', 'Me First', 'Power Trip', 'Pursuit', 'Quicksand', 'Thunder Fang'];
        break;

	case 'krokorok':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Roar', 'Toxic', 'Hidden Power', 'Taunt', 'Protect', 'Frustration', 'Earthquake', 'Return', 'Dig', 'Brick Break', 'Double Team', 'Sludge Bomb', 'Sandstorm', 'Rock Tomb', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Low Sweep', 'Round', 'Fling', 'Incinerate', 'Embargo', 'Shadow Claw', 'Payback', 'Retaliate', 'Stone Edge', 'Bulldoze', 'Rock Slide', 'Grass Knot', 'Swagger', 'Sleep Talk', 'Substitute', 'Snarl', 'Dark Pulse', 'Power-Up Punch', 'Confide', 'Cut', 'Bravado', 'Diamond Claw', 'Aftershock', 'Sandblast', 'Psych Out', 'Mudslide', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Aqua Tail', 'Brutal Swing', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Eagle Eye', 'Earth Power', 'Endure', 'Enthrall', 'Focus Punch', 'Foul Play', 'Fury Cutter', 'Headbutt', 'Iron Tail', 'Knock Off', 'Low Kick', 'Natural Gift', 'Secret Power', 'Snatch', 'Snore', 'Spite', 'Stealth Rock', 'Sucker Punch', 'Trip Up', 'Uproar'];
        eggMoves = ['Beat Up', 'Counter', 'Double-Edge', 'Fire Fang', 'Focus Energy', 'Jaw Thrash', 'Mean Look', 'Me First', 'Power Trip', 'Pursuit', 'Quicksand', 'Thunder Fang'];
        break;

	case 'krookodile':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Outrage', 'Quicksand', 'Power Trip'];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Dragon Claw', 'Roar', 'Toxic', 'Bulk Up', 'Hidden Power', 'Taunt', 'Hyper Beam', 'Protect', 'Frustration', 'Smack Down', 'Earthquake', 'Return', 'Dig', 'Brick Break', 'Double Team', 'Sludge Bomb', 'Sandstorm', 'Rock Tomb', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Low Sweep', 'Round', 'Focus Blast', 'Fling', 'Incinerate', 'Embargo', 'Shadow Claw', 'Payback', 'Retaliate', 'Giga Impact', 'Stone Edge', 'Bulldoze', 'Rock Slide', 'Dragon Tail', 'Grass Knot', 'Swagger', 'Sleep Talk', 'Substitute', 'Snarl', 'Dark Pulse', 'Power-Up Punch', 'Confide', 'Cut', 'Bravado', 'Diamond Claw', 'Aftershock', 'Dragon Roar', 'Sandblast', 'Psych Out', 'Mudslide', 'Radiant Claw', 'Brain Press', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Aqua Tail', 'Block', 'Brutal Swing', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Dragon Pulse', 'Eagle Eye', 'Earth Power', 'Endure', 'Enthrall', 'Focus Punch', 'Foul Play', 'Fury Cutter', 'Headbutt', 'Iron Tail', 'Knock Off', 'Low Kick', 'Natural Gift', 'Outrage', 'Secret Power', 'Snatch', 'Snore', 'Spite', 'Stealth Rock', 'Stomping Tantrum', 'Sucker Punch', 'Superpower', 'Throat Chop', 'Trip Up', 'Uproar'];
        eggMoves = ['Beat Up', 'Counter', 'Double-Edge', 'Fire Fang', 'Focus Energy', 'Jaw Thrash', 'Mean Look', 'Me First', 'Power Trip', 'Pursuit', 'Quicksand', 'Thunder Fang'];
        break;

	case 'mandicore':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Venoshock', 'Hidden Power', 'Sunny Day', 'Taunt', 'Hyper Beam', 'Protect', 'Rain Dance', 'Frustration', 'Earthquake', 'Return', 'Dig', 'Shadow Ball', 'Double Team', 'Rock Tomb', 'Aerial Ace', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'False Swipe', 'Embargo', 'Payback', 'Retaliate', 'Giga Impact', 'Stone Edge', 'Swords Dance', 'Struggle Bug', 'Bulldoze', 'Rock Slide', 'X-Scissor', 'Infestation', 'Poison Jab', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Rock Smash', 'Dark Pulse', 'Confide', 'Cut', 'Strength', 'Bravado', 'Stinger Lance', 'Daring Dash', 'Aftershock', 'Noxious Acid', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Bind', 'Brutal Swing', 'Bug Bite', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endeavor', 'Endure', 'Enthrall', 'Foul Play', 'Fury Cutter', 'Giga Drain', 'Iron Defense', 'Iron Head', 'Leech Life', 'Natural Gift', 'Secret Power', 'Snatch', 'Snore', 'Sucker Punch', 'Super Fang', 'Trip Up'];
        eggMoves = ['Close Combat', 'Feint Attack', 'Fell Stinger', 'Focus Energy', 'Pursuit', 'Valiant Sting'];
        break;

	case 'duskull':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Calm Mind', 'Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Ice Beam', 'Blizzard', 'Protect', 'Rain Dance', 'Frustration', 'Return', 'Psychic', 'Shadow Ball', 'Double Team', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Fling', 'Charge Beam', 'Will-O-Wisp', 'Embargo', 'Payback', 'Flash', 'Psych Up', 'Infestation', 'Dream Eater', 'Swagger', 'Sleep Talk', 'Substitute', 'Trick Room', 'Dark Pulse', 'Confide', 'Banshee Howl', 'Shadow Dart', 'Psych Out', 'Haunted Terrain', 'Hyper-Focus', 'Polter Juggle', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Gravity', 'Headbutt', 'Icy Wind', 'Natural Gift', 'Ominous Wind', 'Pain Split', 'Secret Power', 'Skill Swap', 'Snatch', 'Snore', 'Spite', 'Telekinesis', 'Trick', 'Trip Up', 'Wonder Room'];
        eggMoves = ['Destiny Bond', 'Feint Attack', 'Grudge', 'Haze', 'Imprison', 'Memento'];
        break;

	case 'dusclops':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Future Sight', 'Fire Punch', 'Ice Punch', 'Thunder Punch', 'Gravity', 'Bind'];
        evoMoves = [];
        tmMoves = ['Calm Mind', 'Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Ice Beam', 'Blizzard', 'Hyper Beam', 'Protect', 'Rain Dance', 'Frustration', 'Earthquake', 'Return', 'Psychic', 'Shadow Ball', 'Brick Break', 'Double Team', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Fling', 'Charge Beam', 'Will-O-Wisp', 'Embargo', 'Payback', 'Giga Impact', 'Flash', 'Psych Up', 'Bulldoze', 'Rock Slide', 'Infestation', 'Dream Eater', 'Swagger', 'Sleep Talk', 'Substitute', 'Trick Room', 'Rock Smash', 'Dark Pulse', 'Power-Up Punch', 'Confide', 'Spirit Punch', 'Aftershock', 'Banshee Howl', 'Shadow Dart', 'Psych Out', 'Haunted Terrain', 'Hyper-Focus', 'Brain Press', 'Polter Juggle', 'Rug Pull', 'Restrain', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Bind', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Gravity', 'Headbutt', 'Ice Punch', 'Icy Wind', 'Natural Gift', 'Ominous Wind', 'Pain Split', 'Secret Power', 'Skill Swap', 'Snatch', 'Snore', 'Spite', 'Sucker Punch', 'Telekinesis', 'Thunder Punch', 'Trick', 'Trip Up', 'Wonder Room'];
        eggMoves = ['Destiny Bond', 'Feint Attack', 'Grudge', 'Haze', 'Imprison', 'Memento'];
        break;

	case 'dusknoir':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Future Sight', 'Fire Punch', 'Ice Punch', 'Thunder Punch', 'Gravity', 'Bind'];
        evoMoves = [];
        tmMoves = ['Calm Mind', 'Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Ice Beam', 'Blizzard', 'Hyper Beam', 'Protect', 'Rain Dance', 'Frustration', 'Earthquake', 'Return', 'Psychic', 'Shadow Ball', 'Brick Break', 'Double Team', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Fling', 'Charge Beam', 'Will-O-Wisp', 'Embargo', 'Payback', 'Giga Impact', 'Flash', 'Psych Up', 'Bulldoze', 'Rock Slide', 'Infestation', 'Dream Eater', 'Swagger', 'Sleep Talk', 'Substitute', 'Trick Room', 'Rock Smash', 'Dark Pulse', 'Power-Up Punch', 'Confide', 'Spirit Punch', 'Aftershock', 'Banshee Howl', 'Piledriver', 'Shadow Dart', 'Psych Out', 'Haunted Terrain', 'Hyper-Focus', 'Lariat', 'Brain Press', 'Polter Juggle', 'Rug Pull', 'Restrain', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Bind', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Gravity', 'Headbutt', 'Ice Punch', 'Icy Wind', 'Laser Focus', 'Natural Gift', 'Ominous Wind', 'Pain Split', 'Secret Power', 'Skill Swap', 'Snatch', 'Snore', 'Spite', 'Sucker Punch', 'Telekinesis', 'Thunder Punch', 'Trick', 'Trip Up', 'Wonder Room'];
        eggMoves = ['Destiny Bond', 'Feint Attack', 'Grudge', 'Haze', 'Imprison', 'Memento'];
        break;

	case 'beddybite':
		moveLevels = [1, 5, 11, 14, 18, 24, 27, 27, 31, 37, 40, 44, 50];
		levelUpMoves = ['Drain Life', 'Hypnosis', 'Disable', 'Shadow Dart', 'Bug Bite', 'Hex', 'Yawn', 'Rest', 'Leech Life', 'Haunted Terrain', 'Dream Eater', 'Pain Split', 'Nightmare'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Calm Mind', 'Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Protect', 'Rain Dance', 'Frustration', 'Thunderbolt', 'Thunder', 'Return', 'Psychic', 'Shadow Ball', 'Double Team', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Will-O-Wisp', 'Embargo', 'Shadow Claw', 'Payback', 'Struggle Bug', 'Psych Up', 'Infestation', 'Dream Eater', 'Swagger', 'Sleep Talk', 'Substitute', 'Trick Room', 'Dark Pulse', 'Confide', 'Cut', 'Shadow Dart', 'Psych Out', 'Haunted Terrain', 'Polter Juggle', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Bug Bite', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Foul Play', 'Fury Cutter', 'Giga Drain', 'Gravity', 'Headbutt', 'Knock Off', 'Leech Life', 'Magic Coat', 'Magic Room', 'Natural Gift', 'Ominous Wind', 'Pain Split', 'Role Play', 'Secret Power', 'Shock Wave', 'Signal Beam', 'Skill Swap', 'Snatch', 'Snore', 'Spite', 'Sucker Punch', 'Telekinesis', 'Trick', 'Trip Up'];
        eggMoves = ['Astonish', 'Curse', 'Night Slash', 'Poison Fang', 'Rage Powder', 'Slumber Fang', 'Spider Web'];
        break;

	case 'bitemare':
		moveLevels = [1, 5, 11, 14, 18, 24, 27, 27, 31, 40, 46, 53, 62];
		levelUpMoves = ['Drain Life', 'Hypnosis', 'Disable', 'Shadow Dart', 'Bug Bite', 'Hex', 'Yawn', 'Rest', 'Leech Life', 'Haunted Terrain', 'Dream Eater', 'Pain Split', 'Nightmare'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Calm Mind', 'Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Hyper Beam', 'Protect', 'Rain Dance', 'Frustration', 'Thunderbolt', 'Thunder', 'Return', 'Psychic', 'Shadow Ball', 'Double Team', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Will-O-Wisp', 'Embargo', 'Shadow Claw', 'Payback', 'Giga Impact', 'Struggle Bug', 'Psych Up', 'Infestation', 'Dream Eater', 'Swagger', 'Sleep Talk', 'Substitute', 'Trick Room', 'Dark Pulse', 'Confide', 'Cut', 'Shadow Dart', 'Psych Out', 'Haunted Terrain', 'Polter Juggle', 'Rug Pull', 'Restrain', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Bind', 'Block', 'Body Press', 'Bug Bite', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Foul Play', 'Fury Cutter', 'Giga Drain', 'Gravity', 'Headbutt', 'Knock Off', 'Leech Life', 'Magic Coat', 'Magic Room', 'Natural Gift', 'Ominous Wind', 'Pain Split', 'Role Play', 'Secret Power', 'Shock Wave', 'Signal Beam', 'Skill Swap', 'Snatch', 'Snore', 'Spite', 'Sucker Punch', 'Telekinesis', 'Trick', 'Trip Up'];
        eggMoves = ['Astonish', 'Curse', 'Night Slash', 'Poison Fang', 'Rage Powder', 'Slumber Fang', 'Spider Web'];
        break;

	case 'aron':
		moveLevels = [1, 1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52];
		levelUpMoves = ['Tackle', 'Harden', 'Mud-Slap', 'Headbutt', 'Metal Claw', 'Rock Tomb', 'Protect', 'Roar', 'Iron Head', 'Rock Slide', 'Take Down', 'Metal Sound', 'Iron Tail', 'Iron Defense', 'Double-Edge', 'Autotomize', 'Heavy Slam', 'Metal Burst', 'Boulder Crash'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Roar', 'Toxic', 'Hidden Power', 'Sunny Day', 'Protect', 'Rain Dance', 'Frustration', 'Earthquake', 'Return', 'Dig', 'Double Team', 'Sandstorm', 'Rock Tomb', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Round', 'Shadow Claw', 'Rock Polish', 'Bulldoze', 'Rock Slide', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Confide', 'Cut', 'Strength', 'Diamond Claw', 'Aftershock', 'Crystallize', 'Sandblast', 'Magnet Switch', 'Pulverize', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Ancient Power', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Earth Power', 'Endeavor', 'Endure', 'Enthrall', 'Fury Cutter', 'Headbutt', 'Iron Defense', 'Iron Head', 'Iron Tail', 'Magnet Rise', 'Natural Gift', 'Rollout', 'Secret Power', 'Shock Wave', 'Snore', 'Spite', 'Stealth Rock', 'Steel Beam', 'Superpower', 'Uproar', 'Water Pulse'];
        eggMoves = ['Body Slam', 'Curse', 'Dragon Rush', 'Head Smash', 'Reversal', 'Screech', 'Smelling Salts', 'Stomp'];
        break;

	case 'lairon':
		moveLevels = [1, 1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 35, 39, 43, 47, 51, 55, 59];
		levelUpMoves = ['Tackle', 'Harden', 'Mud-Slap', 'Headbutt', 'Metal Claw', 'Rock Tomb', 'Protect', 'Roar', 'Iron Head', 'Rock Slide', 'Take Down', 'Metal Sound', 'Iron Tail', 'Iron Defense', 'Double-Edge', 'Autotomize', 'Heavy Slam', 'Metal Burst', 'Boulder Crash'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Roar', 'Toxic', 'Hidden Power', 'Sunny Day', 'Protect', 'Rain Dance', 'Frustration', 'Earthquake', 'Return', 'Dig', 'Double Team', 'Sandstorm', 'Rock Tomb', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Round', 'Shadow Claw', 'Rock Polish', 'Bulldoze', 'Rock Slide', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Confide', 'Cut', 'Strength', 'Diamond Claw', 'Aftershock', 'Crystallize', 'Sandblast', 'Magnet Switch', 'Pulverize', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Ancient Power', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Earth Power', 'Endeavor', 'Endure', 'Enthrall', 'Fury Cutter', 'Headbutt', 'Iron Defense', 'Iron Head', 'Iron Tail', 'Magnet Rise', 'Natural Gift', 'Rollout', 'Secret Power', 'Shock Wave', 'Snore', 'Spite', 'Stealth Rock', 'Steel Beam', 'Stomping Tantrum', 'Superpower', 'Uproar', 'Water Pulse'];
        eggMoves = ['Body Slam', 'Curse', 'Dragon Rush', 'Head Smash', 'Reversal', 'Screech', 'Smelling Salts', 'Stomp'];
        break;

	case 'aggron':
		moveLevels = [1, 1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 35, 39, 45, 51, 57, 63, 69];
		levelUpMoves = ['Tackle', 'Harden', 'Mud-Slap', 'Headbutt', 'Metal Claw', 'Rock Tomb', 'Protect', 'Roar', 'Iron Head', 'Rock Slide', 'Take Down', 'Metal Sound', 'Iron Tail', 'Iron Defense', 'Double-Edge', 'Autotomize', 'Heavy Slam', 'Metal Burst', 'Boulder Crash'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Dragon Claw', 'Roar', 'Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Ice Beam', 'Blizzard', 'Hyper Beam', 'Protect', 'Rain Dance', 'Frustration', 'Solar Beam', 'Smack Down', 'Thunderbolt', 'Thunder', 'Earthquake', 'Return', 'Dig', 'Brick Break', 'Double Team', 'Flamethrower', 'Sandstorm', 'Fire Blast', 'Rock Tomb', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Round', 'Focus Blast', 'Fling', 'Incinerate', 'Shadow Claw', 'Payback', 'Giga Impact', 'Rock Polish', 'Stone Edge', 'Thunder Wave', 'Bulldoze', 'Rock Slide', 'Dragon Tail', 'Swagger', 'Sleep Talk', 'Substitute', 'Flash Cannon', 'Rock Smash', 'Dark Pulse', 'Power-Up Punch', 'Confide', 'Cut', 'Surf', 'Strength', 'Diamond Claw', 'Aftershock', 'Piledriver', 'Dragon Roar', 'Crystallize', 'Sandblast', 'Magnet Switch', 'Lariat', 'Glacier Crush', 'Radiant Claw', 'Pulverize', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Ancient Power', 'Aqua Tail', 'Avalanche', 'Block', 'Brutal Swing', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Dragon Pulse', 'Earth Power', 'Endeavor', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Fury Cutter', 'Headbutt', 'Ice Punch', 'Icy Wind', 'Iron Defense', 'Iron Head', 'Iron Tail', 'Low Kick', 'Magnet Rise', 'Natural Gift', 'Outrage', 'Rock Climb', 'Rollout', 'Secret Power', 'Shock Wave', 'Smart Strike', 'Snore', 'Spite', 'Stealth Rock', 'Steel Beam', 'Stomping Tantrum', 'Superpower', 'Thunder Punch', 'Uproar', 'Water Pulse'];
        eggMoves = ['Body Slam', 'Curse', 'Dragon Rush', 'Head Smash', 'Reversal', 'Screech', 'Smelling Salts', 'Stomp'];
        break;

	case 'dasfix':
		moveLevels = [1, 8, 10, 14, 21, 23, 27, 34, 36, 40, 47, 49, 53, 53, 53];
		levelUpMoves = ['Poison Sting', 'Defense Curl', 'Astonish', 'Mirror Shot', 'Poison Tail', 'Feint Attack', 'Block', 'Mercury Wave', 'Acid Armor', 'Poison Jab', 'Extrasensory', 'Vanish', 'Stockpile', 'Spit Up', 'Swallow'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Toxic', 'Venoshock', 'Hidden Power', 'Sunny Day', 'Taunt', 'Protect', 'Rain Dance', 'Roost', 'Frustration', 'Return', 'Shadow Ball', 'Double Team', 'Sludge Wave', 'Sludge Bomb', 'Sandstorm', 'Aerial Ace', 'Torment', 'Facade', 'Rest', 'Attract', 'Round', 'Steel Wing', 'Charge Beam', 'Acrobatics', 'Payback', 'Thunder Wave', 'Gyro Ball', 'Rock Slide', 'Poison Jab', 'Swagger', 'Sleep Talk', 'Substitute', 'Flash Cannon', 'Dark Pulse', 'Confide', 'Cut', 'Surf', 'Stinger Lance', 'Miasma Terrain', 'Shadow Dart', 'Oil Slick', 'Magnet Switch', 'Restrain', 'Berry Share', 'Hidden Gift', 'Clear Sky', 'Acid Rain'];
        tutorMoves = ['Amaze', 'Aqua Tail', 'Block', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Gastro Acid', 'Giga Drain', 'Gunk Shot', 'Iron Tail', 'Natural Gift', 'Ominous Wind', 'Pain Split', 'Secret Power', 'Shock Wave', 'Snore', 'Spite', 'Stealth Rock', 'Steel Beam', 'Sucker Punch', 'Water Pulse'];
        eggMoves = ['Backstab', 'Camouflage', 'Minimize', 'Mirror Coat', 'Night Slash', 'Shadow Sneak', 'Toxic Spikes', 'Wide Guard'];
        break;

	case 'malraja':
		moveLevels = [1, 8, 10, 14, 21, 23, 27, 34, 36, 42, 51, 55, 61, 61, 61];
		levelUpMoves = ['Poison Sting', 'Defense Curl', 'Astonish', 'Mirror Shot', 'Poison Tail', 'Feint Attack', 'Block', 'Mercury Wave', 'Acid Armor', 'Poison Jab', 'Extrasensory', 'Vanish', 'Stockpile', 'Spit Up', 'Swallow'];
		relearnMoves = ['Nasty Plot', 'Heavy Slam', 'Wring Out'];
        evoMoves = [];
        tmMoves = ['Toxic', 'Venoshock', 'Hidden Power', 'Sunny Day', 'Taunt', 'Hyper Beam', 'Protect', 'Rain Dance', 'Roost', 'Frustration', 'Return', 'Shadow Ball', 'Double Team', 'Sludge Wave', 'Sludge Bomb', 'Sandstorm', 'Aerial Ace', 'Torment', 'Facade', 'Rest', 'Attract', 'Round', 'Steel Wing', 'Charge Beam', 'Acrobatics', 'Payback', 'Giga Impact', 'Thunder Wave', 'Gyro Ball', 'Rock Slide', 'Poison Jab', 'Swagger', 'Sleep Talk', 'Substitute', 'Flash Cannon', 'Dark Pulse', 'Confide', 'Cut', 'Surf', 'Stinger Lance', 'Miasma Terrain', 'Shadow Dart', 'Oil Slick', 'Magnet Switch', 'Restrain', 'Berry Share', 'Hidden Gift', 'Clear Sky', 'Acid Rain'];
        tutorMoves = ['Amaze', 'Aqua Tail', 'Block', 'Body Press', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Gastro Acid', 'Giga Drain', 'Gunk Shot', 'Iron Tail', 'Natural Gift', 'Ominous Wind', 'Pain Split', 'Secret Power', 'Shock Wave', 'Snore', 'Spite', 'Stealth Rock', 'Steel Beam', 'Sucker Punch', 'Water Pulse'];
        eggMoves = ['Backstab', 'Camouflage', 'Minimize', 'Mirror Coat', 'Night Slash', 'Shadow Sneak', 'Toxic Spikes', 'Wide Guard'];
        break;

	case 'kiblis':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Calm Mind', 'Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Ice Beam', 'Blizzard', 'Protect', 'Rain Dance', 'Frustration', 'Thunderbolt', 'Thunder', 'Return', 'Psychic', 'Shadow Ball', 'Double Team', 'Rock Tomb', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Charge Beam', 'Will-O-Wisp', 'Embargo', 'Payback', 'Retaliate', 'Thunder Wave', 'Psych Up', 'Dream Eater', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Snarl', 'Dark Pulse', 'Confide', 'Strength', 'Shadow Dart', 'Psych Out', 'Hyper-Focus', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Bounce', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Foul Play', 'Headbutt', 'Iron Head', 'Iron Tail', 'Magic Coat', 'Natural Gift', 'Ominous Wind', 'Pain Split', 'Rock Climb', 'Role Play', 'Secret Power', 'Shock Wave', 'Snatch', 'Snore', 'Spite', 'Sucker Punch', 'Trick', 'Trip Up', 'Wonder Room', 'Zen Headbutt'];
        eggMoves = ['Blindside', 'Confuse Ray', 'Curse', 'Flatter', 'Imprison', 'Megahorn', 'Power Trip', 'Punishment'];
        break;

	case 'ibazel':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Vanish'];
        evoMoves = [];
        tmMoves = ['Calm Mind', 'Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Ice Beam', 'Blizzard', 'Hyper Beam', 'Protect', 'Rain Dance', 'Frustration', 'Thunderbolt', 'Thunder', 'Return', 'Psychic', 'Shadow Ball', 'Double Team', 'Rock Tomb', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Charge Beam', 'Will-O-Wisp', 'Embargo', 'Payback', 'Retaliate', 'Giga Impact', 'Thunder Wave', 'Psych Up', 'Bulldoze', 'Rock Slide', 'Dream Eater', 'Swagger', 'Sleep Talk', 'Substitute', 'Wild Charge', 'Rock Smash', 'Snarl', 'Dark Pulse', 'Confide', 'Strength', 'Bravado', 'Daring Dash', 'Shadow Dart', 'Mind Shatter', 'Psych Out', 'Hyper-Focus', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Bounce', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Foul Play', 'Headbutt', 'Iron Head', 'Iron Tail', 'Link Pulse', 'Magic Coat', 'Natural Gift', 'Ominous Wind', 'Pain Split', 'Rock Climb', 'Role Play', 'Secret Power', 'Shock Wave', 'Snatch', 'Snore', 'Spite', 'Stomping Tantrum', 'Sucker Punch', 'Trick', 'Trip Up', 'Wonder Room', 'Zen Headbutt'];
        eggMoves = ['Blindside', 'Confuse Ray', 'Curse', 'Flatter', 'Imprison', 'Megahorn', 'Power Trip', 'Punishment'];
        break;

	case 'lapras':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Roar', 'Toxic', 'Hail', 'Hidden Power', 'Ice Beam', 'Blizzard', 'Hyper Beam', 'Protect', 'Rain Dance', 'Safeguard', 'Frustration', 'Thunderbolt', 'Thunder', 'Return', 'Psychic', 'Double Team', 'Facade', 'Rest', 'Attract', 'Round', 'Echoed Voice', 'Giga Impact', 'Bulldoze', 'Frost Breath', 'Dream Eater', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Confide', 'Surf', 'Strength', 'Waterfall', 'Dive', 'Drag Under', 'Aftershock', 'Winter Lance', 'Glacier Crush', 'Cold Shower', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Ancient Power', 'Aqua Tail', 'Avalanche', 'Block', 'Brine', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Dragon Pulse', 'Drill Run', 'Endure', 'Enthrall', 'Headbutt', 'Heal Bell', 'Hyper Voice', 'Ice Water', 'Icy Wind', 'Iron Head', 'Iron Tail', 'Natural Gift', 'Outrage', 'Secret Power', 'Signal Beam', 'Smart Strike', 'Snore', 'Water Pulse', 'Zen Headbutt'];
        eggMoves = ['Curse', 'Dragon Dance', 'Fissure', 'Foresight', 'Freeze-Dry', 'Future Sight', 'Horn Drill', 'Refresh', 'Tickle', 'Whirlpool'];
        break;

	case 'sigilyph':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Psyshock', 'Calm Mind', 'Toxic', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Light Screen', 'Protect', 'Rain Dance', 'Roost', 'Safeguard', 'Frustration', 'Solar Beam', 'Smack Down', 'Return', 'Psychic', 'Shadow Ball', 'Double Team', 'Reflect', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Steel Wing', 'Energy Ball', 'Charge Beam', 'Flash', 'Thunder Wave', 'Psych Up', 'Dream Eater', 'Swagger', 'Sleep Talk', 'Substitute', 'Trick Room', 'Dark Pulse', 'Dazzling Gleam', 'Confide', 'Fly', 'Lunar Beam', 'Windstorm', 'Shadow Dart', 'Mind Shatter', 'High-Speed Dive', 'Hyper-Focus', 'Rainbow Wall', 'Turbulence', 'Shimmer Shot', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Air Cutter', 'Amaze', 'Ancient Power', 'Captivate', 'Confound', 'Dazzle', 'Defog', 'Demolish', 'Eagle Eye', 'Endure', 'Enthrall', 'Gravity', 'Heat Wave', 'Icy Wind', 'Link Pulse', 'Magic Coat', 'Magic Room', 'Natural Gift', 'Ominous Wind', 'Pain Split', 'Pluck', 'Role Play', 'Secret Power', 'Shock Wave', 'Signal Beam', 'Silver Wind', 'Skill Swap', 'Sky Attack', 'Snore', 'Spite', 'Swift', 'Tailwind', 'Telekinesis', 'Trick', 'Twister', 'Zen Headbutt'];
        eggMoves = ['Future Sight', 'Psycho Shift', 'Stored Power'];
        break;

	case 'razelodon':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Roar', 'Toxic', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Protect', 'Rain Dance', 'Frustration', 'Earthquake', 'Return', 'Dig', 'Double Team', 'Sandstorm', 'Rock Tomb', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'False Swipe', 'Payback', 'Giga Impact', 'Stone Edge', 'Swords Dance', 'Bulldoze', 'Rock Slide', 'Poison Jab', 'Swagger', 'Sleep Talk', 'Substitute', 'Wild Charge', 'Snarl', 'Confide', 'Cut', 'Strength', 'Bravado', 'Daring Dash', 'Aftershock', 'Sandblast', 'Berry Juicer', 'Pulverize', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Avalanche', 'Block', 'Brutal Swing', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Fury Cutter', 'Headbutt', 'Iron Defense', 'Iron Head', 'Iron Tail', 'Magnet Rise', 'Natural Gift', 'Outrage', 'Secret Power', 'Snore', 'Stealth Rock', 'Steel Beam', 'Stomping Tantrum', 'Super Fang', 'Superpower', 'Work Up'];
        eggMoves = ['Autotomize', 'Boulder Crash', 'Curse', 'Heavy Slam', 'Ice Fang', 'Night Slash', 'Pursuit', 'Revenge', 'Scary Face', 'Thunder Fang'];
        break;

	case 'vaering':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Dragon Claw', 'Roar', 'Toxic', 'Hail', 'Hidden Power', 'Ice Beam', 'Blizzard', 'Protect', 'Rain Dance', 'Frustration', 'Return', 'Double Team', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Round', 'Scald', 'Swords Dance', 'Dragon Tail', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Confide', 'Cut', 'Surf', 'Strength', 'Waterfall', 'Dive', 'Bravado', 'Drag Under', 'Daring Dash', 'Dragon Roar', 'Golden Flame', 'Radiant Claw', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Aqua Tail', 'Breaking Swipe', 'Brine', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Draco Meteor', 'Dragon Pulse', 'Endeavor', 'Endure', 'Enthrall', 'Headbutt', 'Ice Water', 'Icy Wind', 'Invigorate', 'Iron Head', 'Iron Tail', 'Natural Gift', 'Outrage', 'Secret Power', 'Snore', 'Stomping Tantrum', 'Superpower', 'Twister', 'Uproar', 'Water Pulse'];
        eggMoves = ['Bite', 'Devastation', 'Dragon Rush', 'Flail', 'Head Smash', 'Horn Attack', 'Ice Fang', 'Tsunami Rush', 'Wide Guard'];
        break;

	case 'raidnarr':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Dragon Claw', 'Roar', 'Toxic', 'Hail', 'Hidden Power', 'Ice Beam', 'Blizzard', 'Protect', 'Rain Dance', 'Frustration', 'Return', 'Double Team', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Round', 'Scald', 'Swords Dance', 'Dragon Tail', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Confide', 'Cut', 'Surf', 'Strength', 'Waterfall', 'Dive', 'Bravado', 'Drag Under', 'Daring Dash', 'Dragon Roar', 'Golden Flame', 'Radiant Claw', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Aqua Tail', 'Breaking Swipe', 'Brine', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Draco Meteor', 'Dragon Pulse', 'Endeavor', 'Endure', 'Enthrall', 'Headbutt', 'Ice Water', 'Icy Wind', 'Invigorate', 'Iron Head', 'Iron Tail', 'Natural Gift', 'Outrage', 'Secret Power', 'Snore', 'Stomping Tantrum', 'Superpower', 'Twister', 'Uproar', 'Water Pulse'];
        eggMoves = ['Bite', 'Devastation', 'Dragon Rush', 'Flail', 'Head Smash', 'Horn Attack', 'Ice Fang', 'Tsunami Rush', 'Wide Guard'];
        break;

	case 'drasarkr':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Outrage', 'Final Gambit', 'Jaw Thrash', 'Chip Away'];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Dragon Claw', 'Roar', 'Toxic', 'Hail', 'Hidden Power', 'Ice Beam', 'Blizzard', 'Hyper Beam', 'Protect', 'Rain Dance', 'Frustration', 'Earthquake', 'Return', 'Brick Break', 'Double Team', 'Aerial Ace', 'Facade', 'Rest', 'Attract', 'Round', 'False Swipe', 'Scald', 'Shadow Claw', 'Giga Impact', 'Swords Dance', 'Bulldoze', 'Rock Slide', 'X-Scissor', 'Dragon Tail', 'Poison Jab', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Confide', 'Cut', 'Surf', 'Strength', 'Waterfall', 'Dive', 'Bravado', 'Drag Under', 'Daring Dash', 'Aftershock', 'Dragon Roar', 'Golden Flame', 'Glacier Crush', 'Radiant Claw', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Aqua Tail', 'Breaking Swipe', 'Brine', 'Brutal Swing', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Draco Meteor', 'Dragon Pulse', 'Dual Chop', 'Endeavor', 'Endure', 'Enthrall', 'Headbutt', 'Ice Punch', 'Ice Water', 'Icy Wind', 'Invigorate', 'Iron Head', 'Iron Tail', 'Natural Gift', 'Outrage', 'Secret Power', 'Snore', 'Stomping Tantrum', 'Superpower', 'Throat Chop', 'Twister', 'Uproar', 'Water Pulse'];
        eggMoves = ['Bite', 'Devastation', 'Dragon Rush', 'Flail', 'Head Smash', 'Horn Attack', 'Ice Fang', 'Tsunami Rush', 'Wide Guard'];
        break;

	case 'derfin':
		moveLevels = [1, 15, 30];
		levelUpMoves = ['Splash', 'Sonic Boom', 'Amnesia'];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Psyshock', 'Calm Mind', 'Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Light Screen', 'Protect', 'Rain Dance', 'Safeguard', 'Frustration', 'Return', 'Psychic', 'Shadow Ball', 'Brick Break', 'Double Team', 'Reflect', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Echoed Voice', 'Fling', 'Embargo', 'Flash', 'Psych Up', 'Dream Eater', 'Swagger', 'Sleep Talk', 'Substitute', 'Trick Room', 'Power-Up Punch', 'Confide', 'Spirit Punch', 'Mind Shatter', 'Brain Press', 'Shimmer Shot', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Drain Punch', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Gravity', 'Headbutt', 'Hyper Voice', 'Ice Punch', 'Link Pulse', 'Magic Coat', 'Natural Gift', 'Pain Split', 'Recycle', 'Role Play', 'Secret Power', 'Signal Beam', 'Skill Swap', 'Snore', 'Spite', 'Swift', 'Telekinesis', 'Thunder Punch', 'Trick', 'Water Pulse', 'Wonder Room', 'Zen Headbutt'];
        eggMoves = ['Encore', 'Future Sight', 'Nasty Plot', 'Screech', 'Slam', 'Water Gun'];
        break;

	case 'encanoto':
		moveLevels = [1, 1, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56];
		levelUpMoves = ['Swift', 'Confusion', 'Disarming Voice', 'Supersonic', 'Spite', 'Psych Out', 'Hypnosis', 'Stored Power', 'Flatter', 'Extrasensory', 'Magic Coat', 'Psychic', 'Psycho Shift', 'Synchronoise', 'Dream Eater', 'Phantasmata'];
		relearnMoves = [];
        evoMoves = ['Psybeam'];
        tmMoves = ['Psyshock', 'Calm Mind', 'Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Ice Beam', 'Hyper Beam', 'Light Screen', 'Protect', 'Rain Dance', 'Safeguard', 'Frustration', 'Thunderbolt', 'Return', 'Psychic', 'Shadow Ball', 'Brick Break', 'Double Team', 'Reflect', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Echoed Voice', 'Focus Blast', 'Energy Ball', 'Fling', 'Charge Beam', 'Embargo', 'Giga Impact', 'Flash', 'Thunder Wave', 'Psych Up', 'Dream Eater', 'Swagger', 'Sleep Talk', 'Substitute', 'Trick Room', 'Power-Up Punch', 'Dazzling Gleam', 'Confide', 'Spirit Punch', 'Shadow Dart', 'Mind Shatter', 'Psych Out', 'Hyper-Focus', 'Rainbow Wall', 'Brain Press', 'Shimmer Shot', 'Jewel Blast', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Aqua Tail', 'Captivate', 'Confound', 'Covet', 'Dazzle', 'Demolish', 'Drain Punch', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Gravity', 'Headbutt', 'Hyper Voice', 'Ice Punch', 'Iron Tail', 'Laser Focus', 'Link Pulse', 'Magic Coat', 'Natural Gift', 'Pain Split', 'Recycle', 'Role Play', 'Secret Power', 'Shock Wave', 'Signal Beam', 'Skill Swap', 'Snatch', 'Snore', 'Spite', 'Swift', 'Telekinesis', 'Thunder Punch', 'Trick', 'Water Pulse', 'Wonder Room', 'Zen Headbutt'];
        eggMoves = ['Encore', 'Future Sight', 'Nasty Plot', 'Screech', 'Slam', 'Water Gun'];
        break;

	case 'finnial':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Dragon Claw', 'Roar', 'Toxic', 'Hidden Power', 'Light Screen', 'Protect', 'Rain Dance', 'Frustration', 'Thunderbolt', 'Thunder', 'Return', 'Double Team', 'Rock Tomb', 'Aerial Ace', 'Facade', 'Flame Charge', 'Rest', 'Attract', 'Round', 'Charge Beam', 'Incinerate', 'Flash', 'Volt Switch', 'Thunder Wave', 'Swords Dance', 'Rock Slide', 'Swagger', 'Sleep Talk', 'Substitute', 'Wild Charge', 'Rock Smash', 'Confide', 'Cut', 'Strength', 'Bravado', 'Daring Dash', 'Static Strike', 'Pulse Storm', 'Radiant Claw', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Electroweb', 'Endure', 'Enthrall', 'Headbutt', 'Iron Head', 'Iron Tail', 'Jump-Start', 'Laser Focus', 'Magnet Rise', 'Natural Gift', 'Rock Climb', 'Secret Power', 'Shock Wave', 'Signal Beam', 'Smart Strike', 'Snore', 'Swift', 'Uproar'];
        eggMoves = ['Charge', 'Dragon Dance', 'Electro Ball', 'Extreme Speed', 'Horn Attack', 'Parabolic Charge', 'Screech', 'Thunder Crash', 'Thunder Fang'];
        break;

	case 'termelc':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Dragon Claw', 'Roar', 'Toxic', 'Hidden Power', 'Light Screen', 'Protect', 'Rain Dance', 'Frustration', 'Thunderbolt', 'Thunder', 'Return', 'Double Team', 'Rock Tomb', 'Aerial Ace', 'Facade', 'Flame Charge', 'Rest', 'Attract', 'Round', 'Charge Beam', 'Incinerate', 'Flash', 'Volt Switch', 'Thunder Wave', 'Swords Dance', 'Rock Slide', 'Dragon Tail', 'Swagger', 'Sleep Talk', 'Substitute', 'Wild Charge', 'Rock Smash', 'Confide', 'Cut', 'Strength', 'Bravado', 'Daring Dash', 'Static Strike', 'Pulse Storm', 'Radiant Claw', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Aqua Tail', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Electroweb', 'Endure', 'Enthrall', 'Fury Cutter', 'Headbutt', 'Iron Head', 'Iron Tail', 'Jump-Start', 'Laser Focus', 'Magnet Rise', 'Natural Gift', 'Rock Climb', 'Secret Power', 'Shock Wave', 'Signal Beam', 'Smart Strike', 'Snore', 'Swift', 'Uproar'];
        eggMoves = ['Charge', 'Dragon Dance', 'Electro Ball', 'Extreme Speed', 'Horn Attack', 'Parabolic Charge', 'Screech', 'Thunder Crash', 'Thunder Fang'];
        break;

	case 'distrike':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Jaw Thrash', 'Jaw Lock', 'Smart Strike', 'Metal Sound'];
        evoMoves = ['Flash Cannon'];
        tmMoves = ['Hone Claws', 'Dragon Claw', 'Roar', 'Toxic', 'Hidden Power', 'Ice Beam', 'Hyper Beam', 'Light Screen', 'Protect', 'Rain Dance', 'Frustration', 'Thunderbolt', 'Thunder', 'Earthquake', 'Return', 'Double Team', 'Flamethrower', 'Sandstorm', 'Fire Blast', 'Rock Tomb', 'Aerial Ace', 'Facade', 'Flame Charge', 'Rest', 'Attract', 'Round', 'Charge Beam', 'Incinerate', 'Giga Impact', 'Flash', 'Stone Edge', 'Volt Switch', 'Thunder Wave', 'Swords Dance', 'Bulldoze', 'Rock Slide', 'Dragon Tail', 'Swagger', 'Sleep Talk', 'Substitute', 'Flash Cannon', 'Wild Charge', 'Rock Smash', 'Confide', 'Cut', 'Strength', 'Bravado', 'Diamond Claw', 'Daring Dash', 'Aftershock', 'Static Strike', 'Golden Flame', 'Pulse Storm', 'Magnet Switch', 'Radiant Claw', 'Pulverize', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Aqua Tail', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Dragon Pulse', 'Electroweb', 'Endure', 'Enthrall', 'Fury Cutter', 'Headbutt', 'Iron Defense', 'Iron Head', 'Iron Tail', 'Jump-Start', 'Laser Focus', 'Magnet Rise', 'Natural Gift', 'Outrage', 'Rock Climb', 'Secret Power', 'Shock Wave', 'Signal Beam', 'Snore', 'Stealth Rock', 'Steel Beam', 'Swift', 'Uproar'];
        eggMoves = ['Charge', 'Dragon Dance', 'Electro Ball', 'Extreme Speed', 'Horn Attack', 'Parabolic Charge', 'Screech', 'Thunder Crash', 'Thunder Fang'];
        break;

	case 'makima':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Psyshock', 'Calm Mind', 'Toxic', 'Hidden Power', 'Sunny Day', 'Ice Beam', 'Blizzard', 'Light Screen', 'Protect', 'Safeguard', 'Frustration', 'Thunderbolt', 'Thunder', 'Return', 'Psychic', 'Shadow Ball', 'Double Team', 'Reflect', 'Facade', 'Rest', 'Attract', 'Round', 'Charge Beam', 'Embargo', 'Flash', 'Thunder Wave', 'Psych Up', 'Dream Eater', 'Swagger', 'Sleep Talk', 'Substitute', 'Trick Room', 'Confide', 'Shadow Dart', 'Mind Shatter', 'Hyper-Focus', 'Rainbow Wall', 'Shimmer Shot', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['After You', 'Amaze', 'Ancient Power', 'Bind', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Endure', 'Enthrall', 'Gravity', 'Heal Bell', 'Icy Wind', 'Link Pulse', 'Magic Coat', 'Magic Room', 'Natural Gift', 'Ominous Wind', 'Pain Split', 'Role Play', 'Secret Power', 'Shock Wave', 'Skill Swap', 'Snore', 'Spite', 'Swift', 'Telekinesis', 'Trick', 'Trip Up', 'Wonder Room'];
        eggMoves = [];
        break;

	case 'makitaku':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Teleport'];
        evoMoves = [];
        tmMoves = ['Psyshock', 'Calm Mind', 'Toxic', 'Hidden Power', 'Sunny Day', 'Ice Beam', 'Blizzard', 'Hyper Beam', 'Light Screen', 'Protect', 'Rain Dance', 'Safeguard', 'Frustration', 'Thunderbolt', 'Thunder', 'Return', 'Psychic', 'Shadow Ball', 'Double Team', 'Reflect', 'Facade', 'Rest', 'Attract', 'Round', 'Focus Blast', 'Fling', 'Charge Beam', 'Embargo', 'Giga Impact', 'Flash', 'Thunder Wave', 'Psych Up', 'Dream Eater', 'Swagger', 'Sleep Talk', 'Substitute', 'Trick Room', 'Dark Pulse', 'Dazzling Gleam', 'Confide', 'Spirit Punch', 'Lunar Beam', 'Shadow Dart', 'Mind Shatter', 'Hyper-Focus', 'Rainbow Wall', 'Shimmer Shot', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['After You', 'Amaze', 'Ancient Power', 'Bind', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Dragon Pulse', 'Endure', 'Enthrall', 'Gravity', 'Heal Bell', 'Icy Wind', 'Link Pulse', 'Magic Coat', 'Magic Room', 'Natural Gift', 'Ominous Wind', 'Pain Split', 'Role Play', 'Secret Power', 'Shock Wave', 'Skill Swap', 'Snore', 'Spite', 'Swift', 'Telekinesis', 'Trick', 'Trip Up', 'Wonder Room'];
        eggMoves = ['Amnesia', 'Bide', 'Entrainment'];
        break;

	case 'dartizel-r':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Bullet Punch', 'Dragon Rush'];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Dragon Claw', 'Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Hyper Beam', 'Protect', 'Rain Dance', 'Frustration', 'Thunderbolt', 'Thunder', 'Return', 'Brick Break', 'Double Team', 'Sandstorm', 'Rock Tomb', 'Aerial Ace', 'Torment', 'Facade', 'Rest', 'Thief', 'Round', 'Steel Wing', 'False Swipe', 'Charge Beam', 'Shadow Claw', 'Payback', 'Giga Impact', 'Stone Edge', 'Volt Switch', 'Thunder Wave', 'Swords Dance', 'Rock Slide', 'X-Scissor', 'Dragon Tail', 'Poison Jab', 'Swagger', 'Sleep Talk', 'U-turn', 'Substitute', 'Flash Cannon', 'Wild Charge', 'Rock Smash', 'Confide', 'Cut', 'Bravado', 'Diamond Claw', 'Daring Dash', 'Piledriver', 'Magnet Switch', 'Radiant Claw', 'Pulverize', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Ancient Power', 'Aqua Tail', 'Confound', 'Dazzle', 'Demolish', 'Dragon Pulse', 'Dual Chop', 'Eagle Eye', 'Endure', 'Enthrall', 'Fury Cutter', 'Headbutt', 'Iron Defense', 'Iron Head', 'Iron Tail', 'Laser Focus', 'Magnet Rise', 'Natural Gift', 'Recycle', 'Secret Power', 'Shock Wave', 'Snore', 'Stealth Rock', 'Steel Beam', 'Sucker Punch', 'Swift'];
        eggMoves = [];
        break;

	case 'loftitan-r':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Fissure', 'High Horsepower'];
        evoMoves = [];
        tmMoves = ['Dragon Claw', 'Toxic', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Protect', 'Rain Dance', 'Frustration', 'Earthquake', 'Return', 'Brick Break', 'Double Team', 'Sandstorm', 'Rock Tomb', 'Facade', 'Rest', 'Round', 'Fling', 'Payback', 'Giga Impact', 'Stone Edge', 'Bulldoze', 'Rock Slide', 'Dragon Tail', 'Swagger', 'Sleep Talk', 'Substitute', 'Flash Cannon', 'Rock Smash', 'Confide', 'Strength', 'Diamond Claw', 'Aftershock', 'Piledriver', 'Magnet Switch', 'Lariat', 'Glacier Crush', 'Radiant Claw', 'Brain Press', 'Pulverize', 'Restrain', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Ancient Power', 'Aqua Tail', 'Avalanche', 'Body Press', 'Brutal Swing', 'Confound', 'Dazzle', 'Demolish', 'Dragon Pulse', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Headbutt', 'Ice Punch', 'Iron Defense', 'Iron Head', 'Iron Tail', 'Magnet Rise', 'Natural Gift', 'Recycle', 'Secret Power', 'Shock Wave', 'Snore', 'Stealth Rock', 'Steel Beam', 'Stomping Tantrum', 'Superpower', 'Thunder Punch'];
        eggMoves = [];
        break;

	case 'halberaz-r':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Night Slash', 'Throat Chop'];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Dragon Claw', 'Toxic', 'Hidden Power', 'Sunny Day', 'Hyper Beam', 'Protect', 'Rain Dance', 'Frustration', 'Earthquake', 'Return', 'Brick Break', 'Double Team', 'Sandstorm', 'Rock Tomb', 'Aerial Ace', 'Facade', 'Rest', 'Round', 'False Swipe', 'Shadow Claw', 'Payback', 'Giga Impact', 'Stone Edge', 'Swords Dance', 'Bulldoze', 'Rock Slide', 'X-Scissor', 'Dragon Tail', 'Poison Jab', 'Swagger', 'Sleep Talk', 'Substitute', 'Flash Cannon', 'Rock Smash', 'Confide', 'Cut', 'Strength', 'Diamond Claw', 'Daring Dash', 'Aftershock', 'Piledriver', 'Magnet Switch', 'Radiant Claw', 'Pulverize', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Ancient Power', 'Aqua Tail', 'Brutal Swing', 'Confound', 'Dazzle', 'Demolish', 'Dragon Pulse', 'Dual Chop', 'Endure', 'Enthrall', 'Fury Cutter', 'Headbutt', 'Iron Defense', 'Iron Head', 'Iron Tail', 'Laser Focus', 'Magnet Rise', 'Natural Gift', 'Outrage', 'Recycle', 'Secret Power', 'Snore', 'Stealth Rock', 'Steel Beam', 'Stomping Tantrum', 'Throat Chop'];
        eggMoves = [];
        break;

	case 'dyrascal':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Dragon Claw', 'Roar', 'Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Ice Beam', 'Blizzard', 'Protect', 'Rain Dance', 'Frustration', 'Smack Down', 'Thunderbolt', 'Thunder', 'Earthquake', 'Return', 'Brick Break', 'Double Team', 'Flamethrower', 'Sandstorm', 'Fire Blast', 'Rock Tomb', 'Aerial Ace', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'False Swipe', 'Fling', 'Incinerate', 'Embargo', 'Shadow Claw', 'Payback', 'Retaliate', 'Rock Polish', 'Stone Edge', 'Thunder Wave', 'Psych Up', 'Bulldoze', 'Rock Slide', 'Dragon Tail', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Snarl', 'Dark Pulse', 'Power-Up Punch', 'Confide', 'Cut', 'Strength', 'Bravado', 'Diamond Claw', 'Daring Dash', 'Aftershock', 'Dragon Roar', 'Phoenix Fire', 'Crystallize', 'Sandblast', 'Golden Flame', 'Radiant Claw', 'Jewel Blast', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Ancient Power', 'Aqua Tail', 'Breaking Swipe', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Draco Meteor', 'Dragon Pulse', 'Earth Power', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Foul Play', 'Fury Cutter', 'Headbutt', 'Ice Punch', 'Invigorate', 'Iron Head', 'Iron Tail', 'Magic Coat', 'Natural Gift', 'Outrage', 'Secret Power', 'Snore', 'Stealth Rock', 'Stomping Tantrum', 'Sucker Punch', 'Swift', 'Thunder Punch', 'Trip Up', 'Twister', 'Uproar', 'Zen Headbutt'];
        eggMoves = ['Dragon Rage', 'Dragon Rush', 'Ember', 'Jaw Thrash', 'Psybeam', 'Rock Throw', 'Rock Blast'];
        break;

	case 'dyferal':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Dragon Claw', 'Roar', 'Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Ice Beam', 'Blizzard', 'Protect', 'Rain Dance', 'Frustration', 'Smack Down', 'Thunderbolt', 'Thunder', 'Earthquake', 'Return', 'Brick Break', 'Double Team', 'Flamethrower', 'Sandstorm', 'Fire Blast', 'Rock Tomb', 'Aerial Ace', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'False Swipe', 'Fling', 'Incinerate', 'Embargo', 'Shadow Claw', 'Payback', 'Retaliate', 'Rock Polish', 'Stone Edge', 'Thunder Wave', 'Psych Up', 'Bulldoze', 'Rock Slide', 'Dragon Tail', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Snarl', 'Dark Pulse', 'Power-Up Punch', 'Confide', 'Cut', 'Strength', 'Bravado', 'Diamond Claw', 'Daring Dash', 'Aftershock', 'Dragon Roar', 'Phoenix Fire', 'Crystallize', 'Sandblast', 'Golden Flame', 'Radiant Claw', 'Jewel Blast', 'Rug Pull', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Ancient Power', 'Aqua Tail', 'Breaking Swipe', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Draco Meteor', 'Dragon Pulse', 'Earth Power', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Foul Play', 'Fury Cutter', 'Headbutt', 'Ice Punch', 'Invigorate', 'Iron Head', 'Iron Tail', 'Magic Coat', 'Natural Gift', 'Outrage', 'Secret Power', 'Snore', 'Stealth Rock', 'Stomping Tantrum', 'Sucker Punch', 'Swift', 'Thunder Punch', 'Trip Up', 'Twister', 'Uproar', 'Zen Headbutt'];
        eggMoves = ['Dragon Rage', 'Dragon Rush', 'Ember', 'Jaw Thrash', 'Psybeam', 'Rock Throw', 'Rock Blast'];
        break;

	case 'dybelial':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = ['Devastation', 'Nasty Plot', 'Dragon Dance', 'Jewel Blast'];
        evoMoves = [];
        tmMoves = ['Hone Claws', 'Dragon Claw', 'Roar', 'Toxic', 'Hidden Power', 'Sunny Day', 'Taunt', 'Ice Beam', 'Blizzard', 'Hyper Beam', 'Protect', 'Rain Dance', 'Frustration', 'Smack Down', 'Thunderbolt', 'Thunder', 'Earthquake', 'Return', 'Psychic', 'Brick Break', 'Double Team', 'Flamethrower', 'Sandstorm', 'Fire Blast', 'Rock Tomb', 'Aerial Ace', 'Torment', 'Facade', 'Rest', 'Attract', 'Thief', 'Round', 'Overheat', 'Focus Blast', 'False Swipe', 'Fling', 'Incinerate', 'Embargo', 'Shadow Claw', 'Payback', 'Retaliate', 'Giga Impact', 'Rock Polish', 'Flash', 'Stone Edge', 'Thunder Wave', 'Psych Up', 'Bulldoze', 'Rock Slide', 'Dragon Tail', 'Poison Jab', 'Swagger', 'Sleep Talk', 'Substitute', 'Rock Smash', 'Snarl', 'Dark Pulse', 'Power-Up Punch', 'Confide', 'Cut', 'Strength', 'Spirit Punch', 'Bravado', 'Diamond Claw', 'Daring Dash', 'Aftershock', 'Dragon Roar', 'Phoenix Fire', 'Crystallize', 'Sandblast', 'Golden Flame', 'Hyper-Focus', 'Radiant Claw', 'Brain Press', 'Jewel Blast', 'Rug Pull', 'Pulverize', 'Berry Share', 'Hidden Gift', 'Clear Sky'];
        tutorMoves = ['Amaze', 'Ancient Power', 'Aqua Tail', 'Body Press', 'Breaking Swipe', 'Brutal Swing', 'Captivate', 'Confound', 'Dazzle', 'Demolish', 'Draco Meteor', 'Dragon Pulse', 'Drain Punch', 'Earth Power', 'Endure', 'Enthrall', 'Fire Punch', 'Focus Punch', 'Foul Play', 'Fury Cutter', 'Headbutt', 'Ice Punch', 'Invigorate', 'Iron Head', 'Iron Tail', 'Laser Focus', 'Low Kick', 'Magic Coat', 'Natural Gift', 'Outrage', 'Secret Power', 'Snore', 'Stealth Rock', 'Stomping Tantrum', 'Sucker Punch', 'Swift', 'Thunder Punch', 'Trip Up', 'Twister', 'Uproar', 'Zen Headbutt'];
        eggMoves = ['Dragon Rage', 'Dragon Rush', 'Ember', 'Jaw Thrash', 'Psybeam', 'Rock Throw', 'Rock Blast'];
        break;

	case 'unown':
		moveLevels = [];
		levelUpMoves = [];
		relearnMoves = [];
        evoMoves = [];
        tmMoves = ['Hidden Power', 'Hidden Gift'];
        tutorMoves = [];
        eggMoves = [];
        break;
	}


	// iterate through list of moveLevels
	for (let i = 0; i < moveLevels.length; i++) {

		// if pokemon level is greater than the move level, check if move is already known
		if (level >= moveLevels[i]) {
			// eslint-disable-next-line no-empty
			if (newMoveset.includes(levelUpMoves[i])) {
			// do nothing if move is already known
			}
			// if move is not known, add new move to new moveset
			else {
				newMoveset.push(levelUpMoves[i]);
			}
		}
	}

	return newMoveset;
};