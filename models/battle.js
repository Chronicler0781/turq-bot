const mongoose = require('mongoose');
const Schema = mongoose.Schema;
module.exports = new Schema({
    playerID: String,
	party: [{
        id: {
            type: Schema.Types.ObjectId,
            ref: 'Pokemon'
        },
        status: String,
    }],
    active: {
        id: {
            type: Schema.Types.ObjectId,
            ref: 'Pokemon'
        },
        statMods: {
            atk: Number,
            def: Number,
            spa: Number,
            spd: Number,
            spe: Number,
            acc: Number,
            eva: Number,
        },
        status: String,
        effects: String,
    },
    opponentParty: [{
        id: {
            type: Schema.Types.ObjectId,
            ref: 'Pokemon'
        },
        status: String,
    }],
    opponentActive: {
        id: {
            type: Schema.Types.ObjectId,
            ref: 'Pokemon',
        },
        statMods: {
            atk: Number,
            def: Number,
            spa: Number,
            spd: Number,
            spe: Number,
            acc: Number,
            eva: Number,
        },
        status: String,
        effects: String,
    },
    participated: [{
        type: Schema.Types.ObjectId,
        ref: 'Pokemon'
    }],
    turn: 0,
	type: 'Wild' | 'Trainer' | 'Special'

}, { collection: 'battles' });