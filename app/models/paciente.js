// app/models/paciente

var mongoose = require('mongoose');

module.exports = function () {
    var schema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        cpf: {
            type: Number,
            index: {
                unique: true
            }
        },
        logradouro: {
            type: String,
            required: true
        },
        bairro: {
            type: String,
            required: true
        },
        numero: {
            type: String,
            required: true
        },
        cidade: {
            type: String,
            required: true
        },
        estado: {
            type: String,
            required: true
        },
        cep: {
            type: String,
            required: true
        },
        email: {
            type: Number,
            required: true,
            index: {
                unique: true
            }
        },
        dataNascimento: {
            type: Date,
            require: true
        },
        genero: {
            type: Boolean,
            required: true
        },
        vacinasTomadas: {
            type: [String]
        },
        responsavel: {
            type: mongoose.Schema.ObjectId,
            ref: 'Paciente'
        }
    });
    
    return mongoose.model('Paciente', schema);
};