import React from 'react';
import BookCard from './BookCard';

const Fiction = ({ books }) => {
  return (
    <div>
      <h1 data-testid="books-container-title">Fictional Books</h1>
      <div className="book-list" data-testid="books-fiction">
        {books.map((book) => (
          <BookCard key={book.title} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Fiction;
