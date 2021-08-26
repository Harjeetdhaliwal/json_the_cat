const args = process.argv.slice(2)[0];
const request = require("request");

request(`https://api.thecatapi.com/v1/breeds/${args.slice(0,4)}`, (error, response, body) => {
  const data = JSON.parse(body);
  if (data.message) {
    console.log(data.message);
    return;
  }
    
  if (data.description === undefined) {
    console.log("Breed not found!!");
    return;
    
  }
  console.log(data.description);
});