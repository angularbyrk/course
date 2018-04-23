angular.module('StudentApp', []);

angular.module('StudentApp').controller('StudentController', function($scope,StudentService){

	$scope.studentId = "";
	$scope.studentName = "";

	$scope.update = function(){
		StudentService.updateStudent($scope.studentId,$scope.studentName);
	}
	
})

angular.module('StudentApp').service('StudentService', function($http){

	this.updateStudent = function(a,b){

		$http.put("http://localhost:3000/students/"+a,{"id":a,"name":b});

	}

});