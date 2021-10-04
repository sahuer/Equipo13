//Tabla intermedia
const Sequelize = require('sequelize');

const Videojuego = (sequelize)=>{
    sequelize.define('consolaVideojuego',{
        idCV:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true 
        },
        lanzamiento: Sequelize.STRING
    })
}
module.exports= Videojuego