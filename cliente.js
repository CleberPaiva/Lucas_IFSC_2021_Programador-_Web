var sequelize = require("sequelize")
var banco = require("./banco_de_dados")

var cliente = banco.define("cliente",{
    idcliente: {
        type: sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: sequelize.STRING(120),
        allowNull: false,
    },
    cpf: {
        type: sequelize.STRING(15),
        allowNull: false,
    },
    email: {
        type: sequelize.STRING(150),
        allowNull: false,
    },
    cidade: {
        type: sequelize.STRING(150),
        allowNull: false,
    }
},{
    freezeTableName: true,
    timestamps: false
})

//cliente.sync()

module.exports = cliente