// vacinalegal/server.js

var http = require('http');
var app = require('./config/express')();
require('./config/database.js')(process.env.MONGOLAB_URI ||
    'mongodb://test:t3st@ds025772.mlab.com:25772/vacinalegal_db');

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express Server escutando na porta ' + app.get('port'));
});