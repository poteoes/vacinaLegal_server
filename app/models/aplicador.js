// app/models/aplicador

var mongoose = require('mongoose');

module.exports = function () {
    var schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        crm: {
            type: String,
            required: true,
            index: {
                unique: true
            }
        },
        email: {
            type: String,
            required: true,
            index: {
                unique: true
            }
        },
        dataNascimento: {
            type: Date,
            required: true
        },
        endereco: {
            type: String,
            require: true
        }
    });
    
    return mongoose.model('Aplicador', schema);
};