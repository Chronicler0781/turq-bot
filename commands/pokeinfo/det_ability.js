module.exports = function det_ability(pokemon, abilityno) {
	// name: det_ability.js
	// description: This function determines the ability of a new or evolved Pokémon

	let ab_num = [];
	let ability = [];

	// If pokemon is new and an ability slot has not been assigned, randomize which ability pokemon will have
	if (!abilityno.length) {
		const abilitycoin = Math.floor(Math.random() * (100 - 1 + 1)) + (1 - 0);
		if (abilitycoin < 51) {
			ab_num = 1;
		}
		else if (abilitycoin > 50) {
			ab_num = 2;
		}
	}
	// Keep ability number assignment if pokemon is not new (hence, has evolved)
	else {
		ab_num = abilityno;
	}

	// Determine ability from pokemon and specified ability number
	switch(pokemon) {

	case 'acafia':
		if (ab_num == 1 || ab_num == 2) { ability = 'Overgrow'; }
		else if (ab_num == 3) { ability = 'Chlorophyll'; }
		break;

	case 'catalcia':
		if (ab_num == 1 || ab_num == 2) { ability = 'Overgrow'; }
		else if (ab_num == 3) { ability = 'Chlorophyll'; }
		break;

	case 'bossorna':
		if (ab_num == 1 || ab_num == 2) { ability = 'Overgrow'; }
		else if (ab_num == 3) { ability = 'Chlorophyll'; }
		break;

	case 'crocoal':
		if (ab_num == 1 || ab_num == 2) { ability = 'Blaze'; }
		else if (ab_num == 3) { ability = 'Intimidate'; }
		break;

	case 'feucrota':
		if (ab_num == 1 || ab_num == 2) { ability = 'Blaze'; }
		else if (ab_num == 3) { ability = 'Intimidate'; }
		break;

	case 'burungin':
		if (ab_num == 1 || ab_num == 2) { ability = 'Blaze'; }
		else if (ab_num == 3) { ability = 'Intimidate'; }
		break;

	case 'spraylet':
		if (ab_num == 1 || ab_num == 2) { ability = 'Torrent'; }
		else if (ab_num == 3) { ability = 'Swift Swim'; }
		break;

	case 'pandive':
		if (ab_num == 1 || ab_num == 2) { ability = 'Torrent'; }
		else if (ab_num == 3) { ability = 'Swift Swim'; }
		break;

	case 'osgrave':
		if (ab_num == 1 || ab_num == 2) { ability = 'Torrent'; }
		else if (ab_num == 3) { ability = 'Swift Swim'; }
		break;

	case 'auriole':
		if (ab_num == 1) { ability = 'Technician'; }
		else if (ab_num == 2) { ability = 'Big Pecks'; }
		else if (ab_num == 3) { ability = 'Unburden'; }
		break;

	case 'icauriole':
		if (ab_num == 1) { ability = 'Technician'; }
		else if (ab_num == 2) { ability = 'Big Pecks'; }
		else if (ab_num == 3) { ability = 'Unburden'; }
		break;

	case 'dustley':
		if (ab_num == 1) { ability = 'Pickup'; }
		else if (ab_num == 2) { ability = 'Overcoat'; }
		else if (ab_num == 3) { ability = 'Shield Dust'; }
		break;

	case 'aculago':
		if (ab_num == 1) { ability = 'Pickup'; }
		else if (ab_num == 2) { ability = 'Overcoat'; }
		else if (ab_num == 3) { ability = 'Shield Dust'; }
		break;

	case 'kizziff':
		if (ab_num == 1) { ability = 'Infiltrator'; }
		else if (ab_num == 2) { ability = 'Infiltrator'; }
		else if (ab_num == 3) { ability = 'Technician'; }
		break;

	case 'murgaz':
		if (ab_num == 1) { ability = 'Infiltrator'; }
		else if (ab_num == 2) { ability = 'Infiltrator'; }
		else if (ab_num == 3) { ability = 'Technician'; }
		break;

	case 'chaszin':
		if (ab_num == 1) { ability = 'Infiltrator'; }
		else if (ab_num == 2) { ability = 'Infiltrator'; }
		else if (ab_num == 3) { ability = 'Technician'; }
		break;

	case 'bucarat':
		if (ab_num == 1) { ability = 'Poison Touch'; }
		else if (ab_num == 2) { ability = 'Liquid Ooze'; }
		else if (ab_num == 3) { ability = 'Infiltrator'; }
		break;

	case 'mortarat':
		if (ab_num == 1) { ability = 'Poison Touch'; }
		else if (ab_num == 2) { ability = 'Liquid Ooze'; }
		else if (ab_num == 3) { ability = 'Miasma Surge'; }
		break;

	case 'tinimer':
		if (ab_num == 1) { ability = 'Levitate'; }
		else if (ab_num == 2) { ability = 'Levitate'; }
		else if (ab_num == 3) { ability = 'Draft Rider'; }
		break;

	case 'emperobe':
		if (ab_num == 1) { ability = 'Wonder Skin'; }
		else if (ab_num == 2) { ability = 'Wonder Skin'; }
		else if (ab_num == 3) { ability = 'Serene Grace'; }
		break;

	case 'altavault':
		if (ab_num == 1) { ability = 'Unburden'; }
		else if (ab_num == 2) { ability = 'Unburden'; }
		else if (ab_num == 3) { ability = 'Aerialist'; }
		break;

	case 'belmarine':
		if (ab_num == 1) { ability = 'Swift Swim'; }
		else if (ab_num == 2) { ability = 'Swift Swim'; }
		else if (ab_num == 3) { ability = 'Hydration'; }
		break;

	case 'vaquerado':
		if (ab_num == 1) { ability = 'Technician'; }
		else if (ab_num == 2) { ability = 'Technician'; }
		else if (ab_num == 3) { ability = 'Competitive'; }
		break;

	case 'buneary':
		if (ab_num == 1) { ability = 'Run Away'; }
		else if (ab_num == 2) { ability = 'Klutz'; }
		else if (ab_num == 3) { ability = 'Limber'; }
		break;

	case 'lopunny':
		if (ab_num == 1) { ability = 'Cute Charm'; }
		else if (ab_num == 2) { ability = 'Klutz'; }
		else if (ab_num == 3) { ability = 'Limber'; }
		break;

	case 'jackravage':
		if (ab_num == 1) { ability = 'Rivalry'; }
		else if (ab_num == 2) { ability = 'Mold Breaker'; }
		else if (ab_num == 3) { ability = 'Moxie'; }
		break;

	case 'pachirisu':
		if (ab_num == 1) { ability = 'Run Away'; }
		else if (ab_num == 2) { ability = 'Pickup'; }
		else if (ab_num == 3) { ability = 'Volt Absorb'; }
		break;

	case 'marazuma':
		if (ab_num == 1) { ability = 'Thick Fat'; }
		else if (ab_num == 2) { ability = 'Static'; }
		else if (ab_num == 3) { ability = 'Lightning Rod'; }
		break;

	case 'paras':
		if (ab_num == 1) { ability = 'Effect Spore'; }
		else if (ab_num == 2) { ability = 'Dry Skin'; }
		else if (ab_num == 3) { ability = 'Damp'; }
		break;

	case 'parasect':
		if (ab_num == 1) { ability = 'Effect Spore'; }
		else if (ab_num == 2) { ability = 'Dry Skin'; }
		else if (ab_num == 3) { ability = 'Damp'; }
		break;

	case 'paracordis':
		if (ab_num == 1) { ability = 'Effect Spore'; }
		else if (ab_num == 2) { ability = 'Dry Skin'; }
		else if (ab_num == 3) { ability = 'Damp'; }
		break;

	case 'gowatu':
		if (ab_num == 1) { ability = 'Cacophony'; }
		else if (ab_num == 2) { ability = 'Cacophony'; }
		else if (ab_num == 3) { ability = 'Own Tempo'; }
		break;

	case 'turatal':
		if (ab_num == 1) { ability = 'Cacophony'; }
		else if (ab_num == 2) { ability = 'Cacophony'; }
		else if (ab_num == 3) { ability = 'Own Tempo'; }
		break;

	case 'mefflora':
		if (ab_num == 1) { ability = 'Natural Cure'; }
		else if (ab_num == 2) { ability = 'Chlorophyll'; }
		else if (ab_num == 3) { ability = 'Flower Veil'; }
		break;

	case 'mephodil':
		if (ab_num == 1) { ability = 'Natural Cure'; }
		else if (ab_num == 2) { ability = 'Chlorophyll'; }
		else if (ab_num == 3) { ability = 'Flower Veil'; }
		break;

	case 'spilotalis':
		if (ab_num == 1) { ability = 'Natural Cure'; }
		else if (ab_num == 2) { ability = 'Chlorophyll'; }
		else if (ab_num == 3) { ability = 'Grassy Surge'; }
		break;

	case 'exeggcute':
		if (ab_num == 1) { ability = 'Chlorophyll'; }
		else if (ab_num == 2) { ability = 'Chlorophyll'; }
		else if (ab_num == 3) { ability = 'Harvest'; }
		break;

	case 'exeggutor':
		if (ab_num == 1) { ability = 'Chlorophyll'; }
		else if (ab_num == 2) { ability = 'Chlorophyll'; }
		else if (ab_num == 3) { ability = 'Harvest'; }
		break;

	case 'feebas':
		if (ab_num == 1) { ability = 'Swift Swim'; }
		else if (ab_num == 2) { ability = 'Oblivious'; }
		else if (ab_num == 3) { ability = 'Adaptability'; }
		break;

	case 'milotic':
		if (ab_num == 1) { ability = 'Marvel Scale'; }
		else if (ab_num == 2) { ability = 'Competitive'; }
		else if (ab_num == 3) { ability = 'Cute Charm'; }
		break;

	case 'petilil':
		if (ab_num == 1) { ability = 'Chlorophyll'; }
		else if (ab_num == 2) { ability = 'Own Tempo'; }
		else if (ab_num == 3) { ability = 'Leaf Guard'; }
		break;

	case 'lilligant':
		if (ab_num == 1) { ability = 'Chlorophyll'; }
		else if (ab_num == 2) { ability = 'Own Tempo'; }
		else if (ab_num == 3) { ability = 'Leaf Guard'; }
		break;

	case 'kangaskhan':
		if (ab_num == 1) { ability = 'Early Bird'; }
		else if (ab_num == 2) { ability = 'Scrappy'; }
		else if (ab_num == 3) { ability = 'Inner Focus'; }
		break;

	case 'petrocka':
		if (ab_num == 1) { ability = 'Tough Claws'; }
		else if (ab_num == 2) { ability = 'Tough Claws'; }
		else if (ab_num == 3) { ability = 'Sturdy'; }
		break;

	case 'basculin':
		if (ab_num == 1) { ability = 'Reckless'; }
		else if (ab_num == 2) { ability = 'Adaptability'; }
		else if (ab_num == 3) { ability = 'Mold Breaker'; }
		break;

	case 'siamacho':
		if (ab_num == 1) { ability = 'Reckless'; }
		else if (ab_num == 2) { ability = 'Adaptability'; }
		else if (ab_num == 3) { ability = 'Mold Breaker'; }
		break;

	case 'gravendou':
		if (ab_num == 1) { ability = 'Iron Barbs'; }
		else if (ab_num == 2) { ability = 'Sturdy'; }
		else if (ab_num == 3) { ability = 'Skill Link'; }
		break;

	case 'cragendou':
		if (ab_num == 1) { ability = 'Iron Barbs'; }
		else if (ab_num == 2) { ability = 'Sturdy'; }
		else if (ab_num == 3) { ability = 'Skill Link'; }
		break;

	case 'quarendou':
		if (ab_num == 1) { ability = 'Iron Barbs'; }
		else if (ab_num == 2) { ability = 'Sturdy'; }
		else if (ab_num == 3) { ability = 'Skill Link'; }
		break;

	case 'cherubi':
		if (ab_num == 1) { ability = 'Chlorophyll'; }
		else if (ab_num == 2) { ability = 'Chlorophyll'; }
		else if (ab_num == 3) { ability = 'Chlorophyll'; }
		break;

	case 'cherrim':
		if (ab_num == 1) { ability = 'Flower Gift'; }
		else if (ab_num == 2) { ability = 'Flower Gift'; }
		else if (ab_num == 3) { ability = 'Flower Gift'; }
		break;

	case 'cerisol':
		if (ab_num == 1) { ability = 'Flower Gift'; }
		else if (ab_num == 2) { ability = 'Flower Gift'; }
		else if (ab_num == 3) { ability = 'Flower Gift'; }
		break;

	case 'nincada':
		if (ab_num == 1) { ability = 'Compound Eyes'; }
		else if (ab_num == 2) { ability = 'Compound Eyes'; }
		else if (ab_num == 3) { ability = 'Run Away'; }
		break;

	case 'ninjask':
		if (ab_num == 1) { ability = 'Speed Boost'; }
		else if (ab_num == 2) { ability = 'Speed Boost'; }
		else if (ab_num == 3) { ability = 'Infiltrator'; }
		break;

	case 'shedinja':
		if (ab_num == 1) { ability = 'Wonder Guard'; }
		else if (ab_num == 2) { ability = 'Wonder Guard'; }
		else if (ab_num == 3) { ability = 'Wonder Guard'; }
		break;

	case 'minccino':
		if (ab_num == 1) { ability = 'Cute Charm'; }
		else if (ab_num == 2) { ability = 'Technician'; }
		else if (ab_num == 3) { ability = 'Skill Link'; }
		break;

	case 'cinccino':
		if (ab_num == 1) { ability = 'Cute Charm'; }
		else if (ab_num == 2) { ability = 'Technician'; }
		else if (ab_num == 3) { ability = 'Skill Link'; }
		break;

	case 'zangoose':
		if (ab_num == 1) { ability = 'Immunity'; }
		else if (ab_num == 2) { ability = 'Immunity'; }
		else if (ab_num == 3) { ability = 'Toxic Boost'; }
		break;

	case 'zanthera':
		if (ab_num == 1) { ability = 'Immunity'; }
		else if (ab_num == 2) { ability = 'Immunity'; }
		else if (ab_num == 3) { ability = 'Toxic Boost'; }
		break;

	case 'seviper':
		if (ab_num == 1) { ability = 'Shed Skin'; }
		else if (ab_num == 2) { ability = 'Shed Skin'; }
		else if (ab_num == 3) { ability = 'Infiltrator'; }
		break;

	case 'seviron':
		if (ab_num == 1) { ability = 'Shed Skin'; }
		else if (ab_num == 2) { ability = 'Shed Skin'; }
		else if (ab_num == 3) { ability = 'Infiltrator'; }
		break;

	case 'espurr':
		if (ab_num == 1) { ability = 'Keen Eye'; }
		else if (ab_num == 2) { ability = 'Infiltrator'; }
		else if (ab_num == 3) { ability = 'Own Tempo'; }
		break;

	case 'meowstic':
		if (ab_num == 1) { ability = 'Keen Eye'; }
		else if (ab_num == 2) { ability = 'Infiltrator'; }
		else if (ab_num == 3) { ability = 'Prankster'; }
		break;

	case 'josuche':
		if (ab_num == 1) { ability = 'Limber'; }
		else if (ab_num == 2) { ability = 'Limber'; }
		else if (ab_num == 3) { ability = 'Technician'; }
		break;

	// eslint-disable-next-line quotes
	case "farfetch'd":
		if (ab_num == 1) { ability = 'Keen Eye'; }
		else if (ab_num == 2) { ability = 'Inner Focus'; }
		else if (ab_num == 3) { ability = 'Defiant'; }
		break;

	case 'rapscalion':
		if (ab_num == 1) { ability = 'Own Tempo'; }
		else if (ab_num == 2) { ability = 'Technician'; }
		else if (ab_num == 3) { ability = 'Defiant'; }
		break;

	case 'chatot':
		if (ab_num == 1) { ability = 'Keen Eye'; }
		else if (ab_num == 2) { ability = 'Tangled Feet'; }
		else if (ab_num == 3) { ability = 'Big Pecks'; }
		break;

	case 'lyrissimo':
		if (ab_num == 1) { ability = 'Keen Eye'; }
		else if (ab_num == 2) { ability = 'Own Tempo'; }
		else if (ab_num == 3) { ability = 'Soundproof'; }
		break;

	case 'swablu':
		if (ab_num == 1) { ability = 'Natural Cure'; }
		else if (ab_num == 2) { ability = 'Natural Cure'; }
		else if (ab_num == 3) { ability = 'Cloud Nine'; }
		break;

	case 'altaria':
		if (ab_num == 1) { ability = 'Natural Cure'; }
		else if (ab_num == 2) { ability = 'Natural Cure'; }
		else if (ab_num == 3) { ability = 'Cloud Nine'; }
		break;

	case 'chantirrus':
		if (ab_num == 1) { ability = 'Natural Cure'; }
		else if (ab_num == 2) { ability = 'Natural Cure'; }
		else if (ab_num == 3) { ability = 'Cloud Nine'; }
		break;

	case 'vulkhet':
		if (ab_num == 1) { ability = 'Flash Fire'; }
		else if (ab_num == 2) { ability = 'Flash Fire'; }
		else if (ab_num == 3) { ability = 'Drought'; }
		break;

	case 'nekhetura':
		if (ab_num == 1) { ability = 'Flash Fire'; }
		else if (ab_num == 2) { ability = 'Flash Fire'; }
		else if (ab_num == 3) { ability = 'Drought'; }
		break;

	case 'natu':
		if (ab_num == 1) { ability = 'Synchronize'; }
		else if (ab_num == 2) { ability = 'Early Bird'; }
		else if (ab_num == 3) { ability = 'Magic Bounce'; }
		break;

	case 'xatu':
		if (ab_num == 1) { ability = 'Synchronize'; }
		else if (ab_num == 2) { ability = 'Early Bird'; }
		else if (ab_num == 3) { ability = 'Magic Bounce'; }
		break;

	case 'nahualatu':
		if (ab_num == 1) { ability = 'Synchronize'; }
		else if (ab_num == 2) { ability = 'Early Bird'; }
		else if (ab_num == 3) { ability = 'Magic Bounce'; }
		break;

	case 'transmite':
		if (ab_num == 1) { ability = 'Anticipation'; }
		else if (ab_num == 2) { ability = 'Shadow Dash'; }
		else if (ab_num == 3) { ability = 'Prankster'; }
		break;

	case 'tianglis':
		if (ab_num == 1) { ability = 'Anticipation'; }
		else if (ab_num == 2) { ability = 'Shadow Cloak'; }
		else if (ab_num == 3) { ability = 'Night Shroud'; }
		break;

	case 'humbuzz':
		if (ab_num == 1) { ability = 'Static'; }
		else if (ab_num == 2) { ability = 'Volt Absorb'; }
		else if (ab_num == 3) { ability = 'Motor Drive'; }
		break;

	case 'klaitning':
		if (ab_num == 1) { ability = 'Static'; }
		else if (ab_num == 2) { ability = 'Volt Absorb'; }
		else if (ab_num == 3) { ability = 'Motor Drive'; }
		break;

	case 'nuwill':
		if (ab_num == 1) { ability = 'Guts'; }
		else if (ab_num == 2) { ability = 'Rock Head'; }
		else if (ab_num == 3) { ability = 'Reckless'; }
		break;

	case 'nulohm':
		if (ab_num == 1) { ability = 'Guts'; }
		else if (ab_num == 2) { ability = 'Rock Head'; }
		else if (ab_num == 3) { ability = 'Reckless'; }
		break;

	case 'donarith':
		if (ab_num == 1) { ability = 'Compound Eyes'; }
		else if (ab_num == 2) { ability = 'Tinted Lens'; }
		else if (ab_num == 3) { ability = 'Speed Boost'; }
		break;

	case 'mareep':
		if (ab_num == 1) { ability = 'Static'; }
		else if (ab_num == 2) { ability = 'Static'; }
		else if (ab_num == 3) { ability = 'Plus'; }
		break;

	case 'flaaffy':
		if (ab_num == 1) { ability = 'Static'; }
		else if (ab_num == 2) { ability = 'Static'; }
		else if (ab_num == 3) { ability = 'Plus'; }
		break;

	case 'ampharos':
		if (ab_num == 1) { ability = 'Static'; }
		else if (ab_num == 2) { ability = 'Static'; }
		else if (ab_num == 3) { ability = 'Plus'; }
		break;

	case 'ramfere':
		if (ab_num == 1) { ability = 'Static'; }
		else if (ab_num == 2) { ability = 'Static'; }
		else if (ab_num == 3) { ability = 'Minus'; }
		break;

	case 'lamlie':
		if (ab_num == 1) { ability = 'Tough Hide'; }
		else if (ab_num == 2) { ability = 'Tough Hide'; }
		else if (ab_num == 3) { ability = 'Sand Rush'; }
		break;

	case 'lobovo':
		if (ab_num == 1) { ability = 'Tough Hide'; }
		else if (ab_num == 2) { ability = 'Tough Hide'; }
		else if (ab_num == 3) { ability = 'Sand Rush'; }
		break;

	case 'luvaris':
		if (ab_num == 1) { ability = 'Tough Hide'; }
		else if (ab_num == 2) { ability = 'Tough Hide'; }
		else if (ab_num == 3) { ability = 'Sand Rush'; }
		break;

	case 'rakateis':
		if (ab_num == 1) { ability = 'Snow Cloak'; }
		else if (ab_num == 2) { ability = 'Tinted Lens'; }
		else if (ab_num == 3) { ability = 'Sniper'; }
		break;

	case 'cubly':
		if (ab_num == 1) { ability = 'Run Away'; }
		else if (ab_num == 2) { ability = 'Simple'; }
		else if (ab_num == 3) { ability = 'Quick Feet'; }
		break;

	case 'arctangel':
		if (ab_num == 1) { ability = 'Cute Charm'; }
		else if (ab_num == 2) { ability = 'Scornful'; }
		else if (ab_num == 3) { ability = 'Snow Cloak'; }
		break;

	case 'snorunt':
		if (ab_num == 1) { ability = 'Inner Focus'; }
		else if (ab_num == 2) { ability = 'Ice Body'; }
		else if (ab_num == 3) { ability = 'Moody'; }
		break;

	case 'glalie':
		if (ab_num == 1) { ability = 'Inner Focus'; }
		else if (ab_num == 2) { ability = 'Ice Body'; }
		else if (ab_num == 3) { ability = 'Moody'; }
		break;

	case 'froslass':
		if (ab_num == 1) { ability = 'Snow Cloak'; }
		else if (ab_num == 2) { ability = 'Snow Cloak'; }
		else if (ab_num == 3) { ability = 'Cursed Body'; }
		break;

	case 'meditite':
		if (ab_num == 1) { ability = 'Pure Power'; }
		else if (ab_num == 2) { ability = 'Pure Power'; }
		else if (ab_num == 3) { ability = 'Technician'; }
		break;

	case 'medicham':
		if (ab_num == 1) { ability = 'Pure Power'; }
		else if (ab_num == 2) { ability = 'Pure Power'; }
		else if (ab_num == 3) { ability = 'Technician'; }
		break;

	case 'invicunya':
		if (ab_num == 1) { ability = 'Overcoat'; }
		else if (ab_num == 2) { ability = 'Tough Hide'; }
		else if (ab_num == 3) { ability = 'Snow Cloak'; }
		break;

	case 'heladalca':
		if (ab_num == 1) { ability = 'Overcoat'; }
		else if (ab_num == 2) { ability = 'Tough Hide'; }
		else if (ab_num == 3) { ability = 'Justified'; }
		break;

	case 'cryogonal':
		if (ab_num == 1) { ability = 'Levitate'; }
		else if (ab_num == 2) { ability = 'Levitate'; }
		else if (ab_num == 3) { ability = 'Levitate'; }
		break;

	case 'rasqueon':
		if (ab_num == 1) { ability = 'Battle Armor'; }
		else if (ab_num == 2) { ability = 'Anger Point'; }
		else if (ab_num == 3) { ability = 'Multiscale'; }
		break;

	case 'garapaima':
		if (ab_num == 1) { ability = 'Rock Head'; }
		else if (ab_num == 2) { ability = 'Rock Head'; }
		else if (ab_num == 3) { ability = 'Sheer Force'; }
		break;

	case 'remoraid':
		if (ab_num == 1) { ability = 'Hustle'; }
		else if (ab_num == 2) { ability = 'Sniper'; }
		else if (ab_num == 3) { ability = 'Moody'; }
		break;

	case 'octillery':
		if (ab_num == 1) { ability = 'Suction Cups'; }
		else if (ab_num == 2) { ability = 'Sniper'; }
		else if (ab_num == 3) { ability = 'Moody'; }
		break;

	case 'kelfee':
		if (ab_num == 1) { ability = 'Hydration'; }
		else if (ab_num == 2) { ability = 'Hydration'; }
		else if (ab_num == 3) { ability = 'Storm Drain'; }
		break;

	case 'drakella':
		if (ab_num == 1) { ability = 'Hydration'; }
		else if (ab_num == 2) { ability = 'Hydration'; }
		else if (ab_num == 3) { ability = 'Storm Drain'; }
		break;

	case 'clauncher':
		if (ab_num == 1) { ability = 'Mega Launcher'; }
		else if (ab_num == 2) { ability = 'Mega Launcher'; }
		else if (ab_num == 3) { ability = 'Mega Launcher'; }
		break;

	case 'clawitzer':
		if (ab_num == 1) { ability = 'Mega Launcher'; }
		else if (ab_num == 2) { ability = 'Mega Launcher'; }
		else if (ab_num == 3) { ability = 'Mega Launcher'; }
		break;

	case 'skrelp':
		if (ab_num == 1) { ability = 'Poison Point'; }
		else if (ab_num == 2) { ability = 'Poison Touch'; }
		else if (ab_num == 3) { ability = 'Adaptability'; }
		break;

	case 'dragalge':
		if (ab_num == 1) { ability = 'Poison Point'; }
		else if (ab_num == 2) { ability = 'Poison Touch'; }
		else if (ab_num == 3) { ability = 'Adaptability'; }
		break;

	case 'aeolagio':
		if (ab_num == 1) { ability = 'Levitate'; }
		else if (ab_num == 2) { ability = 'Poison Touch'; }
		else if (ab_num == 3) { ability = 'Water Absorb'; }
		break;

	case 'turistar':
		if (ab_num == 1) { ability = 'Skill Link'; }
		else if (ab_num == 2) { ability = 'Draft Rider'; }
		else if (ab_num == 3) { ability = 'Unburden'; }
		break;

	case 'turumaken':
		if (ab_num == 1) { ability = 'Skill Link'; }
		else if (ab_num == 2) { ability = 'Draft Rider'; }
		else if (ab_num == 3) { ability = 'Unburden'; }
		break;

	case 'freye':
		if (ab_num == 1) { ability = 'Damp'; }
		else if (ab_num == 2) { ability = 'Damp'; }
		else if (ab_num == 3) { ability = 'Unaware'; }
		break;

	case 'floundirt':
		if (ab_num == 1) { ability = 'Damp'; }
		else if (ab_num == 2) { ability = 'Damp'; }
		else if (ab_num == 3) { ability = 'Unaware'; }
		break;

	case 'halirth':
		if (ab_num == 1) { ability = 'Damp'; }
		else if (ab_num == 2) { ability = 'Damp'; }
		else if (ab_num == 3) { ability = 'Unaware'; }
		break;

	case 'latikrai':
		if (ab_num == 1) { ability = 'Shed Skin'; }
		else if (ab_num == 2) { ability = 'Swift Swim'; }
		else if (ab_num == 3) { ability = 'Drizzle'; }
		break;

	case 'kraitra':
		if (ab_num == 1) { ability = 'Shed Skin'; }
		else if (ab_num == 2) { ability = 'Swift Swim'; }
		else if (ab_num == 3) { ability = 'Drizzle'; }
		break;

	case 'carvanha':
		if (ab_num == 1) { ability = 'Rough Skin'; }
		else if (ab_num == 2) { ability = 'Rough Skin'; }
		else if (ab_num == 3) { ability = 'Speed Boost'; }
		break;

	case 'sharpedo':
		if (ab_num == 1) { ability = 'Rough Skin'; }
		else if (ab_num == 2) { ability = 'Rough Skin'; }
		else if (ab_num == 3) { ability = 'Speed Boost'; }
		break;

	case 'khargonaut':
		if (ab_num == 1) { ability = 'Rough Skin'; }
		else if (ab_num == 2) { ability = 'Rough Skin'; }
		else if (ab_num == 3) { ability = 'Rock Head'; }
		break;

	case 'wyrmal':
		if (ab_num == 1) { ability = 'Magma Armor'; }
		else if (ab_num == 2) { ability = 'Magma Armor'; }
		else if (ab_num == 3) { ability = 'Swift Swim'; }
		break;

	case 'ventorm':
		if (ab_num == 1) { ability = 'White Smoke'; }
		else if (ab_num == 2) { ability = 'White Smoke'; }
		else if (ab_num == 3) { ability = 'Solid Rock'; }
		break;

	case 'slugma':
		if (ab_num == 1) { ability = 'Magma Armor'; }
		else if (ab_num == 2) { ability = 'Flame Body'; }
		else if (ab_num == 3) { ability = 'Weak Armor'; }
		break;

	case 'magcargo':
		if (ab_num == 1) { ability = 'Magma Armor'; }
		else if (ab_num == 2) { ability = 'Flame Body'; }
		else if (ab_num == 3) { ability = 'Weak Armor'; }
		break;

	case 'ignelix':
		if (ab_num == 1) { ability = 'Magma Armor'; }
		else if (ab_num == 2) { ability = 'Flame Body'; }
		else if (ab_num == 3) { ability = 'Heat Wall'; }
		break;

	case 'scraggy':
		if (ab_num == 1) { ability = 'Shed Skin'; }
		else if (ab_num == 2) { ability = 'Moxie'; }
		else if (ab_num == 3) { ability = 'Intimidate'; }
		break;

	case 'scrafty':
		if (ab_num == 1) { ability = 'Shed Skin'; }
		else if (ab_num == 2) { ability = 'Moxie'; }
		else if (ab_num == 3) { ability = 'Intimidate'; }
		break;

	case 'virlich':
		if (ab_num == 1) { ability = 'Illuminate'; }
		else if (ab_num == 2) { ability = 'Flash Fire'; }
		else if (ab_num == 3) { ability = 'Flame Body'; }
		break;

	case 'gasvirlich':
		if (ab_num == 1) { ability = 'Illuminate'; }
		else if (ab_num == 2) { ability = 'Flash Fire'; }
		else if (ab_num == 3) { ability = 'Flame Body'; }
		break;

	case 'quimpy':
		if (ab_num == 1) { ability = 'Run Away'; }
		else if (ab_num == 2) { ability = 'Rattled'; }
		else if (ab_num == 3) { ability = 'Anticipation'; }
		break;

	case 'valazman':
		if (ab_num == 1) { ability = 'Guts'; }
		else if (ab_num == 2) { ability = 'Intimidate'; }
		else if (ab_num == 3) { ability = 'Tough Claws'; }
		break;

	case 'misdreavus':
		if (ab_num == 1) { ability = 'Levitate'; }
		else if (ab_num == 2) { ability = 'Levitate'; }
		else if (ab_num == 3) { ability = 'Levitate'; }
		break;

	case 'mismagius':
		if (ab_num == 1) { ability = 'Levitate'; }
		else if (ab_num == 2) { ability = 'Levitate'; }
		else if (ab_num == 3) { ability = 'Levitate'; }
		break;

	case 'thunderma':
		if (ab_num == 1) { ability = 'Shed Skin'; }
		else if (ab_num == 2) { ability = 'Simple'; }
		else if (ab_num == 3) { ability = 'Volt Absorb'; }
		break;

	case 'caslot':
		if (ab_num == 1) { ability = 'Lucky Shot'; }
		else if (ab_num == 2) { ability = 'Lucky Shot'; }
		else if (ab_num == 3) { ability = 'Moody'; }
		break;

	case 'heloptile':
		if (ab_num == 1) { ability = 'Sand Veil'; }
		else if (ab_num == 2) { ability = 'Dry Skin'; }
		else if (ab_num == 3) { ability = 'Solar Power'; }
		break;

	case 'heliolisk':
		if (ab_num == 1) { ability = 'Sand Veil'; }
		else if (ab_num == 2) { ability = 'Dry Skin'; }
		else if (ab_num == 3) { ability = 'Solar Power'; }
		break;

	case 'curlsa':
		if (ab_num == 1) { ability = 'Gluttony'; }
		else if (ab_num == 2) { ability = 'Frisk'; }
		else if (ab_num == 3) { ability = 'Cute Charm'; }
		break;

	case 'coiffaire':
		if (ab_num == 1) { ability = 'Gluttony'; }
		else if (ab_num == 2) { ability = 'Frisk'; }
		else if (ab_num == 3) { ability = 'Cute Charm'; }
		break;

	case 'ostento':
		if (ab_num == 1) { ability = 'Gluttony'; }
		else if (ab_num == 2) { ability = 'Frisk'; }
		else if (ab_num == 3) { ability = 'Anger Point'; }
		break;

	case 'minijina':
		if (ab_num == 1) { ability = 'Intimidate'; }
		else if (ab_num == 2) { ability = 'Intimidate'; }
		else if (ab_num == 3) { ability = 'Pressure'; }
		break;

	case 'bojina':
		if (ab_num == 1) { ability = 'Intimidate'; }
		else if (ab_num == 2) { ability = 'Intimidate'; }
		else if (ab_num == 3) { ability = 'Pressure'; }
		break;

	case 'noperajina':
		if (ab_num == 1) { ability = 'Intimidate'; }
		else if (ab_num == 2) { ability = 'Intimidate'; }
		else if (ab_num == 3) { ability = 'Illusion'; }
		break;

	case 'heatmor':
		if (ab_num == 1) { ability = 'Gluttony'; }
		else if (ab_num == 2) { ability = 'Flash Fire'; }
		else if (ab_num == 3) { ability = 'White Smoke'; }
		break;

	case 'durant':
		if (ab_num == 1) { ability = 'Swarm'; }
		else if (ab_num == 2) { ability = 'Hustle'; }
		else if (ab_num == 3) { ability = 'Truant'; }
		break;

	case 'phanpy':
		if (ab_num == 1) { ability = 'Pickup'; }
		else if (ab_num == 2) { ability = 'Pickup'; }
		else if (ab_num == 3) { ability = 'Sand Veil'; }
		break;

	case 'donphan':
		if (ab_num == 1) { ability = 'Sturdy'; }
		else if (ab_num == 2) { ability = 'Sturdy'; }
		else if (ab_num == 3) { ability = 'Sand Veil'; }
		break;

	case 'fallorite':
		if (ab_num == 1) { ability = 'Levitate'; }
		else if (ab_num == 2) { ability = 'Levitate'; }
		else if (ab_num == 3) { ability = 'Levitate'; }
		break;

	case 'volstarite':
		if (ab_num == 1) { ability = 'Levitate'; }
		else if (ab_num == 2) { ability = 'Levitate'; }
		else if (ab_num == 3) { ability = 'Levitate'; }
		break;

	case 'murkrow':
		if (ab_num == 1) { ability = 'Insomnia'; }
		else if (ab_num == 2) { ability = 'Super Luck'; }
		else if (ab_num == 3) { ability = 'Prankster'; }
		break;

	case 'honchkrow':
		if (ab_num == 1) { ability = 'Insomnia'; }
		else if (ab_num == 2) { ability = 'Super Luck'; }
		else if (ab_num == 3) { ability = 'Moxie'; }
		break;

	case 'sableye':
		if (ab_num == 1) { ability = 'Keen Eye'; }
		else if (ab_num == 2) { ability = 'Stall'; }
		else if (ab_num == 3) { ability = 'Pranskter'; }
		break;

	case 'mawile':
		if (ab_num == 1) { ability = 'Hyper Cutter'; }
		else if (ab_num == 2) { ability = 'Intimidate'; }
		else if (ab_num == 3) { ability = 'Sheer Force'; }
		break;

	case 'sparcoil':
		if (ab_num == 1) { ability = 'Flash Fire'; }
		else if (ab_num == 2) { ability = 'Own Tempo'; }
		else if (ab_num == 3) { ability = 'Iron Fist'; }
		break;

	case 'lamanda':
		if (ab_num == 1) { ability = 'Shed Skin'; }
		else if (ab_num == 2) { ability = 'Unaware'; }
		else if (ab_num == 3) { ability = 'Truant'; }
		break;

	case 'marvelisk':
		if (ab_num == 1) { ability = 'Technician'; }
		else if (ab_num == 2) { ability = 'Mold Breaker'; }
		else if (ab_num == 3) { ability = 'Indomitable'; }
		break;

	case 'hawlucha':
		if (ab_num == 1) { ability = 'Limber'; }
		else if (ab_num == 2) { ability = 'Unburden'; }
		else if (ab_num == 3) { ability = 'Mold Breaker'; }
		break;

	case 'onzarudo':
		if (ab_num == 1) { ability = 'Sheer Force'; }
		else if (ab_num == 2) { ability = 'Overzealous'; }
		else if (ab_num == 3) { ability = 'No Guard'; }
		break;

	case 'shuckle':
		if (ab_num == 1) { ability = 'Sturdy'; }
		else if (ab_num == 2) { ability = 'Gluttony'; }
		else if (ab_num == 3) { ability = 'Contrary'; }
		break;

	case 'numel':
		if (ab_num == 1) { ability = 'Oblivious'; }
		else if (ab_num == 2) { ability = 'Simple'; }
		else if (ab_num == 3) { ability = 'Own Tempo'; }
		break;

	case 'camerupt':
		if (ab_num == 1) { ability = 'Magma Armor'; }
		else if (ab_num == 2) { ability = 'Solid Rock'; }
		else if (ab_num == 3) { ability = 'Anger Point'; }
		break;

	case 'torranel':
		if (ab_num == 1) { ability = 'Solar Power'; }
		else if (ab_num == 2) { ability = 'Solar Boost'; }
		else if (ab_num == 3) { ability = 'Flash Fire'; }
		break;

	case 'smeargle':
		if (ab_num == 1) { ability = 'Own Tempo'; }
		else if (ab_num == 2) { ability = 'Technician'; }
		else if (ab_num == 3) { ability = 'Moody'; }
		break;

	case 'galorindle':
		if (ab_num == 1) { ability = 'Illuminate'; }
		else if (ab_num == 2) { ability = 'Illuminate'; }
		else if (ab_num == 3) { ability = 'Frisk'; }
		break;

	case 'galaraud':
		if (ab_num == 1) { ability = 'Illuminate'; }
		else if (ab_num == 2) { ability = 'Illuminate'; }
		else if (ab_num == 3) { ability = 'Pickpocket'; }
		break;

	case 'galoryph':
		if (ab_num == 1) { ability = 'Illuminate'; }
		else if (ab_num == 2) { ability = 'Illuminate'; }
		else if (ab_num == 3) { ability = 'Analytic'; }
		break;

	case 'pindillo':
		if (ab_num == 1) { ability = 'Sand Rush'; }
		else if (ab_num == 2) { ability = 'Sand Veil'; }
		else if (ab_num == 3) { ability = 'Tough Claws'; }
		break;

	case 'charandillo':
		if (ab_num == 1) { ability = 'Sand Rush'; }
		else if (ab_num == 2) { ability = 'Sand Veil'; }
		else if (ab_num == 3) { ability = 'Tough Claws'; }
		break;

	case 'drilbur':
		if (ab_num == 1) { ability = 'Sand Rush'; }
		else if (ab_num == 2) { ability = 'Sand Force'; }
		else if (ab_num == 3) { ability = 'Mold Breaker'; }
		break;

	case 'excadrill':
		if (ab_num == 1) { ability = 'Sand Rush'; }
		else if (ab_num == 2) { ability = 'Sand Force'; }
		else if (ab_num == 3) { ability = 'Mold Breaker'; }
		break;

	case 'sandile':
		if (ab_num == 1) { ability = 'Intimidate'; }
		else if (ab_num == 2) { ability = 'Moxie'; }
		else if (ab_num == 3) { ability = 'Anger Point'; }
		break;

	case 'krokorok':
		if (ab_num == 1) { ability = 'Intimidate'; }
		else if (ab_num == 2) { ability = 'Moxie'; }
		else if (ab_num == 3) { ability = 'Anger Point'; }
		break;

	case 'krookodile':
		if (ab_num == 1) { ability = 'Intimidate'; }
		else if (ab_num == 2) { ability = 'Moxie'; }
		else if (ab_num == 3) { ability = 'Anger Point'; }
		break;

	case 'mandicore':
		if (ab_num == 1) { ability = 'Hustle'; }
		else if (ab_num == 2) { ability = 'Quick Feet'; }
		else if (ab_num == 3) { ability = 'Unnerve'; }
		break;

	case 'duskull':
		if (ab_num == 1) { ability = 'Levitate'; }
		else if (ab_num == 2) { ability = 'Levitate'; }
		else if (ab_num == 3) { ability = 'Frisk'; }
		break;

	case 'dusclops':
		if (ab_num == 1) { ability = 'Pressure'; }
		else if (ab_num == 2) { ability = 'Pressure'; }
		else if (ab_num == 3) { ability = 'Frisk'; }
		break;

	case 'dusknoir':
		if (ab_num == 1) { ability = 'Pressure'; }
		else if (ab_num == 2) { ability = 'Pressure'; }
		else if (ab_num == 3) { ability = 'Frisk'; }
		break;

	case 'beddybite':
		if (ab_num == 1) { ability = 'Cursed Body'; }
		else if (ab_num == 2) { ability = 'Insomnia'; }
		else if (ab_num == 3) { ability = 'Bad Dreams'; }
		break;

	case 'bitemare':
		if (ab_num == 1) { ability = 'Cursed Body'; }
		else if (ab_num == 2) { ability = 'Insomnia'; }
		else if (ab_num == 3) { ability = 'Bad Dreams'; }
		break;

	case 'aron':
		if (ab_num == 1) { ability = 'Sturdy'; }
		else if (ab_num == 2) { ability = 'Rock Head'; }
		else if (ab_num == 3) { ability = 'Heavy Metal'; }
		break;

	case 'lairon':
		if (ab_num == 1) { ability = 'Sturdy'; }
		else if (ab_num == 2) { ability = 'Rock Head'; }
		else if (ab_num == 3) { ability = 'Heavy Metal'; }
		break;

	case 'aggron':
		if (ab_num == 1) { ability = 'Sturdy'; }
		else if (ab_num == 2) { ability = 'Rock Head'; }
		else if (ab_num == 3) { ability = 'Heavy Metal'; }
		break;

	case 'dasfix':
		if (ab_num == 1) { ability = 'Levitate'; }
		else if (ab_num == 2) { ability = 'Levitate'; }
		else if (ab_num == 3) { ability = 'Levitate'; }
		break;

	case 'malraja':
		if (ab_num == 1) { ability = 'Levitate'; }
		else if (ab_num == 2) { ability = 'Levitate'; }
		else if (ab_num == 3) { ability = 'Levitate'; }
		break;

	case 'kiblis':
		if (ab_num == 1) { ability = 'Synchronize'; }
		else if (ab_num == 2) { ability = 'Synchronize'; }
		else if (ab_num == 3) { ability = 'Magic Bounce'; }
		break;

	case 'ibazel':
		if (ab_num == 1) { ability = 'Synchronize'; }
		else if (ab_num == 2) { ability = 'Synchronize'; }
		else if (ab_num == 3) { ability = 'Magic Bounce'; }
		break;

	case 'lapras':
		if (ab_num == 1) { ability = 'Water Absorb'; }
		else if (ab_num == 2) { ability = 'Shell Armor'; }
		else if (ab_num == 3) { ability = 'Hydration'; }
		break;

	case 'sigilyph':
		if (ab_num == 1) { ability = 'Wonder Skin'; }
		else if (ab_num == 2) { ability = 'Magic Guard'; }
		else if (ab_num == 3) { ability = 'Tinted Lens'; }
		break;

	case 'razelodon':
		if (ab_num == 1) { ability = 'No Guard'; }
		else if (ab_num == 2) { ability = 'Gluttony'; }
		else if (ab_num == 3) { ability = 'Guts'; }
		break;

	case 'vaering':
		if (ab_num == 1) { ability = 'Anger Point'; }
		else if (ab_num == 2) { ability = 'Intimidate'; }
		else if (ab_num == 3) { ability = 'Moxie'; }
		break;

	case 'raidnarr':
		if (ab_num == 1) { ability = 'Anger Point'; }
		else if (ab_num == 2) { ability = 'Intimidate'; }
		else if (ab_num == 3) { ability = 'Moxie'; }
		break;

	case 'drasarkr':
		if (ab_num == 1) { ability = 'Anger Point'; }
		else if (ab_num == 2) { ability = 'Intimidate'; }
		else if (ab_num == 3) { ability = 'Moxie'; }
		break;

	case 'derfin':
		if (ab_num == 1) { ability = 'Unaware'; }
		else if (ab_num == 2) { ability = 'Klutz'; }
		else if (ab_num == 3) { ability = 'Simple'; }
		break;

	case 'encanoto':
		if (ab_num == 1) { ability = 'Analytic'; }
		else if (ab_num == 2) { ability = 'Magic Guard'; }
		else if (ab_num == 3) { ability = 'Dry Skin'; }
		break;

	case 'finnial':
		if (ab_num == 1) { ability = 'Lightning Rod'; }
		else if (ab_num == 2) { ability = 'Motor Drive'; }
		else if (ab_num == 3) { ability = 'Mold Breaker'; }
		break;

	case 'termelc':
		if (ab_num == 1) { ability = 'Lightning Rod'; }
		else if (ab_num == 2) { ability = 'Motor Drive'; }
		else if (ab_num == 3) { ability = 'Mold Breaker'; }
		break;

	case 'distrike':
		if (ab_num == 1) { ability = 'Lightning Rod'; }
		else if (ab_num == 2) { ability = 'Motor Drive'; }
		else if (ab_num == 3) { ability = 'Mold Breaker'; }
		break;

	case 'makima':
		if (ab_num == 1) { ability = 'Levitate'; }
		else if (ab_num == 2) { ability = 'Levitate'; }
		else if (ab_num == 3) { ability = 'Levitate'; }
		break;

	case 'makitaku':
		if (ab_num == 1) { ability = 'Levitate'; }
		else if (ab_num == 2) { ability = 'Levitate'; }
		else if (ab_num == 3) { ability = 'Levitate'; }
		break;

	case 'dartizel-r':
		if (ab_num == 1) { ability = 'Hustle'; }
		else if (ab_num == 2) { ability = 'Hustle'; }
		else if (ab_num == 3) { ability = 'Technician'; }
		break;

	case 'loftitan-r':
		if (ab_num == 1) { ability = 'Pressure'; }
		else if (ab_num == 2) { ability = 'Pressure'; }
		else if (ab_num == 3) { ability = 'Sturdy'; }
		break;

	case 'halberaz-r':
		if (ab_num == 1) { ability = 'Mold Breaker'; }
		else if (ab_num == 2) { ability = 'Mold Breaker'; }
		else if (ab_num == 3) { ability = 'No Guard'; }
		break;

	case 'dyrascal':
		if (ab_num == 1) { ability = 'Intimidate'; }
		else if (ab_num == 2) { ability = 'Intimidate'; }
		else if (ab_num == 3) { ability = 'Sheer Force'; }
		break;

	case 'dyferal':
		if (ab_num == 1) { ability = 'Intimidate'; }
		else if (ab_num == 2) { ability = 'Intimidate'; }
		else if (ab_num == 3) { ability = 'Sheer Force'; }
		break;

	case 'dybelial':
		if (ab_num == 1) { ability = 'Intimidate'; }
		else if (ab_num == 2) { ability = 'Intimidate'; }
		else if (ab_num == 3) { ability = 'Sheer Force'; }
		break;

	case 'unown':
		if (ab_num == 1) { ability = 'Levitate'; }
		else if (ab_num == 2) { ability = 'Levitate'; }
		else if (ab_num == 3) { ability = 'Levitate'; }
		break;
	}

	// return object with ability number and ability
	return { number: ab_num, name: ability };
};