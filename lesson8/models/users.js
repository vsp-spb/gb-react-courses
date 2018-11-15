const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let usersSchema = new Schema({
    id: Number,
    name: String,
    email: String,
    phone: String,
    address: String,
    company: String
});

module.exports = mongoose.model('Users', usersSchema);