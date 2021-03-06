// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html
var PROJECT_ROOT = '../../';

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      PROJECT_ROOT + 'app/bower_components/angular/angular.js',
      PROJECT_ROOT + 'app/bower_components/angular-mocks/angular-mocks.js',
      PROJECT_ROOT + 'app/bower_components/angular-resource/angular-resource.js',
      PROJECT_ROOT + 'app/bower_components/angular-cookies/angular-cookies.js',
      PROJECT_ROOT + 'app/bower_components/angular-sanitize/angular-sanitize.js',
      PROJECT_ROOT + 'app/bower_components/angular-route/angular-route.js',
      PROJECT_ROOT + 'app/scripts/*.js',
      PROJECT_ROOT + 'app/scripts/**/*.js',
      PROJECT_ROOT + 'test/spec/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Firefox'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
