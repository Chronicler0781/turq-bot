/*
* tqmodtools_move.js
* A series of JavaScript tools, functions, etc. for running the Pokémon Turquoise moderator tools (calculators, RNGs, etc.) - move accuracy/crit/effect determination
* Written/compiled by Phoenixsong; credits/sources for certain tools/scripts given where appropriate
* Version 1.0
* For use on Pokémon Turquoise (pokemonturquoise.com, s1.zetaboards.com/PokemonTurquoise_RPG) only
* Ask Phoenixsong for permission before using or modifying these tools
*/

/*
* CHANGELOG
* 031214
*** Added destroyer driver to the list of special flinch/status exceptions
* 031213
*** Fixed a problem with OHKOs where the level variables were being read as strings/non-integers /again/
* 072012
*** Forgot the elefangs' flinch chance is separate from their effect roll, so added an override flinchChance statement to account for them
* 060812
*** Moved the move list out into its own file
* 060712
*** Made a few changes (go into detail when I remember more about previous changes to this file/approximate dates)
*/

/*
* TO-DO LIST
*** add altruism effect; think about moves with multiple effects, e.g. tri attack, aquos whip, gamble (may need to just tell people to roll for that separately; maybe give gamble an effect chance of 70 and then have them use the rng to pick the exact effect?)
*** Later: maybe try that "health percentage finder" for things like recoil, life orb recoil, toxic damage, ingrain healing, etc. (possibly also draining? that would use the damage dealt instead of the max HP, but should work with the same calculator); add a checkbox or something for big root (note that it includes ingrain and aqua ring)
*/


//define the variables needed to work with the move data
var movetype = "";
var moveclass = "";
var moveBP = 0;
var moveAcc = 0;
var effect = 0;
var flavor = "";
var movedesc = "";
var moveflags = "";
//full moveflags list:
//moveflags = "Makes contact, Blocked by Protect, Reflected by Magic Coat, Stolen by Snatch, Copied by Mirror Move, Has charge turn, Has recharge turn, Punch-based, Sound-based, Stopped by Gravity, Defrosts user, Hits non-adjacent targets, Heals, Bypasses Substitute";

//movedisplay function goes here if it needs to be moved out of movelist.js

//calcHit(): figure out all of the math needed to determine whether the selected move is successful
function calcHit() {

	//make variables for all of the acc/eva fields
	moveName = document.getElementById("movename").value; //currently needed to check for OHKOs and override the normal acc/evade formula, and to check whether to ignore king's rock/stench on flinch moves
	userLevel = document.getElementById("userlevel2").value;
	targetLevel = document.getElementById("targetlevel2").value;
	userAcc = document.getElementById("useracc").value;
	targetEva = document.getElementById("targeteva").value;
	userItem = document.getElementById("useritem2").value;
	targetItem = document.getElementById("targetitem2").value;
	userAbility = document.getElementById("userability").value;
	targetAbility = document.getElementById("targetability").value;
	//check to see whether the user's ally has victory star
	if (document.getElementById("victorycheck").checked) {
		victoryCheck = 1.1;
	} else {
		victoryCheck = 1;
	}
	//check to see whether the user's move is affected by pressure
	//this only applies to DF's original suggestion of having pressure lower the accuracy of the first targeting move used
	//which isn't happening anymore so nope
	/*if (document.getElementById("pressurecheck").checked) {
		pressureCheck = 0.75;
	} else {
		pressureCheck = 1;
	}*/

	//determine the user's accuracy
	//totalAcc = (userAcc * userItem * userAbility * victoryCheck * pressureCheck);
	totalAcc = (userAcc * userItem * userAbility * victoryCheck); //version that doesn't account for weird pressure stuff
	//console.log("totalAcc: "+ totalAcc);
	//determine the target's evasion
	totalEvade = (targetEva * targetItem * targetAbility);
	//console.log("totalEvade: " + totalEvade);
	//special formula for OHKO moves
	//the userLevel and targetLevel variables also seem to suffer from being read as strings on occasion
	//possibly only if one of the numbers is a 1 followed by zeroes, though maybe in other cases
	//subtracting 0 from both variables seems to set it straight
	if ((userLevel-0) < (targetLevel-0)) {
		//OHKOs will fail if the user is stronger than the target; really the mods should just not bother calcing in this case, but just to be thorough
		ohkoAcc = 0;
	} else {
		ohkoAcc = ((userLevel-0) - (targetLevel-0)) + moveAcc;
	}
	console.log("ohkoAcc: " + ohkoAcc);
	//standard accuracy/evasion formula, to be applied if the move is not an OHKO
	hitChance = (moveAcc / 100) * (totalAcc / totalEvade);
	//console.log("hitChance: " + hitChance);
	//get the move's final accuracy and convert it back into an integer
	hitRoll = Math.floor(hitChance * 100);
	//console.log("hitRoll: " + hitRoll);

	//check whether the selected move is an OHKO
	if (moveName == "fissure" || moveName == "guillotine" || moveName == "horndrill" || moveName == "sheercold") {
		//if it is, ignore the earlier accuracy/evade calcs and substitute the OHKO accuracy formula result; otherwise hitRoll keeps its earlier value
		hitRoll = ohkoAcc;
		//console.log("ohkoHitRoll: " + hitRoll);
	}

	//choose a number between 1-100 to determine whether the move hits
	var hitRNG = Math.floor(Math.random() * (100 - 1 + 1)) + (1 - 0);
	//console.log("hitRNG: " + hitRNG);

	//if the RNG roll matches or is less than the final hit chance (hitRoll) AND the move's accuracy isn't infallible, display a success message
	if (hitRNG <= hitRoll && moveAcc < 101) {
		moveHits = "The attack hits!";
	//but if the RNG rolls higher AND the move's accuracy isn't infallible, display a failure message
	} else if (hitRNG > hitRoll && moveAcc < 101) {
		moveHits = "The attack misses...";
	//otherwise the move is infallible and should succeed regardless of the RNG result
	} else if (moveAcc == 101) {
		moveHits = "The attack hits!";
	}

}

//calcCrit(): figure out all of the math needed to determine whether the selected move is a critical hit
function calcCrit() {

	//get the value of the crit stage
	critChance = document.getElementById("critchance").value;
	//console.log("critChance: " + critChance);

	//choose a number between 1-100 to determine whether the move is critical
	var critRNG = Math.floor(Math.random() * (100 - 1 + 1)) + (1 - 0);
	//console.log("critRNG: " + critRNG);

	//if the RNG roll matches or is less than the crit stage AND uses the regular damage formula, display a success message
	if (critRNG <= critChance && moveBP != 0) {
		moveCrits = "The attack is a critical hit!";
	//but if the RNG rolls higher AND uses the regular damage formula, display a failure message
	} else if (critRNG > critChance && moveBP != 0) {
		//moveCrits = "The attack is not a critical hit...";
		moveCrits = "...";
	//otherwise the move is either non-damaging or bypasses the regular damage formula (endeavor, guillotine, dragon rage, etc.), and so can't crit anyway
	} else if (moveBP == 0) {
		//moveCrits = "The attack can't be a critical hit.";
		moveCrits = "...";
	}
}

//calcEffect(): figure out all of the math needed to determine whether the selected move's additional effect occurs
function calcEffect() {

	//get the move's effect chance; index 5 is serene grace and so doubles the effect chance; fire-water pledge combo doubles effect chance; only one of these two effects happens if both apply, e.g. switching togekiss in after a pledge combo—they don't quadruple effect chances when used together
	if (document.getElementById("userability").selectedIndex == 5 || document.getElementById("pledgecheck").checked) {
		effectChance = effect * 2;
	} else {
		effectChance = effect;
	}
	//console.log("effectChance: " + effectChance);

	//choose a number between 1-100 to determine whether the move effect happens
	var effectRNG = Math.floor(Math.random() * (100 - 1 + 1)) + (1 - 0);
	//console.log("effectRNG: " + effectRNG);

	//if the RNG roll matches or is less than the effect chance AND the move's effect chance is greater than 0, display a success message
	if (effectRNG <= effectChance && effect != 0) {
		effectHits = "The attack's additional effect kicks in!";
	//but if the RNG rolls higher AND the move's effect chance is greater than 0, display a failure message
	} else if (effectRNG > effectChance && effect != 0) {
		//effectHits = "The attack's additional effect does not kick in...";
		effectHits = "...";
	//otherwise the move has no additional effect and so nothing can happen anyway
	} else if (effect == 0) {
		//effectHits = "The attack has no additional effect.";
		effectHits = "...";
	}
}

/*
IMPORTANT NOTE: I have no earthly idea how king's rock and stench actually work (whether they work with serene grace/pledges, whether they multiply their chances together, whether they affect moves that have a flinch chance, etc.), as literally every place I've checked has a significantly different description for both the ability and the move. For the time being I am trusting UPC's explanations, as best as I understand them anyway, and using those. So, their implementation in this calculator as it stands now:
-Both stench and king's rock add a 10% flinch chance to damaging moves used by the bearer/holder (no multiplying involved)
-Neither stench nor king's rock affects moves that cause flinching, e.g. bite, air slash
-Stench and king's rock are affected by fire-water pledge and have their added flinch chance doubled to 20%; king's rock is similarly affected by serene grace, although note that serene grace and fire-water pledge ignore one another and only one doubling effect is applied (technically stench should as be affected well, but it's impossible for a pokémon to have both stench and serene grace at the same time so it's a moot point)
-Since both stench and king's rock add 10% instead of multiplying by 10%, a pokémon that has stench and is holding a king's rock has a 20% chance to cause flinching (and has a 40% chance under the effect of fire-water pledge; they would also have 40% under serene grace, but again, both stench and serene grace is impossible)
*/

//calcFlinch(): handle the extra flinch chances for king's rock and stench (see above note)
function calcFlinch() {

	//check all possible extra flinch chance conditions
	//if king's rock (index 1) is held, ability is stench (index 6) and pledge combo is active, flinch chance is (10+10)*2
	if (document.getElementById("useritem").selectedIndex == 1 && document.getElementById("userability").selectedIndex == 6 && document.getElementById("pledgecheck").checked) {
		flinchChance = 40;
	//if king's rock is held (index 1) and ability is serene grace (index 5) OR pledge combo is active; OR if ability is stench (index 6) and pledge combo is active, flinch chance is 10*2
	} else if ((document.getElementById("useritem").selectedIndex == 1 && document.getElementById("userability").selectedIndex == 5) || (document.getElementById("useritem").selectedIndex == 1 && document.getElementById("pledgecheck").checked) || (document.getElementById("userability").selectedIndex == 6 && document.getElementById("pledgecheck").checked)) {
		flinchChance = 20;
	//if item is king's rock (index 1) and ability is stench (index 6), flinch chance is 10+10
	} else if (document.getElementById("useritem").selectedIndex == 1 && document.getElementById("userability").selectedIndex == 6) {
		flinchChance = 20;
	//if item is king's rock (index 1) and ability is NOT stench (index 6), or vice versa, flinch chance is 10
	} else if ((document.getElementById("useritem").selectedIndex == 1 && document.getElementById("userability").selectedIndex != 6) || (document.getElementById("userability").selectedIndex == 6 && document.getElementById("useritem").selectedIndex != 1)) {
		flinchChance = 10;
	//and if none of that nonsense applies, no flinch for you
	} else {
		flinchChance = 0;
	}

	//secondary check for elefangs or similar; overrides the above if applicable
	//if the move is an elefang and serene grace (index 5)/pledge combo is applicable, flinch chance is 10*2
	if ((moveName == "firefang" || moveName == "icefang" || moveName == "thunderfang" || moveName == "destroyerdriver") && (document.getElementById("userability").selectedIndex == 5 || document.getElementById("pledgecheck").checked)) {
		flinchChance = 20;
	//if the move is an elefang and there's no serene grace (index 5)/pledge combo, flinch chance is 10
	} else if (moveName == "firefang" || moveName == "icefang" || moveName == "thunderfang" || moveName == "destroyerdriver") {
		flinchChance = 10;
	//if the move is flash shot and serene grace (index 5)/pledge combo is applicable, flinch chance is 15*2
	} else if ((moveName == "flashshot") && (document.getElementById("userability").selectedIndex == 5 || document.getElementById("pledgecheck").checked)) {
		flinchChance = 30;
	//if the move is flash shot and there's no serene grace (index 5)/pledge combo, flinch chance is 15
	} else if (moveName == "flashshot") {
		flinchChance = 15;
	//if the move is party ball celebrate and serene grace (index 5)/pledge combo is applicable, flinch chance is 20*2
	} else if ((moveName == "celebratepartyball") && (document.getElementById("userability").selectedIndex == 5 || document.getElementById("pledgecheck").checked)) {
		flinchChance = 40;
	//if the move is party ball celebrate and there's no serene grace (index 5)/pledge combo, flinch chance is 20
	} else if (moveName == "celebratepartyball") {
		flinchChance = 20;
	//if the move isn't any of the above, carry on with the earlier flinch chance
	} else {
		flinchChance = flinchChance;
	}
	//console.log("flinchChance: " + flinchChance);

	//moves that cause flinching and so ignore stench and king's rock: air slash, astonish, bite, bone club, dark pulse, dragon rush, extrasensory, fake out, fire fang, headbutt, heart stamp, hyper fang, ice fang, icicle crash, iron head, needle arm, rock slide, rolling kick, sky attack, snore, snow cannon, steamroller, stomp, thunder fang, twister, waterfall, zen headbutt; dragon aura, gamble, lightning burst, snow cannon, weld; also beak smash but that's currently irrelevant
	//elefangs currently removed from the check below; I forgot that they can both flinch and burn, etc. at the same time, and so they need access to both the secondary effect roll and the flinch roll

	//check whether the selected move already has a flinch chance
	if (moveName == "airslash" || moveName == "astonish" || moveName == "bite" || moveName == "boneclub" || moveName == "darkpulse" || moveName == "dragonaura" || moveName == "dragonrush" || moveName == "extrasensory" || moveName == "fakeout" || moveName == "gamble" || moveName == "headbutt" || moveName == "heartstamp" || moveName == "hyperfang" || moveName == "iciclecrash" || moveName == "ironhead" || moveName == "lightningburst" || moveName == "needlearm" || moveName == "rockslide" || moveName == "rollingkick" || moveName == "skyattack" || moveName == "snore" || moveName == "snowcannon" || moveName == "snowcannon" || moveName == "steamroller" || moveName == "stomp" || moveName == "twister" || moveName == "waterfall" || moveName == "weld" || moveName == "zenheadbutt") {
		//if it does, set hasFlinch to true for later use in telling the flinch roll to ignore these moves
		hasFlinch = true;
	} else {
		//and if not then let it carry on with adding the flinch chance
		hasFlinch = false;
	}

	//choose a number between 1-100 to determine whether the extra flinch chance happens
	var flinchRNG = Math.floor(Math.random() * (100 - 1 + 1)) + (1 - 0);
	//console.log("flinchRNG: " + flinchRNG);

	//if the RNG roll matches or is less than the flinch chance AND flinch chance isn't 0 AND the move doesn't already have a flinch chance, display a success message
	if (flinchRNG <= flinchChance && flinchChance != 0 && hasFlinch == false) {
		moveFlinches = "The target flinches!";
	//but if the RNG rolls higher AND flinch chance isn't 0 AND the move doesn't already have a flinch chance, display a failure message
	} else if (flinchRNG > flinchChance && flinchChance != 0 && hasFlinch == false) {
		//moveFlinches = "The target doesn't flinch...";
		moveFlinches = "...";
	//otherwise there is no extra flinch chance (or the move already has a flinch chance and ignores the item/ability) and so nothing can happen anyway
	} else if (flinchChance == 0 || hasFlinch == true) {
		//moveFlinches = "There is no extra flinch chance.";
		moveFlinches = "...";
	}
}

function calcsuccess() {
	calcHit();
	calcCrit();
	calcEffect();
	calcFlinch();
	if (moveHits == "The attack misses...") {
		//alert(moveHits);
		//display the move failure message
		document.getElementById("hitid").innerHTML = moveHits;
		document.getElementById("critid").innerHTML = "";
		document.getElementById("effectid").innerHTML = "";
		document.getElementById("flinchid").innerHTML = "";
	} else {
		//alert(moveHits + " " + moveCrits + " " + effectHits + " " + moveFlinches);
		//display the move success info
		document.getElementById("hitid").innerHTML = moveHits;
		document.getElementById("critid").innerHTML = moveCrits;
		document.getElementById("effectid").innerHTML = effectHits;
		document.getElementById("flinchid").innerHTML = moveFlinches;
	}
}

function resetmove() {
	//set everything back to default/null, because regular refreshing doesn't do that correctly
	document.getElementById("movename").selectedIndex = 0;
	document.getElementById("critchance").selectedIndex = 0;
	document.getElementById("userlevel2").value = 100;
	document.getElementById("useracc").selectedIndex = 6;
	document.getElementById("useritem2").selectedIndex = 0;
	document.getElementById("userability").selectedIndex = 0;
	document.getElementById("victorycheck").checked = false;
	//document.getElementById("pressurecheck").checked = false;
	document.getElementById("pledgecheck").checked = false;
	document.getElementById("targetlevel2").value = 100;
	document.getElementById("targeteva").selectedIndex = 6;
	document.getElementById("targetitem2").selectedIndex = 0;
	document.getElementById("targetability").selectedIndex = 0;
	movedisplay();
}
