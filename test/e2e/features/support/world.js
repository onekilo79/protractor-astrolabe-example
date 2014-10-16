/*global protractor,assert*/
'use strict';

var assert = require('assert');

module.exports = function() {

  this.World = function World(callback) {
    this.ptor = protractor.getInstance();
    this.assert = assert;

    callback(); // tell Cucumber we're finished and to use 'this' as the world instance
  };
};