const express = require('express')
const router = express.Router()
const ProductoController = require('../Controllers/inventarioGeneral.controller')
const PerfilController = require('../Controllers/perfiles.controller')
const sessionController = require('../Controllers/SessionController')
const mdJwt = require ('../middleware/jwt')


router.get('/obtenerTodosProducto', ProductoController.obtenertodosProductos) 
router.get('/obtenerUnSoloProducto/:id', ProductoController.obtenerUnSoloProducto) 
router.post('/crearProducto', ProductoController.crearProducto)
router.put('/actualizarProducto/:id', ProductoController.actualizarProducto)
router.delete('/eliminarProducto/:id', ProductoController.eliminarProducto)

// cambiar a otro archivo rutes para solo perfiles
router.get('/obtenerTodosPerfiles', PerfilController.obtenerTodosPerfiles)
router.get('/obtenerUnSoloPerfil/:id', PerfilController.obtenerUnSoloPerfil)
router.post('/crearPerfil', PerfilController.crearPerfil)
router.put('/actualizarPerfil/:id', PerfilController.actualizarPerfil)
router.delete('/eliminarPerfil/:id', PerfilController.eliminarPerfil)

router.post('/ingreso', sessionController.generarToken)

module.exports = router
