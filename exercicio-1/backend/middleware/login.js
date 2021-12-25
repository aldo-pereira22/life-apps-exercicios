const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {

    try {
        console.log("AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIi")
        const decode = jwt.verify(req.body.token,"secreto")
        req.usuario = decode
        next()
    } catch (error) {
        return res.status(401).send("Não autorizado!")
    }
}