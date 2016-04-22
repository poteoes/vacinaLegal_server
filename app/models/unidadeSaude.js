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
        }
    });
    
    return mongoose.model('UnidadeSaude', schema);
};