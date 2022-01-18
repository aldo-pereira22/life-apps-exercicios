const express = require('express')
const app = express()
const http = require('http').createServer(app)
const conn = require('./db/conn')
const cors = require('cors');
// const { Server } = require("socket.io");
// const io = new Server(server);
// const io = require('socket.io')(http, {
//     cors: {
//         origins: ['http://localhost:8080'],
//         // origins: ['*']
//     }
// });

const io = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:8080",
        methods: ["GET", "POST"],
        transports: ['websocket', 'polling'],
        credentials: true
    },
    allowEIO3: true
});

// Models
const Artigo = require('./model/Artigo')
const Usuario = require('./model/Usuario')


// Arquivos de rotas ADM
const adminRotas = require('./router/adminRotas')
const usuarioRotas = require('./router/usuarioRotas')


// Configurações
// Receber dados JSON
app.use(express.json())



// Tornando acessível a pasta Uploads
app.use('/', express.static('./uploads'))

//Cors
// app.use(cors());
// app.use(cors({ credentials: true, origin: 'http://localhost:8080' }));

// URL ENCODE
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use('/usuario', usuarioRotas)
app.use('/', adminRotas)

app.use((req, res, next) => {
    const erro = new Error("URL não encontrada! Verifique o endereço e tente novamente.")
    erro.status = 404
    next(erro)
})
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
})

let visitas = 0;
const porta = 3001
conn.sync().
    // conn.sync({ force: true }).
    then(() => {

        http.listen(porta)
    }).catch((err) => console.log(err))

io.on('connection', (socket) => {
    console.log('\n\n\nWeb Socket Conectado!!!: ' + socket.id + "Visitas: " + ++visitas)
})