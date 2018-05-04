const bot = require("../bot");
const actions = require("../actions");
const { translate } = require("../utils/translate");
const { download: downloadKeyboard } = require('../utils/keyboards');

const downloadManager = ({ reply }) => {
  reply(translate(16), downloadKeyboard);
};

bot.hears(actions.download, downloadManager);
bot.action(actions.download1, ({ reply, answerCbQuery }) => {
  answerCbQuery("");
  reply("Download 1...");
});
bot.action(actions.download2, ({ reply, answerCbQuery }) => {
  answerCbQuery("");
  reply("Download 2...");
});

module.exports = downloadManager;
