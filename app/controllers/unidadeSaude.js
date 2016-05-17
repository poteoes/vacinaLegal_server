// app/controllers/unidadeSaude.js

var sanitize = require('mongo-sanitize');

module.exports = function (app) {

    var controller = {};

    var UnidadeSaude = app.models.unidadeSaude;

    controller.listaUnidadeSaude = function(req, res) {
        var promise = UnidadeSaude.find().exec()
        .then(
            function (unidadeSaudes) {
                res.json(unidadeSaudes);
            },
            function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.obtemUnidadeSaude = function(req, res) {
        var _id = req.params.id;
        UnidadeSaude.findById(_id).exec()
        .then(
            function (unidadeSaude) {
                if(!unidadeSaude) throw new Error("Unidade de Saúde não encontrada");
                res.json(unidadeSaude);
            },
            function (erro) {
                console.log(erro);
                res.status(404).json(erro);
            }
        );
    };

    controller.removeUnidadeSaude = function(req, res) {
        var _id = sanitize(req.params.id);
        UnidadeSaude.remove({"_id" : _id}).exec()
        .then(
            function () {
                res.status(204).end();
            },
            function (erro) {
                return console.error(erro);
            }
        );

    };

    controller.salvaUnidadeSaude = function(req, res) {
        var _id = req.body._id;
        var dados = {
          "cnpj" :  req.body.cnpj,
          "name" : req.body.name
        };
        if(_id) {
            UnidadeSaude.findByIdAndUpdate(_id, dados).exec()
            .then(
                function (unidadeSaude) {
                    res.json(unidadeSaude);
                },
                function (erro) {
                    console.error(erro);
                    res.status(500).json(erro);
                }
            );
        } else {
            UnidadeSaude.create(dados)
            .then(
                function (unidadeSaude) {
                    res.status(201).json(unidadeSaude);
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