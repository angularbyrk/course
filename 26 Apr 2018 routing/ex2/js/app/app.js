angular.module('SatyaApp', ["ngRoute","StudentApp","EmployeeApp"]);

angular.module('SatyaApp').config(function($routeProvider) {


	$routeProvider.when("/home",{
		templateUrl:"js/app/common/templates/home.html"
	});

	$routeProvider.when("/contact",{
		templateUrl:"js/app/common/templates/contact.html"
	});

	$routeProvider.when("/studentList",{
		templateUrl:"js/app/student/templates/student-list.html"
	});

	$routeProvider.when("/employeeList",{
		templateUrl:"js/app/employee/templates/employee-list.html"
	});

	$routeProvider.otherwise({
		templateUrl:"js/app/common/templates/welcome.html"
	})
	
})