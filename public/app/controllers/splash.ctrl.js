app.controller('splashCtrl', function ($scope, $rootScope, projectFactory) {
  $scope.frontendProjects = [];
  $scope.backendProjects = [];

  $rootScope.projectSelected = false;
  $scope.selectedProject = "";

  $rootScope.aboutButtonClicked = false;
  $rootScope.resumeButtonClicked = false;

  $rootScope.clickAboutButton = () => {
    $rootScope.aboutButtonClicked = !$rootScope.aboutButtonClicked;
  }

  $rootScope.clickResumeButton = () => {
    $rootScope.resumeButtonClicked = !$rootScope.resumeButtonClicked;
  }

  $rootScope.closeAllModals = () => {
    console.log("close all the modals!")
    $rootScope.aboutButtonClicked = false;
    $rootScope.resumeButtonClicked = false;
  }

  $scope.closeModal = () => {
    $scope.aboutButtonClicked = false;
  }

  projectFactory.getAllProjectDetails().then((projects)=> {
    projects.forEach(project => {
      project.active = false;
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
    $scope.frontendProjects.forEach(project => {
      project.active = false
    });
    $scope.backendProjects.forEach(project => {
      project.active = false
    });
    currentSelectedProject.active = true;
    $scope.selectedProject = currentSelectedProject;
    $rootScope.projectSelected = true;
  }
})
