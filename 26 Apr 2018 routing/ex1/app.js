angular.module('StudentApp', ["ngRoute"]);

angular.module('StudentApp').config(function($routeProvider) {


	$routeProvider.when("/home",{
		templateUrl:"home.html"
	});

	$routeProvider.when("/contact",{
		templateUrl:"contact.html"
	});

	$routeProvider.otherwise({
		templateUrl:"welcome.html"
	})
	
})