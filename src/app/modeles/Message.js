import Location from './Location';

class Message {
  get id() { return this._id; }
  get severity() { return this._severity; }
  get message() { return this._message; }
  get additionalLocations() { return this._additionalLocations || 0; }
  get locatons() { return this._locations || []; }
  get suggestion() { return this._suggestion; }

  constructor(json) {
    this._id = json.ID;
    this._severity = json.severity;
    this._message = json.message;
    this._additionalLocations = json.additionalLocations;
    const locations = json.locations;
    if (locations) {
      const list = [];
      locations.forEach((location) => {
        list.push(new Location(location));
      });
      this._locations = list;
    }
    this._suggestion = json.suggestion;
  }
}

export default Message;
