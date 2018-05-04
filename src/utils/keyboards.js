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
    .extra(),

  back: Markup.keyboard(
    [Markup.callbackButton(translate(19), actions.back_0)],
    {
      columns: 2
    }
  )
    .oneTime()
    .resize()
    .extra(),

  setAccount: Markup.keyboard([
    Markup.callbackButton("Set Account", actions.settings2)
  ]).extra(),

  contact: Markup.inlineKeyboard([
    Markup.callbackButton("Email", actions.contact1),
    Markup.callbackButton("Telegram", actions.contact2)
  ]).extra(),

  keyboard: Markup.keyboard(
    [
      Markup.callbackButton(translate(17), actions.download1),
      Markup.callbackButton(translate(18), actions.download2)
    ],
    { columns: 1 }
  )
    .oneTime()
    .extra(),

  help: Markup.keyboard([
    Markup.callbackButton("Help 1", actions.help1),
    Markup.callbackButton("Help 2", actions.help2)
  ]).extra(),

  final: Markup.inlineKeyboard([
    Markup.callbackButton(translate(22), actions.finish_marker)
  ])
};

module.exports = keyboards;
