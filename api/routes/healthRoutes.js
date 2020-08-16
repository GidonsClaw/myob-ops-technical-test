'use strict';

module.exports = function(app) {
    var healthObject = require('../controllers/healthController');

    // health Routes
    app.route('/health')
        .get(healthObject.check_health);
};