describe('sys.REST', function() {
  var $httpBackend;
  var REST;

  beforeEach(module('sys.REST'));

  beforeEach(inject(function($injector) {
    REST = $injector.get('REST');
    $httpBackend = $injector.get('$httpBackend');
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should send GET request with parameters', function() {
    $httpBackend.expectGET('url?key=value').respond();
    var rest = REST({
      routes: {
        'get': { url: 'url', method: 'GET' }
      }
    });
    rest.get({ "key": "value" });
    $httpBackend.flush(1);
  });

  it('should send POST request with parameters', function() {
    $httpBackend.expectPOST('url', { "key": "value" }).respond();
    var rest = REST({
      routes: {
        'post': { url: 'url', method: 'POST' }
      }
    });
    rest.post({ "key": "value" });
    $httpBackend.flush(1);
  });

  it('should send POST request with parameters in url', function() {
    $httpBackend.expectPOST('url/1', { "id": 1, "key": "value" }).respond();
    var rest = REST({
      routes: {
        'post': { url: 'url/:id', method: 'POST' }
      }
    });
    rest.post({ "id": 1, "key": "value" });
    $httpBackend.flush(1);
  });

  it('should send DELETE request with parameters', function() {
    $httpBackend.expectDELETE('url?key=value').respond();
    var rest = REST({
      routes: {
        'delete': { url: 'url', method: 'DELETE' }
      }
    });
    rest.delete({ "key": "value" });
    $httpBackend.flush(1);
  });

  it('should send PUT request with parameters', function() {
    $httpBackend.expectPUT('url', {
      "key": "value"
    }).respond();
    var rest = REST({
      routes: {
        'put': { url: 'url', method: 'PUT' }
      }
    });
    rest.put({ "key": "value" });
    $httpBackend.flush(1);
  });

  it('should send GET request for json format', function() {
    $httpBackend.expectGET('url.json').respond();
    var rest = REST({
      format: 'json',
      routes: {
        'get': { url: 'url', method: 'GET' }
      }
    });
    rest.get();
    $httpBackend.flush(1);
  });

  it('should send GET request for xml format', function() {
    $httpBackend.expectGET('url.xml').respond();
    var rest = REST({
      format: 'xml',
      routes: {
        'get': { url: 'url', method: 'GET' }
      }
    });
    rest.get();
    $httpBackend.flush(1);
  });
});