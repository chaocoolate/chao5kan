var Page = {
  intro: {
    controller: function($scope, $location) {
      $scope.persona = 'ms_trendy';
      $scope.view = function() {
        $location.path("/magazine/" + $scope.persona);
      }
    }
  }
}