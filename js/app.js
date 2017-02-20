angular.module('TodoApp', ['ngRoute', 'RouteControllers', 'UserService', 'angular-storage']);

angular.module('TodoApp').config(function($locationProvider, $routeProvider) {
	$routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/accounts/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    })
    .when('/todo', {
        templateUrl: 'templates/todo.html',
        controller: 'TodoController'
    });

  $locationProvider.html5Mode(true);
});
