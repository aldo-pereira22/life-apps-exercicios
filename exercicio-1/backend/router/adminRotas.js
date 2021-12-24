const express = require('express')
const router = express.Router()


const AdminController = require('../controllers/AdminController')

router.post('/admin/cadastrar', AdminController.cadastrar)
router.put('/admin/editar/:id', AdminController.editar )
router.get('/admin/buscar/:id', AdminController.buscar)
router.delete('/admin/excluir/:id', AdminController.excluir )

router.get('/', AdminController.listar)

module.exports = router