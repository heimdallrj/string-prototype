var chai = require('chai');  
var assert = chai.assert;    // Using Assert style
var expect = chai.expect;    // Using Expect style
var should = chai.should();  // Using Should style

require('../lib');

describe("string-prototype", function() {
  describe("when run `allReplace`", function() {
    var str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    var strExpected = 'Lorem REPLACED-ipsum dolor sit REPLACED-amet, consectetur adipiscing elit.';

    var list = {
        'ipsum': 'REPLACED-ipsum',
        'amet': 'REPLACED-amet'
    };

    it("should have replace all instance at the list with the string provided", function() {
      var newStr = str.allReplace(list);

      expect(newStr).to.equal(strExpected);
    });
  });
});
