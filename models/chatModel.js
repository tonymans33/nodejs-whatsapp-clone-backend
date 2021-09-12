const mongoose = require('mongoose');

var ChatSchema = new mongoose.Schema({
    name: String,
});

var Chat = mongoose.model("Chat", ChatSchema);
module.exports = Chat;