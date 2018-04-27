angular.module('EmployeeApp').service("EmployeeService",function($http){

	this.getEmployees = function(){

		return $http.get("http://localhost:3000/employees");

	}

});