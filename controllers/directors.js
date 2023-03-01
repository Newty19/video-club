const express = require('express');

function list(req, res, next) {
    res.send('respond with a director list');
}

function index(req, res, next) {
    res.send(`respond with a index of a director= ${req.params.id}`);
}

function create(req, res, next) {
    let title = req.body.title;
    res.send(`respond with a create title director =${title}`);
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