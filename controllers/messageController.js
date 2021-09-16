const Message = require('../models/messageModel');
const pusher = require('../utils/pusher');

exports.getAllMessages = async (req, res) => {

   try{
        const messages = await Message.find()

        res.status(200).json({
            status:"success",
            data: messages
        })

   } catch (e) {
        res.status(400).json({
            status: "fail",
            message: e.message
        })
   }

};

exports.insertOneMessage = async (req, res) => {

    try{

        const newMessage = await Message.create(req.body)

        pusher.trigger("messages", "inserted", {
            name: newMessage.name,
            message: newMessage.message,
            received: newMessage.received
    
        }).then(console.log).catch(e=> console.log(e));
    
    
        res.status(201).send(data)

    } catch (e){
        res.status(400).json({
            status: "fail",
            message: e.message
        })
    }
  
};