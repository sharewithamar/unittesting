var fs = require('fs');
module.exports = {
  create: function(filename) {
    var stream = fs.createWriteStream(filename, { flags: 'a' });
    return {
      log: function(message) {
        var d = new Date();
        stream.write(d.toUTCString() + ' ' + message + '\n');
      }
    };
  }
};
