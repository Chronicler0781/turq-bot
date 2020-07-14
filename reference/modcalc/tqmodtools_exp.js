/*
* tqmodtools_exp.js
* A series of JavaScript tools, functions, etc. for running the Pok&eacute;mon Turquoise moderator tools (calculators, RNGs, etc.) - calculators to determine experience gain from battle and from the daycare
* Written/compiled by Phoenixsong; credits/sources for certain tools/scripts given where appropriate
* Version 1.0
* For use on Pok&eacute;mon Turquoise (pokemonturquoise.com, s1.zetaboards.com/PokemonTurquoise_RPG) only
* Ask Phoenixsong for permission before using or modifying these tools
*/

/*
* CHANGELOG
* 032914
*** Changed battle exp calculation so that a) it pays out 1.5x more and b) exp share behaves like a held item version of Gen VI's
* 010213
*** Started the file with the battle exp calc
*/

/*
* TO-DO LIST
*** add the daycare calc (remember that it will need to account for pokemon changing level groups mid-stay)
*/

function battleexpcalc() {
	//set up basic variables
	var WinnerLevel = document.getElementById('winnerlevel').value;
	var LoserLevel = document.getElementById('loserlevel').value;
	var isTraded = document.getElementById('istraded').checked ? 1.5 : 1;
	var isTrainer = document.getElementById('istrainer').checked ? 1.5 : 1;
	var ExpBracket = document.getElementById('expbracket').value;
	var ExpShare = document.getElementById('expshare').checked ? 2 : 1;

	//choose the exponent to use based on the given levels
	var exponent = 0;
	if (WinnerLevel <= 10) {
		exponent = 1;
	} else if (WinnerLevel > 10 && WinnerLevel < 21) {
		exponent = 2;
	} else if (WinnerLevel > 20 && WinnerLevel < 31) {
		exponent = 3;
	} else if (WinnerLevel > 30 && WinnerLevel < 41) {
		exponent = 5;
	} else if (WinnerLevel > 40 && WinnerLevel < 51) {
		exponent = 6;
	} else if (WinnerLevel > 50 && WinnerLevel < 61) {
		exponent = 7;
	} else if (WinnerLevel > 60 && WinnerLevel < 71) {
		exponent = 8;
	} else if (WinnerLevel > 70 && WinnerLevel < 81) {
		exponent = 9;
	} else if (WinnerLevel > 80 && WinnerLevel < 91) {
		exponent = 11;
	} else {
		exponent = 15;
	}

	//the gnarly fraction
	var numerator = isTrainer * isTraded * (Math.pow(LoserLevel, exponent)) * ExpBracket;
	var denominator = (2 * (Math.pow(WinnerLevel, exponent)));
	var ExpResult = Math.round((numerator / denominator)*1.33*100);
	//exp share involved? originally tried to check for this in the setting of expresult, but it kept
	//multiplying by 2 instead of dividing for some reason? figure it out later
	if (ExpShare==2) {
		ExpResult = Math.round((ExpResult / 2));
	} else {
		//no exp share involved
		ExpResult = ExpResult;
	}


	//min and max exp caps (5% and 500%)
	if (ExpResult < 5) {
		ExpResult = 5;
	} else if (ExpResult > 500) {
		ExpResult = 500;
	} else {
		ExpResult = ExpResult;
	}

	document.getElementById('finalexp_b').innerHTML = 'Experience: <strong>' + ExpResult + '%</strong>';
}

function daycareexpcalc() {
	//set up basic variables
	var duration = document.getElementById('duration').value;
	var DaycareLevel = document.getElementById('startlevel').value;
	var DaycareExp = document.getElementById('startexp').value;
	var ExpByLevel = 0;

	function getExpChart() {
		if (DaycareLevel < 11) {
			ExpByLevel = 40;
		} else if (DaycareLevel > 10 && DaycareLevel < 21) {
			ExpByLevel = 35;
		} else if (DaycareLevel > 20 && DaycareLevel < 31) {
			ExpByLevel = 30;
		} else if (DaycareLevel > 30 && DaycareLevel < 41) {
			ExpByLevel = 25;
		} else if (DaycareLevel > 40 && DaycareLevel < 51) {
			ExpByLevel = 20;
		} else if (DaycareLevel > 50 && DaycareLevel < 61) {
			ExpByLevel = 15;
		} else if (DaycareLevel > 60 && DaycareLevel < 71) {
			ExpByLevel = 10;
		} else if (DaycareLevel > 70 && DaycareLevel < 81) {
			ExpByLevel = 7;
		} else {
			ExpByLevel = 5;
		}
	}

	//for every day in duration, add experience and increment level if necessary
	for (i=0; i<duration; i++) {
		getExpChart();
		DaycareExp = (DaycareExp - 0) + ExpByLevel; //subtract 0 from DaycareExp to stop it being read as a string
		//console.log(DaycareExp);
		if (DaycareExp >= 100) {
			DaycareLevel++;
			getExpChart();
			DaycareExp = (DaycareExp - 100);
			//console.log("Exp wrapped back around!");
		}
	}

	document.getElementById('finalexp_d').innerHTML = 'The Pok&eacute;mon is now level <strong>' + DaycareLevel + '</strong> with <strong>' + DaycareExp + '%</strong> experience.';
}

/*
on exp share (pre-gen vi):

from veekun:

    Experience is split across two groups: PokÃ©mon who participated in battle, and PokÃ©mon holding this item. Each PokÃ©mon earns experience as though it had battled alone, divided by the number of PokÃ©mon in its group, then divided by the number of groups. PokÃ©mon holding this item who also participated in battle effectively earn experience twice.

    Fainted PokÃ©mon never earn experience, and empty groups are ignored; thus, if a single PokÃ©mon is holding this item and the only PokÃ©mon who battled faints from Explosion, the holder will gain full experience.

examples:

	The player has a snivy and a tepig. Tepig holds Exp. Share. Snivy defeats an oshawott by itself, which would ordinarily grant 100 exp. Snivy is in the participant group by itself, and Tepig is in the exp share group by itself. Exp for Snivy is determined thus: (100exp[initial value] / 1[# of pokemon in participant group]) / 2[# of groups]. Exp for Tepig is determined thus: (100exp[initial value] / 1[# of pokemon in exp share group]) / 2[# of groups]. In this case, both Snivy and Tepig get 50 exp.

	The player has a snivy and a tepig. Tepig holds Exp. Share. Tepig is sent out against an oshawott, then switches out to Snivy who proceeds to defeat the oshawott, which would ordinarily grant 100 exp. Both Snivy and Tepig are in the participant group, and Tepig is in the exp share group by itself. Exp for Snivy is determined thus: (100exp[initial value] / 2[# of pokemon in participant group]) / 2[# of groups]. Tepig is counted twice, once for each group, so its exp is determined thus: ((100exp[initial value] / 2[# of pokemon in participant group]) / 2[# of groups]) + ((100exp[initial value] / 1[# of pokemon in exp share group]) / 2[# of groups]). In this case, Snivy gets 25 exp and Tepig gets 75 exp.
*/
