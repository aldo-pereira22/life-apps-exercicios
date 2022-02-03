// const http = require('http')

// const express = require('express')
// const socketio = 'socketio'

// const app = express()
// const server = http.Server(app).listen(9090)
// const io = socketio(server)
// const conn = require('./db/conn')
// const Usuario = require('./models/Usuario')
// const usuarioRoutes = require('./routes/usuariosRoutes')

// app.use("/", usuarioRoutes)

// app.use(
//     express.urlencoded({
//         extended: true
//     })
// )


// const porta = 3001;
// conn.sync()
//     .then(
//         app.listen(porta, () => {
//             console.log(`Servidor rodando na porta: ${porta}\n\n\n`)
//         })
//     )
//     .catch((erro) => {
//         console.log(erro)
//     })
// module.exports = app;
const express = require('express')
const path = require('path')
const http = require('http')
const socketIo = require('socket.io')
const app = express()
const server = http.createServer(app)
const io = socketIo(server)


const teste = [[10], [10]];
teste[0][0] = 1

console.log(teste)
// for (i = 0; teste.length; i++) {
//     for (j = 0; j < teste[j].length; j++) {
//         // teste[i][j] = i + j
//     }
// }
// console.log(teste)
// io.on('connection', (socket) => {
io.on('connect', (socket) => {

    console.log("Cliente conectado, id: " + socket.id)
    socket.emit("teste", "Mensagem do servidor")
    // console.log(socket.client)
    socket.on('disconnect', () => {
        console.log("Cliente desconectado, id: " + socket.id)
    })
})




// app.get("/", (req, res) => {
//     res.send("Bem Vindo!")
// })

server.listen(3000);


