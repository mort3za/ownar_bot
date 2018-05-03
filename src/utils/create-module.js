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
    const { url: url_1, data: data_1, headers: headers_1 } = requestInterceptor("page/module", _data);
    
    try {
      const response_1 = await axios({
        method: "POST",
        url: url_1,
        data: data_1,
        headers: headers_1
      });
      responseHandler(undefined, response_1.data, resolve, reject);
      console.log('on create module', response_1.data);
    } catch (error) {
      responseHandler(error, undefined, resolve, reject); 
    }
  });
};

module.exports = createModule;
