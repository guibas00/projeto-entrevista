const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const bodyParser = require('body-parser');
const { response } = require('express');
const express = require('express');
const Sequelize = require('sequelize');
const swaggerJSDoc = require('swagger-jsdoc');
const { where } = require('sequelize');
const Op = Sequelize.Op;
  
 const app = express();
 app.set('port', process.env.PORT || 8080);
 app.listen(5000,() => console.log("listening on 5000")); 

 var sequelize = new Sequelize('cliente', 'root', '', {
   host: 'localhost',
   dialect: 'mysql',
 });

 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());


 var Request = require("request");

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
 app.post('/cliente', function (req, res){

  var pNome = req.body.nome;
  var pSobrenome = req.body.sobrenome;
  var pCep = req.body.cep.replace("-","");
  var pIdade = req.body.idade;
  var pEmail= req.body.email;
  var pCpf= req.body.cpf;
  
  Usuario.findAll({where: {[Op.or]:[{email:pEmail},{cpf:pCpf}]}}).then(
    usuario => {
        if(usuario.length>=1){
          res.status(500).send("Email ou CPF ja cadastrado")
        }else{
          var url = "https://viacep.com.br/ws/"+pCep+"/json"
          Request.get({
                "url": url
            }, (error, response, body) => {
                if(error) {
                  res.status(500).send("Digite um CEP valido.")
                }else{
                  try {
                    var end =JSON.parse(body);
                  var pRua = end.logradouro;
                  Usuario.create({nome:pNome,sobrenome:pSobrenome,idade:pIdade,cpf:pCpf,email:pEmail,cep:pCep,rua:pRua});
                  res.sendStatus(200)
                  } catch (error) {
                    res.status(500).send("Digite um CEP valido.") 
                  }
                
              }   
            });               
        };
      }
    );
 });

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

app.get('/cliente', function(req, resp){
  
    if(req.query.email == undefined)resp.status(500).send('Digite um e-mail')
    if(req.query.email.indexOf("@") < 1 )resp.status(500).send('Digite um e-mail valido')
  Usuario.findAll({where: {email:req.query.email}}).then(usuario => resp.json(usuario));
   
} )

app.listen(app.get('port'));
module.exports = app;

//models

const Usuario = sequelize.define('usuarios',{
  nome:{
    type: Sequelize.STRING
  },
  sobrenome:  {
   type: Sequelize.STRING
  },
  idade:{
    type: Sequelize.INTEGER
  },
  email:{
  type: Sequelize.STRING
  },
  cep:{
   type: Sequelize.STRING
  },
  rua:{
   type: Sequelize.STRING
  },
  cpf:{
    type: Sequelize.STRING
  }
})

// Descomente essa linha para criar a tabela novamente.
//Usuario.sync({Force:true})

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

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
