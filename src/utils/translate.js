const strings = require(`../strings/${process.env.APP_LANG}`);

const translate = (keyId) => {
  const value = strings[keyId];
  if (value) {
    return value;
  }
  return 'Translation Not Found';
}

module.exports = { translate };