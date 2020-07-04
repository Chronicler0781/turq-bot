module.exports = function det_stats(pokemon, level, nat_mult) {
	// name: det_stats.js
	// description: Determines base stats from specified pokemon and calculates current level stats from level and nature modifiers.

	// create variable for baseStats
	let baseStats = [];

	// baseStats = [HP, Attack, Defense, Sp.Att, Sp.Def, Speed]
	switch(pokemon) {

	case 'acafia':
		baseStats = [62, 68, 56, 41, 48, 43];
		break;

	case 'aculago':
		baseStats = [90, 70, 95, 50, 55, 60];
		break;

	case 'aeolagio':
		baseStats = [120, 40, 65, 110, 110, 70];
		break;

	case 'aerodactyl':
		baseStats = [80, 105, 65, 60, 75, 130];
		break;

	case 'aggron':
		baseStats = [70, 110, 180, 60, 60, 50];
		break;

	case 'altaria':
		baseStats = [75, 70, 90, 70, 105, 80];
		break;

	case 'altavault':
		baseStats = [65, 110, 70, 100, 50, 80];
		break;

	case 'ampharos':
		baseStats = [90, 75, 85, 115, 90, 55];
		break;

	case 'arctangel':
		baseStats = [75, 60, 85, 109, 91, 120];
		break;

	case 'aron':
		baseStats = [50, 70, 100, 40, 40, 30];
		break;

	case 'auriole':
		baseStats = [40, 60, 45, 20, 45, 60];
		break;

	case 'basculin':
		baseStats = [70, 92, 65, 98, 80, 55];
		break;

	case 'bearbegazi':
		baseStats = [80, 50, 65, 80, 90, 65];
		break;

	case 'beddybite':
		baseStats = [70, 40, 45, 60, 65, 30];
		break;

	case 'belmarine':
		baseStats = [110, 70, 50, 100, 80, 65];
		break;

	case 'bitemare':
		baseStats = [110, 70, 80, 95, 100, 60];
		break;

	case 'bojina':
		baseStats = [80, 90, 60, 40, 65, 65];
		break;

	case 'bossorna':
		baseStats = [105, 115, 90, 70, 80, 75];
		break;

	case 'bucarat':
		baseStats = [35, 60, 30, 60, 30, 60];
		break;

	case 'buneary':
		baseStats = [55, 66, 44, 44, 56, 85];
		break;

	case 'burungin':
		baseStats = [84, 85, 74, 121, 70, 101];
		break;

	case 'camerupt':
		baseStats = [70, 100, 70, 105, 75, 40];
		break;

	case 'carvanha':
		baseStats = [45, 90, 20, 65, 20, 65];
		break;

	case 'caslot':
		baseStats = [70, 77, 80, 77, 80, 113];
		break;

	case 'catalcia':
		baseStats = [80, 85, 70, 54, 60, 56];
		break;

	case 'cerisol':
		baseStats = [75, 80, 80, 117, 80, 93];
		break;

	case 'chantirrus':
		baseStats = [80, 60, 125, 70, 130, 70];
		break;

	case 'charandillo':
		baseStats = [62, 103, 107, 80, 68, 70];
		break;

	case 'chaszin':
		baseStats = [60, 85, 60, 55, 55, 100];
		break;

	case 'chatot':
		baseStats = [76, 65, 45, 92, 42, 91];
		break;

	case 'cherrim':
		baseStats = [70, 60, 70, 87, 78, 85];
		break;

	case 'cherubi':
		baseStats = [45, 35, 45, 62, 53, 35];
		break;

	case 'cinccino':
		baseStats = [75, 95, 60, 65, 60, 115];
		break;

	case 'clauncher':
		baseStats = [50, 53, 62, 58, 63, 44];
		break;

	case 'clawitzer':
		baseStats = [71, 73, 78, 120, 89, 59];
		break;

	case 'coiffaire':
		baseStats = [75, 75, 70, 60, 60, 50];
		break;

	case 'cragendou':
		baseStats = [68, 75, 100, 35, 62, 35];
		break;

	case 'crocoal':
		baseStats = [52, 55, 43, 70, 40, 58];
		break;

	case 'cryogonal':
		baseStats = [70, 50, 30, 95, 135, 105];
		break;

	case 'cubly':
		baseStats = [10, 10, 20, 45, 35, 80];
		break;

	case 'curlsa':
		baseStats = [60, 60, 50, 40, 40, 35];
		break;

	case 'dartizel-R':
		baseStats = [70, 80, 60, 80, 60, 130];
		break;

	case 'dasfix':
		baseStats = [45, 55, 40, 60, 70, 30];
		break;

	case 'delibird':
		baseStats = [45, 55, 45, 65, 45, 75];
		break;

	case 'derfin':
		baseStats = [45, 10, 10, 80, 20, 35];
		break;

	case 'distrike':
		baseStats = [85, 100, 80, 135, 80, 120];
		break;

	case 'donarith':
		baseStats = [75, 108, 70, 85, 60, 102];
		break;

	case 'donphan':
		baseStats = [90, 120, 120, 60, 60, 50];
		break;

	case 'dragalge':
		baseStats = [65, 75, 90, 97, 123, 44];
		break;

	case 'drakella':
		baseStats = [81, 64, 60, 112, 113, 80];
		break;

	case 'drapion':
		baseStats = [70, 90, 110, 60, 75, 95];
		break;

	case 'drasarkr':
		baseStats = [115, 110, 75, 50, 70, 100];
		break;

	case 'drilbur':
		baseStats = [60, 85, 40, 30, 45, 68];
		break;

	case 'durant':
		baseStats = [58, 109, 112, 48, 48, 109];
		break;

	case 'dusclops':
		baseStats = [40, 70, 130, 60, 130, 25];
		break;

	case 'dusknoir':
		baseStats = [45, 100, 135, 65, 135, 45];
		break;

	case 'duskull':
		baseStats = [20, 40, 90, 30, 90, 25];
		break;

	case 'dustley':
		baseStats = [50, 45, 55, 25, 35, 40];
		break;

	case 'dybelial':
		baseStats = [90, 95, 80, 130, 110, 95];
		break;

	case 'dyferal':
		baseStats = [65, 55, 50, 95, 80, 75];
		break;

	case 'dyrascal':
		baseStats = [45, 40, 40, 65, 60, 50];
		break;

	case 'eelektross':
		baseStats = [85, 115, 80, 105, 80, 50];
		break;

	case 'emperobe':
		baseStats = [70, 50, 65, 100, 110, 80];
		break;

	case 'encanoto':
		baseStats = [105, 80, 70, 125, 85, 75];
		break;

	case 'espurr':
		baseStats = [62, 48, 54, 63, 60, 68];
		break;

	case 'excadrill':
		baseStats = [110, 135, 60, 50, 65, 88];
		break;

	case 'exeggcute':
		baseStats = [60, 40, 80, 60, 45, 40];
		break;

	case 'exeggutor':
		baseStats = [95, 95, 85, 125, 65, 55];
		break;

	case 'fallorite':
		baseStats = [45, 70, 85, 55, 50, 30];
		break;

	case 'farfetch\'d':
		baseStats = [52, 65, 55, 58, 62, 60];
		break;

	case 'feebas':
		baseStats = [20, 15, 20, 10, 55, 80];
		break;

	case 'ferrothorn':
		baseStats = [74, 94, 131, 54, 116, 20];
		break;

	case 'feucrota':
		baseStats = [66, 69, 54, 90, 50, 76];
		break;

	case 'finnial':
		baseStats = [50, 50, 35, 75, 35, 55];
		break;

	case 'flaaffy':
		baseStats = [70, 55, 55, 80, 60, 45];
		break;

	case 'floundirt':
		baseStats = [105, 50, 80, 65, 60, 35];
		break;

	case 'freye':
		baseStats = [85, 30, 60, 45, 40, 15];
		break;

	case 'froslass':
		baseStats = [70, 80, 70, 80, 70, 110];
		break;

	case 'galaraud':
		baseStats = [60, 85, 70, 95, 70, 105];
		break;

	case 'galorindle':
		baseStats = [50, 50, 50, 60, 50, 50];
		break;

	case 'galoryph':
		baseStats = [105, 70, 70, 95, 85, 60];
		break;

	case 'garapaima':
		baseStats = [85, 120, 90, 60, 55, 80];
		break;

	case 'gasvirlich':
		baseStats = [55, 70, 55, 128, 96, 96];
		break;

	case 'glalie':
		baseStats = [80, 80, 80, 80, 80, 80];
		break;

	case 'gowatu':
		baseStats = [40, 55, 35, 60, 35, 50];
		break;

	case 'gravendou':
		baseStats = [48, 60, 85, 15, 42, 15];
		break;

	case 'halberax-R':
		baseStats = [70, 140, 70, 40, 90, 70];
		break;

	case 'halirth':
		baseStats = [125, 70, 100, 85, 80, 55];
		break;

	case 'hawlucha':
		baseStats = [78, 92, 77, 74, 63, 118];
		break;

	case 'heatmor':
		baseStats = [85, 97, 66, 105, 66, 65];
		break;

	case 'heladalca':
		baseStats = [95, 115, 100, 50, 100, 60];
		break;

	case 'heliolisk':
		baseStats = [62, 55, 52, 109, 94, 109];
		break;

	case 'helioptile':
		baseStats = [44, 38, 33, 61, 43, 70];
		break;

	case 'hollimin':
		baseStats = [40, 60, 50, 45, 50, 85];
		break;

	case 'honchkrow':
		baseStats = [100, 125, 52, 105, 52, 71];
		break;

	case 'humbuzz':
		baseStats = [30, 10, 10, 60, 50, 120];
		break;

	case 'ibazel':
		baseStats = [55, 80, 50, 122, 113, 80];
		break;

	case 'icauriole':
		baseStats = [60, 110, 60, 50, 60, 110];
		break;

	case 'invicunya':
		baseStats = [65, 60, 70, 60, 70, 40];
		break;

	case 'ignelix':
		baseStats = [70, 75, 130, 105, 105, 30];
		break;

	case 'jackravage':
		baseStats = [65, 96, 84, 54, 76, 105];
		break;

	case 'josuche':
		baseStats = [65, 95, 60, 95, 65, 110];
		break;

	case 'kangaskhan':
		baseStats = [105, 95, 80, 40, 80, 90];
		break;

	case 'kelfee':
		baseStats = [51, 34, 30, 62, 63, 50];
		break;

	case 'khargonaut':
		baseStats = [85, 130, 100, 80, 90, 70];
		break;

	case 'kiblis':
		baseStats = [35, 50, 30, 82, 73, 50];
		break;

	case 'kingdra':
		baseStats = [75, 95, 95, 95, 95, 85];
		break;

	case 'kizziff':
		baseStats = [25, 45, 30, 20, 20, 50];
		break;

	case 'klaitning':
		baseStats = [50, 30, 30, 100, 90, 160];
		break;

	case 'kraitra':
		baseStats = [80, 95, 85, 85, 95, 85];
		break;

	case 'krokorok':
		baseStats = [60, 82, 45, 45, 45, 74];
		break;

	case 'krookodile':
		baseStats = [95, 117, 80, 65, 70, 92];
		break;

	case 'lairon':
		baseStats = [60, 90, 140, 50, 50, 40];
		break;

	case 'lamanda':
		baseStats = [10, 70, 10, 45, 35, 30];
		break;

	case 'lamlie':
		baseStats = [45, 70, 50, 30, 35, 50];
		break;

	case 'lapras':
		baseStats = [130, 85, 80, 85, 95, 60];
		break;

	case 'latikrai':
		baseStats = [45, 60, 55, 55, 65, 50];
		break;

	case 'lilligant':
		baseStats = [70, 60, 75, 110, 75, 90];
		break;

	case 'lobovo':
		baseStats = [60, 80, 65, 45, 50, 65];
		break;

	case 'loftitan-R':
		baseStats = [80, 100, 105, 50, 105, 40];
		break;

	case 'lopunny':
		baseStats = [65, 76, 84, 54, 96, 105];
		break;

	case 'luvaris':
		baseStats = [80, 100, 90, 65, 75, 90];
		break;

	case 'lyrissimo':
		baseStats = [81, 70, 67, 122, 65, 121];
		break;

	case 'magcargo':
		baseStats = [50, 50, 120, 80, 80, 30];
		break;

	case 'makima':
		baseStats = [40, 10, 55, 55, 55, 40];
		break;

	case 'makitaku':
		baseStats = [70, 30, 105, 105, 105, 70];
		break;

	case 'malraja':
		baseStats = [80, 90, 75, 95, 120, 65];
		break;

	case 'mandicore':
		baseStats = [75, 100, 100, 40, 75, 110];
		break;

	case 'marazuma':
		baseStats = [85, 55, 105, 75, 120, 75];
		break;

	case 'mareep':
		baseStats = [55, 40, 40, 65, 45, 35];
		break;

	case 'marvelisk':
		baseStats = [71, 115, 70, 105, 99, 80];
		break;

	case 'mawile':
		baseStats = [50, 85, 85, 55, 55, 50];
		break;

	case 'medicham':
		baseStats = [60, 60, 75, 60, 75, 80];
		break;

	case 'meditite':
		baseStats = [30, 40, 55, 40, 55, 60];
		break;

	case 'mefflora':
		baseStats = [50, 20, 40, 55, 40, 50];
		break;

	case 'meowstic':
		baseStats = [74, 48, 76, 83, 81, 104];
		break;

	case 'mephodil':
		baseStats = [70, 40, 55, 85, 65, 80];
		break;

	case 'milotic':
		baseStats = [95, 60, 79, 100, 125, 81];
		break;

	case 'minccino':
		baseStats = [55, 50, 40, 40, 40, 75];
		break;

	case 'minijina':
		baseStats = [60, 70, 40, 20, 45, 45];
		break;

	case 'misdreavus':
		baseStats = [60, 60, 60, 85, 85, 85];
		break;

	case 'mismagius':
		baseStats = [60, 60, 60, 105, 105, 105];
		break;

	case 'mortarat':
		baseStats = [55, 95, 50, 95, 50, 95];
		break;

	case 'murkrow':
		baseStats = [60, 85, 42, 85, 42, 91];
		break;

	case 'murgaz':
		baseStats = [40, 55, 40, 35, 35, 65];
		break;

	case 'nahualatu':
		baseStats = [70, 100, 80, 125, 80, 95];
		break;

	case 'natu':
		baseStats = [40, 50, 45, 70, 45, 70];
		break;

	case 'nekhetura':
		baseStats = [97, 106, 70, 85, 65, 86];
		break;

	case 'nincada':
		baseStats = [31, 45, 90, 30, 30, 40];
		break;

	case 'ninjask':
		baseStats = [61, 90, 45, 50, 50, 160];
		break;

	case 'noperajina':
		baseStats = [100, 120, 80, 60, 85, 80];
		break;

	case 'nulohm':
		baseStats = [80, 118, 86, 65, 74, 82];
		break;

	case 'numel':
		baseStats = [60, 60, 40, 65, 45, 35];
		break;

	case 'nuwill':
		baseStats = [60, 78, 66, 45, 54, 62];
		break;

	case 'octillery':
		baseStats = [75, 105, 75, 105, 75, 45];
		break;

	case 'onzarudo':
		baseStats = [78, 118, 92, 63, 75, 74];
		break;

	case 'osgrave':
		baseStats = [80, 112, 70, 80, 81, 112];
		break;

	case 'ostento':
		baseStats = [115, 115, 90, 70, 70, 65];
		break;

	case 'pachirisu':
		baseStats = [60, 45, 70, 45, 90, 95];
		break;

	case 'pandive':
		baseStats = [62, 82, 50, 63, 66, 82];
		break;

	case 'paracordis':
		baseStats = [70, 115, 90, 75, 90, 65];
		break;

	case 'paras':
		baseStats = [35, 70, 55, 45, 55, 25];
		break;

	case 'parasect':
		baseStats = [60, 95, 80, 60, 80, 30];
		break;

	case 'petilil':
		baseStats = [45, 35, 50, 70, 50, 30];
		break;

	case 'petrocka':
		baseStats = [60, 120, 85, 40, 75, 95];
		break;

	case 'phanpy':
		baseStats = [90, 60, 60, 40, 40, 40];
		break;

	case 'pindillo':
		baseStats = [32, 68, 72, 45, 38, 40];
		break;

	case 'quarendou':
		baseStats = [98, 105, 150, 45, 82, 45];
		break;

	case 'quimpy':
		baseStats = [25, 55, 20, 10, 10, 80];
		break;

	case 'raidnarr':
		baseStats = [95, 90, 55, 40, 50, 85];
		break;

	case 'rakateis':
		baseStats = [70, 114, 52, 80, 78, 91];
		break;

	case 'ramfere':
		baseStats = [90, 115, 90, 55, 85, 75];
		break;

	case 'rapscalion':
		baseStats = [72, 115, 70, 78, 85, 102];
		break;

	case 'rasqueon':
		baseStats = [100, 90, 115, 60, 80, 60];
		break;

	case 'razelodon':
		baseStats = [80, 130, 130, 40, 60, 65];
		break;

	case 'remoraid':
		baseStats = [35, 65, 35, 65, 35, 65];
		break;

	case 'rotom':
		baseStats = [50, 50, 77, 95, 77, 91];
		break;

	case 'rotom (Appliance)':
		baseStats = [50, 65, 107, 105, 107, 86];
		break;

	case 'sableye':
		baseStats = [50, 75, 75, 65, 65, 50];
		break;

	case 'sandile':
		baseStats = [50, 72, 35, 35, 35, 65];
		break;

	case 'scrafty':
		baseStats = [65, 90, 115, 45, 115, 58];
		break;

	case 'scraggy':
		baseStats = [50, 75, 70, 35, 70, 48];
		break;

	case 'seviper':
		baseStats = [73, 100, 60, 100, 60, 65];
		break;

	case 'seviron':
		baseStats = [83, 85, 105, 85, 105, 75];
		break;

	case 'sharpedo':
		baseStats = [70, 120, 40, 95, 40, 95];
		break;

	case 'shedinja':
		baseStats = [1, 90, 45, 30, 30, 40];
		break;

	case 'shuckle':
		baseStats = [20, 10, 230, 10, 230, 5];
		break;

	case 'siamacho':
		baseStats = [75, 104, 70, 89, 60, 112];
		break;

	case 'sigilyph':
		baseStats = [72, 58, 80, 103, 80, 97];
		break;

	case 'skrelp':
		baseStats = [50, 60, 60, 60, 60, 30];
		break;

	case 'slugma':
		baseStats = [40, 40, 40, 70, 40, 20];
		break;

	case 'smeargle':
		baseStats = [55, 20, 35, 20, 45, 75];
		break;

	case 'snorunt':
		baseStats = [50, 50, 50, 50, 50, 50];
		break;

	case 'sparcoil':
		baseStats = [75, 105, 60, 75, 80, 85];
		break;

	case 'spilotalis':
		baseStats = [90, 55, 70, 115, 85, 110];
		break;

	case 'spraylet':
		baseStats = [49, 64, 41, 49, 51, 64];
		break;

	case 'stantler':
		baseStats = [73, 95, 62, 85, 65, 85];
		break;

	case 'swablu':
		baseStats = [45, 40, 60, 40, 75, 50];
		break;

	case 'termelc':
		baseStats = [60, 70, 60, 90, 60, 80];
		break;

	case 'thunderma':
		baseStats = [105, 90, 70, 45, 65, 50];
		break;

	case 'tianglis':
		baseStats = [55, 90, 75, 75, 60, 80];
		break;

	case 'tinimer':
		baseStats = [45, 45, 45, 50, 45, 45];
		break;

	case 'torranel':
		baseStats = [70, 80, 90, 120, 75, 80];
		break;

	case 'transmite':
		baseStats = [55, 75, 60, 80, 75, 90];
		break;

	case 'turatal':
		baseStats = [70, 85, 60, 95, 60, 80];
		break;

	case 'turistar':
		baseStats = [30, 70, 50, 35, 50, 85];
		break;

	case 'turumaken':
		baseStats = [60, 100, 90, 65, 85, 115];
		break;

	case 'unown':
		baseStats = [48, 72, 48, 72, 48, 48];
		break;

	case 'vaering':
		baseStats = [75, 65, 40, 30, 35, 60];
		break;

	case 'valazman':
		baseStats = [80, 120, 101, 60, 80, 99];
		break;

	case 'vaquerado':
		baseStats = [70, 80, 65, 100, 50, 110];
		break;

	case 'ventorm':
		baseStats = [80, 60, 110, 120, 100, 50];
		break;

	case 'virlich':
		baseStats = [35, 50, 35, 78, 66, 66];
		break;

	case 'volstarite':
		baseStats = [65, 120, 135, 95, 70, 50];
		break;

	case 'vulkhet':
		baseStats = [67, 76, 40, 35, 35, 46];
		break;

	case 'wyrmal':
		baseStats = [40, 30, 50, 60, 45, 50];
		break;

	case 'xatu':
		baseStats = [65, 75, 70, 95, 70, 70];
		break;

	case 'zangoose':
		baseStats = [73, 115, 60, 60, 60, 90];
		break;

	case 'zanthera':
		baseStats = [83, 125, 80, 70, 80, 100];
		break;
	}

	// create variables for currents stats and IV/EVs
	const stats = [];
	let StatIV = [];
	let StatEV = [];

	// Separated formula used for HP and other stats
	for (let i = 0; i < baseStats.length; i++) {
		if (i == 0) {
			// Calculates HP based off of maximum IV/EV, base stat, and level
			StatIV = 31;
			StatEV = 255;
			stats[i] = Math.floor((2 * baseStats[i] + (StatIV - 0) + StatEV / 4) * level / 100 + (level - 0) + 10);
		}
		else if (i > 0) {
			// Calculates remaining stats off of minimum iV/EV, base stats, level, and nature multipliers
			StatIV = 0;
			StatEV = 0;
			stats[i] = Math.floor(Math.floor((2 * baseStats[i] + (StatIV - 0) + StatEV / 4) * level / 100 + 5) * nat_mult[i - 1]);
		}
	}
	return stats;
};