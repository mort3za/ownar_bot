const interceptor = (apiPath, data = {}, headers = {}) => {
  const url = `${process.env.BASE_API}${apiPath}`;
  const _data = {
    userId: process.env.USER_ID,
    token: process.env.TOKEN
  };
  const _headers = {
    "Accept": "application/json, text/plain, */*",
    "Content-Type": "text/plain;charset=utf-8"
  };
  const __data = Object.assign(_data, data);
  const __headers = Object.assign(_headers, headers);
  return { data: __data, url, headers: __headers };
};

module.exports = interceptor;
