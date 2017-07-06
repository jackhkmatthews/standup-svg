const fs             = require('fs');

function getFileName(folderPath) {
  const fileNames = fs.readdirSync(folderPath, (err, filenames) => filenames);
  const fileName = fileNames[0];
  return fileName.split('.')[0];
}

module.exports = {
  getFileName: getFileName
};
