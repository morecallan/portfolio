"use strict";

app.factory('technologiesFactory', function ($q, $http) {

  //Returns the full technologies list with details.
    const getAllTechnologiesDetails = () => {
        let technologies = [];

        return $q(function(resolve, reject){
          $http.get(`../data/technologies.json`)
            .success(function(returnObject){
              Object.keys(returnObject).forEach((key) => {
                technologies.push(returnObject[key])
                            })
                resolve(projects);
            })
            .error(function(error){
                reject(error);
            })
        });
    };

  return {getAllTechnologiesDetails};
});
