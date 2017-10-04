const { EPubValidator } = require('./validator/EPubValidator');

module.exports = {
  run(epubPath, mimeType, callback) {
    new Promise((resolve, reject) => {
      const results = {
        append(name, result, error) {
          this.orders.push(name);
          this[name] = { result, error };
        },
        orders: [],
      };
      resolve(results);
    }).then(results => new Promise((resolve, reject) => {
      const ev = new EPubValidator(epubPath);
      ev.run((result, error) => {
        results.append(ev.name, result, error);
        resolve(results);
      });
    })).then((results) => {
      callback(results);
    });
  },
};
