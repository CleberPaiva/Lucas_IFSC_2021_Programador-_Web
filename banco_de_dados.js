var sequelize = require("sequelize")

var conexao = new sequelize ("lucas", "root","ifsc2021",{
				host: "database-1.c0qrhw2kzjcu.sa-east-1.rds.amazonaws.com",
				dialect: "mysql"
})


conexao.authenticate().then(
    function(){
        console.log("Conectado ao banco com sucesso!")
    }
).catch(
    function(erro){
        console.log("Erro ao conectar: "+erro)
    }
)

module.exports = conexao