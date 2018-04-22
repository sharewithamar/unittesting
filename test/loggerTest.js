var expect = require('chai').expect;
var logger = require('../logger');
var sinon = require('sinon');

var fs = require('fs');
describe('Logger module', function() {
  var createWriteStream;
  var logStream;
  beforeEach(function() {
    createWriteStream = sinon.stub(fs, 'createWriteStream');
    logStream = {
      write: sinon.stub()
    };
    createWriteStream.returns(logStream);
  });
  afterEach(function() {
    fs.createWriteStream.restore();
  });

  it('should give us differnt instances of the logger', function() {
    var logger1 = logger.create('foo');
    var logger2 = logger.create('foo');
    expect(logger1).to.not.equal(logger2);
  });
  it('should  open log file when creating a logger', function() {
    var expected = 'hello.log';
    //var spy = sinon.spy(fs, 'createWriteStream');

    logger.create(expected);
    // expect(createWriteStream.withArgs(expected).calledOnce).to.be.true;

    //sinon assert error messages are more user readable
    //  sinon.assert.calledWith(createWriteStream, expected);

    //Method 2 - integrate sinon in to chai using sinon-chai
    expect(createWriteStream).to.have.been.calledWith(expected);
  });
  it('should open log files in create/append mode', function() {
    var expected = { flags: 'a' };

    logger.create('foobar');
    expect(createWriteStream.withArgs(sinon.match.any, expected).calledOnce).to
      .be.true;
  });
  //   it('should write the logged string and a new line to the log file', function() {
  //     var logString = 'hello world';
  //     var expected = logString + '\n';

  //     var log = logger.create('foobar');
  //     log.log(logString);

  //     expect(logStream.write.withArgs(expected).calledOnce).to.be.true;
  //   });

  it('should write the UTC date,logged string and a new line to the log file', function() {
    var dateString = '1234567';
    var logString = 'hello world';
    var expected = dateString + ' ' + logString + '\n';

    var stub = sinon.stub(Date.prototype, 'toUTCString');
    stub.returns(dateString);

    var log = logger.create('foobar');
    log.log(logString);

    expect(logStream.write.withArgs(expected).calledOnce).to.be.true;
    stub.restore();
  });
});
