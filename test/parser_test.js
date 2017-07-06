const mocha           = require('mocha');
const describe        = mocha.describe;
const it              = mocha.it;
var expect            = require('chai').expect;

// Test suite
describe('PARSER METHODS', function () {
  describe('getFileName', function () {
    const getFileName = require('../app/parser/parser-methods.js').getFileName;

    const filePath = `${__dirname}/../input`;
    //Test spec / unit test
    it('should return a string', function () {
      expect(getFileName(filePath)).to.be.a('string');
    });
  });
});