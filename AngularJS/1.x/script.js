(function () {

    var app = angular.module("gitHubViewer", []);

    var MainController = function ($scope) {
        var person = {
            firstName: "Danny",
            lastName: "Allegrezza",
            imageSrc: "https://avatars0.githubusercontent.com/u/7738918?v=3&u=31ea437b2d661c653462f299b69b3a44cb8da2fc&s=400"
        };
        
        $scope.message = "Hello, Angular!";
        $scope.person = person;
    };

    app.controller("MainController", MainController);
}());