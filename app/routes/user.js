// app/routes/user.js

module.exports = function (app) {

    app.route('/user', function (req, res) {
        var newUser;
        if(req.user) {
            newUser = req.user;
        }
        res.json(newUser);

    });

};