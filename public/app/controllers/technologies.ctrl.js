app.controller('technologiesCtrl', function ($scope, $routeParams, technologiesFactory) {
  $scope.technologies = [];

  technologiesFactory.getAllTechnologiesDetails().then((technologies) => {
    $scope.technologies = technologies

    $(document).ready(function(){
      $('.tooltipped').tooltip({delay: 50});
    });
  })
})
