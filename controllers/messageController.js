const Message = require('../models/messageModel');
const pusher = require('../utils/pusher');

exports.getAllMessages = (req, res) => {

    Message.find((err, data) => {

        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
};

exports.insertOneMessage = (req, res) => {

    const newMessage = req.body;

    Message.create(newMessage, (err, data) => {

        if(err){
            res.status(500).send(err)
        }else{

            pusher.trigger("messages", "inserted", {
                name: newMessage.name,
                message: newMessage.message,
                received: newMessage.received
            

            }).then(console.log).catch(e=> console.log(e));


            res.status(201).send(data)
        }
    })

};