const mongoose = require('mongoose');
const Schema = mongoose.Schema;
module.exports = new mongoose.Schema({
    _id: String, // move name, since they're unique
    type: String,
    damageClass: "Special" | "Physical" | "Status" | null,
});