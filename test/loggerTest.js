var expect = require('chai').expect;
var logger = require('../logger');
var sinon = require('sinon');
var fs = require('fs');
describe('Logger module', function() {
  it('should give us differnt instances of the logger', function() {
    var logger1 = logger.create('foo');
    var logger2 = logger.create('foo');
    expect(logger1).to.not.equal(logger2);
  });
  it('should  open log file when creating a logger', function() {
    var expected = 'hello.log';
    var spy = sinon.spy(fs, 'createWriteStream');
    logger.create(expected);
    expect(spy.withArgs(expected).calledOnce).to.be.true;
    fs.createWriteStream.restore();
  });
});
