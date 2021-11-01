const { define } = require('../model/Customer.js')
const Sequelize = require('sequelize');
const axios = require('axios').default
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

async function postCustomer(req){
    var pNome = req.body.nome;
    var pSobrenome = req.body.sobrenome;
    var pCep = req.body.cep.replace("-","");
    var pIdade = req.body.idade;
    var pEmail= req.body.email;
    var pCpf= req.body.cpf;
    const Op = Sequelize.Op;
    const Usuario = define(req.db.sequelize)
    try {
        return Usuario.findAll({where: {[Op.or]:[{email:pEmail},{cpf:pCpf}]}}).then(
            async function (usuario) {
                if(usuario.length>=1){
                 throw new Error("Email ou CPF ja cadastrado")
                }else{
                    var url = "https://viacep.com.br/ws/"+pCep+"/json/"
                    let t = await axios.get(url).then((response)=>{
                        if(response.data.erro) throw new Error("Cep Invalido")
                        let r =response.data.logradouro
                        let rb = r+" "+response.data.bairro
                        return Usuario.create({nome:pNome,sobrenome:pSobrenome,idade:pIdade,cpf:pCpf,email:pEmail,cep:pCep,rua:rb});
                        
                    })               
                };
              }
            ).catch((error) => {throw new Error(error)});
    } catch (error) {
      throw new Error(error)
    }

}

async function getCustomer(req){
    try{
        const Usuario = define(req.db.sequelize)
        var user = await Usuario.findAll({where: {email:req.query.email}}).then((usuario)=>{return usuario})
        return user
    }catch(error){
        throw new Error('Erro de consulta')
    }
}

module.exports={
    postCustomer,
    getCustomer
}