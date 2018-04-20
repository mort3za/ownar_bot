require("dotenv").config();
const Telegraf = require("telegraf");
const session = require("telegraf/session");
const Stage = require("telegraf/stage");
const { leave } = Stage;
const videoModule = require('./components/video-module');


const stage = new Stage();
stage.register(videoModule);

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.use(session());
bot.use(stage.middleware());
bot.start(ctx => ctx.scene.enter("videoModule"));
bot.command("cancel", leave());
bot.catch(err => console.log("Ooops", err));
bot.startPolling();
module.exports = bot;
