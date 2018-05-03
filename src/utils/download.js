const fs = require("fs");
const Path = require("path");
const https = require("https");

async function downloadFile({ file_id, telegram }) {
  const { file_path } = await telegram.getFile(file_id);
  const ext = file_path.split(".")[1];
  const path = Path.resolve(__dirname, "..", "..", "temp", `${file_id}.${ext}`);
  const url = `https://api.telegram.org/file/bot${
    process.env.BOT_TOKEN
  }/${file_path}`;

  // return a promise and resolve when download finishes
  return new Promise((resolve, reject) => {
    var file = fs.createWriteStream(path);
    https.get(url, function(response) {
      response.pipe(file);
      file.on("finish", function() {
        file.close(() => {
          resolve({ local_path: path });
        });
      });

      file.on("error", err => {
        console.log("error", err);
        reject();
      });
    });
  });
}

module.exports = downloadFile;
