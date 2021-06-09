const dex = require('../../data/pokedex');

/*
** This utility file stores a collection of utility functions used
** frequently within the TurqBot application.
**
** Author: Nick Bely (Chronicler)
*/


// Description: Determines current EXP point, next level EXP point, and percent
// progress of specified pokemon, level, and current EXP if provided
function expLookup(pokemon, level, currentExp) {
	if (pokemon.match(/unown/g)) {
		pokemon = 'unown';
	}
	const growthType = dex[pokemon].expGrowth,
		expChart = {
			erratic: [0.00, 0.00, 15.68, 52.38, 122.88, 237.50, 406.08, 637.98, 942.08, 1326.78, 1800.00, 2369.18, 3041.28, 3822.78, 4719.68, 5737.50, 6881.28, 8155.58, 9564.48, 11111.58, 12800.00, 14632.38, 16610.88, 18737.18, 21012.48, 23437.50, 26012.48, 28737.18, 31610.88, 34632.38, 37800.00, 41111.58, 44564.48, 48155.58, 51881.28, 55737.50, 59719.68, 63822.78, 68041.28, 72369.18, 76800.00, 81326.78, 85942.08, 90637.98, 95406.08, 100237.50, 105122.88, 110052.38, 115015.68, 120001.98, 125000.00, 131324.49, 137795.84, 144410.69, 151165.44, 158056.25, 165079.04, 172229.49, 179503.04, 186894.89, 194400.00, 202013.09, 209728.64, 217540.89, 225443.84, 233431.25, 241496.64, 249633.29, 257834.24, 267406.33, 276915.33, 286567.41, 296358.91, 306286.05, 316344.87, 326531.25, 336840.92, 347269.44, 357812.21, 368464.48, 379221.33, 390077.69, 401028.33, 412067.83, 423190.66, 434391.08, 445663.24, 457001.08, 468398.42, 479848.90, 491346.00, 502883.05, 514453.21, 526049.48, 537664.71, 549291.58, 560922.62, 572550.20, 584166.50, 591882.39, 600000.00],
			fast: [0.00, 0.00, 6.40, 21.60, 51.20, 100.00, 172.80, 274.40, 409.60, 583.20, 800.00, 1064.80, 1382.40, 1757.60, 2195.20, 2700.00, 3276.80, 3930.40, 4665.60, 5487.20, 6400.00, 7408.80, 8518.40, 9733.60, 11059.20, 12500.00, 14060.80, 15746.40, 17561.60, 19511.20, 21600.00, 23832.80, 26214.40, 28749.60, 31443.20, 34300.00, 37324.80, 40522.40, 43897.60, 47455.20, 51200.00, 55136.80, 59270.40, 63605.60, 68147.20, 72900.00, 77868.80, 83058.40, 88473.60, 94119.20, 100000.00, 106120.80, 112486.40, 119101.60, 125971.20, 133100.00, 140492.80, 148154.40, 156089.60, 164303.20, 172800.00, 181584.80, 190662.40, 200037.60, 209715.20, 219700.00, 229996.80, 240610.40, 251545.60, 262807.20, 274400.00, 286328.80, 298598.40, 311213.60, 324179.20, 337500.00, 351180.80, 365226.40, 379641.60, 394431.20, 409600.00, 425152.80, 441094.40, 457429.60, 474163.20, 491300.00, 508844.80, 526802.40, 545177.60, 563975.20, 583200.00, 602856.80, 622950.40, 643485.60, 664467.20, 685900.00, 707788.80, 730138.40, 752953.60, 776239.20, 800000.00],
			mediumFast: [0.00, 0.00, 8.00, 27.00, 64.00, 125.00, 216.00, 343.00, 512.00, 729.00, 1000.00, 1331.00, 1728.00, 2197.00, 2744.00, 3375.00, 4096.00, 4913.00, 5832.00, 6859.00, 8000.00, 9261.00, 10648.00, 12167.00, 13824.00, 15625.00, 17576.00, 19683.00, 21952.00, 24389.00, 27000.00, 29791.00, 32768.00, 35937.00, 39304.00, 42875.00, 46656.00, 50653.00, 54872.00, 59319.00, 64000.00, 68921.00, 74088.00, 79507.00, 85184.00, 91125.00, 97336.00, 103823.00, 110592.00, 117649.00, 125000.00, 132651.00, 140608.00, 148877.00, 157464.00, 166375.00, 175616.00, 185193.00, 195112.00, 205379.00, 216000.00, 226981.00, 238328.00, 250047.00, 262144.00, 274625.00, 287496.00, 300763.00, 314432.00, 328509.00, 343000.00, 357911.00, 373248.00, 389017.00, 405224.00, 421875.00, 438976.00, 456533.00, 474552.00, 493039.00, 512000.00, 531441.00, 551368.00, 571787.00, 592704.00, 614125.00, 636056.00, 658503.00, 681472.00, 704969.00, 729000.00, 753571.00, 778688.00, 804357.00, 830584.00, 857375.00, 884736.00, 912673.00, 941192.00, 970299.00, 1000000.00],
			mediumSlow: [0.00, 0.00, 9.60, 57.40, 96.80, 135.00, 179.20, 236.60, 314.40, 419.80, 560.00, 742.20, 973.60, 1261.40, 1612.80, 2035.00, 2535.20, 3120.60, 3798.40, 4575.80, 5460.00, 6458.20, 7577.60, 8825.40, 10208.80, 11735.00, 13411.20, 15244.60, 17242.40, 19411.80, 21760.00, 24294.20, 27021.60, 29949.40, 33084.80, 36435.00, 40007.20, 43808.60, 47846.40, 52127.80, 56660.00, 61450.20, 66505.60, 71833.40, 77440.80, 83335.00, 89523.20, 96012.60, 102810.40, 109923.80, 117360.00, 125126.20, 133229.60, 141677.40, 150476.80, 159635.00, 169159.20, 179056.60, 189334.40, 199999.80, 211060.00, 222522.20, 234393.60, 246681.40, 259392.80, 272535.00, 286115.20, 300140.60, 314618.40, 329555.80, 344960.00, 360838.20, 377197.60, 394045.40, 411388.80, 429235.00, 447591.20, 466464.60, 485862.40, 505791.80, 526260.00, 547274.20, 568841.60, 590969.40, 613664.80, 636935.00, 660787.20, 685228.60, 710266.40, 735907.80, 762160.00, 789030.20, 816525.60, 844653.40, 873420.80, 902835.00, 932903.20, 963632.60, 995030.40, 1027103.80, 1059860.00],
			slow: [0.00, 0.00, 10.00, 33.75, 80.00, 156.25, 270.00, 428.75, 640.00, 911.25, 1250.00, 1663.75, 2160.00, 2746.25, 3430.00, 4218.75, 5120.00, 6141.25, 7290.00, 8573.75, 10000.00, 11576.25, 13310.00, 15208.75, 17280.00, 19531.25, 21970.00, 24603.75, 27440.00, 30486.25, 33750.00, 37238.75, 40960.00, 44921.25, 49130.00, 53593.75, 58320.00, 63316.25, 68590.00, 74148.75, 80000.00, 86151.25, 92610.00, 99383.75, 106480.00, 113906.25, 121670.00, 129778.75, 138240.00, 147061.25, 156250.00, 165813.75, 175760.00, 186096.25, 196830.00, 207968.75, 219520.00, 231491.25, 243890.00, 256723.75, 270000.00, 283726.25, 297910.00, 312558.75, 327680.00, 343281.25, 359370.00, 375953.75, 393040.00, 410636.25, 428750.00, 447388.75, 466560.00, 486271.25, 506530.00, 527343.75, 548720.00, 570666.25, 593190.00, 616298.75, 640000.00, 664301.25, 689210.00, 714733.75, 740880.00, 767656.25, 795070.00, 823128.75, 851840.00, 881211.25, 911250.00, 941963.75, 973360.00, 1005446.25, 1038230.00, 1071718.75, 1105920.00, 1140841.25, 1176490.00, 1212873.75, 1250000.00],
			fluctuating: [0.00, 0.00, 4.00, 13.68, 32.85, 65.00, 113.76, 182.93, 276.48, 398.52, 553.33, 745.36, 979.20, 1259.61, 1591.52, 1980.00, 2457.60, 3046.06, 3732.48, 4526.94, 5440.00, 6482.70, 7666.56, 9003.58, 10506.24, 12187.50, 14060.80, 16140.06, 18439.68, 20974.54, 23760.00, 26811.90, 30146.56, 33780.78, 37731.84, 42017.50, 46656.00, 51159.53, 55969.44, 61098.57, 66560.00, 72367.05, 78533.28, 85072.49, 91998.72, 99326.25, 107069.60, 115243.53, 123863.04, 132943.37, 142500.00, 152548.65, 163105.28, 174186.09, 185807.52, 197986.25, 210739.20, 224083.53, 238036.64, 252616.17, 267840.00, 283726.25, 300293.28, 317559.69, 335544.32, 354266.25, 373744.80, 393999.53, 415050.24, 436916.97, 459620.00, 483179.85, 507617.28, 532953.29, 559209.12, 586406.25, 614566.40, 643711.53, 673863.84, 705045.77, 737280.00, 770589.45, 804997.28, 840526.89, 877201.92, 915046.25, 954084.00, 994339.53, 1035837.44, 1078602.57, 1122660.00, 1168035.05, 1214753.28, 1262840.49, 1312322.72, 1363226.25, 1415577.60, 1469403.53, 1524731.04, 1581587.37, 1640000.00],
		};

	if (!currentExp) {
		currentExp = expChart[growthType][level];
	}

	const thisLevelExp = expChart[growthType][level],
		nextLevelExp = expChart[growthType][level + 1],
		percentage = Math.floor(100 * (currentExp - thisLevelExp) / (nextLevelExp - thisLevelExp));

	return { current: currentExp, nextLevel: nextLevelExp, percent: percentage };
}

// Description: This function determines the ability of a new or evolved Pokémon
function getAbility(pokemon, abilityNum) {
	if (pokemon.match(/unown/g)) {
		pokemon = 'unown';
	}
	let ability = null,
		notChosen = null;

	// If pokemon is new and an ability slot has not been assigned,
	// randomize which ability pokemon will have
	if (!abilityNum) {
		const abilitySeed = rng();
		if (abilitySeed < 51) { abilityNum = 0; }
		else {
			abilityNum = 1;
			notChosen = 0;
		}
	}

	// if Pokemon doesn't have ability 1, set it to ability 0
	if (!dex[pokemon].abilities[abilityNum]) {
		abilityNum = notChosen;
	}
	ability = dex[pokemon].abilities[abilityNum];

	return { name: ability, number: abilityNum };
}


// Description: This function determines the gender of a new Pokémon
function getGender(pokemon) {
	if (pokemon.match(/unown/g)) {
		pokemon = 'unown';
	}
	const genderSeed = rng(1, 1000);
	let gender = null,
		maleProbability = null;

	if (dex[pokemon].gender) {
		gender = dex[pokemon].gender;
	}
	else if (dex[pokemon].genderRatio) {
		maleProbability = 1000 * dex[pokemon].genderRatio.M;
		if (genderSeed <= maleProbability) { gender = 'M'; }
		else { gender = 'F'; }
	}
	else {
		maleProbability = 500;
		if (genderSeed <= maleProbability) { gender = 'M'; }
		else { gender = 'F'; }
	}
	return gender;
}


// Description: This function determines the gender of a new Pokémon
function getItem(pokemon) {
	if (pokemon.match(/unown/g)) {
		pokemon = 'unown';
	}
	const itemSeed = rng();
	let itemCounter = 0;

	if (dex[pokemon].heldItems) {
		for (const item of dex[pokemon].heldItems) {

			itemCounter += item.probability * 100;

			if (itemSeed <= itemCounter) {
				return item.name;
			}
		}
		return '';
	}
	else {
		return '';
	}
}


// Description: Returns a randomly generated nature and its stat multipliers
function getNature() {
	const natureSeed = rng(0, 24);
	let nature = null,
		multipliers = []; // [Attack, Defense, Sp.Att, Sp.Def, Speed]

	switch(natureSeed) {
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
	return { name: nature, mult: multipliers };
}


// Description: Determines stats from specified pokemon, level, and nature multipliers
function getStats(pokemon, level, natureMultipliers) {
	if (pokemon.match(/unown/g)) {
		pokemon = 'unown';
	}
	const stats = [];
	let StatIV = null,
		StatEV = null;
	const baseStats = [
		dex[pokemon].baseStats.hp,
		dex[pokemon].baseStats.atk,
		dex[pokemon].baseStats.def,
		dex[pokemon].baseStats.spa,
		dex[pokemon].baseStats.spd,
		dex[pokemon].baseStats.spe,
	];

	for (let i = 0; i < baseStats.length; i++) {
		if (i == 0) {
			// Calculates HP based off of maximum IV/EV
			StatIV = 31;
			StatEV = 255;
			stats[i] = Math.floor((2 * baseStats[i] + (StatIV - 0) + StatEV / 4) *
				level / 100 + (level - 0) + 10);
		}
		else if (i > 0) {
			// Calculates remaining stats off of minimum iV/EV
			StatIV = 0;
			StatEV = 0;
			stats[i] = Math.floor(Math.floor((2 * baseStats[i] + (StatIV - 0) + StatEV / 4) *
				level / 100 + 5) * natureMultipliers[i - 1]);
		}
	}
	return stats;
}


// Descrition: This function checks if a new Pokémon is shiny
function isShiny() {
	let shiny = false;
	const shinySeed = rng(1, 500);

	if (shinySeed === 500) { shiny = true; }
	return shiny;
}


// Description: This function generates a random number between the
// minNumber and maxNumber limts (1-100 by default)
function rng(minNumber, maxNumber) {
	return Math.floor(Math.random() * ((maxNumber || 100) - 1 + 1)) + ((minNumber || 1) - 0);
}


// Description: Creates moveset array for specificied pokemon and level,
// adds to existing moveset array if provided
function upsertMoveset(pokemon, level, moveset, leveledUp) {
	if (pokemon.match(/unown/g)) {
		pokemon = 'unown';
	}
	if (!moveset) moveset = [];
	const moveLevels = dex[pokemon].moveLevels;
	const levelUpMoves = dex[pokemon].levelUpMoves;

	if (leveledUp) {
		if (moveLevels.includes(level)) {
			const i = moveLevels.indexOf(level);
			moveset.push(levelUpMoves[i]);
		}
	}
	else {
		for (let i = 0; i < moveLevels.length; i++) {
			if (level >= moveLevels[i]) {
				if (!moveset.includes(levelUpMoves[i])) {
					moveset.push(levelUpMoves[i]);
				}
			}
		}
	}
	return moveset;
}

module.exports = {
	expLookup, getAbility, getGender, getItem,
	getNature, getStats, isShiny, rng,
	upsertMoveset,
};
