const bot = require('../bot');
const actions = require('../actions');
const strings = require('../strings/fa-IR');
// const Markup = require('telegraf/markup')

const markerCreate = ({answerCbQuery, reply}) => {
    answerCbQuery('');
    reply(strings['4']);
}

bot.action(actions.marker, markerCreate);

// module.exports = markerCreate;
