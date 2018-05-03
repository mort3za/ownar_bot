const responseHandler = (responseBody = {}, resolve, reject) => {
  if (responseBody.status === 'OK') {
    resolve(responseBody);
  } else {
    reject(responseBody);
  }
}
module.exports = responseHandler;