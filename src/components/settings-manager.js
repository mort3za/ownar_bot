const Markup = require('telegraf/markup')
const bot = require('../bot');
const actions = require('../actions');

const settingsManager = ({reply, answerCbQuery}) => {
    answerCbQuery('');
    reply('Select a setting topic', Markup.inlineKeyboard([
      Markup.callbackButton('Set Language', actions.settings1),
      Markup.callbackButton('Set Account', actions.settings2),
    ]).extra())
}

bot.action(actions.settings, settingsManager);

bot.action(actions.settings1, ({reply, answerCbQuery}) => {
  answerCbQuery('');
  reply('Select language', Markup.inlineKeyboard([
    Markup.callbackButton('Persian', actions.settings1_1),
    Markup.callbackButton('English', actions.settings1_2),
  ]).extra());
});
bot.action(actions.settings1_1, ({reply, answerCbQuery, session}) => {
  answerCbQuery('');
  session.lang = 'fa-IR';
  reply('Done');
});
bot.action(actions.settings1_2, ({reply, answerCbQuery, session}) => {
  answerCbQuery('');
  session.lang = 'en-US';
  reply('Done');
});

bot.action(actions.settings2, ({reply, answerCbQuery}) => {
  answerCbQuery('');
  reply('Settings 2 (set account)...');
});

module.exports = settingsManager;
