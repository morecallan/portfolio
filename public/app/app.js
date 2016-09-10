"use strict";

var app = angular.module("Portfolio", ["ngRoute", "ngAnimate", "ngOnload"])


app.config(function($routeProvider) {
    $routeProvider
        .when("/splash", {
            templateUrl: "partials/splash.html",
            controller:  "splashCtrl"
        })
        .when("/project/:projectName", {
            templateUrl: "partials/project.html",
            controller:  "projectCtrl"
        })
        .otherwise("/splash");
});
