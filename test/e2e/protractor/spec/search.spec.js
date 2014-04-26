'use strict';

describe('Search Spec |', function () {
	var searchPage = require('../page/search-page'),
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
	});
});