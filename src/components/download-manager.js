const Markup = require("telegraf/markup");
const bot = require("../bot");
const actions = require("../actions");
const {translate} = require("../utils/translate");

const downloadManager = ({ reply }) => {
  reply(
    translate(16),
    Markup.keyboard(
      [
        Markup.callbackButton(translate(17), actions.download1),
        Markup.callbackButton(translate(18), actions.download2)
      ],
      { columns: 1 }
    )
      .oneTime()
      .extra()
  );
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
