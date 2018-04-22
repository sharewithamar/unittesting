var expect = require('chai').expect;
var fs = require('fs');
var reader = require('../testDoubles');
var sinon = require('sinon');

describe('Reader Module', function() {
  afterEach(function() {
    fs.readFile.restore();
  });

  it('should read the correct file', function() {
    var expected = 'sample.txt';

    //writing own test double way
    // fs.readFile = function(filename) {
    //   expect(filename).to.equal(expected);
    // };
    //doing with sion spy instead of custom test double
    var spy = sinon.spy(fs, 'readFile');

    reader.linesToArray(expected, function() {});

    expect(spy.calledOnce).to.be.true;
    expect(spy.withArgs(expected).calledOnce).to.be.true;
    // restors spied version with original readfile method
  });

  it('should convert the correct data into an array', function() {
    var data = 'amar\nakbar\nantony';
    var expected = ['amar', 'akbar', 'antony'];
    // fs.readFile = function(filename, options, callback) {
    //   callback(null, data);
    // };
    //creating with stub
    var stub = sinon.stub(fs, 'readFile');
    stub.callsArgWith(2, null, data); //third parameter is the callback
    reader.linesToArray(expected, function(err, array) {
      expect(array).to.deep.equal(expected);
    });
  });
  it('should pass the correct encoding paramater', function() {
    var expected = { encoding: 'utf8' };
    var mock = sinon.mock(fs);
    mock
      .expects('readFile')
      .once()
      .withArgs(sinon.match.any, expected);
    reader.linesToArray(expected, function() {
      mock.verify();
    });
  });
});
