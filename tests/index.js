var chai = require('chai');  
var expect = chai.expect;

require('../lib');

describe("string-prototype", function() {
  describe("when run `allReplace`", function() {
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
});
