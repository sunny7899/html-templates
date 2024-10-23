import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('🗑️ Book Deleted Successfully!', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('❌ Error: Could not delete the book!', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-6'>
      <BackButton />
      <h1 className='text-3xl my-6 font-semibold text-center text-red-700'>🗑️ Delete Book</h1>
      <div className='flex flex-col items-center border-2 border-red-300 rounded-xl max-w-md p-8 mx-auto shadow-lg bg-white'>
        <h3 className='text-2xl text-center mb-4'>⚠️ Are You Sure You Want to Delete This Book?</h3>
        {loading && <Spinner className='mb-4' />}
        <button
          className='p-4 bg-red-600 text-white rounded-lg w-full hover:bg-red-700 transition-colors duration-200 ease-in-out flex justify-center items-center'
          onClick={handleDeleteBook}
          disabled={loading}
        >
          {loading ? <Spinner className='w-5 h-5 mr-2' /> : '🗑️ Yes, Delete it'}
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
