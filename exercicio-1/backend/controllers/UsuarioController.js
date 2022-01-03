const Usuario = require('../model/Usuario')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = class UsuarioController {

    static cadastrar(req, res) {
        let senha = req.body.senha
        const novoUsuario = req.body
        bcrypt.hash(senha, 10, async (error, hash) => {
            if (error) {
                return res.status(500).send({ error: error })
            }
            novoUsuario.senha = hash
            const usuario = await Usuario.create(req.body)
            res.status(201).send(usuario)
        })
    }

    static async buscar(req, res) {
        const id = req.params.id
        const usuario = await Usuario.findOne({ raw: true, where: { id: id } })
        res.status(200).send(usuario)
    }


    static async excluir(req, res) {
        const id = req.params.id
        const usuario = await Usuario.findOne({ raw: true, where: { id: id } })

        if (usuario) {
            await Usuario.destroy({ where: { id: id } })
            res.status(202).send("Usuário excluido!")
        } else {
            res.status(404).send("Não foi possível excluir!\nO usuário não foi encontrado ncontrado!")
        }
    }

    static async editar(req, res) {
        const id = req.params.id
        const nome = req.body.nome
        const email = req.body.email
        const senha = req.body.senha
        let usuario = await Usuario.findOne({ raw: true, where: { id: id } })

        usuario.id = id
        usuario.nome = nome
        usuario.email = email
        usuario.senha = senha
        await Usuario.update(usuario, { where: { id: id } })

        res.status(200).send()
    }

    static async logar(req, res) {
        const email = req.body.email
        const senha = req.body.senha

        const usuario = await Usuario.findOne({ where: { email: email } })

        if (!usuario) {
            return res.status(401).send("Login e/ou sennha errados. Não Autorizado!")
        }
        bcrypt.compare(senha, usuario.senha, (err, result) => {
            if (err) {
                return res.status(401).send("Login e/ou sennha errados. Não Autorizado!")
            }
            if (result) {
                const token = jwt.sign({
                    id_usuario: usuario.id,
                    email: usuario.email
                }, "secreto", {
                    expiresIn: '1h'
                })

                return res.status(200).send(token)
            }
            return res.status(401).send("Login e/ou sennha errados. Não Autorizado!")
        })

    }
}