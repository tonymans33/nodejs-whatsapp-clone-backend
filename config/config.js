const config = {

    mongoSv : {
        SERVER_URL: "mongodb+srv://admin:<PASSWORD>@cluster0.dzxux.mongodb.net/whatsappclonedb?retryWrites=true&w=majority",
        SERVER_PASSWORD: "4YBOPOYkEztx8KWe"
    },

    mongoLc : {
        MONGO_IP: process.env.MONGO_IP || "mongo",
        MONGO_PORT: process.env.MONGO_PORT || 27017,
        MONGO_USER: process.env.MONGO_USER,
        MONGO_PASSWORD: process.env.MONGO_PASSWORD,
        MONGO_AUTH: "admin",
    },

    app : {
        PORT: 9000,
    }
}


module.exports = config;