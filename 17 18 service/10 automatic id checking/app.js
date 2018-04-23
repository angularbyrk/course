

//	module
angular.module('StudentApp', []);

// controller

angular.module('StudentApp').controller("StudentController",function($scope,StudentService){

	$scope.studentId = "";

	$scope.studentName = "";

	$scope.insert = function(){
		// service call
		StudentService.insertStudent($scope.studentId,$scope.studentName).then(
			function(serverResponse){
				alert("success");
				console.log("success");
			},
			function(error){
				alert("failure. the reason for failure is "+error.data);
				console.log("error");
			},
		);
	};

	$scope.loadById = function(){
		StudentService.getStudentById($scope.studentId).then(
			function(serverResponse){
				alert("id already present");
			},
			function(error){
				alert("valid value");
			},
		);
	}


});


// service

angular.module('StudentApp').service("StudentService",function($http){

	this.insertStudent = function(a,b){
		return $http.post("http://localhost:3000/students",{"id":a,"name":b});
	}

	this.getStudentById = function(a){
		return $http.get("http://localhost:3000/students/"+a);
	}

});