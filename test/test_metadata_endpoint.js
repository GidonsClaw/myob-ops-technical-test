var chai = require('chai'),
    request = require('supertest'),
    assert = require('assert'),
    should = require('should'),
    fs = require('fs');
const gitFS = require('../api/lib/filesystem_git');

// Retrieve comparason data from file system
var currentGitCommitHash = gitFS.getCurrentGitBranchHash()

describe('GET /metadata', function() {
    var app;
    beforeEach(function() {
        app = require('../server')
    });
    afterEach(function() {
        app.close();
    });
    it('responds with status 200', function(done) {
        request(app)
            .get('/metadata')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                done();
            });
    });
    it('responds with JSON', function(done) {
        request(app)
            .get('/metadata')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if (err) return done(err);
                done();
            });
    });
    it('responds with JSON object where object is the package name: ' + process.env.npm_package_name, function(done) {
        request(app)
            .get('/metadata')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                res.body[process.env.npm_package_name].should.exist;
                done();
            });
    });
    it('responds with JSON object where object has version of package version: ' + process.env.npm_package_version, function(done) {
        request(app)
            .get('/metadata')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                res.body[process.env.npm_package_name][0].version.should.equal(process.env.npm_package_version);
                done();
            });
    });
    it('responds with JSON object where object has description of package description: ' + process.env.npm_package_description, function(done) {
        request(app)
            .get('/metadata')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                res.body[process.env.npm_package_name][0].description.should.equal(process.env.npm_package_description);
                done();
            });
    });
    it('responds with JSON object where object has lastcommitsha of git current branch head sha: ' + currentGitCommitHash, function(done) {
        request(app)
            .get('/metadata')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                res.body[process.env.npm_package_name][0].lastcommitsha.should.equal(currentGitCommitHash);
                done();
            });
    });
});