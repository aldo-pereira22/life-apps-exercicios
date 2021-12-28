const multer = require('multer')


module.exports = multer({
    storage:multer.diskStorage({
        destination:(req, file, cb) =>  {
            cb(null,'./public/upload/artigos')
        },
        filename:(req, file, cb) => {
            cb(null, Date.now.toString()+"_"+file.originalname)
        }
    }),

    fileFilter:(req, file, cb) => {module.exports = (multer({
    storage:multer.diskStorage({
        destination:(req, file, cb) =>  {
            cb(null,'./public/upload/artigos')
        },
        filename:(req, file, cb) => {
            cb(null, Date.now.toString()+"_"+file.originalname)
        }
    }),

    fileFilter:(req, file, cb) => {
        const extensaoImg = ['imgage/png', 'image/jpg', 'image/jpeg'].find(formmatoaceito => formmatoaceito == file.mimetype)

        if(extensaoImg){
            return cb(null, true)
        }

        return cb(null, false)
    }
}))
        if(extensaoImg){
            return cb(null, true)
        }

        return cb(null, false)
    }
})

module.exports = multer(

)