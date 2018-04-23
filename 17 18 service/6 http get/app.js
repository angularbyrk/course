angular.module('StudentApp', []);

angular.module('StudentApp').controller('StudentController', function($scope,StudentService){
	

	$scope.students = [];

	$scope.load = function(){

		StudentService.getStudents().then(function(serverdata){
			$scope.students = serverdata.data;
		},function(error){
			alert("data loading failed"); // user
			console.log(error);	// developer
		});

	}

})

angular.module('StudentApp').service('StudentService', function($http){

	this.getStudents = function(){

		return $http.get("http://localhost:3000/students");

	}
	
})