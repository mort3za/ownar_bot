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
  ctx.reply(translate(24), finalKeyboard);
};

const doFinalStep = async ctx => {
  console.log("do final step");
  const { reply, replyWithPhoto, session, scene, answerCbQuery } = ctx;
  let file_id;
  try {
    file_id = session.marker[quality].file_id;
    await replyWithPhoto(file_id, { caption: translate(25) });
    reply(translate(26), startKeyboard);
    reset(ctx);
    scene.leave();
  } catch (e) {
    answerCbQuery(translate(28));
  }
};

bot.action(actions.finish_marker, doFinalStep);

module.exports = finalManager;
