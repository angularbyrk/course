// module

angular.module("StudentApp",[]);

// controller1

angular.module("StudentApp").controller("c1",function($scope){

	$scope.ids = [1,2,3,4,5]; 

});

// controller2

angular.module("StudentApp").controller("c2",function($scope){

	$scope.ids = ["s1","s2","s3"]; 

});