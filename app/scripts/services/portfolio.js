'use strict';

app.factory('Portfolio', function ($firebase, FIREBASE_URL) {
	var ref = new Firebase(FIREBASE_URL);
	var portfolios = $firebase(ref.child('portfolios')).$asArray();

	var Portfolio = {
		create: function (portfolio) {
			return portfolios.$add(portfolio).then(function(portfolioRef) {
				$firebase(ref.child('user_portfolios').child(portfolio.creatorUID))
					.$push(portfolioRef.name());

				return portfolioRef;
			});
		},
		get: function (portfolioId) {
			return $firebase(ref.child('portfolios').child(portfolioId)).$asObject();
		},
		delete: function (portfolio) {
			return portfolio.$remove(portfolio);
		}
	};

	return Portfolio;
});