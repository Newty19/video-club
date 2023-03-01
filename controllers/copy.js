const express = require('express');

function list(req, res, next) {
    res.send('respond with a copy list');
}

function index(req, res, next) {
    res.send(`respond with a index of a copy= ${req.params.id}`);
}

function create(req, res, next) {
    let title = req.body.title;
    res.send(`respond with a create title copy =${title}`);
}

function replace(req, res, next) {
    res.send(`respond with a replace copy= ${req.params.id}`);
}

function update(req, res, next) {
    res.send(`respond with a update copy = ${req.params.id}`);
}

function destroy(req, res, next) {
    res.send(`respond with a destory copy= ${req.params.id}`);
}

module.exports = { 
    list,
    index,
    create,
    replace,
    update,
    destroy
};