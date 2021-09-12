const express = require("express");
const chatRoutes = require("./chatRoutes");
const messageRoutes = require("./messageRoutes");

var app = express();

app.use("/chats", chatRoutes);
app.use("/messages", messageRoutes);

app.get('/test', (req, res) => res.status(200).send("Test API is working!"));

module.exports = app;