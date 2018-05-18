const bot = require("../bot");
const commands = require("../commands");
const actions = require("../actions");
const { translate } = require("../utils/translate");
const { start: startKeyboard } = require("../utils/keyboards");

const startManager = (ctx) => {
  console.log("start...");

  ctx.reply(translate(14), startKeyboard);
};

bot.hears(actions.back_0, ctx => {
  const { session } = ctx;
  session.pageId = null;
  session.marker = null;
  startManager(ctx);
});

bot.command(commands.start, startManager);

module.exports = startManager;
