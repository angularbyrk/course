angular.module('studentApp', []);

angular.module('studentApp').controller('studentController', function($scope){

	$scope.names = ["s1","s2","s3"];

	$scope.studentName = "";

	$scope.m1 = function(){
		// adding the value into the array
		$scope.names.push($scope.studentName);
		// reseting the value of text field
		$scope.studentName = '';
	}

});