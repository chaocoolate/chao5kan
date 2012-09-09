sys.REST.factory('Restful', function($resource) {
  var format = null;
  function init(params) {
    var api = {}
    if(params.format) { format='.'+params.format; }
    for (var action in params.routes) {
      var route = params.routes[action];
      api[action] = $resource(route.url+format, {}, params.routes)[action];
    }
    return api;
  }
  return init;
});
