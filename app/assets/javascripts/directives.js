'use strict';

/* Directives */

angular.module('chaocoolate.directives', []).directive('navigateTo', ['$location', function($location) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			$(element).on('click', function() {
				$location.path(attrs.navigateTo);
				scope.$apply();
			});
		}
	};
}]).directive('turnOptions', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			//TODO: replace eval
			var options = eval('({' + attrs.turnOptions + '})');
			$(element).turn(options);
		}
	};
});