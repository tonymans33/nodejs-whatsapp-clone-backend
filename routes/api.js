const express = require("express");
const chatRoutes = require("./chatRoutes");

var app = express();

app.use("/chat", chatRoutes);

module.exports = app;