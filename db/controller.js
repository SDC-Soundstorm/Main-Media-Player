const model = require('./model.js');

module.exports = {
  song: {
    getLegacy: (req, res) => {
      model.song.getLegacy((error, data) => {
        if (error) {
          console.log(error);
        } else {
          res.send(data);
        }
      });
    }
  }
}