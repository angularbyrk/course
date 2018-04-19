
angular.module('StudentApp', []);

angular.module("StudentApp").controller('StudentController', function($scope,StudentService){
	
	$scope.values = [];

	$scope.load = function(){
		StudentService.getStudents().then(
			function(serverdata){
				$scope.values = serverdata.data;
			}
		);
	}

})

angular.module('StudentApp').service('StudentService', function($http){

	this.getStudents = function(){

		/*var students = [

			{"id":1,"name":"student1"},
			{"id":2,"name":"student2"},
			{"id":3,"name":"student3"}

		];*/

		return $http.get("http://localhost:3000/students");
	}
	
})