const Usuario = require('../models/Usuario')
module.exports = class UsuarioController {

    static criarUsuario(req, res) {
        res.status(200).send({
            mensagem: "Ok, deu certo!"
        })
    }

    static inicio(req, res) {
        res.status(200).send({
            mensagem: "Ok, deu certo!"
        })
    }


}