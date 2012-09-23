var Magazine = {
  new: {
    controller: function($scope, $location, $routeParams, Magazine) {
      $scope.user =  { id: 1 };
      $scope.back = function() {
        history.back();
      };
      $scope.create = function() {
        if($scope.form.$valid) {
          Magazine.create({ user: $scope.user, magazine: $scope.magazine }, $scope.back);
        }
      };
      Magazine.new($routeParams, function(data) {
        $scope.magazine = data;
      });
    }
  },
  view: {
    controller: function($scope, $location, $routeParams, Article) {
      $scope.more = function() {
        var request = {
          data: {
            locale:     'zhCN',
            magazineId: $routeParams.id, 
            articleId:  10,
            isForward:  true,
            count:      10
          },
          success: function(data) {
            $scope.data = data;
          }
        };
        Article.list(request.data, request.success, request.error);
      };
      $scope.thumbUp = function(event, articleId, isThumbUp, reverse) {
        Article.thumbUp({
          "id": articleId,
          "isThumbUp": isThumbUp
        }, function(response) {
          if (!response.success) {
            reverse();
          }
        });
      };
      $scope.view = function(event, articleId) {
        $scope.url = '/articles/:id'.replace(':id', articleId);
      }
      $scope.subscribe = function(event, data) {
        $location.path('/magazines/new').search(data);
      };
      $scope.$on('thumbUp', $scope.thumbUp);
      $scope.$on('view', $scope.view);
      $scope.$on('subscribe', $scope.subscribe);
      $scope.more();
    }
  }
}
