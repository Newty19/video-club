const express = require('express');

function list(req, res, next) {
    res.send('respond with a movie list');
}

function index(req, res, next) {
    res.send(`respond with a index of a movie= ${req.params.id}`);
}

function create(req, res, next) {
    let title = req.body.title;
    res.send(`respond with a create title movie =${title}`);
}

function replace(req, res, next) {
    res.send(`respond with a replace movie= ${req.params.id}`);
}

function update(req, res, next) {
    res.send(`respond with a update movie = ${req.params.id}`);
}

function destroy(req, res, next) {
    res.send(`respond with a destory movie= ${req.params.id}`);
}

module.exports = { 
    list,
    index,
    create,
    replace,
    update,
    destroy
};