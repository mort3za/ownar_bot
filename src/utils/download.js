const fs = require("fs");
const path = require("path");
const axios = require("axios");

async function downloadFile({file_id, telegram}) {
  const { file_path } = await telegram.getFile(file_id);
  const ext = file_path.split('.')[1];
  const dest_path = path.resolve(
    __dirname,
    "..",
    "..",
    "temp",
    `${file_id}.${ext}`
  );
  const url = `https://api.telegram.org/file/bot${process.env.BOT_TOKEN}/${file_path}`;

  // axios image download with response type "stream"
  const response = await axios({
    method: "GET",
    url: url,
    responseType: "stream"
  });

  // pipe the result stream into a file on disc
  const file = fs.createWriteStream(dest_path);
  response.data.pipe(file);

  // return a promise and resolve when download finishes
  return new Promise((resolve, reject) => {
    response.data.on("end", () => {
      file.close(() => {
        resolve({local_path: dest_path});
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