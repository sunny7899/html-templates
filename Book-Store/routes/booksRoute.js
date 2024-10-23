import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();

// Route for Save a new Book
router.post('/', async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: 'Send all required fields: title, author, publishYear',
      });
    }
    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
    };

    const book = await Book.create(newBook);

    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Books from database
router.get('/', async (request, response) => {
  try {
    const books = await Book.find({});

    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One Book from database by id
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const book = await Book.findById(id);

    return response.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Update a Book
router.put('/:id', async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: 'Send all required fields: title, author, publishYear',
      });
    }

    const { id } = request.params;

    const result = await Book.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Book not found' });
    }

    return response.status(200).send({ message: 'Book updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a book
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Book not found' });
    }

    return response.status(200).send({ message: 'Book deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Fetch the content of a specific book by id
router.get('/:id/content', async (request, response) => {
  try {
    const { id } = request.params;
    const book = await Book.findById(id).select('content fileUrl');

    if (!book) {
      return response.status(404).json({ message: 'Book not found' });
    }

    return response.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


// Add a review to a specific book by id
router.post('/:id/review', async (request, response) => {
  try {
    const { id } = request.params;
    const { user, rating, comment } = request.body;

    if (!user || !rating) {
      return response.status(400).send({ message: 'User and rating are required' });
    }

    const book = await Book.findById(id);
    if (!book) {
      return response.status(404).json({ message: 'Book not found' });
    }

    // Add new review to the book's reviews array
    book.reviews.push({ user, rating, comment });
    await book.save();

    return response.status(201).json({ message: 'Review added successfully', reviews: book.reviews });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


// Get all reviews for a specific book by id
router.get('/:id/reviews', async (request, response) => {
  try {
    const { id } = request.params;
    const book = await Book.findById(id).select('reviews');

    if (!book) {
      return response.status(404).json({ message: 'Book not found' });
    }

    return response.status(200).json({ reviews: book.reviews });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const book = await Book.findById(id).populate('reviews');

    if (!book) {
      return response.status(404).json({ message: 'Book not found' });
    }

    return response.status(200).json({
      ...book.toObject(),
      averageRating: book.averageRating,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});



export default router;
