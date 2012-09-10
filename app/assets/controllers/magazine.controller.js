var Magazine = {
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
