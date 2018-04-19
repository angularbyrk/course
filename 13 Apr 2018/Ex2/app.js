
angular.module('studentApp', []);

angular.module("studentApp").controller("studentController",function($scope){

	$scope.students = [
		{"id":1,"name":"student1"},
		{"id":2,"name":"student2"},
		{"id":3,"name":"student3"}
	];

	$scope.studentId = "";
	$scope.studentName = "";

	$scope.add = function(){
		var student = {};
		student.id = $scope.studentId;
		student.name = $scope.studentName;
		$scope.students.push(student);
		$scope.studentId = "";
		$scope.studentName = "";

	}
	

	$scope.m1 = function(){
		$scope.students = [
			{"id":4,"name":"student4"},
			{"id":5,"name":"student5"},
			{"id":6,"name":"student6"}
		];
	}	

});