const bot = require("../bot");
const actions = require("../actions");
const Markup = require("telegraf/markup");
const { translate } = require("../utils/translate");
const Scene = require("telegraf/scenes/base");
const Stage = require("telegraf/stage");
const startManager = require('./start-manager');
const download = require('../utils/download');
const quality = 1; // 0 .. 3

const uploadMarker = new Scene("uploadMarker");
uploadMarker.on('photo', ({telegram, message}) => {
    const photo = message.photo;
    console.log("got photo", message.photo);
    const file_id = photo[quality].file_id;
    download({file_id, telegram});
});
uploadMarker.hears(actions.back_0, (ctx) => {
  console.log("leave uploadMarker");
  ctx.scene.leave();
  startManager(ctx);
});

const stage = new Stage();
stage.register(uploadMarker);
bot.use(stage.middleware());

const markerCreate = ({ reply, scene }) => {
  reply(
    translate(4),
    Markup.keyboard([Markup.callbackButton(translate(19), actions.back_0)], {
      columns: 2
    })
      .oneTime()
      .resize()
      .extra()
  ).then(() => scene.enter("uploadMarker"));
};

bot.hears(actions.marker, markerCreate);
