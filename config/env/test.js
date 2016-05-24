// app/config/test.js

module.exports = {
    env: 'test',
    db: 'mongodb://test:t3st@ds011903.mlab.com:11903/vacinalegal_teste',
    sauceTestName: 'Vacina Legal E2E Testing',
    sauceUser: process.env.SAUCE_USERNAME,
    sauceKey: process.env.SAUCE_ACCESS_KEY,
    travisJobNumber: process.env.TRAVIS_JOB_NUMBER,
    travisBuild: process.env.TRAVIS_BUILD_NUMBER,
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    facebookClient: process.env.FACEBOOK_CLIENT,
    facebookClientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    seleniumUser: process.env.SELENIUM_USER,
    seleniumUserPassword: process.env.SELENIUM_USER_PASSWORD
};
