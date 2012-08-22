'use strict';

/* Directives */

angular.module('chao5kan.directives', [])
.directive('navigateTo', ['$location', function($location) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			$(element).on('click', function() {
				$('body').fadeOut(1000, function() {
					$location.path(attrs.navigateTo);
					scope.$apply();
				});
			});
		}
	};
}])
.directive('turnOptions', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			//TODO: replace eval
			var options = scope.$eval('({' + attrs.turnOptions + '})');
			//TODO: replace setInterval
			var $element = $(element)
			var init = setInterval(function() {
				if ($element.is(':visible')) {
					$element.turn(options);
					clearInterval(init);
				}
			}, 1);
		}
	}
});