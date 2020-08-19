const mongoose = require('mongoose');
const Schema = mongoose.Schema;
module.exports = new Schema({
	_id: String,
	name: String,
	isPrimaryLoc: Boolean,
	locNames: [String],
	areaName: String,
	island: 'Brol Island' | 'Kronea Island' | 'Tilnen Island' | 'Xybryle Island' | 'Krtuso Island' | 'Adar Zilira' | null,
	startLocation: Boolean,
	usableHMs: ['fly' | 'surf' | 'dive' | null],
	numRequiredRevJobs: Number,
	numRequiredBadges: Number,
	hasMinigame: Boolean,
	actions: ['Gym Leader' | 'Rival' | 'Quests' | 'Revivalist HQ' | null],
	accessTo: [String],
	ferry: {
		brol: [{
			id: String,
			cost: Number,
		}],
		kronea: [{
			id: String,
			cost: Number,
		}],
		tilnen: [{
			id: String,
			cost: Number,
		}],
		xybryle: [{
			id: String,
			cost: Number,
		}],
		krtuso: [{
			id: String,
			cost: Number,
		}],
	},
	wilds: [{
		probability: Number,
		pokemon: [{
			id: String,
			minLvl: Number,
			maxLvl: Number,
		}],
	}],
	fishing: [{
		probability: Number,
		pokemon: [{
			id: String,
			minLvl: Number,
			maxLvl: Number,
		}],
	}],
	hasTrainer: Boolean,
	shops: [String],
	weather: {
		type: 'Harsh Sunlight' | 'Hail' | 'Rain' | 'Fog' | 'Underwater' | null,
		chance: Number,
	},
});