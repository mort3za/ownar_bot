const Stage = require("telegraf/stage");
const session = require("telegraf/session");
const bot = require('../bot');

const stage = new Stage();
// const stage = new Stage([videoWizard, callWizard], {})
// const stage = new Stage()
// stage.register(videoWizard);
// stage.register(startManager);

bot.use(session());
bot.use(stage.middleware());
