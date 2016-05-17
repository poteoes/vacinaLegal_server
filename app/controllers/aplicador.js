// app/controllers/aplicador.js

var sanitize = require('mongo-sanitize');

module.exports = function (app) {

    var controller = {};

    var Aplicador = app.models.aplicador;

    controller.listaAplicador = function(req, res) {
        var promise = Aplicador.find().exec()
        .then(
            function (aplicadores) {
                res.json(aplicadores);
            },
            function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.obtemAplicador = function(req, res) {
        var _id = req.params.id;
        Aplicador.findById(_id).exec()
        .then(
            function (aplicador) {
                if(!aplicador) throw new Error("Aplicador não encontrado");
                res.json(aplicador);
            },
            function (erro) {
                console.log(erro);
                res.status(404).json(erro);
            }
        );
    };

    controller.removeAplicador = function(req, res) {
        var _id = sanitize(req.params.id);
        Aplicador.remove({"_id" : _id}).exec()
        .then(
            function () {
                res.status(204).end();
            },
            function (erro) {
                return console.error(erro);
            }
        );

    };

    controller.salvaAplicador = function(req, res) {
        var _id = req.body._id;
        if(_id) {
            Aplicador.findByIdAndUpdate(_id, req.body).exec()
            .then(
                function (aplicador) {
                    res.json(aplicador);
                },
                function (erro) {
                    console.error(erro);
                    res.status(500).json(erro);
                }
            );
        } else {
            Aplicador.create(req.body)
            .then(
                function (aplicador) {
                    res.status(201).json(aplicador);
                },
                function (erro) {
                    console.log(erro);
                    res.status(500).json(erro);
                }
            );
        }
    };

    return controller;
};