const mongoose = require('mongoose');
const Schema = mongoose.Schema;
module.exports = new mongoose.Schema({
    _id: String,
    username: String,
    firstName: String,
    lastName: String,
    age: Number,
    gender: "Male" | "Female" | "Other" | null,
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
    hms: [String],
    party: [{
        type: Schema.Types.ObjectId,
        ref: "Pokemon"
    }],
    rival: {
        name: String,
        age: Number,
        gender: "Male" | "Female" | "Other" | null,
        team: [String]
    },
    visited: [String],
    currentLocation: String,
    area: String,
    battleID: String,
});