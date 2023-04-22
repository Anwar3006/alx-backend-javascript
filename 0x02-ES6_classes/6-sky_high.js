import Building from './5-building';

export default class SkyHighBuilding {
  constructor(sqft, floors) {
    this._sqft = sqft;
    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (value instanceof Building) {
      this._sqft = value;
    } else {
      throw new Error('Value must be an object of Parent class');
    }
  }

  get floors() { return this._floors; }

  set floors(value) {
    if (typeof (value) !== 'number') {
      throw new Error('Value must be a number');
    } else {
      this._floors = value;
    }
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
