// app/models/usuario.js
var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');
module.exports = function () {
    var schema = mongoose.Schema({
        googleId: {
            type: String,
            required : false,
            index : {
                unique : true
            }
        },
        fbId: {
            type: String,
            required : false,
            index : {
                unique : true
            }
        },
        email: {
            type : String,
            required : true,
            index : {
                unique : true
            }
        },
        nivelErarquia: {
            type: Number,
            required: false
        },
        inclusao: {
            type: Date,
            default: Date.now
        }
    });
    schema.plugin(findOrCreate);
    return mongoose.model('Usuario', schema);
};   