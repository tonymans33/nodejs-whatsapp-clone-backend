const mongoose = require('mongoose');

var ChatSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

var Chat = mongoose.model("Chat", ChatSchema);
module.exports = Chat;