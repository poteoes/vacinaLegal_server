// config/express.js
var helmet = require('helmet');
var express = require('express');
var load = require('express-load');
var bodyParse = require('body-parser');
var cokieParser = require('cokie-parser');
var session = require('express-session');
var passport = require('passport');

module.exports = function () {
    var app = express();
    
    //environment variable
    app.set('port', (process.env.PORT || 3000));
    
    //middleware
    app.use(express.static('./public'));
    
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    
    app.use(bodyParse.urlencoded({extended: true}));
    app.use(bodyParse.json());
    app.use(require('method-override')());
    
    //OAuth2.0
    app.use(cokieParser());
    app.use(session(
        {
            secret: 'home avestrus',
            resave: true,
            saveUninitialized: true
        }
    ));
    app.use(passport.initialize());
    app.use(passport.session());
    
    app.use(helmet());
    
    app.use(helmet.xframe());
    app.use(helmet.xssFilter());
    app.use(helmet.nosniff());
    //app.desable('x-powered-by');
    
    load('models', {cwd: 'app'})
        .then('controllers')
        .then('routes')
        .into(app); 
        
    app.get('*', function (req, res) {
        res.status(404).render('404');        
    })
    
    return app;
};