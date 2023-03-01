const express = require('express');

function list(req, res, next) {
    res.send('respond with a List list');
}

function index(req, res, next) {
    res.send(`respond with a index of a List= ${req.params.id}`);
}

function create(req, res, next) {
    let title = req.body.title;
    res.send(`respond with a create title List =${title}`);
}

function replace(req, res, next) {
    res.send(`respond with a replace List= ${req.params.id}`);
}

function update(req, res, next) {
    res.send(`respond with a update List = ${req.params.id}`);
}

function destroy(req, res, next) {
    res.send(`respond with a destory List= ${req.params.id}`);
}

module.exports = { 
    list,
    index,
    create,
    replace,
    update,
    destroy
};