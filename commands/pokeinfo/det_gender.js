module.exports = function det_gender(pokemon) {
	// name: det_gender.js
	// description: This function determines the gender of a new Pokémon.

	// create gender ratio and gender variables
	let gratio = [];
	let gend = [];

	// determine gender ratio from specified pokemon
	switch(pokemon) {

	case 'acafia':
		gratio = 'male88';
		break;

	case 'catalcia':
		gratio = 'male88';
		break;

	case 'bossorna':
		gratio = 'male88';
		break;

	case 'crocoal':
		gratio = 'male88';
		break;

	case 'feucrota':
		gratio = 'male88';
		break;

	case 'burungin':
		gratio = 'male88';
		break;

	case 'spraylet':
		gratio = 'male88';
		break;

	case 'pandive':
		gratio = 'male88';
		break;

	case 'osgrave':
		gratio = 'male88';
		break;

	case 'auriole':
		gratio = 'male50';
		break;

	case 'icauriole':
		gratio = 'male50';
		break;

	case 'dustley':
		gratio = 'male50';
		break;

	case 'aculago':
		gratio = 'male50';
		break;

	case 'kizziff':
		gratio = 'male50';
		break;

	case 'murgaz':
		gratio = 'male50';
		break;

	case 'chaszin':
		gratio = 'male50';
		break;

	case 'bucarat':
		gratio = 'male50';
		break;

	case 'mortarat':
		gratio = 'male50';
		break;

	case 'tinimer':
		gratio = 'male50';
		break;

	case 'emperobe':
		gratio = 'male50';
		break;

	case 'altavault':
		gratio = 'male50';
		break;

	case 'belmarine':
		gratio = 'male50';
		break;

	case 'vaquerado':
		gratio = 'male50';
		break;

	case 'buneary':
		gratio = 'male50';
		break;

	case 'lopunny':
		gratio = 'male50';
		break;

	case 'jackravage':
		gratio = 'male50';
		break;

	case 'pachirisu':
		gratio = 'male50';
		break;

	case 'marazuma':
		gratio = 'male50';
		break;

	case 'paras':
		gratio = 'male50';
		break;

	case 'parasect':
		gratio = 'male50';
		break;

	case 'paracordis':
		gratio = 'male50';
		break;

	case 'gowatu':
		gratio = 'male50';
		break;

	case 'turatal':
		gratio = 'male50';
		break;

	case 'mefflora':
		gratio = 'male25';
		break;

	case 'mephodil':
		gratio = 'male25';
		break;

	case 'spilotalis':
		gratio = 'male25';
		break;

	case 'exeggcute':
		gratio = 'male50';
		break;

	case 'exeggutor':
		gratio = 'male50';
		break;

	case 'feebas':
		gratio = 'male50';
		break;

	case 'milotic':
		gratio = 'male50';
		break;

	case 'petilil':
		gratio = 'male00';
		break;

	case 'lilligant':
		gratio = 'male00';
		break;

	case 'kangaskhan':
		gratio = 'male00';
		break;

	case 'petrocka':
		gratio = 'male50';
		break;

	case 'basculin':
		gratio = 'male50';
		break;

	case 'siamacho':
		gratio = 'male50';
		break;

	case 'gravendou':
		gratio = 'male50';
		break;

	case 'cragendou':
		gratio = 'male50';
		break;

	case 'quarendou':
		gratio = 'male50';
		break;

	case 'cherubi':
		gratio = 'male50';
		break;

	case 'cherrim':
		gratio = 'male50';
		break;

	case 'cerisol':
		gratio = 'male50';
		break;

	case 'nincada':
		gratio = 'male50';
		break;

	case 'ninjask':
		gratio = 'male50';
		break;

	case 'shedinja':
		gratio = 'n/a';
		break;

	case 'minccino':
		gratio = 'male25';
		break;

	case 'cinccino':
		gratio = 'male25';
		break;

	case 'zangoose':
		gratio = 'male50';
		break;

	case 'zanthera':
		gratio = 'male50';
		break;

	case 'seviper':
		gratio = 'male50';
		break;

	case 'seviron':
		gratio = 'male50';
		break;

	case 'espurr':
		gratio = 'male50';
		break;

	case 'meowstic':
		gratio = 'male50';
		break;

	case 'josuche':
		gratio = 'male50';
		break;

	case 'farfetchd':
		gratio = 'male50';
		break;

	case 'rapscalion':
		gratio = 'male50';
		break;

	case 'chatot':
		gratio = 'male50';
		break;

	case 'lyrissimo':
		gratio = 'male50';
		break;

	case 'swablu':
		gratio = 'male50';
		break;

	case 'altaria':
		gratio = 'male50';
		break;

	case 'chantirrus':
		gratio = 'male50';
		break;

	case 'vulkhet':
		gratio = 'male50';
		break;

	case 'nekhetura':
		gratio = 'male50';
		break;

	case 'natu':
		gratio = 'male50';
		break;

	case 'xatu':
		gratio = 'male50';
		break;

	case 'nahualatu':
		gratio = 'male50';
		break;

	case 'transmite':
		gratio = 'male50';
		break;

	case 'tianglis':
		gratio = 'male50';
		break;

	case 'humbuzz':
		gratio = 'male50';
		break;

	case 'klaitning':
		gratio = 'male50';
		break;

	case 'nuwill':
		gratio = 'male50';
		break;

	case 'nulohm':
		gratio = 'male50';
		break;

	case 'donarith':
		gratio = 'male50';
		break;

	case 'mareep':
		gratio = 'male50';
		break;

	case 'flaaffy':
		gratio = 'male50';
		break;

	case 'ampharos':
		gratio = 'male50';
		break;

	case 'ramfere':
		gratio = 'male50';
		break;

	case 'lamlie':
		gratio = 'male50';
		break;

	case 'lobovo':
		gratio = 'male50';
		break;

	case 'luvaris':
		gratio = 'male50';
		break;

	case 'rakateis':
		gratio = 'male50';
		break;

	case 'cubly':
		gratio = 'male50';
		break;

	case 'arctangel':
		gratio = 'male50';
		break;

	case 'snorunt':
		gratio = 'male50';
		break;

	case 'glalie':
		gratio = 'male50';
		break;

	case 'froslass':
		gratio = 'male00';
		break;

	case 'meditite':
		gratio = 'male50';
		break;

	case 'medicham':
		gratio = 'male50';
		break;

	case 'invicunya':
		gratio = 'male50';
		break;

	case 'heladalca':
		gratio = 'male50';
		break;

	case 'cryogonal':
		gratio = 'n/a';
		break;

	case 'rasqueon':
		gratio = 'male50';
		break;

	case 'garapaima':
		gratio = 'male50';
		break;

	case 'remoraid':
		gratio = 'male50';
		break;

	case 'octillery':
		gratio = 'male50';
		break;

	case 'kelfee':
		gratio = 'male50';
		break;

	case 'drakella':
		gratio = 'male50';
		break;

	case 'clauncher':
		gratio = 'male50';
		break;

	case 'clawitzer':
		gratio = 'male50';
		break;

	case 'skrelp':
		gratio = 'male50';
		break;

	case 'dragalge':
		gratio = 'male50';
		break;

	case 'aeolagio':
		gratio = 'male50';
		break;

	case 'turistar':
		gratio = 'male50';
		break;

	case 'turumaken':
		gratio = 'male50';
		break;

	case 'freye':
		gratio = 'male50';
		break;

	case 'floundirt':
		gratio = 'male50';
		break;

	case 'halirth':
		gratio = 'male50';
		break;

	case 'latikrai':
		gratio = 'male50';
		break;

	case 'kraitra':
		gratio = 'male50';
		break;

	case 'carvanha':
		gratio = 'male50';
		break;

	case 'sharpedo':
		gratio = 'male50';
		break;

	case 'khargonaut':
		gratio = 'male50';
		break;

	case 'wyrmal':
		gratio = 'male50';
		break;

	case 'ventorm':
		gratio = 'male50';
		break;

	case 'slugma':
		gratio = 'male50';
		break;

	case 'magcargo':
		gratio = 'male50';
		break;

	case 'ignelix':
		gratio = 'male50';
		break;

	case 'scraggy':
		gratio = 'male50';
		break;

	case 'scrafty':
		gratio = 'male50';
		break;

	case 'virlich':
		gratio = 'male50';
		break;

	case 'gasvirlich':
		gratio = 'male50';
		break;

	case 'quimpy':
		gratio = 'male50';
		break;

	case 'valazman':
		gratio = 'male50';
		break;

	case 'misdreavus':
		gratio = 'male50';
		break;

	case 'mismagius':
		gratio = 'male50';
		break;

	case 'thunderma':
		gratio = 'male50';
		break;

	case 'caslot':
		gratio = 'male50';
		break;

	case 'heloptile':
		gratio = 'male50';
		break;

	case 'heliolisk':
		gratio = 'male50';
		break;

	case 'curlsa':
		gratio = 'male50';
		break;

	case 'coiffaire':
		gratio = 'male50';
		break;

	case 'ostento':
		gratio = 'male50';
		break;

	case 'minijina':
		gratio = 'male50';
		break;

	case 'bojina':
		gratio = 'male50';
		break;

	case 'noperajina':
		gratio = 'male50';
		break;

	case 'heatmor':
		gratio = 'male50';
		break;

	case 'durant':
		gratio = 'male50';
		break;

	case 'phanpy':
		gratio = 'male50';
		break;

	case 'donphan':
		gratio = 'male50';
		break;

	case 'fallorite':
		gratio = 'n/a';
		break;

	case 'volstarite':
		gratio = 'n/a';
		break;

	case 'murkrow':
		gratio = 'male50';
		break;

	case 'honchkrow':
		gratio = 'male50';
		break;

	case 'sableye':
		gratio = 'male50';
		break;

	case 'mawile':
		gratio = 'male50';
		break;

	case 'sparcoil':
		gratio = 'male75';
		break;

	case 'lamanda':
		gratio = 'male50';
		break;

	case 'marvelisk':
		gratio = 'male50';
		break;

	case 'hawlucha':
		gratio = 'male50';
		break;

	case 'onzarudo':
		gratio = 'male50';
		break;

	case 'shuckle':
		gratio = 'male50';
		break;

	case 'numel':
		gratio = 'male50';
		break;

	case 'camerupt':
		gratio = 'male50';
		break;

	case 'torranel':
		gratio = 'male50';
		break;

	case 'smeargle':
		gratio = 'male50';
		break;

	case 'galorindle':
		gratio = 'male50';
		break;

	case 'galaraud':
		gratio = 'male50';
		break;

	case 'galoryph':
		gratio = 'male50';
		break;

	case 'pindillo':
		gratio = 'male50';
		break;

	case 'charandillo':
		gratio = 'male50';
		break;

	case 'drilbur':
		gratio = 'male50';
		break;

	case 'excadrill':
		gratio = 'male50';
		break;

	case 'sandile':
		gratio = 'male50';
		break;

	case 'krokorok':
		gratio = 'male50';
		break;

	case 'krookodile':
		gratio = 'male50';
		break;

	case 'mandicore':
		gratio = 'male50';
		break;

	case 'duskull':
		gratio = 'male50';
		break;

	case 'dusclops':
		gratio = 'male50';
		break;

	case 'dusknoir':
		gratio = 'male50';
		break;

	case 'beddybite':
		gratio = 'male50';
		break;

	case 'bitemare':
		gratio = 'male50';
		break;

	case 'aron':
		gratio = 'male50';
		break;

	case 'lairon':
		gratio = 'male50';
		break;

	case 'aggron':
		gratio = 'male50';
		break;

	case 'dasfix':
		gratio = 'male50';
		break;

	case 'malraja':
		gratio = 'male50';
		break;

	case 'kiblis':
		gratio = 'male50';
		break;

	case 'ibazel':
		gratio = 'male50';
		break;

	case 'lapras':
		gratio = 'male50';
		break;

	case 'sigilyph':
		gratio = 'male50';
		break;

	case 'razelodon':
		gratio = 'male50';
		break;

	case 'vaering':
		gratio = 'male50';
		break;

	case 'raidnarr':
		gratio = 'male50';
		break;

	case 'drasarkr':
		gratio = 'male50';
		break;

	case 'derfin':
		gratio = 'male50';
		break;

	case 'encanoto':
		gratio = 'male50';
		break;

	case 'finnial':
		gratio = 'male50';
		break;

	case 'termelc':
		gratio = 'male50';
		break;

	case 'distrike':
		gratio = 'male50';
		break;

	case 'makima':
		gratio = 'n/a';
		break;

	case 'makitaku':
		gratio = 'n/a';
		break;

	case 'dartizel-r':
		gratio = 'n/a';
		break;

	case 'loftitan-r':
		gratio = 'n/a';
		break;

	case 'halberaz-r':
		gratio = 'n/a';
		break;

	case 'dyrascal':
		gratio = 'male88';
		break;

	case 'dyferal':
		gratio = 'male88';
		break;

	case 'dybelial':
		gratio = 'male88';
		break;

	case 'unown':
		gratio = 'n/a';
		break;
	}

	// randomize number between 1 and 100 for gender assignment
	const GenderResult = Math.floor(Math.random() * (100 - 1 + 1)) + (1 - 0);

	// determine gender from randomized roll
	switch (gratio) {

	case 'male50':
		if (GenderResult > 0 && GenderResult < 51) {
			gend = 'Male';
		}
		else {
			gend = 'Female';
		}
		break;

	case 'male88':
		if (GenderResult > 0 && GenderResult < 89) {
			gend = 'Male';
		}
		else {
			gend = 'Female';
		}
		break;

	case 'male75':
		if (GenderResult > 0 && GenderResult < 76) {
			gend = 'Male';
		}
		else {
			gend = 'Female';
		}
		break;

	case 'male25':
		if (GenderResult > 0 && GenderResult < 26) {
			gend = 'Male';
		}
		else {
			gend = 'Female';
		}
		break;

	case 'male00':
		gend = 'Female';
		break;

	case 'n/a':
		gend = 'Genderless';
		break;

	default:
		gend = 'Genderless';
	}

	return gend;
};