const path = require('path')
const Videojuego = require('../utils/database').models.videojuego

/*
exports.getAgregarVideojuego = (req,res)=>{
    res.send('Formulario')
}
*/

exports.postAgregarVideojuego = (req,res)=>{
    console.log(req.body);      // <= {id: number, nombre: text}
    Videojuego.create(req.body)
        .then(resultado=>{
            console.log('Registro Exitoso\n')
            res.json({estado: "aceptado"})
        })
        .catch(err=>{
            console.log(err)
            res.json({estado: "error"})
        })
    // res.redirect('/videojuegos/confirmacionDatos')
}

/*
exports.getConfirmacionDatos = (req,res)=>{
    res.send('Confirmacion')
}
*/

exports.getObtenerVideojuegos = (req,res)=>{
    Videojuego.findAll()
        .then(resultado =>{
            console.log(resultado)
            res.json(resultado)
        })
        .catch(err=>{
            console.log(err)
        })
}

exports.postBorrarVideojuego = (req,res)=>{
    console.log(req.body)
    Videojuego.destroy({
        where: {
            id: req.body.id
        }
    })
    .then(resultado =>{
        console.log("Videojuego elminado\n")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}

exports.postActualizarVideojuego = (req,res)=>{
    console.log(req.body)
    Videojuego.update({
        nombre: req.body.nombre
    },{
        where: {
            id: req.body.id
        }
    })
    .then(resultado =>{
        console.log("Videojuego actualizado\n")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}