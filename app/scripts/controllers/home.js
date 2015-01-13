'use strict';

app.controller('HomeCtrl', function ($scope, Auth) {
	$scope.name = 'Rob';
	$scope.signedIn = Auth.signedIn;
});