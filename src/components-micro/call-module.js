const Composer = require("telegraf/composer");
// const Markup = require("telegraf/markup");
const WizardScene = require("telegraf/scenes/wizard");

const stepHandler2 = new Composer();

const superWizard = new WizardScene('call-wizard',
  stepHandler2.hears(/call/gi, ctx => {
    ctx.reply('heard call');
    return ctx.wizard.next();
  }),
  // stepHandler2,
  (ctx) => {
    ctx.reply('call Step 3')
    return ctx.wizard.next()
  },
  (ctx) => {
    ctx.reply('call Step 4')
    return ctx.wizard.next()
  },
  (ctx) => {
    ctx.reply('call Done')
    return ctx.scene.leave()
  },
)

module.exports = superWizard;
