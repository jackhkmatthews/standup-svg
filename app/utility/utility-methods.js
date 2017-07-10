const fs          = require('fs');
const rimraf      = require('rimraf');
const moment      = require('moment');

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

function getDate(string){
  return moment(string, 'DD-MM-YYYY').toDate();
}

module.exports = {
  clearFolder: clearFolder,
  getDate: getDate
};