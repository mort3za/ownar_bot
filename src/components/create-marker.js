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
const createPageRequest = require("../utils/create-page");
const createModuleRequest = require("../utils/create-module");
const finalManager = require('./final-manager');

const uploadMarker = new Scene("uploadMarker");
uploadMarker.on("photo", async (ctx) => {
  const { telegram, message, scene, session, reply } = ctx;
  const photo = message.photo;
  console.log('photo', photo);
  const file_id = photo[quality].file_id;
  session.marker = photo;

  const { local_path: markerPath } = await download({
    file_id,
    telegram
  }).catch(console.error);

  const marker = await upload({
    data: { myfile: fs.createReadStream(markerPath) },
    headers: { from: "page" }
  }).catch(console.error);

  if (!marker) return;
  const pageTitle = `${message.from.id}-${new Date().getTime()}`;
  const page = await createPageRequest(marker, pageTitle);
  if (!(page && page.pageId)) return;
  session.pageId = page.pageId;
  await reply(translate(21));
  scene.enter("createModule");
});

uploadMarker.hears(actions.back_0, ctx => {
  console.log("leave uploadMarker");
  ctx.session.pageId = null;
  ctx.scene.leave();
  startManager(ctx);
});

const createModule = new Scene("createModule");
createModule.on("text", () => {
  console.log("------------create module text...------------");
});
createModule.on("video", async (ctx) => {
  const { message, telegram, session } = ctx;
  const video = message.video;
  const file_id = video.file_id;
  console.log("------------ create module video... ------------");
  console.log("video", JSON.stringify(video, undefined, 2));

  const { local_path: assetPath } = await download({
    file_id,
    telegram
  }).catch(console.error);

  const { location: upAsset } = await upload({
    data: { myfile: fs.createReadStream(assetPath) }
  }).catch(console.error);

  const module = {
    content: {},
    height: 100,
    left: 0,
    moduletype: "vid",
    top: 0,
    width: 100
  };
  await createModuleRequest(session.pageId, module, {
    title: "Video",
    videourl: upAsset
  }).catch(console.error);

  finalManager(ctx);
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
