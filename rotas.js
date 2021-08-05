var express = require("express")
const controlador = require("./clienteControlador")
var clienteControlador = require("./clienteControlador")
var rotas = express.Router()

//rotas api
rotas.post("/cliente",clienteControlador.inserir)
rotas.get("/cliente/:id",clienteControlador.buscarUm)
rotas.get("/cliente",clienteControlador.buscarVarios)
rotas.put("/cliente/:id",clienteControlador.atualizar)
rotas.delete("/cliente/:id",clienteControlador.remover)

//rotas das páginas:
rotas.get("/cadastrar",clienteControlador.novoFormulario)
rotas.get("/editar/:id",clienteControlador.editarFormulario)
rotas.get("/remover/:id",clienteControlador.montarReqDelete)
rotas.post("/editarReq/:id", clienteControlador.montarReqEdicao)


module.exports = rotas
