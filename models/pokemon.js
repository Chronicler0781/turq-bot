const mongoose = require('mongoose');
const Schema = mongoose.Schema;
module.exports = new Schema({
	pokemon: String,
	species: String,
	nickname: String,
	level: Number,
	gender: 'M' | 'F' | 'N',
	maxHP: Number,
	currentHP: Number,
	status: String,
	abilityNo: Schema.Types.Mixed,
	ability: String,
	nature: String,
	natureMultipliers: [Number],
	heldItem: String,
	currentTrainer: {
		type: String,
	},
	originalTrainer: String,
	moves: [String],
	setMoves: [String],
	exp: {
		current: Number,
		percentage: Number,
		nextLevel: Number,
	},
	happiness: Number,
	shiny: Boolean,
});