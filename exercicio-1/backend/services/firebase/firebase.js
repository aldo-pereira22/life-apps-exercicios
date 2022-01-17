
var admin = require("firebase-admin");
var serviceAccount = require("1/firebase.json");
const { set } = require("../../db/conn");

const BUCKET = 'exercicio1-lifeapps.appspot.com'
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: BUCKET
});

const bucket = admin.storage().bucket()

const excluir = (img) => {
    const bucket = admin.storage().bucket();
    bucket.deleteFiles({ prefix: img })

}
const uploadImagem = (req, res, next) => {
    if (!req.file) return next()
    const imagem = req.file
    const nomeArquivo = Date.now().toString() + '.' + imagem.originalname.split('.').pop()
    const file = bucket.file(nomeArquivo)

    const stream = file.createWriteStream({
        metadata: {
            contentType: imagem.mimetype
        }
    })
    stream.on('error', (e) => {
        console.log(e)
    })

    stream.on('finish', async () => {
        // tornar o arquivo publico
        await file.makePublic()

        // obter a url publica
        req.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${nomeArquivo}`
        next()
    })

    stream.end(imagem.buffer)
}


module.exports = uploadImagem
// module.exports = excluir

// exports.excluirImagem = (img) => {
//     const bucket = admin.storage().bucket();
//     bucket.deleteFiles({ prefix: img })

// }