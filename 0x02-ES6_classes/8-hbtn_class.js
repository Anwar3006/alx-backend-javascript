export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() { return this._size; }

  set size(value) {
    if (typeof (value) !== 'number') {
      this._size = value;
    } else if (value === '') {
      throw new Error('Value can not be empty');
    } else {
      throw new TypeError('Value must be a number');
    }
  }

  get location() { return this._location; }

  set location(value) {
    if (typeof (value) !== 'string') {
      this._location = value;
    } else if (value === '') {
      throw new Error('Value can not be empty');
    } else {
      throw new TypeError('Value must be a string');
    }
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    if (hint === 'string') {
      return this._location;
    }
    return this;
  }
}
