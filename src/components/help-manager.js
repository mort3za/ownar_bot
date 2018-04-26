const Markup = require('telegraf/markup')
const bot = require('../bot');

const helpManager = ({reply, answerCbQuery}) => {
    answerCbQuery('');
    reply('Select a help topic', Markup.inlineKeyboard([
      Markup.callbackButton('Help 1', 'help-1'),
      Markup.callbackButton('Help 2', 'help-2'),
    ]).extra())
}

bot.action('help-1', ({reply, answerCbQuery}) => {
  answerCbQuery('');
  reply('Help 1...');
});

module.exports = helpManager;
