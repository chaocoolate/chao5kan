sys.REST.factory('REST', function($resource) {
  return function(params) {
    var api = {};
    var format = params.format ? '.' + params.format : '';
    var routes = params.routes;
    for (var action in routes) {
      if (routes.hasOwnProperty(action)) {
        var route = routes[action];
        var urlParam = route.url.indexOf(':id') > 0 ? {id: '@id'} : {};
        api[action] = $resource(route.url + format, urlParam, routes)[action];
      }
    }
    return api;
  }
});