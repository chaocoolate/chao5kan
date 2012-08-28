'use strict';

/* jasmine specs for services go here */

describe('service', function() {
  beforeEach(module('chao5kan.services'));


  describe('version', function() {
    xit('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
