const request = require("request");

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/${breedName.slice(0,4)}`, (error, response, body) => {
    
    if (error) {
      callback(error);
      return;
    } 

    const data = JSON.parse(body);  
    if (data.description === undefined) {
      callback(null,"Breed not found!!");
      return;
      
    }
    callback(null,data.description);
    
  });

};

module.exports = {
  fetchBreedDescription
};