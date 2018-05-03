const Fs = require("fs");
const Path = require("path");
const Axios = require("axios");

async function downloadFile({file_id, telegram}) {
  const { file_path } = await telegram.getFile(file_id);
  const ext = file_path.split('.')[1];
  const path = Path.resolve(
    __dirname,
    "..",
    "..",
    "temp",
    `${file_id}.${ext}`
  );
  const url = `https://api.telegram.org/file/bot${process.env.BOT_TOKEN}/${file_path}`;

  // axios image download with response type "stream"
  const response = await Axios({
    method: "GET",
    url: url,
    responseType: "stream"
  });

  // pipe the result stream into a file on disc
  const file = Fs.createWriteStream(path);
  response.data.pipe(file);

  // return a promise and resolve when download finishes
  return new Promise((resolve, reject) => {
    response.data.on("end", () => {
      file.close(() => {
        resolve({local_path: path});
      });
    });

    response.data.on("error", (err) => {
      console.log('error', err);
      file.close();
      reject();
    });
  });
}

module.exports = downloadFile;