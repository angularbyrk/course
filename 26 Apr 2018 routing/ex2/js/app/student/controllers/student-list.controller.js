angular.module('StudentApp').controller("StudentListController",function($scope,StudentService){

	$scope.students = [];

	StudentService.getStudents().then(function(serverdata){

		$scope.students = serverdata.data;

	});

});