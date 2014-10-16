'use strict';

var assert = require( 'assert' );

var searchPage = require( '../../page/search.page' );

var searchSteps = function() {

	this.When(/^I go to the home page$/, function (callback) {
	  searchPage.go();
	  callback();
	});

	this.Then(/^it will have an empty search box$/, function ( callback ) {
		searchPage.searchBox.getAttribute( 'value' ).then( function( textValue ){
			return assert.equal(textValue, '');
		});
		callback();
	});

	this.Then(/^I type "([^"]*)" into the search box$/, function ( arg1, callback ) {
	  searchPage.searchBox.sendKeys( arg1 );
	  searchPage.searchBox.getAttribute( 'value' ).then( function( textValue ){
			return assert.equal(textValue, arg1 );
		});
	  callback();
	});

	this.Then(/^I can see repeated elements on the page$/, function (callback) {
	  //awsomeThings are done via a findElements call which is async so you need to do a flush to interact with the values
		searchPage.awsomeThings.then( function ( rows ){
			assert.equal( rows.length , 3 );
		});

		// index 1 is the first entry
		// look for the name of the first element
		searchPage.awsomeThing( 1 ).name.getText().then( function ( textValue ) {
			return assert.equal( textValue , 'HTML5 Boilerplate' );
		});

		callback();
	});

};

module.exports = searchSteps;