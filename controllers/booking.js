const express = require('express');

function list(req, res, next) {
    res.send('respond with a booking list');
}

function index(req, res, next) {
    res.send(`respond with a index of a booking= ${req.params.id}`);
}

function create(req, res, next) {
    let title = req.body.title;
    res.send(`respond with a create title booking =${title}`);
}

function replace(req, res, next) {
    res.send(`respond with a replace booking= ${req.params.id}`);
}

function update(req, res, next) {
    res.send(`respond with a update booking = ${req.params.id}`);
}

function destroy(req, res, next) {
    res.send(`respond with a destory booking= ${req.params.id}`);
}

module.exports = { 
    list,
    index,
    create,
    replace,
    update,
    destroy
};