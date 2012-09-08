var Magazine = {
  view: {
    controller: function($scope, $location, $routeParams) {
      $scope.id = $routeParams.id
      // $scope.data = $resource('app/models/:model', {model:'default.json'}).get()
      // $scope.$watch('data', function() { 
      //   scope.data.$save();
      // });
    }
  }
}
