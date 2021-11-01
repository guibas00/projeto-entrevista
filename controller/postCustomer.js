
const config = require('../config.json')
const { where } = require('sequelize');
const { response } = require('express');
const { postCustomer } = require('../service/customerService.js')
const { validateCustomer } = require('../service/businessService.js')



module.exports = async function(req, res){
      try {
          validateCustomer({
            "nome": req.body.nome,
            "sobrenome": req.body.sobrenome,
            "idade": req.body.idade,
            "email": req.body.email
        }) 
          const response = await postCustomer(req)
          res.send(response)
      } catch (error) {
          let status = 500
          console.log(error)
          if(error.message == "Cep Invalido") status = 400
          res.status(status).send(error.message)
      }
   }