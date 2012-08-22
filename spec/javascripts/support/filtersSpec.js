'use strict';

/* jasmine specs for filters go here */

describe('filter', function() {
  beforeEach(module('chao5kan.filters'));


  describe('interpolate', function() {
    beforeEach(module(function($provide) {
      $provide.value('version', 'TEST_VER');
    }));


    xit('should replace VERSION', inject(function(interpolateFilter) {
      expect(interpolateFilter('before %VERSION% after')).toEqual('before TEST_VER after');
    }));
  });
});
