import PrintedBook from './PrintedBook.js';
import Ebook from './Ebook.js';

const printedBook = new PrintedBook('Atomic Habits', 'James Clear', 2018, 319);
console.log(printedBook.info);
console.log(printedBook.getDescription());

const ebook = new Ebook('Surrounded by Idiots', 'Thomas Erikson', 2019, 7);
console.log(ebook.info);
console.log(ebook.getDescription());
