const axios = require("axios");
const responseHandler = require("../utils/api-response-handler");
const requestInterceptor = require("../utils/api-request-interceptor");

const createModule = (
  pageId,
  _module,
  asset,
) => {
  return new Promise(async (resolve, reject) => {
    const module = Object.assign(_module, {content: asset});
    const _data = {
      module,
      pageId,
    };
    const { url, data, headers } = requestInterceptor("page/module", _data);
    
    try {
      const response = await axios({
        method: "POST",
        url,
        data,
        headers
      });
      responseHandler(undefined, response.data, resolve, reject);
      console.log('on create module', response.data);
    } catch (error) {
      responseHandler(error, undefined, resolve, reject); 
    }
  });
};

module.exports = createModule;
