const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const User = require('./Usuario')

const Artigo = db.define('Artigo', {
    titulo: {
        type: DataTypes.STRING,
        required: true
    },
    conteudo: {
        type: DataTypes.TEXT,
        required: true
    },
    nomeAutor: {
        type: DataTypes.STRING,
        required: true
    },
    imagem: {
        type: DataTypes.STRING,
        required: true
    }
})


Artigo.belongsTo(User)
User.hasMany(Artigo)

module.exports = Artigo