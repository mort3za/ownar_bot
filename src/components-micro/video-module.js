const Composer = require("telegraf/composer");
// const Markup = require("telegraf/markup");
const WizardScene = require("telegraf/scenes/wizard");

const stepHandler = new Composer();
// stepHandler.action("next", ctx => {
//   ctx.reply("stephandler on next action 1");
//   return ctx.wizard.next();
// });

const videoWizard = new WizardScene('video-wizard',
  stepHandler.hears(/vid/gi, ctx => {
    ctx.reply('heard Video');
    return ctx.wizard.next();
  }),
  stepHandler.on('photo', ctx => {
    ctx.reply('Thanks!');
    return ctx.wizard.next();
  }),
  // stepHandler,
  (ctx) => {
    ctx.reply('Step 2')
    return ctx.wizard.next()
  },
  (ctx) => {
    ctx.reply('Step 3')
    return ctx.wizard.next()
  },
  (ctx) => {
    ctx.reply('Done')
    return ctx.scene.leave()
  },
)

module.exports = videoWizard;
