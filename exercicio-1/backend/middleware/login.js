const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {

    try {

        const token = req.headers.authorization.split(' ')[1]
        console.log("AQYUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU token: "+ token)
        
        const decode = jwt.verify(token,"secreto")
        req.usuario = decode
        next()
    } catch (error) {
        return res.status(401).send("Não autorizado!")
    }
}