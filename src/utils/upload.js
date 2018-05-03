const request = require("request");
const responseHandler = require("./api-response-handler");
const requestInterceptor = require("./api-request-interceptor");

async function uploadFile({ data: _data, headers: _headers = {} }) {
  

  return new Promise((resolve, reject) => {
    const {url, data, headers} = requestInterceptor('create/doUpload', _data, _headers);

    request(
      {
        method: "POST",
        uri: url,
        headers: headers,
        formData: data
      },
      function(err, response, body) {
        console.log('body ===>', body);
        responseHandler(err, body, resolve, reject);
      }
    );
  });
}

module.exports = uploadFile;
