const StandupParser  = require('standup-parser').StandupParser;
const fs             = require('fs');
const getFileName    = require('./parser-methods').getFileName;

const inputFileName = getFileName(`${__dirname}/../../input`);
const inputFilePath = `${__dirname}/../../input/${inputFileName}.txt`;

const standupParser  = new StandupParser;

standupParser.parse(inputFilePath)
  .then(json => {
    fs.writeFile(`${__dirname}/../temp/${inputFileName}.json`, JSON.stringify(json), 'utf8', function (err) {
      if (err) {
        return console.log(err);
      }
      console.log('The file was saved!');
    });
  });
