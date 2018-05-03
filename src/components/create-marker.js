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
const quality = 1; // 0 .. 3 FIXME: SET 2
const createPage = require('../utils/create-page');

const uploadMarker = new Scene("uploadMarker");
uploadMarker.on("photo", async ({ telegram, message, scene }) => {
  const photo = message.photo;
  const file_id = photo[quality].file_id;

  const { local_path: markerPath } = await download({ file_id, telegram }).catch(
    console.error
  );

  const marker = await upload({
    data: { myfile: fs.createReadStream(markerPath) },
    headers: { from: "page" }
  })
  .catch(console.error);

  if(!marker) return;
  const page = await createPage(marker);
  if(!(page && page.pageId)) return;
  scene.enter('createModule');
});

uploadMarker.hears(actions.back_0, ctx => {
  console.log("leave uploadMarker");
  ctx.scene.leave();
  startManager(ctx);
});

const createModule = new Scene("createModule");
createModule.on('text', ctx => {
  console.log('create module text...');
});

const stage = new Stage();
stage.register(uploadMarker);
stage.register(createModule);
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
