/*global describe, it*/
'use strict';
var superagent = require('supertest');
var app = require('../index.js');

function request() {
  return superagent(app.listen());
}

describe('Routes', function() {
  describe('GET /', function() {
    it('should return 200', function(done) {
      request()
        .get('/')
        .expect(200, done);
    });
  });
  describe('GET API/shows', function() {
    it('should return 200', function(done) {
      request()
        .get('/API/shows')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('GET /songs/poorlyspelledword', function() {
    it('should return 404', function(done) {
      request()
        .get('/API/notfound')
        .expect(404, done);
    });
  });
});