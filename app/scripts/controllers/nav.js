'use strict';

app.controller('NavCtrl', function ($scope, Auth) {
	$scope.signedIn = Auth.signedIn;
	$scope.logout = Auth.logout;
	$scope.user = Auth.user;
});