const mongoose = require('mongoose');
const Schema = mongoose.Schema;
module.exports = new Schema({
	pokemon: {
		type: String, // pokemon's lowercase name
		ref: 'DexEntry',
	},
	species: String,
	nickname: String,
	level: Number,
	gender: 'M' | 'F' | 'N',
	maxHP: Number,
	currentHP: Number,
	status: String,
	abilityNo: Schema.Types.Mixed,
	ability: {
		type: String,
		ref: 'Ability',
	},
	nature: String,
	natureMultipliers: [Number],
	heldItem: String,
	currentTrainer: {
		type: String, // discord ID is a string
		ref: 'User',
	},
	OT: String,
	moves: [{
		type: String,
		ref: 'Move',
	}],
	exp: {
		current: Number,
		percentage: Number,
		nextLevel: Number,
	},
	happiness: Number,
	shiny: Boolean,
});