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
  describe('GET API/shows/5', function() {
    it('should return 200', function(done) {
      request()
        .get('/API/shows')
        .expect('Content-Type', /json/)
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
  describe('GET API/venues/3', function() {
    it('should return 200', function(done) {
      request()
        .get('/API/shows')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

});