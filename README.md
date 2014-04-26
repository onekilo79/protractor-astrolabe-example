protractor-astrolabe-example
============================

This is a tiny example showing end to end browser based testing for a node project. 

We use protractor for our test library

This is a very simple example project showing the setup of the page object pattern for writing end to end tests utilising protractor in jasmine tests.  


#Projects used in this example

##Testing

[Jasmine](http://jasmine.github.io/) test libary that the test is written in.

[Protractor](https://github.com/juliemr/protractor) End to end tests using selenium.

[Astrolabe](https://github.com/stuplum/astrolabe) Page object pattern style protractor test.

[Grunt-Protractor-runner](https://github.com/teerapap/grunt-protractor-runner) grunt runner for protractor.

##Running

[Grunt-cli](https://github.com/gruntjs/grunt-cli) run grunt build files from the command line.

[Bower](https://github.com/bower/bower) package manager for the front end package management.

##Creating base project

[Yeoman](http://yeoman.io) node project skeleton generator

[Angular-generator](https://github.com/yeoman/generator-angular) used to generate the angular project skeleton via yeoman.

[Angularjs](http://angularjs.org) example node project that we generate via yeoman.


#Assumed installs on command line
1. node and npm installed on the command line.
1. Java 6 or above on the command line as it is needed to run the selenium stand-alone.
1. npm global installs
	1. grunt-cli
	1. bower 
1. Firefox installed

#How to run project
You will need to start 3 different terminal windows all started from the same project folder where the source was cloned to run this.

1. one window for the webdriver/selenium stand-alone process.
1. second window to have a running project serving up your webpages.
1. third window from you to run the protractor browser based tests

#Install project dependencies
Create a terminal window and navigate to the project source.

##Install protractor

###NPM install
install -g protractor

###Get chromedriver if you want to use chrome for tests
webdriver-manager update



#Setup environment, and run the tests

##1. Start selenium stand-alone on command line
webdriver-manager start

###Purpose
The selenium stand-alone can take 10 seconds to start so you do not want that penaltiy every time you run your tests.  

Best to have the stand-alone running, and then after you make changes to a test, then run the tests and if they fail, they fail really fast.

###How we use the selenium stand-alone
The protractor.conf.js in test/config/protractor.conf.js has a string that becomes

seleniumAddress: 'http://localhost::4444/wd/hub',

This is the default address for the selenium stand-alone that you just started above.

 
##2. Install project 
Create the second terminal window and run the following.

###Install all the project depenednecies then run the project.

1. npm install
1. bower install


##Start the project
grunt serve

This will now open a browser window showing you a single input box running on the yeoman default port 

http:localhost:9000/#/


##3. Run the protractor tests
Create the third terminal window and run the following.

grunt protractor:e2e

You will see it pop up a selenium firefox browser and run the test.  After the test is finished it will close the browser window.

There will be information printed on the command line of the tests being run and assertions.


#Note on using Chrome for tests
If you change to using chrome in the protractor.conf.js

capabiliites { 'chrome' }

The browser window will open behind the terminal window.  

