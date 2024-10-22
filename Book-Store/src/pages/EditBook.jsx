import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setTitle(response.data.title);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('⚠️ An error occurred. Please check the console.', { variant: 'error' });
        console.log(error);
      });
  }, [id, enqueueSnackbar]);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('✅ Book Edited Successfully!', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('❌ Error: Could not edit the book!', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-6'>
      <BackButton />
      <h1 className='text-3xl my-6 font-semibold text-center text-blue-700'>✏️ Edit Book</h1>
      {loading && <Spinner />}
      <div className='flex flex-col border-2 border-blue-400 rounded-xl max-w-md p-8 mx-auto shadow-lg bg-white'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-600'>📚 Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-400 px-4 py-2 w-full rounded-md focus:border-blue-500 focus:outline-none transition-colors'
            placeholder='Enter the title of the book'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-600'>👤 Author</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-400 px-4 py-2 w-full rounded-md focus:border-blue-500 focus:outline-none transition-colors'
            placeholder='Enter the author name'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-600'>📅 Publish Year</label>
          <input
            type='number'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 border-gray-400 px-4 py-2 w-full rounded-md focus:border-blue-500 focus:outline-none transition-colors'
            placeholder='Enter the publish year'
          />
        </div>
        <button
          className='p-3 bg-blue-600 text-white rounded-md w-full hover:bg-blue-700 transition-all duration-200 ease-in-out flex justify-center items-center mt-6'
          onClick={handleEditBook}
          disabled={loading}
        >
          {loading ? <Spinner className='w-5 h-5 mr-2' /> : '💾 Save Changes'}
        </button>
      </div>
    </div>
  );
};

export default EditBook;
