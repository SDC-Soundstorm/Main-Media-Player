const Song = require('./index.js');

module.exports = {
  song: {
    getLegacy: (callback) => {
      Song.find((err, data) => {
        if (err) {
          console.log('Could not find data in DB')
          callback(err);
        } else {
          callback(null, data);
        }
      });
    }
  }
}