/*angular.module('PortfolioApp.controllers', []).
controller('portfolioController', function($scope) {
    //$scope.driversList = [];
});*/

var app = angular.module('PortfolioApp', []); //'ngRoute' is gonna go in the brackets

app.controller('contentController', [function() {

}]);


app.controller('navController', [function() {
	this.links =[
		{linkName: 'About',
		URL: '/about',
		},
		{linkName: 'Resume',
		URL: '/resume',
		},
		{linkName: 'Projects',
		URL: '/projects',
		}
	]
}]);
