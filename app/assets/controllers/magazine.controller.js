var Magazine = {
  new: {
    controller: function($scope, $location, $routeParams, Magazine) {
      $scope.back = function() {
        history.back();
      }
      $scope.create = function() {
        var request = {
          data: {
            userId:   1,
            name:     "運動",
            brandIds: [ 2 ]
          },
          success: function(data) {
            $scope.back();
          },
          error: function(data) {
          }
        }
        if($scope.form.$valid) {
          Magazine.create(request.data, request.success, request.error);
        }
      }
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
