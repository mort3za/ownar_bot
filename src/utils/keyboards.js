const Markup = require("telegraf/markup");
const { translate } = require("./translate");
const actions = require("../actions");

const keyboards = {
  start: Markup.keyboard(
    [
      Markup.callbackButton(translate(13), actions.marker),
      Markup.callbackButton(translate(12), actions.help),
      Markup.callbackButton(translate(11), actions.download),
      Markup.callbackButton(translate(10), actions.contact),
      Markup.callbackButton(translate(9), actions.settings),
      Markup.callbackButton(translate(8), actions.about) // TODO:
    ],
    { columns: 2 }
  )
    .oneTime()
    .resize()
    .extra()
};

module.exports = keyboards;