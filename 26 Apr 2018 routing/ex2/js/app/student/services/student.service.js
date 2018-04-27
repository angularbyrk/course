angular.module("StudentApp").service("StudentService",function($http){


	this.getStudents = function(){

		return $http.get("http://localhost:3000/students");

	}



});