const session = require("telegraf/session");
const Stage = require("telegraf/stage");
const { leave } = Stage;
const startManager = require('./components/start-manager');
const createMarker = require('./components/create-marker');
const helpManager = require('./components/help-manager');
const downloadManager = require('./components/download-manager');
const contactManager = require('./components/contact-manager');
const bot = require('./bot');


const stage = new Stage();
// const stage = new Stage([videoWizard, callWizard], {})
// const stage = new Stage()
// stage.register(videoWizard);
// stage.register(startManager);

bot.use(session());
bot.use(stage.middleware());
bot.start(startManager);
bot.command("cancel", leave());
bot.action("marker", createMarker);
bot.action("help", helpManager);
bot.action("download", downloadManager);
bot.action("contact", contactManager);
bot.catch(err => console.log("Ooops", err));
bot.startPolling();
module.exports = bot;
