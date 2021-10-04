// Importando bibliotecas
const express = require('express');
const vjController = require('../controllers/videojuegos');
const router = express.Router();

// Servicio para el procesamiento de datos de videojuegos
router.post('/agregarVideojuego',vjController.postAgregarVideojuego)
router.get('/obtenerVideojuegos',vjController.getObtenerVideojuegos)
router.post('/borrarVideojuego',vjController.postBorrarVideojuego)
router.post('/actualizarVideojuego',vjController.postActualizarVideojuego)

// Servicio para el procesamiento de datos de videojuegos
router.post('/agregarConsola',vjController.postAgregarConsola)
router.get('/obtenerConsolas',vjController.getObtenerConsolas)
router.post('/borrarConsola',vjController.postBorrarConsola)
router.post('/actualizarConsola',vjController.postActualizarConsola)

module.exports = router