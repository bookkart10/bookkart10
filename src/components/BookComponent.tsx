import React from 'react';
import { RiBook2Line } from 'react-icons/ri';

const BookComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center w-64 h-64 bg-gray-200 p-4 rounded-lg shadow-md hover:text-gray-600 hover:bg-gray-100 transition duration-300">
      <div className="w-32 h-32 mb-2">
        <img
          src="book-image.jpg"
          alt="Book Cover"
          className="object-cover w-full h-full rounded"
        />
      </div>
      <h3 className="text-xl font-bold mb-2">Book Name</h3>
      <div className="flex flex-col items-center justify-center text-sm mb-2">
        <p className="text-gray-600">Price: $10</p>
        <p className="text-gray-600 line-through">Original Price: $15</p>
        <p className="text-green-500">Discount: 30%</p>
      </div>
      <div className="flex items-center">
        <RiBook2Line className="mr-2 text-xl" />
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BookComponent;