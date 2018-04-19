
angular.module('studentApp', []);

angular.module("studentApp").controller("studentController",function($scope,$http){

	$scope.users = [];

	$http.get("https://jsonplaceholder.typicode.com/users").then(
		function success(response){
			$scope.users = response.data;
		}

	);

	

});