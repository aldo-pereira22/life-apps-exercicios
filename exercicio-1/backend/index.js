const express = require('express')
const app = express()
const conn = require('./db/conn')


// Models
const Artigo = require('./model/Artigo')
const User = require('./model/User')

const adminRotas = require('./router/adminRotas')
// Configurações
// Receber dados JSON
app.use(express.json())

// URL ENCODE
app.use(
    express.urlencoded({
        extended:true
    })
)
app.use('/', adminRotas)


const porta = 3001
    conn.sync().
    // conn.sync({force:true}).
    then( () =>{

        app.listen(porta)
    })
    .catch((err) => console.log(err))