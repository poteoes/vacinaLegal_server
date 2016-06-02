// app/config/protractor.js

var config = require('config');

exports.config = {
    sauceUser : config.sauceUser,
    saucekey : config.saucekey,
    capabilities : {
        'name' : config.sauceTestName,
        'browserName': 'chrome',
        'tunnel-identifier': config.travisJobNumber,
        'build': config.travisBuild
    },
    specs: ['../test/e2e/**/*.js']
};