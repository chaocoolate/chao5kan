app.control.directive('anim', function() {
  var Effect = {
    scope: null,
    init: function(scope) {
      if(scope.$parent) {
        this.init(scope.$parent);
      } else {
        this.scope = scope;
        if(!scope.effects) {
          scope.effects = [];
        }
      }
    },
    add: function(element, attrs) {
      this.scope.effects.push({
        div:      element, 
        sequence: parseInt(attrs.sequence) ? attrs.sequence : 1
      });
    },
    load: function(endAnim) {
      var effects = this.scope.effects;
      effects.sort(this._items.sort);
      this._items.animate(effects, endAnim);
    },
    _items: {
      sort: function(a, b) {
        return a.sequence < b.sequence ? -1 : (a.sequence > b.sequence ? 1 : 0);
      },
      animate: function(effects, endAnim) {
        var sequence = effects[0].sequence;
        while(effects.length > 0) {
          var anim = this.load(effects.shift());
          if (effects.length == 0) {
            anim.queue(endAnim);
          } else if(effects[0].sequence > sequence) {
            var self = this;
            anim.queue(function() {
              self.animate(effects, endAnim);
            });
            break;
          }
        }
      },
      load: function(effect) {
        // scale, rotate & z-transform not supported on this HTML4 version
        var $div = $(effect.div);
        var anim = {}
        var duration = $div.data('duration') ? $div.data('duration') : null;
        switch($div.data('fade')) {
          case 'show': anim.opacity = 1; break;
          case 'hide': anim.opacity = 0; break;
          default:     anim.opacity = $div.data('fade');
        }
        if($div.data('x')) {
          anim.left = $div.data('x')
        }
        if($div.data('y')) {
          anim.top = $div.data('y')
        }
        return $div.animate(anim, duration);
      }
    }
  }
  return {
    restrict: 'A',
    controller: function($scope) {
      $scope.animate = function() {
        Effect.load(function() {
          $scope.$apply($scope.redirect);
        });
      };
    },
    link: function(scope, element, attrs) {
      Effect.init(scope);
      if(attrs.anim == 'trigger') {
       scope.redirect = attrs.ngClick
        $(element).unbind('click');
        $(element).bind('click', scope.animate);
      } else {
        Effect.add(element, attrs);
      }
    }
  }
});