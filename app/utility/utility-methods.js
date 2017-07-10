const fs          = require('fs');
const rimraf      = require('rimraf');

function clearFolder(folderPath){
  return new Promise(resolve => {
    rimraf(folderPath, () => {
      if (!fs.existsSync(folderPath)){
        fs.mkdirSync(folderPath);
      }
      resolve();
    });
  });
}

module.exports = {
  clearFolder: clearFolder
};