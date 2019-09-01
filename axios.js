var axios = require("axios");

// Run the axios.get function...
// The axios.get function takes in a URL and returns a promise
axios.get("(https://www.npmjs.com/package/node-spotify-api)").then(
  function(response) {
    // if successful then log the result of the page
    console.log(response.data);
  },

  function(error) {
    if (error.response) {
      // Server responded with a status code
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // Request was made and no response received
      // `error.request` this object returns details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // log what happend when trying to connect and what the Error is
      console.log("Error", error.message);
    }
    console.log(error.config);
  }
);
