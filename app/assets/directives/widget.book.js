app.widget.directive('book', function($compile) {
  var ui = {
    addPage: function(scope, book) {
      var $book = $(book);
      var pageNumber = $book.children().size() - 1;
      var html = '<page class="' + ui.getClass(pageNumber) + '" placeholder="data[' + (pageNumber - 1) + ']"></page>';
      $book.children().last().before($compile(html)(scope));
    },
    getClass: function(pageNumber) {
      var className = [];
      if(pageNumber == 2) {
        className.push('hard');
      }
      className.push(pageNumber % 2 ? 'even' : 'odd');
      className.push('p' + pageNumber);
      return className.join(' ');
    }
  };
  var data = {
    getInfo: function(article) {
      switch(article.about.type) {
        case 'serie':   return { id: article.serie.id,   name: article.serie.name };
        case 'product': return { id: article.product.id, name: article.product.name };
      }
    }
  };
  return {
    restrict: 'E',
    replace: true,
    templateUrl: app.template.book,
    scope: {
      data: '=placeholder'
    },
    controller: function($scope, $element) {
      $scope.parse = function(articles) {
        if(!articles) { return; }
        for(var i=0; i<articles.length; i++) {
          $.extend($scope.data[i].about, data.getInfo(articles[i]));
          ui.addPage($scope, $element);
        }
      }
    },
    link: function(scope, element, attrs) {
      scope.$watch('data', scope.parse);
    }
  }
});
