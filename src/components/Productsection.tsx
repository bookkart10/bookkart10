import React from 'react';
import { MdAdd } from 'react-icons/md';

const ProductSection = () => {
  const products = [
    { id: 1, name: 'Product 1', image: 'product1.jpg' },
    { id: 2, name: 'Product 2', image: 'product2.jpg' },
    { id: 3, name: 'Product 3', image: 'product3.jpg' },
    // Add more products as needed
  ];

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md">
            <img src={product.image} alt={product.name} className="w-32 h-32 object-contain mb-4" />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <button className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition duration-300">
              <MdAdd className="text-xl mr-2" />
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;