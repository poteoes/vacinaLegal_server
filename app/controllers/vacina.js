// app/controllers/ vacina.js

module.exports = function (app) {

    var controller = {};

    var Vacina = app.models.vacina;

    controller.listaVacina = function(req, res) {
        var promise = Vacina.find().exec()
        .then(
            function (vacinas) {
                res.json(vacinas);
            },
            function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.obtemVacina = function(req, res) {
        var _id = req.params.id;
        Vacina.findById(_id).exec()
        .then(
            function (vacina) {
                if(!vacina) throw new Error("Vacina não encontrado");
                res.json(vacina);
            },
            function (erro) {
                console.log(erro);
                res.status(404).json(erro);
            }
        );
    };

    controller.removeVacina = function(req, res) {
        var _id = req.params.id;
        Vacina.remove({"_id" : _id}).exec()
        .then(
            function () {
                res.status(204).end();
            },
            function (erro) {
                return console.error(erro);
            }
        );

    };

    controller.salvaVacina = function(req, res) {
        var _id = req.body._id;
        if(_id) {
            Vacina.findByIdAndUpdate(_id, req.body).exec()
            .then(
                function (vacina) {
                    res.json(vacina);
                },
                function (erro) {
                    console.error(erro);
                    res.status(500).json(erro);
                }
            );
        } else {
            Vacina.create(req.body)
            .then(
                function (vacina) {
                    res.status(201).json(vacina);
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