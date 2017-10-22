import fs from 'fs';
import path from 'path';

class Validator {
  get name() { return 'default'; }
  get fileName() { return path.basename(this.filePath); }
  get filePath() { return this._filePath; }
  get dirPath() { return path.dirname(this.filePath); }
  get type() { return path.extname(this.filePath); }
  get size() { return fs.statSync(this.filePath).size; }

  constructor(filePath) {
    this._filePath = filePath;
  }

  run(callback) {
    callback({}, null);
  }
}

export default Validator;
