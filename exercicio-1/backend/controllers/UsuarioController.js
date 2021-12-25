const Usuario = require('../model/Usuario')

module.exports = class UsuarioController {

    static async cadastrar(req, res){
        const usuarioNovo = req.body

        const usuario = await Usuario.create(usuarioNovo)
        res.status(201).send(usuario)
    }

    static async buscar(req, res){
        const id = req.params.id
        const usuario = await Usuario.findOne({raw:true, where: { id:id }})
        res.status(200).send(usuario)
    }


    static async excluir(req, res){
        const id = req.params.id
        const usuario = await Usuario.findOne({raw:true, where: { id:id }})

        if(usuario) {
            await Usuario.destroy({ where: { id:id }})
            res.status(202).send("Usuário excluido!")
        }else {
            res.status(404).send("Não foi possível excluir!\nO usuário não foi encontrado ncontrado!")
        }
    }
    static async editar(req, res){

        const id = req.params.id
        const nome = req.body.nome
        const email = req.body.email
        const senha = req.body.senha


        let usuario = await Usuario.findOne({raw:true, where: { id:id }})
        
        // console.log("Titulo: "+ titulo, conteudo, imagem)
        
        usuario.id = id
        usuario.nome = nome
        usuario.email = email
        usuario.senha = senha

        await Usuario.update(usuario, {where:{id:id}})

        res.status(200).send()
    }

}