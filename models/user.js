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