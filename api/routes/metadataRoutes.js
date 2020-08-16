'use strict';

module.exports = function(app) {
    var metadataObject = require('../controllers/metadataController');

    // metadata Routes
    app.route('/metadata')
        .get(metadataObject.show_app_metadata);
};