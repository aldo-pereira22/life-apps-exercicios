const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Usuario = db.define('Usuario', {
    nome_usuario: {
        type: DataTypes.STRING,
        required: true
    },
    senha: {
        type: DataTypes.STRING,
        required: true
    }
})

module.exports = Usuario