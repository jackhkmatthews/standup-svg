const fs             = require('fs');

function getFilePath(folderPath) {
  const fileNames = fs.readdirSync(folderPath, (err, filenames) => filenames);
  const fileName  = fileNames[0];
  const filePath  = `${folderPath}/${fileName}`;
  return filePath;
}

module.exports = {
  getFilePath: getFilePath
};
