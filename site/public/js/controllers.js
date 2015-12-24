angular.module('PortfolioApp', ['ngRoute', 'ngAnimate'])


/*
* Due to the CSS, these actually are loaded into the page from right to left (backwards), so put the most important links
* at the bottom of this list, so they will appear closest to the left.
*/
.controller('navController', [function($route, $routeParams) {
	this.links =[
		{linkName: 'Contact',
		URL: '#/contact'},
		{linkName: 'Experience',
		URL: '#/experience',
		},
		{linkName: 'Projects',
		URL: '#/projects',
		},
		{linkName: 'About',
		URL: '#/about',
		}
	]
}])

.controller('contentController', ['$scope', function($scope, $route, $routeParams) {
	/*$scope.openModal = function(){
		var element = document.getElementById('wechatQR');
			console.log("display type is: "+element.style.visibility);
			if(element.style.visibility==="hidden"){
				return element.style.visibility="visible";
				//console.log("changed to visible");

			}
			else{
				return element.style.visibility="hidden";
				//console.log("changed to hidden");
			}
	};*/
	$scope.showModal = false;
	$scope.openModal = function(){
		$scope.showModal = !$scope.showModal;
	};

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
	.when('/experience', {
	templateUrl: 'views/experience.html',
	controller: 'contentController'
	})
	.when('/projects', {
	templateUrl: 'views/project.html',
	controller: 'contentController'
	})
	.when('/contact', {
	templateUrl: 'views/contact.html',
	controller: 'contentController',
	});
})
