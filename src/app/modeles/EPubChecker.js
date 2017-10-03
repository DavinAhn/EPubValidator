class EPubChecker {
  get path() { return this._path || ''; }
  get fileName() { return this._fileName || ''; }
  get checkerVersion() { return this._checkerVersion || ''; }
  get checkDate() { return this._checkDate || ''; }
  get elapsedTime() { return this._elapsedTime || 0; }
  get nFatal() { return this._nFatal || 0; }
  get nError() { return this._nError || 0; }
  get nWarning() { return this._nWarning || 0; }
  get nUsage() { return this._nUsage || 0; }

  constructor(json) {
    const checker = json.checker;
    if (checker) {
      this._path = checker.path;
      this._fileName = checker.fileName;
      this._checkerVersion = checker.checkerVersion;
      this._checkDate = checker.checkDate;
      this._elapsedTime = checker.elapsedTime;
      this._nFatal = checker.nFatal;
      this._nError = checker.nError;
      this._nWarning = checker.nWarning;
      this._nUsage = checker.nUsage;
    }
  }
}

export default EPubChecker;
