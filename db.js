const Sequelize = require('sequelize');
const director = require('./models/director');
const directorModel = require('./models/director');

// Para hacer una conexion a una base de datos se necesitan 4 cosas:
// 1) Nombre de la base de datos
// 2) Usuario de la base de datos
// 3) Password de la base de datos
// 4) Objeto de configuracion del ORM

const sequelize = new Sequelize(
    'video-club',
    'root',
    '1234',
    {
        host:'127.0.0.1',
        dialect:'mysql'
    });

const Director = directorModel(sequelize, Sequelize);

sequelize.sync({ //Para que la base de datos se reinicie cada que se ejecute
    force:true
}).then(()=>{
    console.log("Base de datos actualizada");
});

module.exports = {
    Director
}