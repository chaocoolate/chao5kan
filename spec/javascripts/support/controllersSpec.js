'use strict';

describe('HomeController', function(){
  var scope;

  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.$new();
    var homeController = $controller(HomeController, {$scope: scope})
  }));

  it('should ....', function() {
    //spec body
  });
});

describe('MagazineViewController', function(){
  var scope;

  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.$new();
    var magazineViewController = $controller(MagazineViewController, {$scope: scope})
  }));

  it('should ....', function() {
    //spec body
  });
});
