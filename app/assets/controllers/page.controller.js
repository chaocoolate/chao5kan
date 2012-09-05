var Page = {
  intro: {
    controller: function($scope, $location) {
      $scope.persona = "ms.trendy";
      $scope.view = function() {
        $location.path("/magazine/"+this.persona);
      }
    }
  }
}
