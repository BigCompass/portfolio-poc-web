'use strict';

app.controller('PortfolioCtrl', function ($scope, Auth) {
	$scope.signedIn = Auth.signedIn;
});