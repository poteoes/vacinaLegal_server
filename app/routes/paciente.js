// app/routes/paciente.js

module.exports = function (app) {
    var controller = app.controllers.paciente;

    app.route('/paciente/:id')
        .get(controller.obtempaciente);
    app.route('/pacientes')
        .get(controller.listapaciente)
        .post(controller.salvaPaciente);
    app.route('/pacientes/:cpf')
        .get(controller.obtendoResposavel);
}