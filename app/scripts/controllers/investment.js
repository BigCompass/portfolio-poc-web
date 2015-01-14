'use strict';

app.controller('InvestmentCtrl', function($scope, $routeParams) {
	$scope.title = 'investment ctrl' + $routeParams.investmentId;
});