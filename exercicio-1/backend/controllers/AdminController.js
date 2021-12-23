const Artigo = require('../model/Artigo')

module.exports = class AdminController{

    static async cadastrar(req, res){
        const artigoNovo = req.body
        const artigo = await Artigo.create(artigoNovo)
        res.json(artigo) 
    }

    static editar(req, res){
        res.render("TESTE")
    }
    static excluir(req, res){
        res.render("TESTE")
    }
    static async listar(req, res){
        const artigos = await Artigo.findAll({raw:true})
        res.json(artigos)
    }
}