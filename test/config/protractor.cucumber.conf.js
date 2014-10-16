'use strict';

var SERVER_URL = 'http://localhost';

exports.config = {
	framework: 'cucumber',

	seleniumArgs: [],
	seleniumAddress: SERVER_URL + ':4444/wd/hub',

	baseUrl: SERVER_URL + ':9000',

	verbose: true,
	specs: ['../e2e/features/*.feature'],

	capabilities: { // chrome, firefox
		browserName: 'firefox'
	},

	rootElement: 'body',

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