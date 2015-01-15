'use strict';

app.controller('InvestmentViewCtrl', function ($scope, $routeParams, Investment) {
	$scope.message = 'investment view controller';
	$scope.investment = Investment.get($routeParams.investmentId);
	$scope.portfolioId = $routeParams.portfolioId;

	$scope.getLookup = function() {
		console.log('trying to get lookup for ' + $scope.lookupSymbol);
		Investment.getLookup($scope.lookupSymbol);
	};

	$scope.getQuote = function() {
		console.log('trying to get quote for ' + $scope.lookupSymbol);
		Investment.getQuote($scope.lookupSymbol);
	};

	$scope.getChart = function() {
		// input for chart api
		var chartObject = {
			'Normalized': false,
			'StartDate': '2014-05-01T00:00:00-00',
			'EndDate': '2014-06-01T00:00:00-00',
			'DataPeriod': 'Month',
			'DataInterval': null,
			'LabelPeriod': 'Week',
			'LabelInterval': 1,
			'Elements':[
				{
					'Symbol': $scope.lookupSymbol,
					'Type': 'price'
				}
			]
		};

		Investment.getChart(chartObject);
	};
});