app.controller('projectCtrl', function ($scope, $sce, $timeout, $window, $rootScope, $routeParams, projectFactory) {
  $scope.projectToDisplay = "";
  $scope.loaded = false;

  $timeout(()=> window.scrollTo(0,-100), 300);
  $timeout(()=> window.scrollTo(0,-100), 600);

  $window.uploadDone = function(){
    $scope.loaded = true;
  }

  projectFactory.getSpecificProjectDetails($routeParams.projectName).then((project) => {
    $scope.projectToDisplay = project;
    $scope.projectToDisplay.url = $sce.trustAsResourceUrl($scope.projectToDisplay.url)
  })

})
