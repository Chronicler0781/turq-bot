const mongoose = require('mongoose');
const Schema = mongoose.Schema;
module.exports = new Schema({
	_id: String,
	username: String,
	firstName: String,
	lastName: String,
	nickname: String,
	age: Number,
	gender: 'Male' | 'Female' | 'Other' | null,
	money: Number,
	badges: [String],
	keyItems: [String],
	generalItems: [{
		name: String,
		quantity: Number,
	}],
	pokeBalls: [{
		name: String,
		quantity: Number,
	}],
	tms: [String],
	party: [{
		type: Schema.Types.ObjectId,
		ref: 'Pokemon',
	}],
	rival: {
		firstName: String,
		lastName: String,
		nickname: String,
		age: Number,
		gender: 'Male' | 'Female' | 'Other' | null,
		team: [String],
	},
	visited: [String],
	currentLocation: String,
	battleID: { 
		type: Schema.Types.Mixed,
		ref: 'Battle'
	}
}, { collection: 'users' });