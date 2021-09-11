const express = require('express');
const cors = require('cors');
const apiRouter = require("./routes/api");

var app = express();

// Allow Cross-Origin requests
app.use(cors());

// Body parser, reading data from body into req.body
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});

// Routes
app.use("/api", apiRouter);

module.exports = app;