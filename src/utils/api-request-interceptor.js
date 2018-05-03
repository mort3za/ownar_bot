const interceptor = (apiPath, data = {}, headers = {}) => {
  const url = `${process.env.BASE_API}${apiPath}`;
  const _data = {
    userId: process.env.USER_ID,
    token: process.env.TOKEN
  };
  const __data = Object.assign(_data, data);
  return {data: __data, url, headers}
}

module.exports = interceptor;