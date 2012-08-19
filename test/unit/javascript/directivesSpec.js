'use strict';

/* jasmine specs for directives go here */

describe('directives', function() {
  beforeEach(module('chaocoolate.directives'));

  describe('app-version', function() {
    xit('should print current version', function() {
      module(function($provide) {
        $provide.value('version', 'TEST_VER');
      });
      inject(function($compile, $rootScope) {
        var element = $compile('<span app-version></span>')($rootScope);
        expect(element.text()).toEqual('TEST_VER');
      });
    });
  });

  describe('navigate-to', function() {
    xit('should navigate to URL', function() {
      // module(function($provide) {
        // $provide.value('navigate-to', 'URL');
      // });
      inject(function($compile, $rootScope, $location) {
        var element = $compile('<span data-navigate-to="URL"></span>')($rootScope);
        expect($location.path()).toEqual('URL');
      })
    });
  });
});
