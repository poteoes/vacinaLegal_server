// config/database.js

var mongoose = require('mongoose');

module.exports = function(uri){
    
    mongoose.connect(uri);
    
    mongoose.connection.on('connected', function() {
        console.log('Mongose! Conectado em ' + uri);
    });
    
    mongoose.connect.on('disconnected', function() {
        console.log('Mongose! Desconectado de ' + uri);
    });
    
    mongoose.connect.on('error', function (erro) {
        console.log('Mongose! Erro na conexão: ' + erro);
    });
    
    // close connect
    
    process.on('SIGINT', function () {
        mongoose.connect.close(function () {
            console.log('Mongose! Desconectado pelo termino da aplicação');
            
            process.exit(0);
        });
    });
};