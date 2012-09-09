app.model.factory('Article', function($resource, REST) {
  return REST({
    format: 'json',
    routes: {
      'list': { url:'articles',     method:'GET' },
      'show': { url:'articles/:id', method:'GET' }
    }
  })
});
