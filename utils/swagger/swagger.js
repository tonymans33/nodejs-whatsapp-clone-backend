const swaggerJSDoc = require("swagger-jsdoc");

const port = process.env.PORT;

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
          title: 'Whatsapp clone API doc',
          version: '1.0.0',
          servers: [`Application is running on http://localhost:${port}`]
        },
      },
      apis: ['./routes/api.js'], 
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

module.exports = swaggerDocs;