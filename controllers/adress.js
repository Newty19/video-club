const express = require('express');

function list(req, res, next) {
    res.send('respond with a adress list');
}

function index(req, res, next) {
    res.send(`respond with a index of a adress= ${req.params.id}`);
}

function create(req, res, next) {
    let title = req.body.title;
    res.send(`respond with a create title adress =${title}`);
}

function replace(req, res, next) {
    res.send(`respond with a replace adress= ${req.params.id}`);
}

function update(req, res, next) {
    res.send(`respond with a update adress = ${req.params.id}`);
}

function destroy(req, res, next) {
    res.send(`respond with a destory adress= ${req.params.id}`);
}

module.exports = { 
    list,
    index,
    create,
    replace,
    update,
    destroy
};