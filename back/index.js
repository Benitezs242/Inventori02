const express = require('express')
const conectarDB = require('./config/db')
const cors = require('cors')
const app = express()

app.use(express.json())
// rutas - endpoints
conectarDB()
app.use(cors())
app.use(express.json())

app.use('/api/v1', require('./routes/routes'))

app.listen(3000 , () => {
    console.log("La aplicacion ejecutando http://localhost:3000")
})
