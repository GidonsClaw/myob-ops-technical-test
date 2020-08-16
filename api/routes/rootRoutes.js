'use strict';

module.exports = function(app) {
    var rootObject = require('../controllers/rootController');

    // root Routes
    app.route('/')
        .get(rootObject.say_hello);
};