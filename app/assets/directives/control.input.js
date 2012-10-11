app.control.directive('default', function() {
  var ui = {
    init: function(input) {
      $input = $(input);
      $label = $('<label>' + $input.attr('default') + '</label>')
      $input.css({
        position: 'absolute',
        zIndex: 10
      });
      $input.outerWidth($input.parent().outerWidth());
      $input.parent().outerHeight($input.outerHeight());
      $label.innerHeight($input.innerHeight());
      $label.css('padding-top', $input.css('padding-top'));
      $label.css('padding-left', $input.css('padding-left'));
      $label.css('font-size', $input.css('font-size'));
      $label.css('font-weight', $input.css('font-weight'));
      $input.after($label);
      return { input: $input, label: $label };
    },
    isVisible: function(element) {
      return function(value) {
        element.css('opacity', value ? 0 : 0.5);
      }
    }
  }
  return {
    restrict: 'A',
    scope: { value:'=ngModel' },
    controller: function($scope) {
      $scope.update = function(value) {
        $scope.value = value;
      };
    },
    compile: function(element) {
      var $div = ui.init(element);
      return this.link;
    },
    link: function(scope, element, attrs) {
      scope.$watch('value', ui.isVisible($(element).next()));
      // NOTE: Update the scope thro this way seperately
      scope.$watch(attrs.ngModel, scope.update);
    }
  }
});

app.control.directive('onFocus', function() {
  return {
    restrict: 'A',
    compile: function(element) {
      element.focus();
    }
  }
});
