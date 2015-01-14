'use strict';

app.controller('HomeCtrl', function ($scope, Auth, Profile) {
	if (Auth.signedIn()) {
		$scope.signedIn = Auth.signedIn;
		$scope.profile = Profile.get(Auth.user.uid);
		Profile.getPortfolios(Auth.user.uid).then(function(portfolios) {
			$scope.portfolios = portfolios;
		});
	}
});