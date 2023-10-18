const { config } = require("dotenv")
const mongoose = require("mongoose")

// config.env es la ruta en la que esta el archivo.
require("dotenv"),config({path: 'config.env'})

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO)
        useNewUrlParser: true
        useUnifiedTopology: true
        console.log("base de datos conectada")
    } catch (error) {
        console.log(error)
        // el 1 se usa para confirmar que se va a salir
        process.exit(1)
    }
}

module.exports = conectarDB
