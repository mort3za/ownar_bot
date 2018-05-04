const bot = require("../bot");
const actions = require("../actions");
const { translate } = require("../utils/translate");
const { contact: contactKeyboard } = require("../utils/keyboards");

const contactManager = ({ reply }) => {
  reply(translate(5), contactKeyboard);
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
