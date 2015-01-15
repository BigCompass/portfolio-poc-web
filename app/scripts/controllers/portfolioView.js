'use strict';

app.controller('PortfolioViewCtrl', function ($scope, Auth, Portfolio, Investment, $routeParams) {
	$scope.message = 'portfolio view ctrl';
	$scope.portfolio = Portfolio.get($routeParams.portfolioId);
	Portfolio.getInvestments($routeParams.portfolioId).then(function(investments) {
		$scope.investments = investments;
	});

	$scope.addInvestment = function() {

		var investment = {
			symbol: $scope.invSymbol,
			qty: $scope.invQty,
			creatorUID: Auth.user.uid
		};

		Investment.create(investment, $routeParams.portfolioId);

		$scope.symbol = '';
		$scope.qty = 0.0;
	};
});