var chai = require('chai');  
var expect = chai.expect;

require('../lib');

describe("string-prototype", function() {
  describe("String.allReplace", function() {
    var str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    var strExpected = 'Lorem REPLACED-ipsum dolor sit REPLACED-amet, consectetur adipiscing elit.';

    var params = {
      'ipsum': 'REPLACED-ipsum',
      'amet': 'REPLACED-amet'
    };

    it("should have replace all instance at the list with the string provided", function() {
      var newStr = str.allReplace(params);

      expect(newStr).to.equal(strExpected);
    });
  });

  describe("String.toTitleCase", function() {
    var str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    var strExpected = 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.';

    it("should have replace each first letter of every word to Upper case", function() {
      var newStr = str.toTitleCase();

      expect(newStr).to.equal(strExpected);
    });
  });
});
