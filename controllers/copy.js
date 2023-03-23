const express = require('express');
const { Copy } = require('../db');

function list(req, res, next) {
    Copy.findAll()
        .then(objects => res.json(objects))
        .catch(err => res.send(error));
}

function index(req, res, next) {
    const id = req.params.id;
    Copy.findByPk(id)
        .then(object => res.json(object))
        .catch(err => res.send(error));
}

function create(req, res, next) {
    let number = req.body.number;
    let lastName = req.body.lastName;
    
    let copy = new Object({
        number:number,
        lastName:lastName
    });

    Copy.create(copy)
        .then( obj => res.json(obj))    
        .catch( err => res.json(err));
}

function replace(req, res, next) {
    const id = req.params.id;
    Copy.findByPk(id)
            .then((object) => {
                const number = req.body.number ? req.body.number : null;
                const lastName = req.body.lastName ? req.body.lastName : "";
                object.update({number: number, lastName: lastName})
                .then(obj => res.json(obj))
                .catch(err => res.send(err));
            })
            .catch(err => res.send(err));
}

function update(req, res, next) {
    const id = req.params.id;
    Copy.findByPk(id)
            .then((object) => {
                const number = req.body.number ? req.body.number : object.number;
                const lastName = req.body.lastName ? req.body.lastName : object.lastName;
                object.update({number: number, lastName: lastName})
                .then(obj => res.json(obj))
                .catch(err => res.send(err));
            })
            .catch(err => res.send(err));
}

function destroy(req, res, next) {
    const id = req.params.id;
    Copy.destroy({ where: {id:id}})
            .then(obj => res.json(obj))
            .catch(err => res.send(err));
}

module.exports = { 
    list,
    index,
    create,
    replace,
    update,
    destroy
};