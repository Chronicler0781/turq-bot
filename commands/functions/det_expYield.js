module.exports = function det_gender(pokemon) {
	// name: det_gender.js
	// description: This function determines the gender of a new Pokémon.

	// create gender ratio and gender variables
	let expYield = null;

	// determine gender ratio from specified pokemon
	switch(pokemon) {

	case 'acafia':
		expYield = 64;
		break;

	case 'catalcia':
		expYield = 147;
		break;

	case 'bossorna':
		expYield = 265;
		break;

	case 'crocoal':
		expYield = 64;
		break;

	case 'feucrota':
		expYield = 147;
		break;

	case 'burungin':
		expYield = 265;
		break;

	case 'spraylet':
		expYield = 64;
		break;

	case 'pandive':
		expYield = 147;
		break;

	case 'osgrave':
		expYield = 265;
		break;

	case 'auriole':
		expYield = 54;
		break;

	case 'icauriole':
		expYield = 159;
		break;

	case 'dustley':
		expYield = 51;
		break;

	case 'aculago':
		expYield = 146;
		break;

	case 'kizziff':
		expYield = 52;
		break;

	case 'murgaz':
		expYield = 126;
		break;

	case 'chaszin':
		expYield = 243;
		break;

	case 'bucarat':
		expYield = 51;
		break;

	case 'mortarat':
		expYield = 147;
		break;

	case 'tinimer':
		expYield = 52;
		break;

	case 'emperobe':
		expYield = 170;
		break;

	case 'altavault':
		expYield = 170;
		break;

	case 'belmarine':
		expYield = 170;
		break;

	case 'vaquerado':
		expYield = 170;
		break;

	case 'buneary':
		expYield = 70;
		break;

	case 'lopunny':
		expYield = 168;
		break;

	case 'jackravage':
		expYield = 168;
		break;

	case 'pachirisu':
		expYield = 142;
		break;

	case 'marazuma':
		expYield = 202;
		break;

	case 'paras':
		expYield = 57;
		break;

	case 'parasect':
		expYield = 142;
		break;

	case 'paracordis':
		expYield = 243;
		break;

	case 'gowatu':
		expYield = 54;
		break;

	case 'turatal':
		expYield = 159;
		break;

	case 'mefflora':
		expYield = 62;
		break;

	case 'mephodil':
		expYield = 133;
		break;

	case 'spilotalis':
		expYield = 250;
		break;

	case 'exeggcute':
		expYield = 65;
		break;

	case 'exeggutor':
		expYield = 186;
		break;

	case 'feebas':
		expYield = 40;
		break;

	case 'milotic':
		expYield = 189;
		break;

	case 'petilil':
		expYield = 56;
		break;

	case 'lilligant':
		expYield = 168;
		break;

	case 'kangaskhan':
		expYield = 172;
		break;

	case 'petrocka':
		expYield = 175;
		break;

	case 'basculin':
		expYield = 161;
		break;

	case 'siamacho':
		expYield = 211;
		break;

	case 'gravendou':
		expYield = 64;
		break;

	case 'cragendou':
		expYield = 145;
		break;

	case 'quarendou':
		expYield = 255;
		break;

	case 'cherubi':
		expYield = 55;
		break;

	case 'cherrim':
		expYield = 158;
		break;

	case 'cerisol':
		expYield = 245;
		break;

	case 'nincada':
		expYield = 53;
		break;

	case 'ninjask':
		expYield = 160;
		break;

	case 'shedinja':
		expYield = 83;
		break;

	case 'minccino':
		expYield = 60;
		break;

	case 'cinccino':
		expYield = 165;
		break;

	case 'zangoose':
		expYield = 160;
		break;

	case 'zanthera':
		expYield = 215;
		break;

	case 'seviper':
		expYield = 160;
		break;

	case 'seviron':
		expYield = 215;
		break;

	case 'espurr':
		expYield = 71;
		break;

	case 'meowstic':
		expYield = 163;
		break;

	case 'josuche':
		expYield = 172;
		break;

	case 'farfetch\'d':
		expYield = 132;
		break;

	case 'rapscalion':
		expYield = 192;
		break;

	case 'chatot':
		expYield = 144;
		break;

	case 'lyrissimo':
		expYield = 204;
		break;

	case 'swablu':
		expYield = 62;
		break;

	case 'altaria':
		expYield = 172;
		break;

	case 'chantirrus':
		expYield = 172;
		break;

	case 'vulkhet':
		expYield = 74;
		break;

	case 'nekhetura':
		expYield = 179;
		break;

	case 'natu':
		expYield = 64;
		break;

	case 'xatu':
		expYield = 165;
		break;

	case 'nahualatu':
		expYield = 246;
		break;

	case 'transmite':
		expYield = 152;
		break;

	case 'tianglis':
		expYield = 164;
		break;

	case 'humbuzz':
		expYield = 54;
		break;

	case 'klaitning':
		expYield = 159;
		break;

	case 'nuwill':
		expYield = 64;
		break;

	case 'nulohm':
		expYield = 189;
		break;

	case 'donarith':
		expYield = 175;
		break;

	case 'mareep':
		expYield = 56;
		break;

	case 'flaaffy':
		expYield = 128;
		break;

	case 'ampharos':
		expYield = 255;
		break;

	case 'ramfere':
		expYield = 255;
		break;

	case 'lamlie':
		expYield = 61;
		break;

	case 'lobovo':
		expYield = 142;
		break;

	case 'luvaris':
		expYield = 253;
		break;

	case 'rakateis':
		expYield = 174;
		break;

	case 'cubly':
		expYield = 40;
		break;

	case 'arctangel':
		expYield = 189;
		break;

	case 'snorunt':
		expYield = 60;
		break;

	case 'glalie':
		expYield = 168;
		break;

	case 'froslass':
		expYield = 168;
		break;

	case 'meditite':
		expYield = 56;
		break;

	case 'medicham':
		expYield = 144;
		break;

	case 'invicunya':
		expYield = 67;
		break;

	case 'heladalca':
		expYield = 173;
		break;

	case 'cryogonal':
		expYield = 180;
		break;

	case 'rasqueon':
		expYield = 180;
		break;

	case 'garapaima':
		expYield = 175;
		break;

	case 'remoraid':
		expYield = 60;
		break;

	case 'octillery':
		expYield = 168;
		break;

	case 'kelfee':
		expYield = 66;
		break;

	case 'drakella':
		expYield = 178;
		break;

	case 'clauncher':
		expYield = 66;
		break;

	case 'clawitzer':
		expYield = 100;
		break;

	case 'skrelp':
		expYield = 64;
		break;

	case 'dragalge':
		expYield = 173;
		break;

	case 'aeolagio':
		expYield = 175;
		break;

	case 'turistar':
		expYield = 71;
		break;

	case 'turumaken':
		expYield = 178;
		break;

	case 'freye':
		expYield = 60;
		break;

	case 'floundirt':
		expYield = 135;
		break;

	case 'halirth':
		expYield = 255;
		break;

	case 'latikrai':
		expYield = 67;
		break;

	case 'kraitra':
		expYield = 180;
		break;

	case 'carvanha':
		expYield = 61;
		break;

	case 'sharpedo':
		expYield = 161;
		break;

	case 'khargonaut':
		expYield = 161;
		break;

	case 'wyrmal':
		expYield = 64;
		break;

	case 'ventorm':
		expYield = 165;
		break;

	case 'slugma':
		expYield = 50;
		break;

	case 'magcargo':
		expYield = 151;
		break;

	case 'ignelix':
		expYield = 243;
		break;

	case 'scraggy':
		expYield = 70;
		break;

	case 'scrafty':
		expYield = 171;
		break;

	case 'virlich':
		expYield = 62;
		break;

	case 'gasvirlich':
		expYield = 166;
		break;

	case 'quimpy':
		expYield = 40;
		break;

	case 'valazman':
		expYield = 189;
		break;

	case 'misdreavus':
		expYield = 87;
		break;

	case 'mismagius':
		expYield = 173;
		break;

	case 'thunderma':
		expYield = 172;
		break;

	case 'caslot':
		expYield = 174;
		break;

	case 'heloptile':
		expYield = 58;
		break;

	case 'heliolisk':
		expYield = 168;
		break;

	case 'curlsa':
		expYield = 60;
		break;

	case 'coiffaire':
		expYield = 140;
		break;

	case 'ostento':
		expYield = 250;
		break;

	case 'minijina':
		expYield = 62;
		break;

	case 'bojina':
		expYield = 144;
		break;

	case 'noperajina':
		expYield = 255;
		break;

	case 'heatmor':
		expYield = 169;
		break;

	case 'durant':
		expYield = 169;
		break;

	case 'phanpy':
		expYield = 66;
		break;

	case 'donphan':
		expYield = 175;
		break;

	case 'fallorite':
		expYield = 71;
		break;

	case 'volstarite':
		expYield = 182;
		break;

	case 'murkrow':
		expYield = 81;
		break;

	case 'honchkrow':
		expYield = 177;
		break;

	case 'sableye':
		expYield = 133;
		break;

	case 'mawile':
		expYield = 133;
		break;

	case 'sparcoil':
		expYield = 165;
		break;

	case 'lamanda':
		expYield = 40;
		break;

	case 'marvelisk':
		expYield = 189;
		break;

	case 'hawlucha':
		expYield = 175;
		break;

	case 'onzarudo':
		expYield = 175;
		break;

	case 'shuckle':
		expYield = 177;
		break;

	case 'numel':
		expYield = 61;
		break;

	case 'camerupt':
		expYield = 161;
		break;

	case 'torranel':
		expYield = 180;
		break;

	case 'smeargle':
		expYield = 88;
		break;

	case 'galorindle':
		expYield = 65;
		break;

	case 'galaraud':
		expYield = 170;
		break;

	case 'galoryph':
		expYield = 170;
		break;

	case 'pindillo':
		expYield = 64;
		break;

	case 'charandillo':
		expYield = 174;
		break;

	case 'drilbur':
		expYield = 66;
		break;

	case 'excadrill':
		expYield = 178;
		break;

	case 'sandile':
		expYield = 58;
		break;

	case 'krokorok':
		expYield = 123;
		break;

	case 'krookodile':
		expYield = 260;
		break;

	case 'mandicore':
		expYield = 177;
		break;

	case 'duskull':
		expYield = 59;
		break;

	case 'dusclops':
		expYield = 159;
		break;

	case 'dusknoir':
		expYield = 263;
		break;

	case 'beddybite':
		expYield = 59;
		break;

	case 'bitemare':
		expYield = 179;
		break;

	case 'aron':
		expYield = 66;
		break;

	case 'lairon':
		expYield = 151;
		break;

	case 'aggron':
		expYield = 265;
		break;

	case 'dasfix':
		expYield = 69;
		break;

	case 'malraja':
		expYield = 181;
		break;

	case 'kiblis':
		expYield = 66;
		break;

	case 'ibazel':
		expYield = 175;
		break;

	case 'lapras':
		expYield = 187;
		break;

	case 'sigilyph':
		expYield = 172;
		break;

	case 'razelodon':
		expYield = 175;
		break;

	case 'vaering':
		expYield = 60;
		break;

	case 'raidnarr':
		expYield = 147;
		break;

	case 'drasarkr':
		expYield = 300;
		break;

	case 'derfin':
		expYield = 40;
		break;

	case 'encanoto':
		expYield = 189;
		break;

	case 'finnial':
		expYield = 60;
		break;

	case 'termelc':
		expYield = 147;
		break;

	case 'distrike':
		expYield = 300;
		break;

	case 'makima':
		expYield = 61;
		break;

	case 'makitaku':
		expYield = 173;
		break;

	case 'dartizel-r':
		expYield = 180;
		break;

	case 'loftitan-r':
		expYield = 180;
		break;

	case 'halberaz-r':
		expYield = 180;
		break;

	case 'dyrascal':
		expYield = 60;
		break;

	case 'dyferal':
		expYield = 147;
		break;

	case 'dybelial':
		expYield = 300;
		break;

	case 'unown':
		expYield = 118;
		break;
	}

	return expYield;
};