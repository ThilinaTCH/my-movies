var myMovie = angular.module('myMoviesApp', ['ngRoute']);
var movieList = [
    {
        id: 0,
        name: "The Matrix",
        releaseYear: 1999,
        rating: 4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        directedBy: "Wachowski Bross",
        language: "English",
        characters: [
        {
            character: "Neo",
            actor: "Kaenu Reeves"
        },
        {
            character: "Morpheus",
            actor: "Lorens Reeves"
        },
        {
            character: "Neo",
            actor: "Kaenu Reeves"
        },
        {
            character: "Neo",
            actor: "Kaenu Reeves"
        }]
    }, {
        id: 1,
        name: "Brave Heart",
        releaseYear: 1995,
        rating: 6,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        directedBy: "Warner Bross",
        language: "English",
        characters: [
        {
            character: "Abc",
            actor: "Kaenu Reeves"
        },
        {
            character: "Morpheus",
            actor: "Lorens Reeves"
        },
        {
            character: "Neo",
            actor: "Kaenu Reeves"
        },
        {
            character: "Neo",
            actor: "Kaenu Reeves"
        }]
    }
];

myMovie.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/movieList.html',
        controller: 'movieController'
    })
    .when('/createMovie', {
        templateUrl: 'views/createMovie.html',
        controller: 'movieController'
    })
    .when('/addCharacters/:movieId', {
        templateUrl: 'views/addCharacters.html',
        controller: 'characterController'
    })
    .when('/movieDetails/:movieId', {
        templateUrl: 'views/movieDetails.html',
        controller: 'movieController'
    });
}
]);