app.widget.directive('dialog', function() {
  var ui = {
    init: function(div) {
      div.overlay.hide();
      div.overlay.css({
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        border: 0,
        backgroundColor: '#000',
        opacity: 0.8
      });
      div.overlay.addClass('clickable');
    },
    toggle: function(div) {
      return function(value) {
        if(div.overlay.css('position') != 'absolute') {
          ui.init(div);
        } else if(div.overlay.is(':hidden')) {
          ui.show(div);
        } else if (div.overlay.is(':visible')) {
          ui.hide(div);
        }
      }
    },
    show: function(div) {
      div.overlay.fadeIn(300);
    },
    hide: function(div) {
      div.overlay.fadeOut(300);
    },
  }
  return {
    restrict: 'E',
    template: '<div id="Dialog"><div class="overlay" ng-click="hide()"></div><div class="pane"></div></div>',
    replace: true,
    scope: {
      url: '=ngModel'
    },
    controller: function($scope) {
      $scope.hide = function() {
        $scope.url = null;
      };
    },
    link: function(scope, element, attrs) {
      var div = {
        overlay: $(element).children('.overlay'),
        pane:    $(element).children('.pane')
      }
      scope.$watch('url', ui.toggle(div));
    }
  }
});
