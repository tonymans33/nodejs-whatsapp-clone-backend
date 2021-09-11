const mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean
});

var Message = mongoose.model("Message", MessageSchema);
module.exports = Message;