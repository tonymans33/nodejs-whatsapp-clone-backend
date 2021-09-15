const express = require("express");
const chatRoutes = require("./chatRoutes");
const messageRoutes = require("./messageRoutes");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger/swagger.json');

var app = express();

app.use("/chats", chatRoutes);
app.use("/messages", messageRoutes);

// Swagger route 
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

app.get('/test', (req, res) => res.status(200).send("Test API is working!!!"));

module.exports = app;