'use strict';

// Declare app level module which depends on filters, and services
angular.module('chao5kan', ['chao5kan.filters', 'chao5kan.services', 'chao5kan.directives'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl: 'partials/home.html',
		controller: HomeController
	});
	$routeProvider.when('/magazine.view', {
		templateUrl: 'partials/magazine.view.html',
		controller: MagazineViewController
	});
	$routeProvider.otherwise({
		redirectTo: '/home'
	});
}])
.run(['$rootScope', function($rootScope) {
	$rootScope.$on("$routeChangeSuccess", function() {
		$('body').hide();
		$('body').fadeIn(1000);
	});
}]);