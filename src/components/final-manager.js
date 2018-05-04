const Markup = require("telegraf/markup");
const bot = require("../bot");
const { translate } = require("../utils/translate");
const actions = require("../actions");
const quality = 1; // 1..3
const reset = require("../utils/reset-marker-session");
const {
  start: startKeyboard,
  final: finalKeyboard
} = require("../utils/keyboards");

const finalManager = ctx => {
  console.log("final...");

  ctx.reply(translate(24), finalKeyboard);
};

const doFinalStep = async ctx => {
  const { reply, replyWithPhoto, session, scene } = ctx;
  const file_id = session.marker[quality].file_id;
  await replyWithPhoto(file_id, { caption: translate(25) });
  reply(translate(26), startKeyboard);
  reset(ctx);
  scene.leave();
};

bot.action(actions.finish_marker, doFinalStep);

module.exports = finalManager;
