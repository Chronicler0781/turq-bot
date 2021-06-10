const mongoose = require('mongoose');
const userSchema = require('./user');
const pkmnSchema = require('./pokemon');
const locationSchema = require('./location');
const battleSchema = require('./battle');
module.exports = {
	User: mongoose.model('User', userSchema),
	Pokemon: mongoose.model('Pokemon', pkmnSchema),
	Location: mongoose.model('Location', locationSchema),
	Battle: mongoose.model('Battle', battleSchema),
};