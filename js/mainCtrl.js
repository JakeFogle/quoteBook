app.controller('mainCtrl', function($scope, dataService){
	
	$scope.quotes = dataService.getData();

	$scope.addData = function() {
		dataService.addData($scope.quoteText, $scope.authorText);
		$scope.quoteText = "";
		$scope.authorText = "";
	}

	$scope.removeData = function(quote) {
		dataService.removeData(quote);
	}

});

