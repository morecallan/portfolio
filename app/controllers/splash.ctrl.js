app.controller('splashCtrl', function ($scope, projectFactory) {
  projectFactory.getAllProjectDetails();
  console.log("hello from splash")
})
