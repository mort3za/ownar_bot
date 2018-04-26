const Markup = require('telegraf/markup')

const startManager = ctx => {
    ctx.reply('SOME DESCRIPTIONS ONCE. Select a module', Markup.inlineKeyboard([
      Markup.callbackButton('New Marker', 'marker'),
      Markup.callbackButton('Help', 'help'),
      Markup.callbackButton('Download', 'download'),
      Markup.callbackButton('Contact', 'contact'),
    ]).extra())
}

module.exports = startManager;
