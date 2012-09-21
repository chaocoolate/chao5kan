app.control.directive('selector', function() {
  var ui = {
    init: function(selector, changSelectValue) {
      selector.children().each(function() {
        var $item = $(this);
        $item.addClass($item.data('value'));
        $item.on('click', function() {
          changSelectValue($(this).data('value'));
        });
      });
    },
    select: function(selector) {
      return function(value) {
        selector.children('.selected').removeClass('selected');
        selector.children('[data-value="' + value + '"]').addClass('selected');
      }
    }
  }
  return {
    scope: {
      placeholder: '='
    },
    controller: function($scope) {
      $scope.select = function(value) {
        $scope.placeholder = value;
        $scope.$apply();
      }
    },
    link: function(scope, element, attrs) {
      var selectValue = attrs.selected;
      if (selectValue) {
        scope.placeholder = selectValue;
      }
      ui.init(element, scope.select);
      scope.$watch('placeholder', ui.select(element));
    }
  }
})