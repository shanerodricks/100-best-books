useEffect(() => {
    fetch('/api/books')
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <h1>All Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.rank}>
            <Link href={`/books/${encodeURIComponent(book.title)}`}>
              <a>{book.title} by {book.author}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
