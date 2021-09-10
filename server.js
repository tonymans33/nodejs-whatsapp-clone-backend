// App dependencies
import express from 'express';
import mongoose from 'mongoose';
import Messages from './dbMessages.js';
import Pusher from "pusher";
import cors from 'cors';


// App config
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});
app.use(cors());

const pusher = new Pusher({
    appId: "1264487",
    key: "48e088046766dcbb4a3b",
    secret: "4330420cecaeb45b953b",
    cluster: "eu",
    useTLS: true
});

// Database setup
const connection_url = 'mongodb+srv://admin:4YBOPOYkEztx8KWe@cluster0.dzxux.mongodb.net/whatsappclonedb?retryWrites=true&w=majority';

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.once("open", () => {
    console.log("Db Connected")

    const msgCollection = db.collection('messagecontents');
    const changeStream = msgCollection.watch();

    changeStream.on('change', (change) => {

        if(change.operationType === 'insert'){

            const messageDetails = change.fullDocument;
         
            pusher.trigger("messages", "inserted", {
                name: messageDetails.name,
                message: messageDetails.message,

            }).then(console.log).catch(e=> console.log(e));

        }else{
            console.log('Error triggering pusher')
        }
    });
});



app.post('/messages/new', (req, res) => {
    const dbMessage = req.body;

    Messages.create(dbMessage, (err, data) => {

        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

app.get('/messages/sync', (req, res) => {

    Messages.find((err, data) => {

        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})

app.get("/", (req, res) => res.status(200).send("Hello from whatsapp backend"));


// Listener
app.listen(port, () => {console.log(`App lestining on http://localhost:${port}`)});



