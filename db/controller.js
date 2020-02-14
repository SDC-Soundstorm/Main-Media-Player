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
    },
    get: (req, res) => {
      model.song.getLegacy((error, data) => {
        if (error) {
          console.log(error);
        } else {
          res.send(data);
        }
      });
    },
    post: (req, res) => {
      model.song.getLegacy((error, data) => {
        if (error) {
          console.log(error);
        } else {
          res.send(data);
        }
      });
    },
    put: (req, res) => {
      model.song.getLegacy((error, data) => {
        if (error) {
          console.log(error);
        } else {
          res.send(data);
        }
      });
    },
    delete: (req, res) => {
      model.song.getLegacy((error, data) => {
        if (error) {
          console.log(error);
        } else {
          res.send(data);
        }
      });
    },
  }
}