const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ferrySubSchema = new Schema({
	id: { type: String, ref: 'Location'},
	cost: Number,
}, { _id: false });

const pokeSubSchema = new Schema({
	name: { type: String, ref: 'DexEntry' },
	minLvl: Number,
	maxLvl: Number,
}, { _id: false });

const wildSubSchema = new Schema({
	probability: Number,
	pokemon: [pokeSubSchema]
}, { _id: false });

const locSchema = new Schema({
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
	accessTo: [{
		type: String,
		ref: 'Location',
	}],
	ferry: [ferrySubSchema],
	wilds: [wildSubSchema],
	fishing: [wildSubSchema],
	hasTrainer: Boolean,
	shops: [String],
	weather: {
		type: 'Harsh Sunlight' | 'Hail' | 'Rain' | 'Fog' | 'Underwater' | null,
		chance: Number,
	},
}, { collection: 'locations' });

locSchema.virtual('accessedBy', {
	ref: 'Location',
	localField: '_id',
	foreignField: 'accessTo',
	justOne: false
});

locSchema.set('toObject', { virtuals: true });
locSchema.set('toJSON', { virtuals: true });

module.exports = locSchema;