
angular.module('module1', ['module2']);

angular.module('module1').controller("controller1",function($scope){

	$scope.message1 = "data1";

});

angular.module('module2', []);

angular.module('module2').controller("controller2",function($scope){

	$scope.message2 = "data2";

});