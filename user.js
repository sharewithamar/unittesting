module.exports = user;

function user() {
  var firstname = '';
  var lastname = '';
  var encryptedPass = null;
  var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'd6F3Efeq';

  return {
    setFirstname: function(name) {
      firstname = name;
    },

    getFirstname: function() {
      return firstname;
    },

    setLastname: function(name) {
      lastname = name;
    },

    getLastname: function() {
      return lastname;
    },

    getFullname: function() {
      if (!firstname) {
        return lastname;
      }

      if (!lastname) {
        return firstname;
      }

      return firstname + ' ' + lastname;
    },
    setPassword: function(text) {
      console.log('so far so good');
      var cipher = crypto.createCipher(algorithm, password);
      var crypted = cipher.update(text, 'utf8', 'hex');
      crypted += cipher.final('hex');
      encryptedPass = crypted;
    },
    getPassword: function() {
      var decipher = crypto.createDecipher(algorithm, password);
      var dec = decipher.update(encryptedPass, 'hex', 'utf8');
      dec += decipher.final('utf8');
      return dec;
    }
  };
}
