const bot = require('../bot');
const actions = require('../actions');
const { translate } = require("../utils/translate");
const { setAccount: setAccountKeyboard } = require('../utils/keyboards');

const settingsManager = ({reply}) => {
    reply(translate(20), setAccountKeyboard)
}

bot.hears(actions.settings, settingsManager);

bot.action(actions.settings1, ({reply, answerCbQuery}) => {
  answerCbQuery('');
  reply('Settings 2 (set account)...');
});

module.exports = settingsManager;
