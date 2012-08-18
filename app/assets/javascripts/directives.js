'use strict';

/* Directives */


angular.module('chaocoolate.directives', []).
directive('appVersion', ['version', function(version) {
	return function(scope, elm, attrs) {
		elm.text(version);
	};
}]);