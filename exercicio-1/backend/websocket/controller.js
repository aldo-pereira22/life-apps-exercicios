const express = require('express')
const app = express()
const http = require('http').createServer(app)

const io = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:8080",
        methods: ["GET", "POST", "UPDATE", "DELETE"],
        transports: ['websocket', 'polling'],
        credentials: true
    },
    allowEIO3: true
});

const porta = 3000
conn.sync().
    // conn.sync({ force: true }).
    then(() => {

        http.listen(porta)
    }).catch((err) => console.log(err))

io.sockets.on("connection", function (socket) {
    console.log("\n\n\n\nCliente socket conectado, id: " + socket.id);
    socket.on('disconnect', function (data) {
        console.log("Cliente desconectado " + data);
    });
});