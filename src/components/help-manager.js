const bot = require("../bot");
const actions = require("../actions");
const { translate } = require("../utils/translate");
const { help: helpKeyboard } = require("../utils/keyboards");

const helpManager = ({ reply }) => {
  reply(translate(37), helpKeyboard);
};

bot.hears(actions.help, helpManager);
bot.hears(actions.help1, ({ reply }) => {
  reply(translate(30));
});
bot.hears(actions.help2, ({ reply }) => {
  reply(translate(32));
});
bot.hears(actions.help3, ({ reply }) => {
  reply(translate(34));
});
bot.hears(actions.help4, ({ reply }) => {
  reply(translate(36));
});

module.exports = helpManager;
