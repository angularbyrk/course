angular.module('StudentApp', []);

angular.module('StudentApp').controller('StudentController', function($scope,StudentService){

	$scope.studentId = "";
	$scope.studentName = "";

	$scope.insert = function(){
		StudentService.insertStudent($scope.studentId,$scope.studentName);
	}
	
})

angular.module('StudentApp').service('StudentService', function($http){



	this.insertStudent = function(a,b){
		$http.post("http://localhost:3000/students",{"id":a,"name":b});
	}
	
})