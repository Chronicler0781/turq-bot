const mongoose = require('mongoose');
const Schema = mongoose.Schema;
module.exports = new Schema({
	_id: Number,
	name: String,
	regionId: Number,
	region: String,
	types: [String],
	abilities: [{
		type: Schema.Types.ObjectId,
		ref: 'Ability',
	}],
	baseStats: {
		hp: Number,
		atk: Number,
		def: Number,
		speAtk: Number,
		speDef: Number,
		spd: Number,
	},
	moves: {
		category: 'levelUp' | 'relearn' | 'evo' | 'machine' | 'tutor' | 'egg',
		levelUp: [{
			type: Schema.Types.ObjectId,
			ref: 'Move',
		}],
	},
	baseHappiness: Number,
	catchRate: Number,
	classification: String,
	dexEntries: [String],
	eggGroup: [String],
	genderRatio: Number,
	heldItems: [{
		name: String,
		rate: Number,
	}],
	evolvesInto: [{
		pokemon: { type: Schema.Types.ObjectId, ref: 'DexEntry' },
		method: 'levelUp' | 'other',
		data: Schema.Types.Mixed,
	}],

}, { collection: 'dexentries' });