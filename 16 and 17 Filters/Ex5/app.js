
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

});
