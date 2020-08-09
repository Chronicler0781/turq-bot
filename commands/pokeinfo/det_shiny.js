module.exports = function det_shiny() {
	// name: det_shiny.js
	// description: This function determines if a new pokemon is shiny.

	// choose a number between 1-500 to determine shininess
	const ShinyResult = Math.floor(Math.random() * (500 - 1 + 1)) + (1 - 0);
	let shiny = [];

	// if result is 500, return yes for shiny field.
	if (ShinyResult > 0 && ShinyResult < 500) {
		shiny = false;
	}
	else {
		shiny = true;
	}
	return shiny;
};