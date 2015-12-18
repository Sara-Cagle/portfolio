angular.module('PortfolioApp', ['ngRoute', 'ngAnimate'])

.controller('contentController', [function($route, $routeParams) {
}])


.controller('navController', [function($route, $routeParams) {
	this.links =[
		{linkName: 'About',
		URL: '#/about',
		},
		{linkName: 'Resume',
		URL: '#/resume',
		},
		{linkName: 'Projects',
		URL: '#/projects',
		}
	]
}])

.controller('contentController', [function($route, $routeParams) {
	var links = document.getElementsByClassName("nav-link");
	for (var i = 0; i < links.length; ++i) {
		links[i].onclick = function(){
   			document.getElementById('slide').scrollIntoView();
  		}
 	}
}])

.config(function($routeProvider) { //routing needs to be on a server in order to run
	$routeProvider
	.when('/',{
		templateUrl: 'views/about.html',
	})
	.when('/about', {
	templateUrl: 'views/about.html',
	controller: 'contentController',
	})
	.when('/resume', {
	templateUrl: 'views/resume.html',
	controller: 'contentController'
	})
	.when('/projects', {
	templateUrl: 'views/project.html',
	controller: 'contentController'
	});
})
