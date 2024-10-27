// components/ReviewForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ bookId }) => {
  const [user, setUser] = useState('');
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`/api/books/${bookId}/review`, {
        user,
        rating,
        comment,
      });
      setMessage('Review submitted successfully!');
    } catch (error) {
      console.error('Error submitting review:', error);
      setMessage('Failed to submit review. Please try again.');
    }

    // Clear form fields
    setUser('');
    setRating(1);
    setComment('');
  };

  return (
    <div>
      <h3>Leave a Review</h3>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            User:
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Rating:
            <input
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              min="1"
              max="5"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Comment:
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
