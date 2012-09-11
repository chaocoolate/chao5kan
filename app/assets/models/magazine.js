app.model.factory('Magazine', function($resource, REST) {
  return REST({
    format: 'json',
    routes: {
      'list':    { url:'magazines',          method:'GET',    isArray:true },
      'new':     { url:'magazines/new',      method:'GET',    isArray:false },
      'show':    { url:'magazines/:id',      method:'GET',    isArray:false },
      'edit':    { url:'magazines/:id/edit', method:'GET',    isArray:false },
      'create':  { url:'magazines',          method:'POST',   isArray:false },
      'update':  { url:'magazines/:id',      method:'PUT',    isArray:false },
      'destroy': { url:'magazines/:id',      method:'DELETE', isArray:false }
    }
  })
});
