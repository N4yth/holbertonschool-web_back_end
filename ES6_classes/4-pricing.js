/* eslint-disable */
export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (typeof newCurrency !== 'object') {
      throw new TypeError(`currency must be a currency`);
    }
    this._currency = newCurrency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError(`amount must be a string`);
    }
    this._amount = newAmount;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
