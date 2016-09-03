app.controller('projectCtrl', function ($scope, $routeParams, projectFactory) {
  $scope.projectToDisplay = "";

  projectFactory.getSpecificProjectDetails($routeParams.projectName).then((project) => {
    $scope.projectToDisplay = project;
  })

})
