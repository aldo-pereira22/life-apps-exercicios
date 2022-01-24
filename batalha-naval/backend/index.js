const http = require('http')

const express = require('express')
const socketio = 'socketio'

const app = express()
const server = http.Server(app).listen(9090)
// const io = socketio(server)
const conn = require('./db/conn')
const Usuario = require('./models/Usuario')
const usuarioRoutes = require('./routes/usuariosRoutes')

app.use("/", usuarioRoutes)


app.use(
    express.urlencoded({
        extended: true
    })
)


const porta = 3003;
conn.sync()
    .then(
        app.listen(porta, () => {
            console.log(`Servidor rodando na porta: ${porta}\n\n\n`)
        })
    )
    .catch((erro) => {
        console.log(erro)
    })

module.exports = app;
