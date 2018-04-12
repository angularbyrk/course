angular.module('studentApp', []);

angular.module('studentApp').controller('studentController', function($scope){

	$scope.names = ["s1","s2","s3"];

	$scope.students = [
		{"id":1,"name":"student1"},
		{"id":2,"name":"student2"},
		{"id":3,"name":"student3"}
	];

});