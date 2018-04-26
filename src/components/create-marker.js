// const Markup = require('telegraf/markup')

const markerCreate = ({answerCbQuery, reply}) => {
    answerCbQuery('');
    reply('Upload a marker now');
}

module.exports = markerCreate;
