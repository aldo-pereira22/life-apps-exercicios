const express = require('express')
const router = express.Router()

const UsuarioRotas = require('../controllers/UsuarioController')


router.post('/cadastrar', UsuarioRotas.cadastrar)
router.post('/login', UsuarioRotas.logar)

module.exports = router