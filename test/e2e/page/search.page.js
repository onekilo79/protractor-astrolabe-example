'use strict';
var awsomeThing = require('../modules/awsome-thing-module');

var Page = require('astrolabe').Page;

module.exports = Page.create({
	url:	{ value: '/#/' },

	searchBox: { get: function () { return this.findElement( this.by.css('.searchBox') ); } },

	awsomeThings: { get: function() { return this.findElements( this.by.css('.thing.ng-scope') ); } },
	awsomeThing: { value: function(index) { return awsomeThing( this.findElement( this.by.css('.thing.ng-scope:nth-child('+index+')' ))); } }
});