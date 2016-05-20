// app/models/usuario.js
var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');
module.exports = function () {
    var schema = mongoose.Schema({
        googleId: {
            type: String,
            required : true,
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
        inclusao: {
            type: Date,
            default: Date.now
        }
    });
    schema.plugin(findOrCreate);
    return mongoose.model('Usuario', schema);
};   