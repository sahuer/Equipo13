// Objeto de conexion
const Sequelize = require('sequelize');
const {aplicarRelaciones} = require('./relations')

// p1= Nombre de la DB CREATE DATABASE base2, p2= user, p3= password=root
const sequelize = new Sequelize('user5DB','user5','root',{
    dialect: 'mysql', //port: 3306,
    host: 'localhost',
    define: {
        timestamps: false,      // Evitar createdAt y updateAt
        freezeTableName: true   // Evitar plural
    }
})

// Carga de las definiciones de los modelos
const modelDefiners = [
    // Modelos definidos dentro de la carpeta models
    require('../models/videojuegos'),
    require('../models/consolas'),
    require('../models/consolaVideojuego')
]

// Adherir los modelos al objeto de conexion 
for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize)
}

// Realizar las relaciones entre las tablas de las DBs
aplicarRelaciones(sequelize)

module.exports = sequelize