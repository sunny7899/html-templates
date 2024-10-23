import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50'
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className='w-[600px] max-w-full bg-white rounded-2xl shadow-lg p-6 relative transform transition-transform duration-300 ease-in-out scale-100 hover:scale-105'
      >
        {/* Close Button */}
        <button
          className='absolute right-4 top-4 text-red-600 hover:text-red-800 transition-colors duration-200'
          onClick={onClose}
          aria-label="Close"
        >
          <AiOutlineClose className='text-2xl' />
        </button>

        {/* Publish Year */}
        <h2 className='inline-block px-4 py-1 mb-4 bg-red-100 text-red-600 rounded-lg text-sm font-medium'>
          {book.publishYear}
        </h2>

        {/* Book ID */}
        <h4 className='text-sm text-gray-400 mb-2'>{book._id}</h4>

        {/* Title Section */}
        <div className='flex items-center gap-x-2 mb-4'>
          <PiBookOpenTextLight className='text-red-400 text-2xl' />
          <h2 className='text-lg font-semibold text-gray-800'>{book.title}</h2>
        </div>

        {/* Author Section */}
        <div className='flex items-center gap-x-2 mb-6'>
          <BiUserCircle className='text-red-400 text-2xl' />
          <h2 className='text-lg font-medium text-gray-800'>{book.author}</h2>
        </div>

        {/* Description */}
        <p className='text-sm text-gray-600 leading-relaxed'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quia
          voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
          necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
          nesciunt cupiditate voluptas? Quis atque earum voluptate dolor nisi
          dolorum est? Deserunt placeat cumque quo dicta architecto, dolore
          vitae voluptate sequi repellat!
        </p>
      </div>
    </div>
  );
};

export default BookModal;
