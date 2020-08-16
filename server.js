'use strict';

// Setup express server for API
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

// Configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route configuration
var rootRoutes = require('./api/routes/rootRoutes');
var healthRoutes = require('./api/routes/healthRoutes');
var metadataRoutes = require('./api/routes/metadataRoutes');
rootRoutes(app);
healthRoutes(app);
metadataRoutes(app);

// Instantiate server instance
var server = app.listen(port, function() {
    var port = server.address().port;
    console.log('RESTful API Server started on: ' + port);
});

// Export server for unit testing purposes
module.exports = server;