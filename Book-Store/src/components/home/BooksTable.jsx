import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full border-collapse border border-slate-200'>
        {/* Table Head */}
        <thead>
          <tr className='bg-gray-100'>
            <th className='border border-slate-300 px-4 py-2 text-left text-sm font-bold'>
              #️⃣ No
            </th>
            <th className='border border-slate-300 px-4 py-2 text-left text-sm font-bold'>
              📚 Title
            </th>
            <th className='border border-slate-300 px-4 py-2 text-left text-sm font-bold max-md:hidden'>
              ✍️ Author
            </th>
            <th className='border border-slate-300 px-4 py-2 text-left text-sm font-bold max-md:hidden'>
              📅 Publish Year
            </th>
            <th className='border border-slate-300 px-4 py-2 text-left text-sm font-bold'>
              ⚙️ Operations
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {books.map((book, index) => (
            <tr
              key={book._id}
              className={`hover:bg-gray-50 transition-colors duration-200 ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              }`}
            >
              {/* Serial Number */}
              <td className='border border-slate-200 px-4 py-2 text-center text-sm'>
                {index + 1}
              </td>

              {/* Book Title */}
              <td className='border border-slate-200 px-4 py-2 text-left text-sm'>
                {book.title}
              </td>

              {/* Book Author */}
              <td className='border border-slate-200 px-4 py-2 text-left text-sm max-md:hidden'>
                {book.author}
              </td>

              {/* Publish Year */}
              <td className='border border-slate-200 px-4 py-2 text-left text-sm max-md:hidden'>
                {book.publishYear}
              </td>

              {/* Operation Buttons */}
              <td className='border border-slate-200 px-4 py-2 text-center text-sm'>
                <div className='flex justify-center gap-2'>
                  {/* Info Button */}
                  <Link
                    to={`/books/details/${book._id}`}
                    className='flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 hover:bg-green-200 transition-colors duration-200'
                    aria-label='Book Info'
                  >
                    <BsInfoCircle className='text-xl' />
                  </Link>

                  {/* Edit Button */}
                  <Link
                    to={`/books/edit/${book._id}`}
                    className='flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 text-yellow-700 hover:bg-yellow-200 transition-colors duration-200'
                    aria-label='Edit Book'
                  >
                    <AiOutlineEdit className='text-xl' />
                  </Link>

                  {/* Delete Button */}
                  <Link
                    to={`/books/delete/${book._id}`}
                    className='flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-700 hover:bg-red-200 transition-colors duration-200'
                    aria-label='Delete Book'
                  >
                    <MdOutlineDelete className='text-xl' />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
