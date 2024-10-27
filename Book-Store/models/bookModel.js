import mongoose from 'mongoose';

// Define the schema for reviews
const reviewSchema = mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5, // Ensure rating is between 1 and 5
    },
    comment: {
      type: String,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields to each review
  }
);


const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
  content: {
    type: String, // You can store the book content as a string (text) or use a URL if it's hosted elsewhere
  },
  fileUrl: {
    type: String, // URL to a file (e.g., PDF, EPUB) if you prefer not to store large text blobs in your DB
  },
  reviews: [reviewSchema], // Array of reviews using the review schema
},
  {
    timestamps: true,
  }
);

bookSchema.virtual('averageRating').get(function () {
  if (this.reviews.length === 0) return 0;
  const total = this.reviews.reduce((acc, review) => acc + review.rating, 0);
  return total / this.reviews.length;
});

// Ensure virtual fields are serialized
bookSchema.set('toJSON', { virtuals: true });
bookSchema.set('toObject', { virtuals: true });

export const Book = mongoose.model('Book', bookSchema);
