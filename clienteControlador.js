var cliente = require("./cliente")
var axios = require("axios")
var qs = require("querystring")

var controlador = {}

//inserir no banco - METODO POST:
controlador.inserir = function(req,res){
				cliente.create({
								nome: req.body.nome,
								cpf: req.body.cpf,
								email: req.body.email,
								cidade: req.body.cidade
				}).then(
								function(dados){
												res.status(200).redirect("/cliente")
								}
				).catch(
								function(erro){
												res.status(500).send("Ocorreu um erro ao inserir a informação no servidor: " + erro)
								}
				)
}

//buscar no banco - 1 (BUSCA ÚNICA):
controlador.buscarUm = function(req,res){
				cliente.findOne({
								raw: true,
								where: {
												idcliente: req.params.id
								}
				}).then(
								function (dados){
												res.status(200).send(dados)
								}
				).catch(
								function (erro){
												res.status(500).send("Ocorreu um erro na busca pelo cliente: " + erro)
								}
				)
}

//buscar no banco - 2 (BUSCA GERAL):
controlador.buscarVarios = function (req,res){
    cliente.findAll({
        raw: true
    }).then(
        function(dados){
            res.render("tabela",{
                cliente: dados,
                pessoa: "Lucas"
            }
            )
        }
    ).catch(
        function(erro){
            res.status(500).send("Erro ao buscar por cliente: "+erro)
        }
    )
}

//atualizar um registro no banco - MÉTODO PUT:
controlador.atualizar = function (req,res){
				cliente.update({
					            nome: req.body.nome,
								cpf: req.body.cpf,
								email: req.body.email,				
								cidade: req.body.cidade,
				},{
								where:{
												idcliente: req.params.id
								}
				}).then(
								function (dados){
												res.status(200).send(dados)
								}
				).catch(
								function (erro){
												res.status(500).send("Ocorreu um erro ao atualizar um dado no servidor: " + erro)
								}
				)
}

//remover registro do banco - MÉTODO DELETE:
controlador.remover = function(req,res){
    cliente.destroy({
        where:{
            idcliente: req.params.id
        }
    }).then(
        function(dados){
            res.sendStatus(200)
        }
    ).catch(
        function(erro){
            res.status(500).send("Erro ao remover um cliente: "+erro)
        }
    )
}

//handlebars:
controlador.novoFormulario = function(req,res){
    res.render("novoForm")
}

controlador.editarFormulario = function(req,res){
    res.render("editarForm",{
        idcliente: req.params.id
    })
}

controlador.montarReqEdicao = function(req, res) {
    axios.put("/cliente/" + req.params.id,
        qs.stringify({
            nome: req.body.nome,
            cpf: req.body.cpf,
            email: req.body.email,
			cidade: req.body.cidade,
        }),
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            proxy:{
                host: "localhost",
                port: 8085
            }
        }
    ).then(function () {
            res.status(200).redirect("/cliente")
        })
        .catch(function (err) {
            res.status(500).send("Erro ao editar o cliente: " + err);
        })
}

controlador.montarReqDelete = function (req, res) {
    axios.delete('/cliente/' + req.params.id,{
        proxy:{
           
            port: 8085
        }
    }).then(function () {
            res.status(200).redirect("/cliente")
        })
        .catch(function (err) {
            res.status(500).send("Erro ao apagar um cliente: " + err);
        })
}

module.exports = controlador
