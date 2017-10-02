const { EPubValidator } = require('./validator/EPubValidator');

module.exports = {
  run(epubPath, mimeType, callback) {
    new Promise((resolve, reject) => {
      const ev = new EPubValidator(epubPath);
      ev.run((result, error) => {
        resolve(result, error);
      });
    }).then((result, error) => {
      callback(result, error);
    });
  }
};
