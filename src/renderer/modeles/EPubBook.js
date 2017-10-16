import EPubItem from './EPubItem';

class EPubBook {
  get publisher() { return this._publisher; }
  get title() { return this._title; }
  get creator() { return this._creator || []; }
  get date() { return this._date; }
  get subject() { return this._subject || []; }
  get description() { return this._description; }
  get rights() { return this._rights; }
  get identifier() { return this._identifier; }
  get language() { return this._language; }
  get nSpines() { return this._nSpines || 0; }
  get checkSum() { return this._checkSum || 0; }
  get renditionLayout() { return this._renditionLayout; }
  get renditionOrientation() { return this._renditionOrientation; }
  get renditionSpread() { return this._renditionSpread; }
  get ePubVersion() { return this._ePubVersion; }
  get isScripted() { return this._isScripted || false; }
  get hasFixedFormat() { return this._hasFixedFormat || false; }
  get isBackwardCompatible() { return this._isBackwardCompatible || false; }
  get hasAudio() { return this._hasAudio || false; }
  get hasVideo() { return this._hasVideo || false; }
  get charsCount() { return this._charsCount || 0; }
  get embeddedFonts() { return this._embeddedFonts || []; }
  get refFonts() { return this._refFonts || []; }
  get hasEncryption() { return this._hasEncryption || false; }
  get hasSignatures() { return this._hasSignatures || false; }
  get contributors() { return this._contributors || []; }
  get items() { return this._items || []; }

  constructor(json) {
    const { publication } = json;
    if (publication) {
      this._publisher = publication.publisher;
      this._title = publication.title;
      this._creator = publication.creator;
      this._date = publication.date;
      this._subject = publication.subject;
      this._description = publication.description;
      this._rights = publication.rights;
      this._identifier = publication.identifier;
      this._language = publication.language;
      this._nSpines = publication.nSpines;
      this._checkSum = publication.checkSum;
      this._renditionLayout = publication.renditionLayout;
      this._renditionOrientation = publication.renditionOrientation;
      this._renditionSpread = publication.renditionSpread;
      this._ePubVersion = publication.ePubVersion;
      this._isScripted = publication.isScripted;
      this._hasFixedFormat = publication.hasFixedFormat;
      this._isBackwardCompatible = publication.isBackwardCompatible;
      this._hasAudio = publication.hasAudio;
      this._hasVideo = publication.hasVideo;
      this._charsCount = publication.charsCount;
      this._embeddedFonts = publication.embeddedFonts;
      this._refFonts = publication.refFonts;
      this._hasEncryption = publication.hasEncryption;
      this._hasSignatures = publication.hasSignatures;
      this._contributors = publication.contributors;
    }
    const { items } = json;
    if (items) {
      const list = [];
      items.forEach((item) => {
        list.push(new EPubItem(item));
      });
      this._items = list;
    }
  }
}

export default EPubBook;
