import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/books', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('📚 Book Created successfully!', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('❌ Error occurred while creating the book!', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-6'>
      <BackButton />
      <h1 className='text-3xl my-6 font-semibold text-center'>📖 Create a New Book</h1>
      <div className='flex flex-col border-2 border-sky-400 rounded-xl max-w-md p-6 mx-auto shadow-lg bg-white'>
        {/* Title Input */}
        <div className='my-4'>
          <label className='text-xl mb-2 text-gray-600 block'>📚 Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-sky-300'
            placeholder='Enter book title...'
          />
        </div>

        {/* Author Input */}
        <div className='my-4'>
          <label className='text-xl mb-2 text-gray-600 block'>✍️ Author</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-sky-300'
            placeholder='Enter author name...'
          />
        </div>

        {/* Publish Year Input */}
        <div className='my-4'>
          <label className='text-xl mb-2 text-gray-600 block'>📅 Publish Year</label>
          <input
            type='number'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-sky-300'
            placeholder='Enter publish year...'
          />
        </div>

        {/* Save Button */}
        <button
          className='mt-6 bg-sky-500 text-white py-3 px-6 rounded-lg hover:bg-sky-600 transition-colors duration-200 flex justify-center items-center'
          onClick={handleSaveBook}
          disabled={loading}
        >
          {loading ? <Spinner className='w-5 h-5 mr-2' /> : '💾 Save Book'}
        </button>
      </div>
    </div>
  );
};

export default CreateBooks;
