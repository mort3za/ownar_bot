// const bot = require('./bot');

const setLanguage = (ctx, next) => {
  console.log('set lang');
  ctx.state.language = process.env.LANGUAGE;
  return next();
};

const translate = () => {

}

module.exports = { translate, setLanguage };