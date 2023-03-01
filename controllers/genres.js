const express = require('express');

function list(req, res, next) {
    res.send('respond with a genre list');
}

function index(req, res, next) {
    res.send(`respond with a index of a genre= ${req.params.id}`);
}

function create(req, res, next) {
    let title = req.body.title;
    res.send(`respond with a create title genre =${title}`);
}

function replace(req, res, next) {
    res.send(`respond with a replace genre= ${req.params.id}`);
}

function update(req, res, next) {
    res.send(`respond with a update genre = ${req.params.id}`);
}

function destroy(req, res, next) {
    res.send(`respond with a destory genre= ${req.params.id}`);
}

module.exports = { 
    list,
    index,
    create,
    replace,
    update,
    destroy
};