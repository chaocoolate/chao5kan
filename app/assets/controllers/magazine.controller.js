var Magazine = {
  view: {
    controller: function($scope, $location, $routeParams, Article) {
//      $scope.id = $routeParams.id
      $scope.data = Article.list({action:1506})
      // $scope.data = $resource('app/models/:model', {model:'default.json'}).get()
      // $scope.$watch('data', function() { 
      //   scope.data.$save();
      // });
    }
  }
}
