// config/passport.js
var passport = require('passport');
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
var mongoose = require('mongoose');
var FacebookStrategy = require('passport-facebook').Strategy;

module.exports = function () {
    
    var User = mongoose.model('Usuario');
    
    passport.use(new GoogleStrategy({
        clientID: '852766170394-15eheirs43q1rqmd3rvu1imcejs64n2l.apps.googleusercontent.com',
        clientSecret: 'PyHQUMlFf3X0m9ONtg_EWsXS',
        callbackURL: 'http://localhost:3000/google/calbackauth2' || 
            'https://vacinalegal.herokuapp.com/google/calbackauth2',
        passReqToCallback : true
    },
    function (request, acessToken, refreshToken, profile, done) {
        User.findOrCreate({googleId: profile.id, email: profile.email}, function (err, user) {
            if (err) {
                console.log(err);
                return done(err);
            }
            return done(err, user);
        });
    }));
    
    passport.use(new FacebookStrategy({
        clientID: '128217050926502',
        clientSecret: '0ecf466b80f472dd9e3335ee7cb08398',
        callbackURL: 'http://localhost:3000/facebook/oauth/calback' || 
            'https://vacinalegal.herokuapp.com/facebook/oauth/calback',
        enableProof: true
    },
    function(acessToken, refreshToken, profile, done){
        User.findOrCreate({facebookId: profile.id}, function(err, user){
            return done(err, user);
        });
    }));
    
    passport.serializeUser(function (usuario, done) {
        done(null, usuario._id);
    });
    
    passport.deserializeUser(function(id, done){
        User.findById(id).exec()
        .then(function(usuario){
            done(null, usuario);
        });
    });
};