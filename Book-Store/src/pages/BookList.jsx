// components/BookList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('/api/books'); // Adjust the URL according to your backend
        setBooks(response.data.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            <Link to={`/book/${book._id}`}>{book.title}</Link> by {book.author} ({book.publishYear})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
