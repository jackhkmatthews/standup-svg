const mocha           = require('mocha');
const describe        = mocha.describe;
const it              = mocha.it;
var expect            = require('chai').expect;

// Test suite
describe('UTILITY METHODS', function () {
  describe('clearFolder', function () {
    const clearFolder = require('../app/utility/utility-methods.js').clearFolder;
    const filePath = `${__dirname}/./mock-data`;

    it('should return a promise', function () {
      expect(clearFolder(filePath)).to.be.a('promise');
    });
  });
});