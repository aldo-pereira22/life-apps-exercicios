const express = require('express')
const app = express()
const http = require('http').createServer(app)
const cors = require('cors');
require('dotenv').config()



app.use(cors());
const axios = require('axios')

app.get("/", (req, resp) => {
    // resp.json("TESTE")
    axios.get('http://192.168.0.4/redmine/projects.json').then(dados => {
        resp.json(dados.data.projects)
        console.log(dados.data)
        // return dados.data
    })
})
// axios.get('192.168.0.4/redmine/issues.json')
//     .then(resp => {
//         dados = resp.data
//     })

// axios.get('http://192.168.0.4/redmine/issues.json').then(resp => {
//     // dados = resp.data
//     console.log(resp.data.issues[0])
//     // console.log(resp.data)
// })
// const config = {
//     headers: {
//         "Content-type": "application/json",
//         "X-Redmine-API-Key": "34c6b7186fb0e4bc78cf95d0d5d2ae009e21e32e",
//     },
// };
// axios.get('http://192.168.0.4/redmine/users.json', config).then(resp => {
//     // dados = resp.data
//     // console.log(resp.data.issues[0])
//     // console.log(resp.data)
//     console.log(resp.data)
// }).catch((err) => {
//     console.log(err)
// })

// axios.get('http://192.168.0.4/redmine/projects.json').then(resp => {
//     // dados = resp.data
//     // console.log(resp.data.issues[0].project.name)
//     console.log(resp.data)
// })
const porta = 3001
http.listen(porta)