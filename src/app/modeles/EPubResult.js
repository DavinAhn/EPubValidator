import EPubChecker from './EPubChecker';
import EPubBook from './EPubBook';
import Message from './Message';

class EPubResult {
  get checker() { return this._checker; }
  get book() { return this._book; }
  get messages() { return this._messages || []; }

  constructor(json) {
    const { result } = json;
    if (result) {
      this._checker = new EPubChecker(result);
      this._book = new EPubBook(result);
      const { messages } = result;
      if (messages) {
        const list = [];
        messages.forEach((message) => {
          list.push(new Message(message));
        });
        this._messages = list;
      }
    }
  }
}

export default EPubResult;
