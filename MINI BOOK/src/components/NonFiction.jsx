import React from 'react';
import BookCard from './BookCard';

const NonFiction = ({ books }) => {
  return (
    <div>
      <h1 data-testid="books-container-title">Non-Fiction Books</h1>
      <div className="book-list" data-testid="books-nonfiction">
        {books.map((book) => (
          <BookCard key={book.title} book={book} />
        ))}
      </div>
    </div>
  );
};

export default NonFiction;
