import books from '../../../100-best-books/books.json';

export default function handler(req, res) {
  res.status(200).json(books);
}
