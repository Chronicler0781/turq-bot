module.exports = function det_stats(pokemon, level, nat_mult) {
	// name: det_stats.js
	// description: T

	let baseStats = [];

	switch(pokemon) {

	case 'acafia':
		baseStats = [62, 68, 56, 41, 48, 43];
		break;

	case 'catalcia':
		baseStats = [80, 85, 70, 54, 60, 56];
		break;

	case 'bossorna':
		baseStats = [105, 115, 90, 70, 80, 75];
		break;

	case 'crocoal':
		baseStats = [52, 55, 43, 70, 40, 58];
		break;

	case 'feucrota':
		baseStats = [66, 69, 54, 90, 50, 76];
		break;

	case 'burungin':
		baseStats = [84, 85, 74, 121, 70, 101];
		break;

	case 'spraylet':
		baseStats = [49, 64, 41, 49, 51, 64];
		break;

	case 'pandive':
		baseStats = [62, 82, 50, 63, 66, 82];
		break;

	case 'osgrave':
		baseStats = [80, 112, 70, 80, 81, 112];
		break;

	}


	const stats = [];
	let StatIV = [];
	let StatEV = [];

	for (let i = 0; i < baseStats.length; i++) {
		if (i == 0) {
			StatIV = 31;
			StatEV = 255;
			stats[i] = Math.floor((2 * baseStats[i] + (StatIV - 0) + StatEV / 4) * level / 100 + (level - 0) + 10);
		}
		else if (i > 0) {
			StatIV = 0;
			StatEV = 0;
			stats[i] = Math.floor(Math.floor((2 * baseStats[i] + (StatIV - 0) + StatEV / 4) * level / 100 + 5) * nat_mult[i - 1]);
		}
	}
	return stats;
};