const fs = require("fs");
const bot = require("../bot");
const actions = require("../actions");
const Markup = require("telegraf/markup");
const { translate } = require("../utils/translate");
const Scene = require("telegraf/scenes/base");
const Stage = require("telegraf/stage");
const startManager = require("./start-manager");
const download = require("../utils/download");
const upload = require("../utils/upload");
const quality = 1; // 0 .. 3
const path = require("path");

const uploadMarker = new Scene("uploadMarker");
uploadMarker.on("photo", async ({ telegram, message }) => {
  const photo = message.photo;
  const file_id = photo[quality].file_id;
  console.log("file_id", file_id);
  const { local_path } = await download({ file_id, telegram }).catch(
    console.error
  );

  const markerPath = path.resolve(local_path);
  console.log("on download", markerPath);
  setTimeout(() => {
    upload({
      data: { myfile: fs.createReadStream(markerPath) },
      headers: { from: "page" }
    }).catch(console.error);
  }, 1000);
});
uploadMarker.hears(actions.back_0, ctx => {
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
