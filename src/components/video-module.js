const Scene = require("telegraf/scenes/base");

const videoModule = new Scene("videoModule");
videoModule.enter(ctx => ctx.reply("enter create page."));
videoModule.leave(ctx => ctx.reply("leave create page."));

module.exports = videoModule;