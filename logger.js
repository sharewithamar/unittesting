var fs = require('fs');
module.exports = {
  create: function(filename) {
    fs.createWriteStream(filename);
    return {};
  }
};
