const express = require('express');
const { Booking } = require('../db');

function list(req, res, next) {
    Booking.findAll()
        .then(objects => res.json(objects))
        .catch(err => res.send(error));
}

function index(req, res, next) {
    const id = req.params.id;
    Booking.findByPk(id)
        .then(object => res.json(object))
        .catch(err => res.send(error));
}

function create(req, res, next) {
    let date = req.body.date;
    
    let copy = new Object({
        date:date
    });

    Copy.create(copy)
        .then( obj => res.json(obj))    
        .catch( err => res.json(err));
}

function replace(req, res, next) {
    const id = req.params.id;
    Copy.findByPk(id)
            .then((object) => {
                const date = req.body.date ? req.body.date : "";
                object.update({number: number, date: date})
                .then(obj => res.json(obj))
                .catch(err => res.send(err));
            })
            .catch(err => res.send(err));
}

function update(req, res, next) {
    const id = req.params.id;
    Copy.findByPk(id)
            .then((object) => {
                const date = req.body.date ? req.body.date : object.date;
                object.update({number: number, date: date})
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