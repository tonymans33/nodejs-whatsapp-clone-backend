const express = require("express");
const chatRoutes = require("./chatRoutes");
const messageRoutes = require("./messageRoutes");


var app = express();

app.use("/chats", chatRoutes);
app.use("/messages", messageRoutes);

module.exports = app;