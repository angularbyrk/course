// creating module
angular.module('studentApp', []);

// creating controller

angular.module('studentApp').controller("studentController1",function($scope){

	$scope.message = "hello world";

	$scope.names = ["s1","s2","s3"];

});