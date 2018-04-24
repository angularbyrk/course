// service

angular.module('StudentApp').service("StudentService",function($http){

	this.insertStudent = function(a,b){
		return $http.post("http://localhost:3000/students",{"id":a,"name":b});
	}

	this.getStudentById = function(a){
		return $http.get("http://localhost:3000/students/"+a);
	}

});