const bot = require("../bot");
const commands = require("../commands");
const { translate } = require("../utils/translate");
const { start: startKeyboard } = require("../utils/keyboards");

const startManager = (ctx) => {
  console.log("start...");

  ctx.reply(translate(14), startKeyboard);
};

bot.command(commands.start, startManager);

module.exports = startManager;
