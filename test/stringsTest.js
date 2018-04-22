var string = require('../string');
var assert = require('assert'); //built in node module

describe('strings module', function() {
  it('should camelCase string with one dash correctly', function() {
    var dashed = 'amar-akbar';
    var expected = 'amarAkbar';

    var camel = string.camelCase(dashed);
    assert.equal(camel, expected);
  });
  //   it("foo", function() {
  //     assert.equal("foo", "bar");
  //   });
  it('should camelCase string with multiple dashes', function() {
    var dashed = 'amar-akbar-antony-ertugrul';
    var expected = 'amarAkbarAntonyErtugrul';

    var camel = string.camelCase(dashed);
    assert.equal(camel, expected);
  });
  it('should dash separate string with one camelcase', function() {
    var camelCased = 'amarAkbar';
    var expected = 'amar-akbar';

    var camel = string.dashSeparated(camelCased);
    assert.equal(camel, expected);
  });
  it('should dash separate string with multiple camelcase', function() {
    var camelCased = 'amarAkbarAntonyErtugrul';
    var expected = 'amar-akbar-antony-ertugrul';

    var camel = string.dashSeparated(camelCased);
    assert.equal(camel, expected);
  });
  it('should dash separate string with numbers correctly', function() {
    var camelCased = 'amarAkbar1234Ertugrul';
    var expected = 'amar-akbar1234-ertugrul';

    var camel = string.dashSeparated(camelCased);
    assert.equal(camel, expected);
  });
  it('should dash separate string with numbers correctly', function() {
    var camelCased = 'camelCase1234';
    var expected = 'camel-case1234';

    var camel = string.dashSeparated(camelCased);
    assert.equal(camel, expected);
  });
});
