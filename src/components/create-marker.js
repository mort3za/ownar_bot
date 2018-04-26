const bot = require('../bot');
const actions = require('../actions');
// const Markup = require('telegraf/markup')

const markerCreate = ({answerCbQuery, reply}) => {
    answerCbQuery('');
    reply('Upload a marker now');
}

bot.action(actions.marker, markerCreate);

// module.exports = markerCreate;
