const Sequelize = require('sequelize');
function define(sequelize){ 
    
    return sequelize.define('usuarios',{
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
}

module.exports={
    define
} 