const Producto = require('../models/Producto')



exports.crearProducto = async (req, res) => {
    try {
        let Productoinventario
        Productoinventario = new Producto(req.body)
        await Productoinventario.save()
        res.json(Productoinventario)
    } catch (error) {
        console.log(error)
        res.status(502).json("averiado prrito")
    }

}
exports.obtenertodosProductos = async (req, res) =>{
    try {
        const InventarioData = await Producto.find()
        res.json(InventarioData)
    } catch (error) {
        res.status(502).json("averiado prrito")
    }
}
exports.obtenerUnSoloProducto= async (req,res) => {
    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)){
            const productodataa = await Producto.findById(req.params.id)
            if(!productodataa){
                res.status(404).json("Personaje No encontrado")
            }else {
                res.json(productodataa)
            }
        } else {
            res.status(502).json("averiado prrito")   
        }
    }   catch (error) {
            console.log(error)
            res.status(418).json("averiado prrito")
        }
    }      

exports.actualizarProducto = async (req, res) => {
    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)){
            const productodataa = await Producto.findById(req.params.id)
            if(!productodataa){
                res.status(404).send("Personaje No encontrado")
            }else {
                // Se usa una declaracion de una const con el nombre de variables que tendran valor del body, accediendo a cada campo.
                const { DescripcionProducto , Cantidad , Lote , Vencimiento , OrdenCompra , Proveedor ,idOculto} = req.body
                productodataa.DescripcionProducto = DescripcionProducto
                productodataa.Cantidad = Cantidad
                productodataa.Lote = Lote
                productodataa.Vencimiento = Vencimiento
                productodataa.OrdenCompra = OrdenCompra
                productodataa.Proveedor = Proveedor
                // productodataa.idOculto = idOculto
                
                let ProductoActualizado = await Producto.findOneAndUpdate( {_id: req.params.id} , productodataa)
                res.json(ProductoActualizado)
            }
        } else {
            res.status(502).json("averiado prrito")   
        }
    }   catch (error) {
            res.status(418).json("averiado prrito")
        }
    }  


exports.eliminarProducto = async (req, res) => {
    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)){
            const productodataa = await Producto.findById(req.params.id)
            if(!productodataa){
                res.status(404).json("Producto No encontrado")
                return
            }
            await Producto.findOneAndRemove({_id: req.params.id})
            res.json({response: "producto Eliminado"})
        }
    }   catch (error) {
            console.log(error)
            res.status(418).json("averiado prrito")
        }
    }
