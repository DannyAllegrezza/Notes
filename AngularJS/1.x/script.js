(function () {

    var app = angular.module("gitHubViewer", []);

    var MainController = function ($scope, $http) {

        var onUserComplete = function (response) {
            $scope.user = response.data;
        };

        var onError = function (reason) {
            $scope.error = "Could not fetch user";
        };

        $scope.search = function (username) {
            $http.get("https://api.github.com/users/" + username)
                .then(onUserComplete, onError);
        };

        $scope.username = "angular";
        $scope.message = "Github Viewer";
    };

    app.controller("MainController", MainController);
}());