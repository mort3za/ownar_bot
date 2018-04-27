const Stage = require("telegraf/stage");
const session = require("telegraf/session");
const bot = require('../bot');
const {setLanguage} = require('../utils/translate');

const stage = new Stage();
// const stage = new Stage([videoWizard, callWizard], {})
// const stage = new Stage()
// stage.register(videoWizard);
// stage.register(startManager);

bot.use(session());
bot.use(setLanguage);
bot.use(stage.middleware());
