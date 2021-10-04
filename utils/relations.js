function aplicarRelaciones(sequelize){
    // Imprimir los modelos relacionados con el objeto de conexion 
    console.log(sequelize.models)
    const Videojuego = sequelize.models.videojuego
    const Consola = sequelize.models.consola
    const ConsolaVideojuego = sequelize.models.consolaVideojuego

    // Un videojuego puede jugarse en muchas consolas
    Videojuego.belongsToMany(Consola,{through:ConsolaVideojuego});
    // Una consola tiene muchos videojuegos
    Consola.belongsToMany(Videojuego,{through:ConsolaVideojuego});
    // Si tuvieran una relacion uno a muchos
    /* 
    Supuesto tener tabla trofeo: un videojuego puede tener muchos trofeos
    pero un trofeo solo pertenece a un videojuego 
    */
   // Videojuego.hasMany(Trofeo)
   // Trofeo.belongsToMany(Videojuego)
}

module.exports = {aplicarRelaciones}