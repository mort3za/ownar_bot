const Markup = require("telegraf/markup");
const bot = require("../bot");
const actions = require("../actions");

const downloadManager = ({ reply, answerCbQuery }) => {
  answerCbQuery("");
  reply(
    "Select a download topic",
    Markup.inlineKeyboard(
      [
        Markup.callbackButton("Download iOS", actions.download1),
        Markup.callbackButton("Download Android", actions.download2)
      ],
      { columns: 1 }
    )
      .oneTime()
      .extra()
  );
};

bot.action(actions.download, downloadManager);
bot.action(actions.download1, ({ reply, answerCbQuery }) => {
  answerCbQuery("");
  reply("Download 1...");
});
bot.action(actions.download2, ({ reply, answerCbQuery }) => {
  answerCbQuery("");
  reply("Download 2...");
});

module.exports = downloadManager;
