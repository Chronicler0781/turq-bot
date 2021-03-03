const mongoose = require('mongoose');
const Schema = mongoose.Schema;
module.exports = new Schema({
	pokemon: {
		type: String, // pokemon's lowercase name
		ref: 'DexEntry',
	},
	spriteName: String,
	nickname: String,
	level: Number,
	gender: 'Male' | 'Female' | 'None',
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