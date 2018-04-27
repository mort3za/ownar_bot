// const Stage = require("telegraf/stage");
// const { leave } = Stage;
// const commands = require('./commands');
const bot = require('./bot');
require('./middlewares');
require('./components/start-manager');
require('./components/create-marker');
require('./components/help-manager');
require('./components/download-manager');
require('./components/contact-manager');
require('./components/settings-manager');
// bot.command(commands.cancel, leave());
bot.catch(err => console.log("Ooops", err));
bot.startPolling();
