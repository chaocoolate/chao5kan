sys.REST.factory('REST', function($resource) {
  function init(params) {
    var api = {}
    var format = params.format ? '.' + params.format : '';
    for (var action in params.routes) {
      var route = params.routes[action];
      api[action] = $resource(route.url + format, {}, params.routes)[action];
    }
    return api;
  }
  return init;
});