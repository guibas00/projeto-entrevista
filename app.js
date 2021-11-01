const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const bodyParser = require('body-parser');
const express = require('express');
const postCustomer = require('./controller/postCustomer.js')
const getCustomer = require('./controller/getCustomer.js')
const swaggerJSDoc = require('swagger-jsdoc');
const db = require('./commons/dbConnection.js')
  
 const server = express();
 server.set('port', process.env.PORT || 8080);
 server.listen(5000,() => console.log("listening on 5000")); 
 
 server.use(bodyParser.urlencoded({ extended: false }));
 server.use(bodyParser.json());
 server.use(function(req,res,next){
  req.db = db;
  next();
})


 /**
 * @swagger
 * definitions:
 *   Cliente:
 *     properties:
 *       id:
 *         type: integer
 *       nome:
 *         type: string
 *       sobrenome:
 *         type: string
 *       idade:
 *         type: integer
 *       email:
 *         type: string   
 *       cep:
 *         type: string   
 *       rua:
 *         type: string   
 *       cpf:
 *         type: string   
 *       createdAt:
 *         type: string   
 *       updatedAt:
 *         type: string   
*/ 
 
 /**
 * @swagger
 * /cliente:
 *   post:
 *     consumes: 
 *      - application/json
 *     parameters:
 *      - in: body
 *        name: cliente
 *        description: Cadastro de Cliente 
 *        schema:
 *          type: object
 *          properties: 
 *            nome: 
 *              type: string
 *            sobrenome: 
 *              type: string
 *            cpf:
 *              type: string  
 *            idade:
 *              type: integer
 *            email: 
 *              type: string  
 *            cep:
 *              type: string  
 *     responses:
 *       200:
 *         description: OK
 */
 server.post('/cliente', postCustomer);

 /**
 * @swagger
 * /cliente:
 *   get:
 *     description: Pesquisa de cliente por e-mail
 *     parameters:
 *      - name: email
 *        required: true
 *        in: query
 *     responses:
 *       200:
 *         description: OK
 *         schema:   
 *           $ref: '#/definitions/Cliente'   
 */

server.get('/cliente', getCustomer )

server.listen(server.get('port'));

//swagger
const swaggerOptions = {
  swaggerDefinition:{
    info:{
      title:'Library API',
      version:'1.0.0'
    }
  },
  apis: ['app.js'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

server.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
