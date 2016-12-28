(function () {

    var app = angular.module("gitHubViewer", []);

    var MainController = function ($scope, $http, $interval, $log, $anchorScroll, $location) {
        var countDownInterval = null;

        var onUserComplete = function (response) {
            $scope.user = response.data;
            // Get additional info about User
            $http.get($scope.user.repos_url)
                .then(onRepos, onError);
        };

        var onRepos = function (response) {
            $scope.repos = response.data;
            $location.hash("userDetails");
            $anchorScroll();
        };

        var onError = function (reason) {
            $scope.error = "Could not fetch user";
        };

        var decrementCountdown = function () {
            $scope.countdown -= 1;
            if ($scope.countdown < 1) {
                $scope.search($scope.username);
            }
        };

        var startCountdown = function () {
            countDownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
        };

        $scope.search = function (username) {
            $log.info("Searching for " + username);
            $http.get("https://api.github.com/users/" + username)
                .then(onUserComplete, onError);
            if (countDownInterval) {
                $interval.cancel(countDownInterval);
                $scope.countdown = null;
            }
        };

        $scope.username = "angular";
        $scope.message = "Github Viewer";
        $scope.repoSortOrder = "-stargazers_count";
        $scope.countdown = 5;

        startCountdown();
    };

    app.controller("MainController", MainController);
}());