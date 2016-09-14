app.controller('splashCtrl', function ($scope, $rootScope, projectFactory) {
  $scope.frontendProjects = [];
  $scope.backendProjects = [];

  $rootScope.projectSelected = false;
  $scope.selectedProject = "";

  $scope.aboutButtonClicked = false;

  $rootScope.clickAboutButton = () => {
    $scope.aboutButtonClicked = !$scope.aboutButtonClicked;
  }

  $scope.closeModal = () => {
    $scope.aboutButtonClicked = false;
  }

  projectFactory.getAllProjectDetails().then((projects)=> {
    projects.forEach(project => {
      if (project.projectType == "frontend") {
        $scope.frontendProjects.push(project)
      }
      else if (project.projectType == "backend") {
        $scope.backendProjects.push(project)
      }
    });
    $scope.projects = projects;
  })

  $scope.displayProjectDetails = (currentSelectedProject) => {
    $scope.selectedProject = currentSelectedProject;
    $rootScope.projectSelected = true;
  }
})
