"use strict";

var app = angular.module("Portfolio", ["ngRoute", "ngOnload"])

app.config(function($routeProvider) {
    $routeProvider
        .when("/splash", {
            templateUrl: "partials/splash.html",
            controller:  "splashCtrl"
        })
        .when("/project/:projectName", {
            templateUrl: "partials/project.html",
            controller:  "projectCtrl",
        })
        .when("/technologies", {
            templateUrl: "partials/technologies.html",
            controller:  "technologiesCtrl"
        })
        .otherwise("/splash");
});
