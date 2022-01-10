const express = require('express')
const router = express.Router()

const UsuarioRotas = require('../controllers/UsuarioController')


router.post('/cadastrar', UsuarioRotas.cadastrar)
router.put('/editar', UsuarioRotas.editar)
router.delete('/delete', UsuarioRotas.editar)
router.post('/login', UsuarioRotas.logar)

module.exports = router