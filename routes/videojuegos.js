// Importando bibliotecas
const express = require('express');
const vjController = require('../controllers/videojuegos');
const router = express.Router();


// Servicio para el procesamiento de datos
router.post('/agregarVideojuego',vjController.postAgregarVideojuego)
    
//Visualización de los datos guardados
router.get('/obtenerVideojuegos',vjController.getObtenerVideojuegos)

router.post('/borrarVideojuego',vjController.postBorrarVideojuego)
router.post('/actualizarVideojuego',vjController.postActualizarVideojuego)

module.exports = router