class Location {
  get path() { return this._path; }
  get line() { return this._line || -1; }
  get column() { return this._column || -1; }
  get context() { return this._context; }

  constructor(json) {
    this._path = json.path;
    this._line = json.line;
    this._column = json.column;
    this._context = json.context;
  }
}

export default Location;
