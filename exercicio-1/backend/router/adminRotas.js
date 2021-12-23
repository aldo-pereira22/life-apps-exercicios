const express = require('express')
const router = express.Router()


const AdminController = require('../controllers/AdminController')

router.post('/admin/cadastrar', AdminController.cadastrar)
router.put('/amdin/editar/:id', AdminController.editar )
router.delete('admin/excluir/:id', AdminController.excluir )


router.get('', AdminController.listar)

module.exports = router