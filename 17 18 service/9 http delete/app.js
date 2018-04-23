angular.module('StudentApp', []);

angular.module('StudentApp').controller('StudentController', function($scope,StudentService){

	$scope.studentId = "";

	$scope.delete = function(){
		StudentService.deleteStudent($scope.studentId);
	}
	
})

angular.module('StudentApp').service('StudentService', function($http){

	this.deleteStudent = function(a){

		$http.delete("http://localhost:3000/students/"+a);

	}

});