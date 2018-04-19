
angular.module('StudentApp', []);

angular.module("StudentApp").controller('StudentController', function($scope,StudentService){
	
	$scope.names = [];

	$scope.load = function(){
		$scope.names=StudentService.getStudentNames();
	}

})

angular.module('StudentApp').service('StudentService', function(){

	this.getStudentNames = function(){
		return ["s1","s2","s3"];
	}
	
})