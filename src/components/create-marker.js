const bot = require('../bot');
const actions = require('../actions');
const { translate } = require('../utils/translate');

const markerCreate = ({reply}) => {
    reply(translate(4));
}

bot.hears(actions.marker, markerCreate);
