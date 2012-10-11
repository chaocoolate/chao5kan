app.widget.directive('page', function() {
  return {
    // TODO: detect HTML4 / HTML5
    restrict: 'E',
    templateUrl: app.template.page,
    replace: true,
    scope: {
      data: '=placeholder'
    },
    controller: function($scope) {
      $scope.view = function() {
        $scope.$emit('view', $scope.data.articleId);
      };
      $scope.thumbUp = function() {
        var originalIsThumbUp = $scope.data.isThumbUp;
        var originalIsThumbDown = $scope.data.isThumbDown;
        $scope.data.isThumbUp = !$scope.data.isThumbUp;
        $scope.data.isThumbDown = false;

        $scope.$emit('thumbUp', $scope.data.articleId, $scope.data.isThumbUp, function() {
          $scope.data.isThumbUp = originalIsThumbUp;
          $scope.data.isThumbDown = originalIsThumbDown;
        });
      };
      $scope.thumbDown = function() {
        var originalIsThumbUp = $scope.data.isThumbUp;
        var originalIsThumbDown = $scope.data.isThumbDown;
        $scope.data.isThumbUp = false;
        $scope.data.isThumbDown = !$scope.data.isThumbDown;

        $scope.$emit('thumbDown', $scope.data.articleId, $scope.data.isThumbDown, function() {
          $scope.data.isThumbUp = originalIsThumbUp;
          $scope.data.isThumbDown = originalIsThumbDown;
        });
      };
      $scope.subscribe = function(object, type) {
        $scope.$emit('subscribe', { type: type, id: object.id });
      };
      $scope.block = function() {
      };
      $scope.bookmark = function() {
      };
      $scope.share = function() {
      };
    },
    compile: function(element, attrs) {
      var $element = $(element);
      $element.addClass('page');
      $element.width($element.width() / 2);
      $element.height($element.parent().height());
      $element.css({
        float: 'left',
        position: 'absolute',
        overflow: 'hidden'
      });
    }
  }
});
