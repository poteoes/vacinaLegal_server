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
        endereco: {
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