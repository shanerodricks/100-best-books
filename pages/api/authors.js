import books from '../../../100-best-books/books.json';

export default function handler(req, res) {
  const authors = [...new Set(books.map((book) => book.author))];
  res.status(200).json(authors);
}
