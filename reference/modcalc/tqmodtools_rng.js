/*
* tqmodtools_rng.js
* A series of JavaScript tools, functions, etc. for running the PokÃ©mon Turquoise moderator tools (calculators, RNGs, etc.) - random number generators
* Written/compiled by Phoenixsong; credits/sources for certain tools/scripts given where appropriate
* Version 1.0
* For use on PokÃ©mon Turquoise (pokemonturquoise.com, s1.zetaboards.com/PokemonTurquoise_RPG) only
* Ask Phoenixsong for permission before using or modifying these tools
*/

/*
* CHANGELOG
* 051412
*** Separated out basic RNG into its own file
*/

/*
* TO-DO LIST
*** Later: more RNG ideas?
*/


/*
* RANDOM NUMBER GENERATORS - BASIC RNG
* runrng();
*/

//basic RNG (enter a min/max, get a number between those (inclusive))
function runrng() {
	var RNGMin = document.getElementById('rngmin').value;
	var RNGMax = document.getElementById('rngmax').value;
	var RNGResult = Math.floor(Math.random() * (RNGMax - RNGMin + 1)) + (RNGMin - 0);

	document.getElementById('rngresult').innerHTML = 'Number: <strong>' + RNGResult + '</strong>';
}
