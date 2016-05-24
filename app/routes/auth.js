// app/routes/auth.js

var passport = require('passport');

module.exports = function (app) {
    
    app.get('/auth/google', passport.authenticate('google', { scope:
        [ 'https://www.googleapis.com/auth/plus.login',
          'https://www.googleapis.com/auth/plus.profile.emails.read']}
    ));
    
    app.get('google/calbackauth2', passport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/auth/google'
    }));
    
    app.get('auth/facebook',
       passport.authenticate('facebook'));
       
    app.get('/facebook/oauth/calback',
        passport.authenticate('facebook', { failureRedirect: '/login'}),
        function (req, res) {
            res.redirect('/');
        });
};