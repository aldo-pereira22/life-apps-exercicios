const express = require('express')
const router = express.Router()

const UsuarioRotas = require('../controllers/UsuarioController')


router.get('/login', UsuarioRotas.cadastrar)

module.exports = router