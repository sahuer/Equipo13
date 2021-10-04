// Importando bibliotecas
const express = require('express');
const vjController = require('../controllers/videojuegos');
const router = express.Router();


    // Formulario de ingreso de datos (FRONT-END)
    // router.get('/agregarVideojuego',vjController.getAgregarVideojuego)

// Servicio para el procesamiento de datos
router.post('/agregarVideojuego',vjController.postAgregarVideojuego)

    // Pagina de confirmacion (FRONT-END)
    // router.get('/confirmacionDatos',vjController.getConfirmacionDatos)
    
//Visualización de los datos guardados
router.get('/obtenerVideojuegos',vjController.getObtenerVideojuegos)

router.post('/borrarVideojuego',vjController.postBorrarVideojuego)
router.post('/actualizarVideojuego',vjController.postActualizarVideojuego)

module.exports = router