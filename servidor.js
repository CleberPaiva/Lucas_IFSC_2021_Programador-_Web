var express = require("express")
var handlebars = require("express-handlebars")
var rotas = require("./rotas")

var aplicacao = express()
const PORTA = 8085

aplicacao.engine("handlebars", handlebars({defaultLayout: "main"}))
aplicacao.set("view engine", "handlebars")

aplicacao.use(express.urlencoded({extended:true}))
aplicacao.use(rotas)

aplicacao.listen(PORTA,function(){
				console.log('Servidor executando...')
})
