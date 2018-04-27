const Markup = require("telegraf/markup");
const bot = require("../bot");
const commands = require("../commands");
const { translate } = require("../utils/translate");
const actions = require('../actions');

const startManager = ctx => {
  
  console.log('start...');

  ctx.reply(
    translate(14),
    Markup.keyboard(
      [
        Markup.callbackButton(translate(13), actions.marker),
        Markup.callbackButton(translate(12), actions.help),
        Markup.callbackButton(translate(11), actions.download),
        Markup.callbackButton(translate(10), actions.contact),
        Markup.callbackButton(translate(9), actions.settings),
        Markup.callbackButton(translate(8), actions.about), // TODO:
      ],
      { columns: 2 }
    )
    .oneTime()
    .resize()
    .extra()
  );
};

bot.command(commands.start, startManager);

module.exports = startManager;
