'use strict';

/* jasmine specs for directives go here */

describe('directives', function() {
  beforeEach(module('chao5kan.directives'));

  describe('navigate-to', function() {
    xit('should navigate to /URL after body fadeout', function() {
      inject(function($compile, $rootScope, $location) {
        var element = $compile('<div data-navigate-to="/URL"></div>')($rootScope);
        $(element).click();

        waitsFor(function() {
          return $('body').is(':hidden');
        }, 2000, 'body fadeout');

        runs(function() {
          expect($location.path()).toEqual('/URL');
          $('body').show();
        });
      });
    });
  });

  describe('turn-options', function() {
    xit('should initialize turn js effect with options after element is visible', function() {
      inject(function($compile, $rootScope, $location) {
        jasmine.Clock.useMock();
        spyOn($.fn, 'turn');
        var element = $compile('<div data-turn-options="option1: 1, option2: \'value2\'"></div>')($rootScope);
        $('body').append(element);

        jasmine.Clock.tick(1);
        expect($.fn.turn).toHaveBeenCalledWith({
          option1: 1,
          option2: 'value2'
        });
      });
    });
  });

});