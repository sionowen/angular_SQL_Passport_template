var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/login', {
			templateUrl: '/views/login.html',
			controller: "LoginController"
		})
		.when('/register', {
			templateUrl: '/views/register.html',
			controller: "LoginController"
		})
		.when('/home', {
			templateUrl: '/views/home.html',
			controller: "HomeController"
		})
		.when('/other', {
			templateUrl: '/views/other.html',
			controller: "OtherController"
		})
		.otherwise({
			redirectTo: 'login'
		})
}]);
