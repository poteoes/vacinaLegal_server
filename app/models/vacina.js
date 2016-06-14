// app/models/vacina

var mongoose = require('mongoose');

module.exports = function () {
    var schema = mongoose.Schema({
        codvaciana: {
            type: String,
            required: true
        },
        nameDroga: {
            type: String,
            required: true
        },
        nameFabricante: {
            type: String
        },
        lote: {
            type: Number,
            required: true
        },
        vencimento: {
            type: Date,
            require: true
        },
        
    });
    
    return mongoose.model('Vacina', schema);
};