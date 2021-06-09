const mongoose = require('mongoose');
const Schema = mongoose.Schema;
module.exports = new Schema({
	playerID: String,
	party: [{
		id: {
			type: Schema.Types.ObjectId,
			ref: 'Pokemon',
		},
		nickname: String,
		pokemon: String,
	}],
	active: {
		id: {
			type: Schema.Types.ObjectId,
			ref: 'Pokemon',
		},
		position: Number,
		boosts: {
			atk: Number,
			def: Number,
			spa: Number,
			spd: Number,
			spe: Number,
			accuracy: Number,
			evasion: Number,
		},
		effects: [String],
	},
	fainted: [Number],
	opponentParty: [{
		id: {
			type: Schema.Types.ObjectId,
			ref: 'Pokemon',
		},
		pokemon: String,
	}],
	opponentActive: {
		id: {
			type: Schema.Types.ObjectId,
			ref: 'Pokemon',
		},
		position: Number,
		boosts: {
			atk: Number,
			def: Number,
			spa: Number,
			spd: Number,
			spe: Number,
			accuracy: Number,
			evasion: Number,
		},
		effects: [String],
	},
	opponentFainted: [Number],
	opponent: {
		type: 'Wild' | 'Trainer',
		trainerType: String,
		name: String,
		level: 'beginner' | 'novice' | 'intermediate' | 'advanced' | 'expert' | 'special',
	},
	participated: [Number],
	evolutions: [Number],
	turn: 0,

}, { collection: 'battles' });