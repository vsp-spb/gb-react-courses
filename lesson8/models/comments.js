const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let commentsSchema = new Schema({
    id: Number,
    postId: Number,
    email: String,
    name: String,
    body: String
});

module.exports = mongoose.model('Comments', commentsSchema);