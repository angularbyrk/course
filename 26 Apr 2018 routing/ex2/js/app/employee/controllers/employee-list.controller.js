angular.module('EmployeeApp').controller("EmployeeListController",function($scope,EmployeeService){

	$scope.employees = [];

	EmployeeService.getEmployees().then(function(serverData){

		$scope.employees = serverData.data;
	});

});