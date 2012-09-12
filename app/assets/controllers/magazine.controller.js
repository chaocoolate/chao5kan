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
      $scope.more();
    }
  }
}
