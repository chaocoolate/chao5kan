angular.module('app.control', []).
 directive('selector', function($timeout) {
    return {
      scope: {
        placeholder: '='
      },
      controller: function($scope) {
        init = function(index, element) {
          update(element);
          $(element).on('click', select);
        }
        select = function(evt) {
          $(this).siblings().removeClass('selected');
          $(this).addClass('selected');
          $scope.placeholder = $(this).data('value');
          // NOTE: Angular Bug
          //   Without $timeout, watch function may wait to fire & not trigger immediately causing data-binding update problem
          $timeout($scope.$apply());
        }
        update = function(element) {
          var $element = $(element);
          var value = $element.data('value');
          $element.addClass(value.replace('.',' '));
          if(value == $scope.placeholder) {
            $element.addClass('selected');
          }
        }
      },
      link: function(scope, element, attrs) {
        if(attrs.selected) {
          scope.placeholder = attrs.selected; 
        }
        $(element).children().each(init);
      }
    }
 })
