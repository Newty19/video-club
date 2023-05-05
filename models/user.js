const mongoose = require('mongoose');

//Schema
const schema = mongoose.Schema({
    _name:String,
    _lastName:String,
    _phone:String,
    _email: String,
    _password: String,
    _salt: String,
    _permisions: [{
            type: mongoose.Schema.ObjectId,
            ref: 'Permision'
    }]

});


//Clase

class User {
    constructor(name,lastName,phone){
        this._name = name;
        this._lastName = lastName;
        this._phone = phone;
        this._email = email;
        this._password = password;
        this._salt = salt;
        this._permisions = this.permisions;
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
    get email(){
        return this._email;
    }

    set email(v){
        this._email = v;
    }

    get password(){
        return this._password;
    }

    set password(v){
        this._password = v;
    }

    get salt(){
        return this._salt;
    }

    set salt(v){
        this._salt = v;
    }
    get permisions(){
        return this._permisions;
    }
    set permisions(v){
        this._permisions = v;
    }

}

schema.loadClass(User);
module.exports = mongoose.model('User',schema);