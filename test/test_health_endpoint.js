var chai = require('chai'),
    request = require('supertest'),
    assert = require('assert'),
    should = require('should');

describe('GET /health', function() {
    var app;
    beforeEach(function() {
        app = require('../server')
    });
    afterEach(function() {
        app.close();
    });
    it('responds with status 200', function(done) {
        request(app)
            .get('/health')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                done();
            });
    });
    it('responds with JSON', function(done) {
        request(app)
            .get('/health')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if (err) return done(err);
                done();
            });
    });
    it('responds with JSON status value UP', function(done) {
        request(app)
            .get('/health')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                res.body.status.should.equal('UP');
                done();
            });
    });
});