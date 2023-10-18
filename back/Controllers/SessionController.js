require('dotenv').config({path: 'config.env'})
const jwt = require('jsonwebtoken')
const usuario = require('../models/Perfiles')

exports.generarToken = async ( req, res) =>{
    const {correo, password, area} = req.body
    const usuarioo = await usuario.findOne({CorreoUsuario: correo})
    console.log(usuarioo)
    if(!usuarioo){
        return res.status(401).json({msg: "El Correo es invalido"})
    }
    if (usuarioo.ContraseniaUsuario !== password) {
        return res.status(401).json({ msg: "La contraseña es invalida" })
    }
    const payload = {
        id: usuarioo._id,
        CorreoUsuario:usuarioo.CorreoUsuario,
        ContraseniaUsuario:usuarioo.ContraseniaUsuario,
    }
    const token = jwt.sign(payload,process.env.SECRET_KEY_JWT,{expiresIn:'1h'})
    return res.status(202).json({token:token})
} 
