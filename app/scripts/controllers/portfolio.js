'use strict';

app.controller('PortfolioCtrl', function ($scope, Auth, Portfolio, $location) {
	$scope.signedIn = Auth.signedIn;
	$scope.user = Auth.user;

	$scope.addInvestment = function() {
		$scope.investment.creator = $scope.user.email;
		$scope.investment.creatorUID = $scope.user.creatorUID;
	};

	$scope.createPortfolio = function() {
		$scope.portfolio.creator = $scope.user.email;
		$scope.portfolio.creatorUID = $scope.user.uid;
		$scope.portfolio.name = $scope.portfolio.name;

		Portfolio.create($scope.portfolio).then(function(ref) {
			$location.path('/portfolios/' + ref.name());
		});
	};
});