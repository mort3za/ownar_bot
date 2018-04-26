const Markup = require('telegraf/markup')
const bot = require('../bot');
const actions = require('../actions');

const helpManager = ({reply, answerCbQuery}) => {
    answerCbQuery('');
    reply('Select a help topic', Markup.inlineKeyboard([
      Markup.callbackButton('Help 1', actions.help1),
      Markup.callbackButton('Help 2', actions.help2),
    ]).extra())
}

bot.action(actions.help, helpManager);
bot.action(actions.help1, ({reply, answerCbQuery}) => {
  answerCbQuery('');
  reply('Help 1...');
});
bot.action(actions.help2, ({reply, answerCbQuery}) => {
  answerCbQuery('');
  reply('Help 2...');
});

module.exports = helpManager;
