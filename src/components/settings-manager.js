const Markup = require('telegraf/markup')
const bot = require('../bot');
const actions = require('../actions');
const { translate } = require("../utils/translate");

const settingsManager = ({reply}) => {
    reply(translate(20), Markup.keyboard([
      Markup.callbackButton('Set Account', actions.settings2),
    ]).extra())
}

bot.hears(actions.settings, settingsManager);

bot.action(actions.settings1, ({reply, answerCbQuery}) => {
  answerCbQuery('');
  reply('Settings 2 (set account)...');
});

module.exports = settingsManager;
