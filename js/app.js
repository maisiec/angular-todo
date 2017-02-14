angular.module('TodoApp', ['ngRoute', 'RouteControllers', 'UserService']);

angular.module('TodoApp').config(function($locationProvider, $routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	})
	.when('/accounts/register', {
		templateUrl: 'templates/register.html',
		controller: 'RegisterController'
	});
  $locationProvider.html5Mode(true);
});
