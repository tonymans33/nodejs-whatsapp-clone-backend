import express from 'express'
import mongoose from 'mongoose'

const app = express();
const port = process.env.PORT || 9000;

const connection_url = 'mongodb+srv://admin:<4YBOPOYkEztx8KWe>@cluster0.dzxux.mongodb.net/whatsappclonedb?retryWrites=true&w=majority';
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get("/", (req, res) => res.status(200).send("Hello from whatsapp backend"));
app.listen(port, () => console.log('Listening on localhost:', port));



