app.controller('projectCtrl', function ($scope, $sce, $routeParams, projectFactory) {
  $scope.projectToDisplay = "";

  projectFactory.getSpecificProjectDetails($routeParams.projectName).then((project) => {
    $scope.projectToDisplay = project;
    $scope.projectToDisplay.url = $sce.trustAsResourceUrl($scope.projectToDisplay.url)
  })

})
