const fs = require('fs');
const path = require('path');

module.exports = class Validator {
  get name() { return this._name; }
  get fileName() { return path.basename(this.filePath); }
  get filePath() { return this._filePath; }
  get dirPath() { return path.dirname(this.filePath); }
  get type() { return path.extname(this.filePath); }
  get size() { return fs.statSync(this.filePath)['size']; }

  constructor(filePath) {
    this._name = 'Default';
    this._filePath = filePath;
  }

  run() {

  }
};
