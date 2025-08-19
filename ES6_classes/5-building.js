/* eslint-disable */
export default class Building {
  constructor(sqft) {
    this.sqft = sqft;

    if (this.constructor !== Building && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft () {
    return this._sqft;
  }

  set sqft(newsqft ) {
    if (typeof newsqft !== 'number') {
      throw new TypeError(`sqft must be a number`);
    }
    this._sqft = newsqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
