const mongoose2 = require('mongoose')

const PerfilSchema =mongoose2.Schema({
    NombreUsuario: {
        type: String,
        required: true
    },
    ApellidoUsuario:{
        type: String,
        required: true
    },
    Area:{
        type: String,
        required: true
    },   
    CorreoUsuario:{
        type: String,
        required: true
    }, 
    ContraseniaUsuario:{
        type: String,
        required: true
    },
    fec_cre_Usuario: {
        type: Date,
        default:Date.now()
    }
    },{
        versionKey: false,
        timestamps: true
    })

module.exports = mongoose2.model('Perfiles', PerfilSchema)
