'use strict';

app.controller('PortfolioCtrl', function ($scope, Auth, Portfolio, Investment, $location) {
	$scope.signedIn = Auth.signedIn;
	$scope.user = Auth.user;

	$scope.createPortfolio = function() {
		$scope.portfolio.creator = $scope.user.email;
		$scope.portfolio.creatorUID = $scope.user.uid;
		$scope.portfolio.name = $scope.portfolio.name;

		Portfolio.create($scope.portfolio).then(function(ref) {
			$location.path('/portfolios/' + ref.name());
		});
	};
});