const mongoose = require('mongoose');
const Schema = mongoose.Schema;
module.exports = new Schema({
	_id: String,
	username: String,
	firstName: String,
	lastName: String,
	nickname: String,
	age: Number,
	gender: String,
	money: Number,
	badges: [String],
	keyItems: [String],
	revivalistJobsCompleted: [String],
	generalItems: [{
		name: String,
		quantity: Number,
	}],
	pokeBalls: [{
		name: String,
		quantity: Number,
	}],
	tms: [String],
	mapStatus: 'open' | 'closed',
	services: ['Altaria Airways' | 'Drakella Journeys' | 'Diving Gear'],
	party: [{
		type: Schema.Types.ObjectId,
		ref: 'Pokemon',
	}],
	boxes: [{
		a1: {
			type: Schema.Types.ObjectId,
			ref: 'Pokemon',
		},
		a2: {
			type: Schema.Types.ObjectId,
			ref: 'Pokemon',
		},
		a3: {
			type: Schema.Types.ObjectId,
			ref: 'Pokemon',
		},
		a4: {
			type: Schema.Types.ObjectId,
			ref: 'Pokemon',
		},
		a5: {
			type: Schema.Types.ObjectId,
			ref: 'Pokemon',
		},
		a6: {
			type: Schema.Types.ObjectId,
			ref: 'Pokemon',
		},
		b1: {
			type: Schema.Types.ObjectId,
			ref: 'Pokemon',
		},
		b2: {
			type: Schema.Types.ObjectId,
			ref: 'Pokemon',
		},
		b3: {
			type: Schema.Types.ObjectId,
			ref: 'Pokemon',
		},
		b4: {
			type: Schema.Types.ObjectId,
			ref: 'Pokemon',
		},
		b5: {
			type: Schema.Types.ObjectId,
			ref: 'Pokemon',
		},
		b6: {
			type: Schema.Types.ObjectId,
			ref: 'Pokemon',
		},
		c1: {
			type: Schema.Types.ObjectId,
			ref: 'Pokemon',
		},
		c2: {
			type: Schema.Types.ObjectId,
			ref: 'Pokemon',
		},
		c3: {
			type: Schema.Types.ObjectId,
			ref: 'Pokemon',
		},
		c4: {
			type: Schema.Types.ObjectId,
			ref: 'Pokemon',
		},
		c5: {
			type: Schema.Types.ObjectId,
			ref: 'Pokemon',
		},
		c6: {
			type: Schema.Types.ObjectId,
			ref: 'Pokemon',
		},
		d1: {
			type: Schema.Types.ObjectId,
			ref: 'Pokemon',
		},
		d2: {
			type: Schema.Types.ObjectId,
			ref: 'Pokemon',
		},
		d3: {
			type: Schema.Types.ObjectId,
			ref: 'Pokemon',
		},
		d4: {
			type: Schema.Types.ObjectId,
			ref: 'Pokemon',
		},
		d5: {
			type: Schema.Types.ObjectId,
			ref: 'Pokemon',
		},
		d6: {
			type: Schema.Types.ObjectId,
			ref: 'Pokemon',
		},
		e1: {
			type: Schema.Types.ObjectId,
			ref: 'Pokemon',
		},
		e2: {
			type: Schema.Types.ObjectId,
			ref: 'Pokemon',
		},
		e3: {
			type: Schema.Types.ObjectId,
			ref: 'Pokemon',
		},
		e4: {
			type: Schema.Types.ObjectId,
			ref: 'Pokemon',
		},
		e5: {
			type: Schema.Types.ObjectId,
			ref: 'Pokemon',
		},
		e6: {
			type: Schema.Types.ObjectId,
			ref: 'Pokemon',
		},
	}],
	rival: {
		firstName: String,
		lastName: String,
		nickname: String,
		age: Number,
		gender: String,
		team: [String],
	},
	visited: [String],
	currentLocation: String,
	lastHealLocation: String,
	battleID: {
		type: Schema.Types.Mixed,
		ref: 'Battle',
	},
}, { collection: 'users' });