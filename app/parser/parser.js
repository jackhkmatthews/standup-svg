const StandupParser  = require('standup-parser').StandupParser;
const fs             = require('fs');

const inputFolderPath = `${__dirname}/../../input`;

function getFilePath(folderPath) {
  const fileNames = fs.readdirSync(folderPath, (err, filenames) => filenames);
  const fileName  = fileNames[0];
  const filePath  = `${folderPath}/${fileName}`;
  return filePath;
}

const inputFilePath = getFilePath(inputFolderPath);

const standupParser  = new StandupParser;

standupParser.parse(inputFilePath)
  .then(json => {
    fs.writeFile(`${__dirname}/../temp/march-2017.json`, JSON.stringify(json), 'utf8', function (err) {
      if (err) {
        return console.log(err);
      }
      console.log('The file was saved!');
    });
  });

module.exports = {
  getFilePath: getFilePath
};
