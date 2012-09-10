var Magazine = {
  view: {
    controller: function($scope, $location, $routeParams, Article) {
      // TODO: widget scope
      // TODO: expand tooltips
      // TODO: pop article
      // TODO: pop when clicking subscribe & block on about section
      // TODO: pop when clicking share to SNS
      $scope.isSelected = function(flag) {
        return flag ? " selected" : "";
      };
      $scope.view = function() {
      };
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
            data = data[0]
            $scope.data = data;
            $scope.data.about.name = request.getName(data);
          },
          getName: function(data) {
            switch(data.about.type) {
              case "product": return data.product;
            }
          }
        };
        Article.list(request.data, request.success, request.error);
      };
      $scope.subscribe = function(type) {
      };
      $scope.block = function() {
      };
      $scope.thumbUp = function() {
//      Article.thumbUp($scope.data.id)        
      };
      $scope.thumbDown = function() {
//      Article.thumbDown($scope.data.id)        
      };
      $scope.bookmark = function() {
      };
      $scope.share = function() {
      };
      $scope.more();
    }
  }
}
