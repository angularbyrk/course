

angular.module('module1', []);

angular.module('module1').controller('controller1',function($scope,$http){


	$scope.users = [];

	$scope.load = function(){
			$http.get('https://jsonplaceholder.typicode.com/users').then(
				function success(response){
					$scope.users = response.data;
				}
			)
	}

})
