app.model.factory('Article', function($resource, REST) {
  return REST({
    format: 'json',
    routes: {
      'list': { url:'articles',     method:'GET', isArray:true },
      'show': { url:'articles/:id', method:'GET', isArray:false }
    }
  })
});
