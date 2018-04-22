var fs = require('fs');
module.exports = {
  create: function(filename) {
    var stream = fs.createWriteStream(filename, { flags: 'a' });
    return {
      log: function(message) {
        stream.write(message + '\n');
      }
    };
  }
};
