const axios = require("axios");

class HttpClient {

  get(parameters) {
    return new Promise((resolve, reject) => {
      const { url } = parameters;
      
      axios
        .get(url)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

}


module.exports = new HttpClient;

