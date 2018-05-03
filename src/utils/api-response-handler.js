const responseHandler = (error, responseBody = {}, resolve, reject) => {
  if (responseBody.status === 'OK') {
    resolve(responseBody);
  } else {
    reject(error || responseBody);
  }
}
module.exports = responseHandler;