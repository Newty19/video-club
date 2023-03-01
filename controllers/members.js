const express = require('express');

function list(req, res, next) {
    res.send('respond with a member list');
}

function index(req, res, next) {
    res.send(`respond with a index of a member= ${req.params.id}`);
}

function create(req, res, next) {
    let title = req.body.title;
    res.send(`respond with a create title member =${title}`);
}

function replace(req, res, next) {
    res.send(`respond with a replace member= ${req.params.id}`);
}

function update(req, res, next) {
    res.send(`respond with a update member = ${req.params.id}`);
}

function destroy(req, res, next) {
    res.send(`respond with a destory member= ${req.params.id}`);
}

module.exports = { 
    list,
    index,
    create,
    replace,
    update,
    destroy
};