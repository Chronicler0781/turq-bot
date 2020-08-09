const mongoose = require('mongoose');
const userSchema = require('./user');
const pkmnSchema = require('./pokemon');
const dexSchema = require('./dex-entry');
const moveSchema = require('./move');
const abilitySchema = require('./ability');
module.exports = {
	User: mongoose.model('User', userSchema),
	Pokemon: mongoose.model('Pokemon', pkmnSchema),
	DexEntry: mongoose.model('DexEntry', dexSchema),
	Move: mongoose.model('Move', moveSchema),
	Ability: mongoose.model('Ability', abilitySchema),
};