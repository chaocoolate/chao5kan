'use strict';

/* jasmine specs for directives go here */

describe('directives', function() {
  beforeEach(module('chaocoolate.directives'));

  describe('navigate-to', function() {
    it('should navigate to /URL', function() {
      inject(function($compile, $rootScope, $location) {
        var element = $compile('<div data-navigate-to="/URL"></div>')($rootScope);
        $(element).click();

        expect($location.path()).toEqual('/URL');
      });
    });
  });

  describe('turn-options', function() {
    it('should initialize turn js effect with options', function() {
      inject(function($compile, $rootScope, $location) {
        spyOn($.fn, 'turn');
        var element = $compile('<div data-turn-options="option1: 1, option2: \'value2\'"></div>')($rootScope);

        expect($.fn.turn).toHaveBeenCalledWith({
          option1: 1,
          option2: 'value2'
        });
      });
    });
  });
  
});