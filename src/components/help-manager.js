const bot = require("../bot");
const actions = require("../actions");
const { help: helpKeyboard } = require("../utils/keyboards");

const helpManager = ({ reply }) => {
  reply("Select a help topic", helpKeyboard);
};

bot.hears(actions.help, helpManager);
bot.action(actions.help1, ({ reply, answerCbQuery }) => {
  answerCbQuery("");
  reply("Help 1...");
});
bot.action(actions.help2, ({ reply, answerCbQuery }) => {
  answerCbQuery("");
  reply("Help 2...");
});

module.exports = helpManager;
