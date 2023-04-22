export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get code() { return this._code; }

  set code(newCode) {
    if (typeof (newCode) !== 'string') {
      this._code = newCode;
    } else if (newCode === '') {
      throw new Error('Code can not be empty');
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  get name() { return this._name; }

  set name(newName) {
    if (typeof (newName) !== 'string') {
      this._code = newName;
    } else if (newName === '') {
      throw new Error('Name can not be empty');
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
