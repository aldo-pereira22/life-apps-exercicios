const expres = require('express')
const router = expres.Router()

const UsuarioController = require('../controllers/UsuarioController')

router.get('/adicionar', UsuarioController.criarUsuario)
router.get('/', UsuarioController.inicio)


module.exports = router