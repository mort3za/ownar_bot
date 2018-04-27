const Markup = require("telegraf/markup");
const bot = require("../bot");
const actions = require("../actions");
const { translate } = require("../utils/translate");

const contactManager = ({ reply, answerCbQuery, session }) => {
  answerCbQuery("");
  reply(
    translate(5, session.lang),
    Markup.inlineKeyboard([
      Markup.callbackButton("Email", actions.contact1),
      Markup.callbackButton("Telegram", actions.contact2),
    ]).extra()
  );
};

bot.action(actions.contact, contactManager);
bot.action(actions.contact1, ({ reply, answerCbQuery, session }) => {
  answerCbQuery("");
  reply(translate(6, session.lang));
});
bot.action(actions.contact2, ({ reply, answerCbQuery, session }) => {
  answerCbQuery("");
  reply(translate(7, session.lang));
});

module.exports = contactManager;
