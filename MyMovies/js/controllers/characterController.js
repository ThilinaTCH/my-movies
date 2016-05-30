myMovie.controller('characterController', function ($scope, $routeParams, $location) {
    
    $scope.characters = [];
    $scope.addCharacter = function (character, actor) {
        $scope.newCharacter = null;
        $scope.characters.push({ character: character, actor: actor });
    };

    $scope.saveCharacters = function () {
        movieList[$routeParams.movieId].characters = $scope.characters;
        $location.path('/');
    };
});