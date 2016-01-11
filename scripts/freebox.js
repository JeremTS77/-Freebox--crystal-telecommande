(function(){

	var app = angular.module('Freebox', [
		'ngRoute',
		'ngMaterial',
		'ui.bootstrap'
		]);
	app.config([
		'$routeProvider', function($routeProvider) {
			return $routeProvider.when('/', {
				redirectTo:'/freebox'
			}).when('/freebox', {
				templateUrl: 'freebox.html'
			});
		}]);
	app.controller('CommandCtrl', ['$http', function($http){
		this.button = function(hd, force, id, key){
			if (id){
				$http.get('http://hd'+hd+'.freebox.fr/pub/remote_control?code='+id+'&key='+key+'&long='+force);
			}
		};
	}]);

})();
