const Chat = require('../models/chatModel');
const pusher = require('../utils/pusher');

exports.getAllChats = (req, res) => {

    Chat.find((err, data) => {

        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
};

exports.insertOneChat = (req, res) => {

    const newChat = req.body;

    Chat.create(newChat, (err, data) => {

        if(err){
            res.status(500).send(err)
        }else{

            pusher.trigger("chats", "inserted", {
                name: newChat.name,

            }).then(console.log).catch(e=> console.log(e));


            res.status(201).send(data)
        }
    })

};