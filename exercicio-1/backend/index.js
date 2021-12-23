const express = require('express')
const app = express()

const conn = require('./db/conn')




// Configurações
// Json
app.use(express.json())

// URL ENCODE
app.use(
    express.urlencoded({
        extended:true
    })
)

const porta = 3001
conn.sync().then( () =>{
    app.listen(porta, (req, res) => {
        console.log("Conectado com o banco de dados!")
    })

}).catch((err) => console.log(err))