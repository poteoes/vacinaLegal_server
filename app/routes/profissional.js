// app/routes/profissional.js

module.exports = function (app) {
    var controller = app.controllers.aplicador;

    app.route('/profissionais')
        .get(controller.listaAplicador)
        .post(controller.salvaAplicador);
    app.route('/profissional/:id')
        .get(controller.obtemAplicador)
        .delete(controller.removeAplicador);
}