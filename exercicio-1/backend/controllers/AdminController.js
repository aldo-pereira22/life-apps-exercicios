const Artigo = require('../model/Artigo')


module.exports = class AdminController{

    static async cadastrar(req, res){

        const artigoNovo = req.body

        artigoNovo.imagem = req.file.firebaseUrl
        const artigo = await Artigo.create(artigoNovo)
        res.status(201).send(artigo)
        // res.status(201).send("")
    }

    static async buscar(req, res){

        try {
            const id = req.params.id
            const artigo = await Artigo.findOne({raw:true, where: { id:id }})
            res.status(200).send(artigo)            
        } catch (error) {
            console.log("\n\n\n\n\n\nERRRROOOO!")
            console.log(error)
        }
        // console.log(artigo)
    }

    static async excluir(req, res){
        const id = req.params.id
        const artigo = await Artigo.findOne({raw:true, where: { id:id }})

        if(artigo) {
            await Artigo.destroy({ where: { id:id }})
            res.status(202).send("Artigo excluido!")
        }else {
            res.status(404).send("Não foi possível excluir!\nO artigo não foi encontrado ncontrado!")
        }
    }
    static async editar(req, res){
        
        const id = req.params.id    
        const titulo = req.body.titulo
        const conteudo = req.body.conteudo
        const nomeAutor = req.body.nomeAutor
        // const imagem = req.body.imagem
        let artigo = await Artigo.findOne({raw:true, where: { id:id }}) 
        // console.log("Titulo: "+ titulo, conteudo, imagem)

        artigo.titulo = titulo
        artigo.conteudo = conteudo
        artigo.nomeAutor = nomeAutor

        // artigo.imagem = imagem

        await Artigo.update(artigo, {where:{id:id}})

        res.status(200).send()
    }

    static async listar(req, res){
        const artigos = await Artigo.findAll({raw:true})
        res.status(200).send(artigos)
    }
}