const Markup = require('telegraf/markup')

const contactManager = ({reply, answerCbQuery}) => {
    answerCbQuery('');
    reply('Select a contact topic', Markup.inlineKeyboard([
      Markup.callbackButton('Email', 'contact-1'),
      Markup.callbackButton('Telegram', 'contact-2'),
    ]).extra())
}

module.exports = contactManager;
