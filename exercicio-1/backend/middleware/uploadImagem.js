const multer = require('multer')
const path =  require('path')


module.exports = multer({
    destination:(req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now()+"-"+file.originalname)
    }
})