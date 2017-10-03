class EPubItem {
  get id() { return this._id; }
  get fileName() { return this._fileName; }
  get mediaType() { return this._media_type; }
  get compressedSize() { return this._compressedSize; }
  get uncompressedSize() { return this._uncompressedSize; }
  get compressionMethod() { return this._compressionMethod; }
  get checkSum() { return this._checkSum || 0; }
  get isSpineItem() { return this._isSpineItem || false; }
  get spineIndex() { return this._spineIndex; }
  get isLinear() { return this._isLinear || false; }
  get navigationOrder() { return this._navigationOrder || false; }
  get isHTML5() { return this._isHTML5 || false; }
  get isFixedFormat() { return this._isFixedFormat; }
  get isScripted() { return this._isScripted || false; }
  get scriptSrc() { return this._scriptSrc || false; }
  get scriptTag() { return this._scriptTag || false; }
  get scriptInline() { return this._scriptInline || false; }
  get renditionLayout() { return this._renditionLayout; }
  get renditionOrientation() { return this._renditionOrientation; }
  get renditionSpread() { return this._renditionSpread; }
  get referencedItems() { return this._referencedItems || []; }

  constructor(json) {
    this._id = json.id;
    this._fileName = json.fileName;
    this._media_type = json.media_type;
    this._compressedSize = json.compressedSize;
    this._uncompressedSize = json.uncompressedSize;
    this._compressionMethod = json.compressionMethod;
    this._checkSum = json.checkSum;
    this._isSpineItem = json.isSpineItem;
    this._spineIndex = json.spineIndex;
    this._isLinear = json.isLinear;
    this._navigationOrder = json.navigationOrder;
    this._isHTML5 = json.isHTML5;
    this._isFixedFormat = json.isFixedFormat;
    this._isScripted = json.isScripted;
    this._scriptSrc = json.scriptSrc;
    this._scriptTag = json.scriptTag;
    this._scriptInline = json.scriptInline;
    this._renditionLayout = json.renditionLayout;
    this._renditionOrientation = json.renditionOrientation;
    this._renditionSpread = json.renditionSpread;
    this._referencedItems = json.referencedItems;
  }
}

export default EPubItem;
