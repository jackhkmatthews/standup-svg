var expect = require('chai').expect;

// Test suite
describe('PARSER METHODS', function () {
  describe('getFilePath', function () {
    const getFilePath = require('../app/parser/parser.js').getFilePath;

    const filePath = `${__dirname}/../input`;
    //Test spec / unit test
    it('return a string', function () {
      expect(getFilePath(filePath)).to.be.a('string');
    });
  });
});