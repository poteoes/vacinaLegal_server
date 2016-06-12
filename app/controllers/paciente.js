// app/controllers/paciente.js

var sanitize = require('mongo-sanitize');

module.exports = function (app) {

    var controller = {};

    var paciente = app.models.paciente;

    controller.listapaciente = function(req, res) {
        Paciente.find().exec()
        .then(
            function (pacientees) {
                res.json(pacientees);
            },
            function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.obtendoResposavel = function(req, res) {
        var _cpf = req.params.cpf;
        Paciente.find()
        .where("cpf").equals(_cpf)
        .exec()
        .then(
            function (paciente) {
                res.json(paciente);
            },
            function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.obtempaciente = function(req, res) {
        var _id = req.params.id;
        Paciente.findById(_id).exec()
        .then(
            function (paciente) {
                if(!paciente) throw new Error("paciente não encontrado");
                res.json(paciente);
            },
            function (erro) {
                console.log(erro);
                res.status(404).json(erro);
            }
        );
    };

    controller.removePaciente = function(req, res) {
        var _id = sanitize(req.params.id);
        Paciente.remove({"_id" : _id}).exec()
        .then(
            function () {
                res.status(204).end();
            },
            function (erro) {
                return console.error(erro);
            }
        );

    };

    controller.salvaPaciente = function(req, res) {
        var _id = req.body._id;
        if(_id) {
            Paciente.findByIdAndUpdate(_id, req.body).exec()
            .then(
                function (paciente) {
                    res.json(paciente);
                },
                function (erro) {
                    console.error(erro);
                    res.status(500).json(erro);
                }
            );
        } else {
            Paciente.create(req.body)
            .then(
                function (paciente) {
                    res.status(201).json(paciente);
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