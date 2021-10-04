const express = require('express')
const app = express()

app.get("/prueba", (req,res) =>{
    res.send("Prueba servidor funcionando")
})

// Importar rutas
const vjRoutes = require('./routes/videojuegos')

// Establecer middleware que configure donde  
// se encuentran recursos publicos
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())
app.use(express.urlencoded({extended:true})) // json info

// Vinculamos la aplicación con los recursos de videojuegos
app.use('/videojuegos',vjRoutes);


// sequelize.sync({force:true})
sequelize.sync()
    .then(
        app.listen(8084,()=>{
            console.log("Servidor online en puerto 8084")
        })
    )
    .catch(err=>console.log(err))