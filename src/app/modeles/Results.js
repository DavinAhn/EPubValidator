import EPubResult from './EPubResult';

class Results {
  get epub() { return this._epub; }

  constructor(json) {
    this._epub = new EPubResult(json.epub);
  }
}

export default Results;
