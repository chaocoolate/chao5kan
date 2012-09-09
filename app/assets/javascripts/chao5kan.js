var app = {
  route:   angular.module('chao5kan', [ 'chao5kan.control', 'chao5kan.widget', 'chao5kan.model' ]),
  control: angular.module('chao5kan.control', []),
  widget:  angular.module('chao5kan.widget', []),
  model:   angular.module('chao5kan.model', [ 'ngResource' ])
}
