'use strict';

app.factory('Investment', function ($firebase, FIREBASE_URL) {
	var ref = new Firebase(FIREBASE_URL);
	var investments = $firebase(ref.child('investments')).$asArray();

	var Investment = {
		create: function(investment, portfolioId) {
			return investments.$add(investment).then(function(postRef) {
				$firebase(ref.child('portfolio_investments').child(portfolioId))
					.$push(postRef.name());

				return postRef;
			});
		},
		get: function(investmentId) {
			return $firebase(ref.child('investments').child(investmentId)).$asObject();
		},
		delete: function(investment) {
			return investment.$remove(investment);
		}
	};

	return Investment;
});