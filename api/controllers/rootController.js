'use strict';

exports.say_hello = function(request, response) {
    // Send a plain text response message - Hello World
    response.send('Hello World');
}