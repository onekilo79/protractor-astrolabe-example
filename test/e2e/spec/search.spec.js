/*global protractor*/
'use strict';

describe('Search Spec |', function () {
	var searchPage = require('../page/search.page'),
		ptor;

	beforeEach( function (){
		ptor = protractor.getInstance();
	});

	describe('', function(){

		beforeEach( function() {
			searchPage.go();
		});

		it('should start as an empty search box ', function() {
			expect(searchPage.searchBox.getAttribute('value')).toEqual('');
		});

		it('should be able to type "blue" into the search criteria into the search box', function(){
			searchPage.searchBox.sendKeys('blue');
			expect(searchPage.searchBox.getAttribute('value')).toEqual('blue');
		});

		it('can find repeating elements on page', function(){

			//awsomeThings are done via a findElements call which is async so you need to do a flush to interact with the values
			searchPage.awsomeThings.then( function ( rows ){
				expect( rows.length ).toEqual( 3 );
			});

			//index 1 is the first entry
			//look for the name of the first element
			searchPage.awsomeThing( 1 ).name.getText().then( function ( textValue ) {
				 return expect( textValue ).toEqual( 'HTML5 Boilerplate' );
			});

		});
	});
});