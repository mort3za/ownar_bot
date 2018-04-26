const session = require("telegraf/session");
const Stage = require("telegraf/stage");
const { leave } = Stage;
require('./components/start-manager');
require('./components/create-marker');
require('./components/help-manager');
require('./components/download-manager');
require('./components/contact-manager');
const bot = require('./bot');
const commands = require('./commands');


const stage = new Stage();
// const stage = new Stage([videoWizard, callWizard], {})
// const stage = new Stage()
// stage.register(videoWizard);
// stage.register(startManager);

bot.use(session());
bot.use(stage.middleware());
bot.command(commands.cancel, leave());
bot.catch(err => console.log("Ooops", err));
bot.startPolling();
module.exports = bot;
