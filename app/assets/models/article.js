app.model.factory('Article', function($resource, Restful) {
  return Restful({
    format: 'json',
    routes: {
      'list': { url:'articles',     method:'GET' },
      'show': { url:'articles/:id', method:'GET' }
    }
  })
});
