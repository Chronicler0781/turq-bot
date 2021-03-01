const mongoose = require('mongoose');
const Schema = mongoose.Schema;
module.exports = new Schema({
    playerID: String,
	party: [{
        type: Schema.Types.ObjectId,
        ref: 'Pokemon'
    }],
    wildPokemon: {
		type: Schema.Types.ObjectId,
		ref: 'Pokemon',
	},
    TurnCount: 0,
	Type: 'Wild' | 'Trainer' | 'Special'

}, { collection: 'battles' });