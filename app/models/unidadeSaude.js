// app/models/unidadeSaude.js

var mongoose = require('mongoose');

module.exports = function () {
    var schema = mongoose.Schema({
        cnpj: {
            type: Number,
            required: true,
            index: {
                unique: true
            }
        },
        name: {
            type: String,
            required: true
        },
        endereco: {
            type: String,
            require: true
        },
        email: {
            type: String,
            required: true
        },
        listFuncionario: {
            type : [mongoose.Schema.ObjectId],
            ref: 'Aplicador',
            index : {
                unique : true
            }, 
        }
    });
    
    return mongoose.model('UnidadeSaude', schema);
};