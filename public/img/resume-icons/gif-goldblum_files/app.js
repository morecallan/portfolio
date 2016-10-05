'use strict'

angular
  .module('gifGoldblum', ['ngRoute'])
  .config($routeProvider =>
    $routeProvider
      .when('/', {
        controller: 'MainCtrl',
        templateUrl: 'partials/main.html',
      })
      .when('/giffify', {
        controller: 'URLCtrl',
        templateUrl: 'partials/view.html',
      })
  )
  .controller('MainCtrl', function ($scope, $rootScope, $http) {
    let submissionUrl = "";

    $scope.submitUrl = () => {
      submissionUrl = $scope.url;

      $http
        .get(`/gif/${submissionUrl}`)
        .then((res) => {
          console.log(res)
          $rootScope.gifDisplay = res
          $location.path("/giffify")
        })
    }


  })
  .controller('URLCtrl', function ($scope, $http) {
    $scope.view = "help meee";
  })
