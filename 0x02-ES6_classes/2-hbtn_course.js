export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() { return this._name; }

  set name(newName) {
    if (typeof (newName) === 'string') {
      this._name = newName;
    } else if (newName === '') {
      throw new Error('Name can not be empty');
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get length() { return this._length; }

  set length(newLength) {
    if (typeof (newLength) === 'number') {
      this._name = newLength;
    } else if (newLength === '') {
      throw new Error('Length can not be empty');
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get students() { return this._students; }

  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
