myMovie.controller('movieController', function ($scope, $routeParams, $location) {
    $scope.detailMovie = movieList[$routeParams.movieId];
    $scope.movies = movieList;
    $scope.addMovie = function (name, description, director, releaseYear, rating, language) {
        var id = movieList.length;
        movieList.push({ id: movieList.length, name: name, description: description, directedBy: director, releaseYear: releaseYear, rating: rating, language: language, characters: [] });
        $location.path('/addCharacters/' + id);
    }
});