// app/routes/vacina.js

module.exports = function (app) {
    var controller = app.controllers.vacina;

    app.route('/vacinas')
        .post(controller.salvaVacina);
    app.route('/vacina/:lot')
        .get(controller.obtemVacina)
        .delete(controller.removeVacina);
}