const Markup = require('telegraf/markup')
const bot = require('../bot');

const downloadManager = ({reply, answerCbQuery}) => {
    answerCbQuery('');
    reply('Select a download topic', Markup.keyboard([
      Markup.callbackButton('Download iOS', 'download-1'),
      Markup.callbackButton('Download Android', 'download-2'),
    ]).extra())
}

bot.action('download-1', ({reply, answerCbQuery}) => {
  answerCbQuery('');
  reply('Download 1...');
});

module.exports = downloadManager;
