const Chat = require('../models/chatModel');
const pusher = require('../utils/pusher');

exports.getAllChats = async (req, res) => {

   try{

    const chats = await Chat.find()

    res.status(200).json({
        status:"success",
        data: chats,
        message: "Chats retreived successfully !"
    })

   } catch (e) {
        res.status(400).json({
            status: "fail",
            message: e.message
        })
   }
    
};

exports.insertOneChat = async (req, res) => {

    try{

        const newChat = await Chat.create(req.body)

        pusher.trigger("chats", "inserted", {
            name: newChat.name,
    
        }).then(console.log).catch(e=> console.log(e));
    
    
        res.status(201).json({
            status: "success",
            data: newChat,
            message: "Chat created successfully !"
        })

    } catch (e){
        res.status(400).json({
            status: "fail",
            message: e.message
        })
    }
  
};