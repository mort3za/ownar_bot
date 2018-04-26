const Markup = require('telegraf/markup')
const bot = require('../bot');
const commands = require('../commands');

const startManager = ctx => {
    ctx.reply('SOME DESCRIPTIONS ONCE. Select a module', Markup.inlineKeyboard([
      Markup.callbackButton('New Marker', 'marker'),
      Markup.callbackButton('Help', 'help'),
      Markup.callbackButton('Download', 'download'),
      Markup.callbackButton('Contact', 'contact'),
    ]).extra())
}

bot.command(commands.start, startManager);

module.exports = startManager;
