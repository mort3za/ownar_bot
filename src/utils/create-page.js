const axios = require("axios");
const responseHandler = require("../utils/api-response-handler");
const requestInterceptor = require("../utils/api-request-interceptor");

const createPage = (
  { location: imageAddress, imageIndexId },
  title = String(new Date().getTime())
) => {
  return new Promise((resolve, reject) => {
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
    axios({
      method: "POST",
      url,
      data,
      headers
    })
      .then(({ data }) => {
        console.log("page created...", data);
        responseHandler(undefined, data, resolve, reject);
      })
      .catch(err => {
        responseHandler(err, undefined, resolve, reject);
      });
  });
};

module.exports = createPage;
