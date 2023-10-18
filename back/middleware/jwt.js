const jwt = require('jsonwebtoken')
require("dotenv").config({path: 'config.env'})

exports.veriticartoken = (req, res , next) => {
    let token = req.headers.authorization
    if (!token) {
        return res.status(400).json({msg: "Token no recibido"})
    }

    // Generar token encontrando los espacios.
    token=token.split(' ')
    jwt.verify(token[1], process.env.SECRET_KEY_JWT, (error, decoded) =>{
        if(error){
            return res.status(403).json({msg:"Token Invalido"})
        }
        req.userData = decoded
        next()
    } ) 
}
