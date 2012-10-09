app.model.factory('Article', function(REST) {
  return REST({
    format: 'json',
    routes: {
      'list': { url: 'articles', method: 'GET', isArray: true },
      'show': { url: 'articles/:id', method: 'GET', isArray: false },
      'thumbUp': { url: 'articles/:id/thumbUp', method: 'POST', isArray: false },
      'thumbDown': { url: 'articles/:id/thumbDown', method: 'POST', isArray: false }
    }
  });
});
