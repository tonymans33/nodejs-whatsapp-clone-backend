const Pusher = require('pusher');

// Pusher 
var pusher = new Pusher({
    appId: "1264487",
    key: "48e088046766dcbb4a3b",
    secret: "4330420cecaeb45b953b",
    cluster: "eu",
    useTLS: true
});

module.exports = pusher;