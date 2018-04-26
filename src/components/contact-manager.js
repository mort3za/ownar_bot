const Markup = require('telegraf/markup')
const bot = require('../bot');
const actions = require('../actions');

const contactManager = ({reply, answerCbQuery}) => {
    answerCbQuery('');
    reply('Select a contact topic', Markup.inlineKeyboard([
      Markup.callbackButton('Email', actions.contact1),
      Markup.callbackButton('Telegram', actions.contact2),
    ]).extra())
}

bot.action(actions.contact, contactManager);
bot.action(actions.contact1, ({reply, answerCbQuery}) => {
  answerCbQuery('');
  reply('Contact 1...');
});
bot.action(actions.contact2, ({reply, answerCbQuery}) => {
  answerCbQuery('');
  reply('Contact 2...');
});

module.exports = contactManager;
