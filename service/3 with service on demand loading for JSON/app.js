
angular.module('StudentApp', []);

angular.module("StudentApp").controller('StudentController', function($scope,StudentService){
	
	$scope.values = [];

	$scope.load = function(){
		$scope.values=StudentService.getStudents();
	}

})

angular.module('StudentApp').service('StudentService', function(){

	this.getStudents = function(){

		var students = [

			{"id":1,"name":"student1"},
			{"id":2,"name":"student2"},
			{"id":3,"name":"student3"}

		];

		return students;
	}
	
})