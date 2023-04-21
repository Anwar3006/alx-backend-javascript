import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() { return this._amount; }

  set amount(newAmount) {
    if (typeof (newAmount) !== 'number') {
      this._amount = newAmount;
    } else if (newAmount === '') {
      throw new Error('Amount can not be empty');
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  get currency() { return this._currency; }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be of type currency');
    } else if (value === '') {
      throw new Error('Currency can not be empty');
    } else {
      this._currency = value;
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (amount === '' && conversionRate === '') {
      throw new Error('Amount and Conversion Rate can not be empty');
    }
    return (amount * conversionRate);
  }
}

const p = new Pricing(100, new Currency('EUR', 'Euro'));
console.log(p);
console.log(p.displayFullPrice());
