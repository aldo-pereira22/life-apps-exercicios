const express = require('express')
const app = express()
const conn = require('./db/conn')
const cors = require('cors');


// Models
const Artigo = require('./model/Artigo')
const User = require('./model/User')


// Arquivos de rotas ADM
const adminRotas = require('./router/adminRotas')

// Configurações
// Receber dados JSON
app.use(express.json())




//Cors
app.use(cors());

// URL ENCODE
app.use(
    express.urlencoded({
        extended:true
    })
)
app.use('/', adminRotas)

app.use((req, res, next) => {
    const erro =  new Error("URL não encontrada! Verifique o endereço e tente novamente.")
    erro.status = 404
    next(erro)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        erro:{
            mensagem: error.message
        }
    })
})
const porta = 3001
    conn.sync().
    // conn.sync({force:true}).
    then( () =>{

        app.listen(porta)
    })
    .catch((err) => console.log(err))
