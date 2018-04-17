
angular.module('StudentApp', []);

angular.module('StudentApp').controller("StudentController",function($scope){

	    $scope.names = [
				        'ramesh',
				        'suresh',
				        'mahesh',
				        'mukesh',
				        'rushikesh',
				        'jaggu',
				        'michel',
				        'ram',
				        'rahim'
				    ];

		$scope.name = '';

		$scope.start = 0;

		$scope.previous = function(){
			if($scope.start!=0)
			$scope.start = $scope.start - 2;
		}

		$scope.next = function(){
			if($scope.start+2!=$scope.names.length)
			$scope.start = $scope.start + 2;
		}

});
