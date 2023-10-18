const perfiles = require('../models/Perfiles')


exports.crearPerfil = async (req, res) => {
    // console.log(req.body)
    try {
        let Perfil
        Perfil = new perfiles (req.body)
        await Perfil.save()
        res.send(Perfil)
    } catch (error) {
        console.log(error)
        res.status(502).send("averiado prrito")
    }

}
exports.obtenerTodosPerfiles = async (req, res) =>{
    try {
        const PerfilData = await perfiles.find()
        res.json(PerfilData)
    } catch (error) {
        console.log(error)
        res.status(502).send("averiado prrito")
    }

}
exports.obtenerUnSoloPerfil = async (req,res) => {
    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)){
            const PerfilData = await perfiles.findById(req.params.id)
            if(!PerfilData){
                res.status(404).json("Perfil No encontrado")
            }else {
                res.json(PerfilData)
            }
        } else {
            res.status(502).json("averiado prrito")   
        }
    }   catch (error) {
            console.log(error)
            res.status(418).json("averiado prrito")
        }
    }      

exports.actualizarPerfil = async (req, res) => {
    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)){
            const PerfilData = await perfiles.findById(req.params.id)
            if(!PerfilData){
                res.status(404).send("Personaje No encontrado")
            }else {
                // Se usa una declaracion de una const con el nombre de variables que tendran valor del body, accediendo a cada campo.
                const { NombreUsuario , ApellidoUsuario , Area , CorreoUsuario, contraseniauUsuario} = req.body
                PerfilData.NombreUsuario = NombreUsuario
                PerfilData.ApellidoUsuario = ApellidoUsuario
                PerfilData.Area = Area
                PerfilData.CorreoUsuario = CorreoUsuario
                PerfilData.contraseniauUsuario= contraseniauUsuario

                // productodataa.idOculto = idOculto
                
                let PerfilActualizado = await perfiles.findOneAndUpdate( {_id: req.params.id} , PerfilData)
                res.json(PerfilActualizado)
            }
        } else {
            res.status(502).json("averiado prrito")   
        }
    }   catch (error) {
            res.status(418).json("averiado prrito")
        }
    }  

exports.eliminarPerfil= async (req, res) => {
    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)){
            const Perfildataa = await perfiles.findById(req.params.id)
            if(!Perfildataa){
                res.status(404).json("Perfil No encontrado")
                return
            }
            await perfiles.findOneAndRemove({_id: req.params.id})
            res.json({response: "Perfil Eliminado"})
        }
    }   catch (error) {
            console.log(error)
            res.status(418).json("averiado prrito")
        }
    }
