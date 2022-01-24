const { Sequelize } = require('sequelize')
const configDatabase = require('./database')


const sequelize = new Sequelize(configDatabase)


try {
    sequelize.authenticate()
    console.log("Conectado com o Banco de dados!!!")
} catch (error) {
    console.log("Não foi possível conectar com o banco de dados" + error)
}

module.exports = sequelize
