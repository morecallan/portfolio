"use strict";

app.factory('projectFactory', function ($q, $http) {

  //Returns the full project list with details.
    const getAllProjectDetails = () => {
        let projects = [];

        return $q(function(resolve, reject){
          $http.get(`../data/projects.json`)
            .success(function(returnObject){
              Object.keys(returnObject).forEach((key) => {
                Object.keys(returnObject[key]).forEach((subkey) => {
                  console.log(returnObject[key][subkey])
                })
              })
                resolve(projects);
            })
            .error(function(error){
                console.log(error);
                reject(error);
            })
        });
    };
  return {getAllProjectDetails: getAllProjectDetails};
});
