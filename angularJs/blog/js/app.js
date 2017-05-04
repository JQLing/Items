var blogApp = angular.module('blogApp',[
	'ngRoute',
	'blogControllers',
	'blogServices',
	'blogBusinessServices',
	'blogDirectives'
]);

blogApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
	
	$routeProvider.
		when('/',{
			templateUrl: 'partials/main.html',
			controller: 'BlogCtrl'
		}).when('/blogPost/:id',{
			templateUrl: 'partials/blogPost.html',
			controller: 'BlogViewCtrl'
		}).when('/newBlogPost',{
			templateUrl: 'partials/newPost.html',
			controller: 'NewBlogPostCtrl'
		}).when('/about',{
			templateUrl: 'partials/about.html',
			controller: 'AboutBlogCtrl'
		}).when('/login',{
			templateUrl: 'partials/login.html',
			controller: 'LoginCtrl'
		}).when('/logOut',{
			templateUrl: 'partials/login.html',
			controller: 'LogoutCtrl'
		});
	
	$locationProvider.html5Mode(false).hashPrefix('!');
}]);






