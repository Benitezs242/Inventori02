const mongoose = require('mongoose')

const productoSchema =mongoose.Schema({
    DescripcionProducto: {
        type: String,
        required: true
    },
    Cantidad:{
        type: String,
        required: true
    },
    Lote:{
        type: String,
        required: true
    },
    Vencimiento:{
        type: String,
        required: true
    },
    OrdenCompra:{
        type: String,
        required: true
    },
    Proveedor:{
        type: String,
        required: true
    },
    fec_cre_Producto:{
        type: Date,
        default:Date.now()
    },
    // idOculto:{}
})





module.exports = mongoose.model('Inventario', productoSchema)
