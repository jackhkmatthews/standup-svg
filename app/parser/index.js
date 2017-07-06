const StandupParser  = require('standup-parser').StandupParser;
const fs             = require('fs');

const getFilePath    = require('./parser-methods').getFilePath;

const inputFolderPath = `${__dirname}/../../input`;

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
