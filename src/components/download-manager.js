const bot = require("../bot");
const actions = require("../actions");
const { translate } = require("../utils/translate");
const { download: downloadKeyboard } = require('../utils/keyboards');

const downloadManager = ({ reply }) => {
  reply(translate(16), downloadKeyboard);
};

bot.hears(actions.download, downloadManager);
bot.hears(actions.download1, ({ reply }) => {
  reply(translate(40));
});
bot.hears(actions.download2, ({ reply }) => {
  reply(translate(39));
});

module.exports = downloadManager;
