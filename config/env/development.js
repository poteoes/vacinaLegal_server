// app/config/env/development.js
module.exports = {
    env: 'development',
    db: 'mongodb://test:t3st@ds025772.mlab.com:25772/vacinalegal_db',
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    facebookClient: process.env.FACEBOOK_CLIENT,
    facebookClientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    seleniumUser: process.env.SELENIUM_USER,
    seleniumUserPassword: process.env.SELENIUM_USER_PASSWORD
}