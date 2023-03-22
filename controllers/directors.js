const express = require('express');
const Director = require('../models/director');
function list(req, res, next) {
    res.send('respond with a director list');
}

function index(req, res, next) {
    res.send(`respond with a index of a director= ${req.params.id}`);
}

function create(req, res, next) {
    let name = req.body.name;
    let lastName = req.body.lastName;

    let director = new Director({
        name:name, lastName:lastName
    });

    director.save().then(obj => res.status(200).json({
        message:"Director creado correctamente.",
        obj:obj
    })).catch(ex => res.status(500).json({
        message: "Director no se pudo crear.",
        ex:ex
    }));
}

function replace(req, res, next) {
    res.send(`respond with a replace director= ${req.params.id}`);
}

function update(req, res, next) {
    res.send(`respond with a update director = ${req.params.id}`);
}

function destroy(req, res, next) {
    res.send(`respond with a destory director= ${req.params.id}`);
}

module.exports = { 
    list,
    index,
    create,
    replace,
    update,
    destroy
};