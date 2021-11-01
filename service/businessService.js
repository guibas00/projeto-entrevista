const config = require('../config.json')
function validateCustomer(customer){
    if(customer.nome.length < 1){
        throw new Error(config.erros.noNameException)
    }   
    if(customer.sobrenome.length < 0){
        throw new Error("Digite um sobrenome")
     
    }
    if(customer.idade < 10){
        throw new Error("Idade invalida")
    
    }
    if(customer.email.indexOf("@") < 1 ){
         throw new Error('Digite um e-mail valido'); 
    }
    return false
}

function validateGetCustomer(req){
    if(req.query.email == undefined) throw new Error('Digite um e-mail')
    if(req.query.email.indexOf("@") < 1 )throw new Error('Digite um e-mail valido')
}

module.exports={
    validateCustomer,
    validateGetCustomer
}