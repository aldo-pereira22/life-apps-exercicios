const express = require('express')
const router = express.Router()
const multer = require('multer')
const login = require('../middleware/login')


const storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null,'./uploads')
    },
    filename: function(req, file, cb){
        cb(null, "teste")
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true)
    }else {
        cb(null, false)
    }
}
const upload = multer({
    storage:storage,
    limits:{
        fileSize:1024 * 1024 *30
    },
    fileFilter:fileFilter

})

const AdminController = require('../controllers/AdminController')

router.post('/admin/cadastrar',(upload.single('imagem')),login,AdminController.cadastrar)
router.put('/admin/editar/:id', AdminController.editar )
router.get('/admin/buscar/:id', AdminController.buscar)
router.delete('/admin/excluir/:id', AdminController.excluir )

router.get('/', AdminController.listar) 

module.exports = router