import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className="book-card" data-testid="book-card">
      <img src={book.img} alt={book.title} />
      <h3 data-testid="book-card-title">{book.title}</h3>
      <p data-testid="book-card-author">{book.author}</p>
      <p data-testid="book-card-price">{book.price} Rs</p>
      <p data-testid="book-card-year">{book.year}</p>
    </div>
  );
};

export default BookCard;
