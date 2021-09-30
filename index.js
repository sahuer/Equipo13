const express = require('express')
const app = express()

app.get("/prueba", (req,res) =>{
    res.send("Prueba servidor funcionando")
})

app.listen(8084,()=>{
    console.log("Servidor online en puerto 8084")
})