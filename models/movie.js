const mongoose = require('mongoose');

const schema = mongoose.Schema({ //Representa el objeto de la parte de la base de datos.
    _title: String,
    _director: {
        type: mongoose.Schema.ObjectId,
        ref: 'Director'
    }
});

class Movie { // Representa el objeto de la parte del programa, para usarlo por el ODM
    constructor(title, director){
        this._title = title;
        this._director = director;
    }

    get title(){
        return this._title;
    }
    set title(v){
        this._title = v;
    }
    get director(){
        return this._director;
    }
    set director(v){
        this._director = v;
    }
}

schema.loadClass(Movie); //Ligar esquema con clase
module.exports = mongoose.model('Movie',schema);