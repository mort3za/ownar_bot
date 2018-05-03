const axios = require("axios");
const responseHandler = require("../utils/api-response-handler");
const requestInterceptor = require("../utils/api-request-interceptor");

const createPage = (
  { location: imageAddress, imageIndexId },
  title = String(new Date().getTime())
) => {
  return new Promise(async (resolve, reject) => {
    const _data = {
      categoryId: process.env.CATEGORY_ID,
      firstCategoryId: process.env.CATEGORY_ID,
      pages: [
        {
          imageAddress,
          imageIndexId
        }
      ],
      title
    };
    const { url, data, headers } = requestInterceptor("create/doCreate", _data);
    try {
      const response = await axios({
        method: "POST",
        url,
        data,
        headers
      });
      console.log("page created...", response);
      responseHandler(undefined, response, resolve, reject);
    } catch (error) {
      responseHandler(error, undefined, resolve, reject); 
    }
  });
};

module.exports = createPage;
