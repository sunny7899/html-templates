
// components/BookDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReviewForm from './ReviewForm';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`/api/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Published Year: {book.publishYear}</p>
      <p>Average Rating: {book.averageRating.toFixed(1)}</p>
      <h3>Content</h3>
      <p>{book.content ? book.content : 'Content is not available.'}</p>

      <h3>Reviews</h3>
      {book.reviews.length > 0 ? (
        book.reviews.map((review, index) => (
          <div key={index}>
            <p>
              <strong>{review.user}</strong> ({review.rating}/5): {review.comment}
            </p>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}

      <ReviewForm bookId={book._id} />
    </div>
  );
};

export default BookDetail;
