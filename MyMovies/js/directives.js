myMovie.directive('starRating',
	function () {
	    return {
	        restrict: 'A',
	        template: '<ul class="rating">'
					 + '	<li ng-repeat="star in stars" ng-class="star">'
					 + '\u2605'
					 + '</li>'
					 + '</ul>',
	        scope: {
	            ratingValue: '=',
	            max: '='
	        },
	        link: function (scope) {
	            var updateStars = function () {
	                scope.stars = [];
	                for (var i = 0; i < scope.max; i++) {
	                    scope.stars.push({
	                        filled: i < scope.ratingValue
	                    });
	                }
	            };

	            scope.$watch('ratingValue',
					function (oldVal, newVal) {
					    if (newVal) {
					        updateStars();
					    }
					}
				);
	        }
	    };
	}
);

myMovie.directive('listItem', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            name: '@',
            releaseYear: '@',
            rating: '@',
            description: '@',
            id: '@'
        },
        templateUrl: 'views/movieItem.html'
    }
});