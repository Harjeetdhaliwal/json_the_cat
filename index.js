const { fetchBreedDescription } = require("./breedFetcher");
const args = process.argv.slice(2)[0];


fetchBreedDescription(args, (err, desc) => {

  console.log("Error is :", err);


  console.log("Description:" ,desc) ;

});

