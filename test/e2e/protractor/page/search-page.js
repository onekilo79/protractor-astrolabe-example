'use strict';

var Page = require('astrolabe').Page;

module.exports = Page.create({
	url:	{ value: '/#/' },

	searchBox: { get: function () { return this.findElement(this.by.css('.searchBox')); } },

});