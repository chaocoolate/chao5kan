'use strict';

/* Directives */

angular.module('chaocoolate.directives', [])
.directive('navigateTo', ['$location', function($location) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			$(element).on('click', function() {
				$location.path(attrs.navigateTo);
				scope.$apply();
			});
		}
	};
}]);