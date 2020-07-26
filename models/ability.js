const mongoose = require('mongoose');
const Schema = mongoose.Schema;
module.exports = new mongoose.Schema({
    _id: String, // ability name, lowercase
    name: String,
    flavor: String,
    effectDescription: String,
});