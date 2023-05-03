import books from '../../../../100-best-books/books.json';

export default function handler(req, res) {
  const { title } = req.query;
  const book = books.find((book) => book.title.toLowerCase() === title.toLowerCase());

  if (!book) {
    res.status(404).json({ message: 'Book not found.' });
    return;
  }

  res.status(200).json(book);
}
