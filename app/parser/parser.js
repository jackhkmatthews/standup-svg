const StandupParser = require('standup-parser').StandupParser;
const standupParser = new StandupParser;
const fs = require('fs');

const filePath = `${__dirname}/../../input/march-2017.txt`;

standupParser.parse(filePath)
  .then(json => {
    fs.writeFile(`${__dirname}/../temp/march-2017.json`, JSON.stringify(json), 'utf8', function (err) {
      if (err) {
        return console.log(err);
      }
      console.log('The file was saved!');
    });
  });

