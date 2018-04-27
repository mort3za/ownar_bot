const setLanguage = (ctx, next) => {
  ctx.session.lang = ctx.session.lang || process.env.APP_LANG;
  return next();
};

const translate = (keyId, lang) => {
  const strings = require(`../strings/${lang}`);
  const value = strings[keyId];
  if (value) {
    return value;
  }
  return 'Translation Not Found';
}

module.exports = { translate, setLanguage };