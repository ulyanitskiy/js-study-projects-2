import Book from './Book.js';

export default class Ebook extends Book {
  constructor(title, author, year, fileSize) {
    super(title, author, year);
    this._fileSize = fileSize;
  }

  get info() {
    return `Title: ${this.title}, Author: ${this.author}, Year: ${this._year}, File Size: ${this._fileSize}MB`;
  }

  getDescription() {
    return `${super.getDescription()} File size is ${this._fileSize} MB.`;
  }

  get fileSize() {
    return this._fileSize;
  }

  set fileSize(value) {
    if (typeof value === 'number' && value > 0) {
      this._fileSize = value;
    } else {
      console.error('Error: File size must be a number greater than 0.');
    }
  }
}
