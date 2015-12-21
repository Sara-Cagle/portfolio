angular.module('PortfolioApp', ['ngRoute', 'ngAnimate'])

.controller('contentController', [function($route, $routeParams) {
}])


/*
* Due to the CSS, these actually are loaded into the page from right to left (backwards), so put the most important links
* at the bottom of this list, so they will appear closest to the left.
*/
.controller('navController', [function($route, $routeParams) {
	this.links =[
		{linkName: 'Resume',
		URL: '#'
		},
		{linkName: 'Experience',
		URL: '#/resume',
		},
		{linkName: 'Projects',
		URL: '#/projects',
		},
		{linkName: 'About',
		URL: '#/about',
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
