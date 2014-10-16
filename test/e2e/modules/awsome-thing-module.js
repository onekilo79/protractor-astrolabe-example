'use strict';

var Module = require('astrolabe').Module;

var awsomeThing = Module.extend({
	name: { get: function()  { return this.findElement(this.by.css('.name')); }},
	type: { get: function () { return this.findElement(this.by.css('.type')) } }
});

module.exports = function (context) {
		return new awsomeThing(context);
};