const express = require("express");
const chatRoutes = require("./chatRoutes");
const messageRoutes = require("./messageRoutes");
const authRoutes = require("./authRoutes")
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger/swagger.js');

var app = express();

app.use("/chats", chatRoutes);
app.use("/messages", messageRoutes);
app.use("/auth", authRoutes);


// Swagger route 
app.use('/v1/docs', swaggerUi.serve);
app.get('/v1/docs', swaggerUi.setup(swaggerDocument));

app.get('/test', (req, res) => res.status(200).send("Test API is working!!!"));

module.exports = app;