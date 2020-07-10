class ProgressBar {
	constructor(value, maxValue, barSize) {
		this.value = value;
		this.maxValue = maxValue;
		this.barSize = barSize;
	}

	/**
     * Create a text progress bar
     * @returns {String} - The bar
     */
	createBar() {
		// Calculate the percentage of the bar
		const percentage = this.value / this.maxValue;
		// Calculate the number of square characters to fill the progress side
		const progress = Math.round((this.barSize * percentage));
		// Calculate the number of dash caracters to fill the empty progress side
		const emptyProgress = this.barSize - progress;

		// Repeat is creating a string with progress * caracters in it
		const progressText = '▇'.repeat(progress);
		// Repeat is creating a string with empty progress * caracters in it
		const emptyProgressText = '—'.repeat(emptyProgress);
		// Displaying the percentage of the bar
		const percentageText = Math.round(percentage * 100) + '%';

		// Creating the bar
		const bar = '[' + progressText + emptyProgressText + '] ' + percentageText;
		return bar;
	}

}

module.exports = ProgressBar;