import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='border border-gray-300 rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300 p-4 m-4 relative'>
      {/* Publish Year */}
      <h2 className='absolute top-2 right-2 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-lg text-xs font-bold'>
        📅 {book.publishYear}
      </h2>

      {/* Book ID */}
      <p className='text-xs text-gray-400 mb-1'>ID: {book._id}</p>

      {/* Book Title */}
      <div className='flex items-center gap-x-2 mb-2'>
        <PiBookOpenTextLight className='text-blue-400 text-2xl' />
        <h2 className='text-lg font-semibold text-gray-800'>{book.title} 📖</h2>
      </div>

      {/* Book Author */}
      <div className='flex items-center gap-x-2 mb-4'>
        <BiUserCircle className='text-green-400 text-2xl' />
        <h2 className='text-md font-medium text-gray-700'>{book.author} ✍️</h2>
      </div>

      {/* Action Buttons */}
      <div className='flex justify-between items-center mt-4 p-2 border-t pt-3'>
        {/* View Button */}
        <button
          className='flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors duration-200'
          onClick={() => setShowModal(true)}
          aria-label='View Book'
        >
          <BiShow className='text-xl' />
        </button>

        {/* Info Button */}
        <Link
          to={`/books/details/${book._id}`}
          className='flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-700 hover:bg-green-200 transition-colors duration-200'
          aria-label='Book Info'
        >
          <BsInfoCircle className='text-xl' />
        </Link>

        {/* Edit Button */}
        <Link
          to={`/books/edit/${book._id}`}
          className='flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 hover:bg-yellow-200 transition-colors duration-200'
          aria-label='Edit Book'
        >
          <AiOutlineEdit className='text-xl' />
        </Link>

        {/* Delete Button */}
        <Link
          to={`/books/delete/${book._id}`}
          className='flex items-center justify-center w-10 h-10 rounded-full bg-red-100 text-red-700 hover:bg-red-200 transition-colors duration-200'
          aria-label='Delete Book'
        >
          <MdOutlineDelete className='text-xl' />
        </Link>
      </div>

      {/* Book Modal */}
      {showModal && <BookModal book={book} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default BookSingleCard;
