const mongoose = require('mongoose');
const Schema = mongoose.Schema;
module.exports = new Schema({
	pokemon: {
		type: Number, // dex id is the national dex #
		ref: 'DexEntry',
	},
	nickname: String,
	level: Number,
	gender: 'Male' | 'Female' | null,
	maxHP: Number,
	currentHP: Number,
	status: String,
	ability: {
		type: String,
		ref: 'Ability',
	},
	nature: String,
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
	exp: Number,
	shiny: Boolean,
});