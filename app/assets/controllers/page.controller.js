var Page = {
  intro: {
    controller: function($scope, $location) {
      $scope.persona = 'ms_trendy';
      $scope.view = function() {
        $location.path('/magazines/:id'.replace(':id', $scope.persona));
      }
    }
  }
}