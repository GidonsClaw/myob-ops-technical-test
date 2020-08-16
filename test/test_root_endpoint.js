var chai = require('chai'),
    request = require('supertest');

describe('GET /', function() {
    var app;
    beforeEach(function() {
        app = require('../server')
    });
    afterEach(function() {
        app.close();
    });
    it('responds with status 200', function(done) {
        request(app)
            .get('/')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                done();
            });
    });
    it('responds with text', function(done) {
        request(app)
            .get('/')
            .expect('Content-Type', /text/)
            .end(function(err, res) {
                if (err) return done(err);
                done();
            });
    });
    it('responds with body Hello World', function(done) {
        request(app)
            .get('/')
            .expect(200, 'Hello World')
            .end(function(err, res) {
                if (err) return done(err);
                done();
            });
    });
});