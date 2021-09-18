const express = require('express');
const config = require('./config/config');


var app = express();

const cors = require('cors');
const apiRouter = require("./routes/api");


const session = require('express-session');
const redis = require('redis')



// Allow Cros-Origin requests
app.use(cors());

// Body parser, reading data from body into req.body
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});

// Redis configurations 
let RedisStore = require('connect-redis')(session)
let redisClient = redis.createClient({
    host: config.redis.REDIS_URL,
    port: config.redis.REDIS_PORT
})

app.use(
    session({
    store: new RedisStore({ client:redisClient }),
    secret: config.redis.SESSION_SECRET,
    cookie:{
        secure:false,
        resave: false,
        saveUninitialized: false,
        httpOnly: true,
        maxAge: 30000
    },
}))


// Routes
app.use("/api", apiRouter);

module.exports = app;