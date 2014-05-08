'use strict';

angular.module('protractorAstrolabeExampleApp')
	.controller('MainCtrl', function ($scope) {
		$scope.awesomeThings =
			{ things: [
			{name: 'HTML5 Boilerplate', type: 'library'},
			{name: 'AngularJS', type: 'library'},
			{name: 'Karma', type: 'testing library'}
			]}
		;
	});
