const path = require('path')
const Videojuego = require('../utils/database').models.videojuego
const Consola = require('../utils/database').models.consola
const ConsolaVideojuego = require('../utils/database').models.consolaVideojuego

// Controllers de Videojuego

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
}


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


// Controllers de Consola

exports.postAgregarConsola = (req,res)=>{
    console.log(req.body);      // <= {id: number, nombre: text}
    Consola.create(req.body)
        .then(resultado=>{
            console.log('Registro Exitoso\n')
            res.json({estado: "aceptado"})
        })
        .catch(err=>{
            console.log(err)
            res.json({estado: "error"})
        })
}


exports.getObtenerConsolas = (req,res)=>{
    Consola.findAll()
        .then(resultado =>{
            console.log(resultado)
            res.json(resultado)
        })
        .catch(err=>{
            console.log(err)
        })
}

exports.postBorrarConsola = (req,res)=>{
    console.log(req.body)
    Consola.destroy({
        where: {
            id: req.body.id
        }
    })
    .then(resultado =>{
        console.log("Consola elminada\n")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}

exports.postActualizarConsola = (req,res)=>{
    console.log(req.body)
    Consola.update({
        nombre: req.body.nombre
    },{
        where: {
            id: req.body.id
        }
    })
    .then(resultado =>{
        console.log("Consola actualizada\n")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}


// Controllers de Consola-Videojuego

exports.postAgregarConsolaVideojuego = (req,res)=>{
    console.log(req.body);      // <= {id: number, nombre: text}
    ConsolaVideojuego.create({
        idCV: req.body.idCV,
        lanzamiento: req.body.lanzamiento,
        videojuegoId: req.body.videojuegoId,
        consolaId: req.body.consolaId
    })
        .then(resultado=>{
            console.log('Registro Exitoso\n')
            res.json({estado: "aceptado"})
        })
        .catch(err=>{
            console.log(err)
            res.json({estado: "error"})
        })
}


exports.getObtenerConsolaVideojuegos = (req,res)=>{
    ConsolaVideojuego.findAll()
        .then(resultado =>{
            console.log(resultado)
            res.json(resultado)
        })
        .catch(err=>{
            console.log(err)
        })
}

exports.postBorrarConsolaVideojuego = (req,res)=>{
    console.log(req.body)
    ConsolaVideojuego.destroy({
        where: {
            idCV: req.body.idCV
        }
    })
    .then(resultado =>{
        console.log("Consola-Videojuego elminados\n")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}

exports.postActualizarConsolaVideojuego = (req,res)=>{
    console.log(req.body)
    ConsolaVideojuego.update({
        lanzamiento: req.body.lanzamiento,
        videojuegoId: req.body.videojuegoId,
        consolaId: req.body.consolaId
    },{
        where: {
            idCV: req.body.idCV
        }
    })
    .then(resultado =>{
        console.log("Consola-Videojuego actualizados\n")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}