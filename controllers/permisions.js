const express = require('express');
const Permision = require('../models/permision');
function list(req, res, next) {
    Permision.find().then(objs => res.status(200).json({
        message: "Lista de generos",
        obj: objs
    })).catch(ex => res.status(500).json({
        message: "No se pudo consultar la informacion",
        obj: ex
    }));
}

function index(req, res, next) {
    const id = req.params.id;
    Permision.findOne({"_id":id}).then(obj => res.status(200).json({
        message: `Permision con id ${id}`, // Interpolacion
        obj: obj
    })).catch(ex => res.status(500).json({
        message: "No se pudo consultar la informacion",
        obj:ex
    }));
}

function create(req, res, next) {
    let type = req.body.type;
    let description = req.body.description;

    let permision = new Permision({
        type:type,
        description:description
    });

    permision.save().then(obj => res.status(200).json({
        message:"Permision creado correctamente.",
        obj:obj
    })).catch(ex => res.status(500).json({
        message: "Permision no se pudo crear.",
        ex:ex
    }));
}

function replace(req, res, next) {
    const id = req.params.id;
    let type = req.body.type ? req.body.type : "";
    let description = req.body.description ? req.body.description : "";

    let Permision = new Object({
        _type:type,
        _description: description
    });
    //Permision.findOneAndUpdate({},director,{}).then().catch();
    Permision.findOneAndUpdate({"_id":id},Permision,{new : true})
            .then(obj => res.status(200).json({
                message: "Permision actualizado correctamente",
                obj: obj
            })).catch(ex => res.status(500).json({
                message: "No se pudo actualizar la informacion",
                obj:ex
            }));
}

function update(req, res, next) {
    const id = req.params.id;
    let type = req.body.type;
    let description = req.body.description;

    let Permision = new Object(); // Para poder llenar los atributos y hacer los cambios

    if(description){
        Permision._name = description;
    }

    Permision.findOneAndUpdate({"_id":id},Permision)
            .then(obj => res.status(200).json({
                message:"Permision actualizado correctamente.",
                obj:obj
            })).catch(ex => res.status(500).json({
                message: "No se pudo actualizar la Permision",
                obj:ex
            }));
}

function destroy(req, res, next) {
    const id = req.params.id;
    Permision.findByIdAndRemove({"_id":id})
            .then(obj => res.status(200).json({
                message: "Permision eliminado correctamente",
                obj:obj
            })).catch(ex => res.status(500).json({
                message: "No se pudo eliminar la Permision",
                obj:ex
            }));
}

module.exports = { 
    list,
    index,
    create,
    replace,
    update,
    destroy
};