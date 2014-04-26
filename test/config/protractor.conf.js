'use strict';

var SERVER_URL = 'http://localhost';

exports.config = {
	seleniumAddress: SERVER_URL + ':4444/wd/hub',

	seleniumArgs: [],
	verbose: true,
	specs: '../e2e/protractor/**/*.spec.js',

	capabilities: {
		browserName: process.env.KARMA_BROWSER || 'firefox'
	},

	rootElement: 'body',

	baseUrl: SERVER_URL + ':9000',

	jasmineNodeOpts: {
		// onComplete will be called just before the driver quits.
		onComplete: null,
		// If true, display spec names.
		isVerbose: true,
		// If true, print colors to the terminal.
		showColors: true,
		// If true, include stack traces in failures.
		includeStackTrace: true,
		// Default time to wait in ms before a test fails.
		defaultTimeoutInterval: 30000
	}
};