"use strict";

app.factory('projectFactory', function ($q, $http) {

  //Returns the full project list with details.
    const getAllProjectDetails = () => {
        let projects = [];

        return $q(function(resolve, reject){
          $http.get(`../data/projects_temp.json`)
            .success(function(returnObject){
              Object.keys(returnObject).forEach((key) => {
                Object.keys(returnObject[key]).forEach((subkey) => {
                  returnObject[key][subkey].projectType = key;
                  returnObject[key][subkey].key = subkey;
                  projects.push(returnObject[key][subkey])
                })
              })
                resolve(projects);
            })
            .error(function(error){
                reject(error);
            })
        });
    };

    //Returns only a specific project with details.
      const getSpecificProjectDetails = (projectTitle) => {
        let projectToSend = "";
          return $q(function(resolve, reject){
            $http.get(`../data/projects_temp.json`)
              .success(function(returnObject){
                Object.keys(returnObject).forEach((key) => {
                  Object.keys(returnObject[key]).forEach((subkey) => {
                    if (subkey == projectTitle) {
                      returnObject[key][subkey].projectType = key;
                      returnObject[key][subkey].key = subkey;
                      projectToSend = returnObject[key][subkey];
                    }
                  })
                })
                resolve(projectToSend);
              })
              .error(function(error){
                  reject(error);
              })
          });
      };
  return {getAllProjectDetails, getSpecificProjectDetails};
});
