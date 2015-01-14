'use strict';

app.factory('Portfolio', function ($window, $q, $firebase, FIREBASE_URL, Investment) {
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
		},
		getInvestments: function (portfolioId) {
			var defer = $q.defer();

			$firebase(ref.child('portfolio_investments').child(portfolioId))
				.$asArray()
				.$loaded()
				.then(function(data) {
					var investments = {};

					for(var i = 0; i < data.length; i++) {
						var value = data[i].$value;
						investments[value] = Investment.get(value);
					}
					defer.resolve(investments);
				});

				return defer.promise;
		}
	};

	return Portfolio;
});