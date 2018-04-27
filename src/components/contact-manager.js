const Markup = require("telegraf/markup");
const bot = require("../bot");
const actions = require("../actions");
const { translate } = require("../utils/translate");

const contactManager = ({ reply }) => {
  reply(
    translate(5),
    Markup.inlineKeyboard([
      Markup.callbackButton("Email", actions.contact1),
      Markup.callbackButton("Telegram", actions.contact2),
    ]).extra()
  );
};

bot.hears(actions.contact, contactManager);
bot.action(actions.contact1, ({ reply, answerCbQuery }) => {
  answerCbQuery("");
  reply(translate(6));
});
bot.action(actions.contact2, ({ reply, answerCbQuery }) => {
  answerCbQuery("");
  reply(translate(7));
});

module.exports = contactManager;
