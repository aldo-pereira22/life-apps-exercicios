const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const Artigo = db.define('Artigo', {
    titulo: {
        type: DataTypes.STRING,
        required:true
    },
    conteudo: {
        type: DataTypes.STRING,
        required:true
    },
    nomeAutor: {
        type: DataTypes.STRING,
        required:true
    },
    imagem: {
        type: DataTypes.STRING,
        required:true
    }

})
module.exports = Artigo