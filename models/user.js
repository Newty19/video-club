const mongoose = require('mongoose');

//Schema
const schema = mongoose.Schema({
    _name:String,
    _lastName:String,
    _phone:String

});


//Clase

class User {
    constructor(name,lastName,phone){
        this._name = name;
        this._lastName = lastName;
        this._phone = phone;
    }
    get name(){
        return this._name;
    }
    set name(v){
        this._name = v;
    }
    get lastName(){
        return this._lastName;
    }
    set lastName(v){
        this._lastName = v;
    }
    get phone(){
        return this._phone;
    }
    set phone(v){
        this._phone = v;
    }

}

schema.loadClass(User);
module.exports = mongoose.model('User',schema);