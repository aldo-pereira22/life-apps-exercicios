exports.run = async (app) => {
    const http = require('http').createServer(app)
    const io = require('socket.io')(http, {
        cors: {
            origin: "http://localhost:8080",
            credentials: true
        }
    });
    io.on('connection', (socket) => {
        exports.info = () => {
            return io;
        }
    });

    http.listen(3000, () => {
        console.log("Servidor socket IO LIGADO\n\n");
    })
}