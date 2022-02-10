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

// Import dos campos de batalha
const array = require('./funcoes/array')
let campo1 = array.campo1
let campo2 = array.campo2

console.log("\n\n\nCampo de Batalha - 1")


// campo1[0][0] = "NAVIO"
// campo1[0][1] = "NAVIO"
// campo1[0][2] = "NAVIO"
// campo1[0][3] = "NAVIO"
// campo1[0][4] = "NAVIO"

// campo2[0][0] = "Avião"
// campo2[0][1] = "Avião"
// campo2[0][2] = "Avião"
// campo2[0][3] = "Avião"
// campo2[0][4] = "Avião"




// for (i = 0; i < 10; i++) {
//     for (j = 0; j < 10; j++) {
//         campo1[5][5] = "AAAA"
//     }
// }
// let cont = 0;
// for (i = 0; i < 10; i++) {
//     for (j = 0; j < 10; j++) {
//         cont++;

//         campo1[i][j] = cont
//     }
// }

console.log("\n\nCampo de Batalha - 2")
console.table(campo1)
console.table(campo2)


io.on('connect', (socket) => {
    console.log("Cliente conectado, id: " + socket.id)
    socket.emit("teste", "Mensagem do servidor")
    // console.log(socket.client)
    socket.on('disconnect', () => {
        console.log("\n\nCliente desconectado, id: " + socket.id)
    })
    socket.on("atualizar", (array) => {
        console.log("Recebendo dados do front-end")
        console.table(array)
        campo1 = array
        socket.emit("recebe", campo1)

    })

    socket.emit("campo1", campo1)
    socket.emit("campo2", campo2)

})




// app.get("/", (req, res) => {
//     res.send("Bem Vindo!")
// })

server.listen(3000);


