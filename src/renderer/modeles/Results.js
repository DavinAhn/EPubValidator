import EPubResult from './EPubResult';

class Results {
  get nFatal() { return this.epub.checker.nFatal; }
  get nError() { return this.epub.checker.nError; }
  get nWarning() { return this.epub.checker.nWarning; }
  get nInfo() { return this.epub.messages.filter(item => item.severity === 'INFO').length; }
  get nUsage() { return this.epub.checker.nUsage; }
  get epub() { return this._epub; }

  constructor(json) {
    this._epub = new EPubResult(json.epub);
  }
}

export default Results;
