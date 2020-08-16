'use strict';

exports.check_health = function(request, response) {
    // Send a json response message - status: UP
    response.json({status: 'UP'});
}