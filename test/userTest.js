var user = require('../user');
var assert = require('assert');
var crypto = require('crypto');

describe('user object', function() {
  var u = null;

  beforeEach(function() {
    //  console.log('before each');
    u = user();
  });

  //   afterEach(function() {
  //     console.log('after each');
  //   });
  //   before(function() {
  //     console.log('before');
  //   });
  //   after(function() {
  //     console.log('after');
  //   });

  describe('getting full name', function() {
    it('should return first name if last name is not set', function() {
      var expected = 'firstname';
      var name = 'firstname';

      u.setFirstname(name);

      assert.equal(u.getFullname(), expected);
    });

    it('should return last name if first name is not set', function() {
      var expected = 'lastname';
      var name = 'lastname';

      u.setLastname(name);

      assert.equal(u.getFullname(), expected);
    });

    it('should return correct full name when both names are set', function() {
      var expected = 'first last';
      var first = 'first';
      var last = 'last';

      u.setFirstname(first);
      u.setLastname(last);

      assert.equal(u.getFullname(), expected);
    });
  });

  describe('password', function() {
    it('should set password', function() {
      var userpassword = 'amar';

      u.setPassword(userpassword);
      assert.equal(u.getPassword(), userpassword);
    });
  });
});
