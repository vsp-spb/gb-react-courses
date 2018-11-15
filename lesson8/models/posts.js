const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let postsSchema = new Schema({
    id: Number,
    title: String,
    userId: Number,
    body: String
});

module.exports = mongoose.model('Posts', postsSchema);