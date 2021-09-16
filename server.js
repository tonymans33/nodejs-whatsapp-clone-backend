const mongoose = require('mongoose');
const dotenv = require('dotenv');

var app = require('./app');
const config = require('./config/config');


dotenv.config({
    path: './.env'
});

process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION!!! shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});


// Start the server
const port = config.app.PORT;
app.listen(port, () => {
    console.log(`Application is running on http://localhost:${port}`);
});

// Database with mongo cluster
const database = config.mongoSv.SERVER_URL.replace('<PASSWORD>', config.mongoSv.SERVER_PASSWORD);

// Database with mongo local dns  
const mongodb = `mongodb://${config.mongoLc.MONGO_USER}:${config.mongoLc.MONGO_PASSWORD}@${config.mongoLc.MONGO_IP}:${config.mongoLc.MONGO_PORT}/?authSource=${config.mongoLc.MONGO_AUTH}`;

const connectToDatabase = (DB_URL) => {

    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con => {
        console.log('DB connection Successfully!');
    }).catch((e) => {
        console.log(e)
        setTimeout(connectToDatabase, 5000)
    });
}

connectToDatabase(mongodb);

process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION!!!  shutting down ...');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});




