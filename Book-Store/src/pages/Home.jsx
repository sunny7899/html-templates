import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-6 bg-gray-100 min-h-screen'>
      <div className='flex justify-center items-center gap-x-4 mb-6'>
        <button
          className={`px-6 py-2 rounded-lg flex items-center gap-2 transition-colors ${
            showType === 'table' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border border-blue-500'
          } hover:bg-blue-600`}
          onClick={() => setShowType('table')}
        >
          📊 Table View
        </button>
        <button
          className={`px-6 py-2 rounded-lg flex items-center gap-2 transition-colors ${
            showType === 'card' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border border-blue-500'
          } hover:bg-blue-600`}
          onClick={() => setShowType('card')}
        >
          🗂️ Card View
        </button>
      </div>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-4xl font-bold text-gray-800'>📚 Books List</h1>
        <Link
          to='/books/create'
          className='bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105'
        >
          <MdOutlineAddBox className='text-3xl' />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
