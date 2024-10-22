import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className='p-6 bg-gray-100 min-h-screen'>
      <BackButton />
      <h1 className='text-4xl font-bold my-8 text-center text-gray-800'>📖 Book Details</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-blue-500 rounded-xl w-fit p-6 mx-auto bg-white shadow-lg'>
          <div className='my-4 flex items-center'>
            <span className='text-2xl font-semibold text-blue-700 mr-4'>🆔 ID:</span>
            <span className='text-lg text-gray-700'>{book._id}</span>
          </div>
          <div className='my-4 flex items-center'>
            <span className='text-2xl font-semibold text-blue-700 mr-4'>📚 Title:</span>
            <span className='text-lg text-gray-700'>{book.title}</span>
          </div>
          <div className='my-4 flex items-center'>
            <span className='text-2xl font-semibold text-blue-700 mr-4'>✍️ Author:</span>
            <span className='text-lg text-gray-700'>{book.author}</span>
          </div>
          <div className='my-4 flex items-center'>
            <span className='text-2xl font-semibold text-blue-700 mr-4'>📅 Publish Year:</span>
            <span className='text-lg text-gray-700'>{book.publishYear}</span>
          </div>
          <div className='my-4 flex items-center'>
            <span className='text-2xl font-semibold text-blue-700 mr-4'>🕰️ Created At:</span>
            <span className='text-lg text-gray-700'>{new Date(book.createdAt).toLocaleString()}</span>
          </div>
          <div className='my-4 flex items-center'>
            <span className='text-2xl font-semibold text-blue-700 mr-4'>🔄 Last Updated:</span>
            <span className='text-lg text-gray-700'>{new Date(book.updatedAt).toLocaleString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
