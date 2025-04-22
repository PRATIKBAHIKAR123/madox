import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import Header from '@/header/header';
import Footer from '@/header/footer';
import { useNavigate } from 'react-router-dom';

// Reuse the products data from the construction products component
const products = [
  { id: 1, name: 'Red Bricks', image: '/assets/Images/Lands/construction_material3.jpg', price: 125400 },
  { id: 2, name: 'Red Bricks', image: '/assets/Images/Lands/construction_material3.jpg', price: 125400 },
  { id: 3, name: 'Red Bricks', image: '/assets/Images/Lands/construction_material3.jpg', price: 125400 },
  { id: 4, name: 'Red Bricks', image: '/assets/Images/Lands/construction_material3.jpg', price: 125400 },
  { id: 5, name: 'Red Bricks', image: '/assets/Images/Lands/construction_material3.jpg', price: 125400 },
  { id: 6, name: 'Red Bricks', image: '/assets/Images/Lands/construction_material3.jpg', price: 125400 },
  { id: 7, name: 'Red Bricks', image: '/assets/Images/Lands/construction_material3.jpg', price: 125400 },
  { id: 8, name: 'Red Bricks', image: '/assets/Images/Lands/construction_material3.jpg', price: 125400 },
  { id: 9, name: 'Red Bricks', image: '/assets/Images/Lands/construction_material3.jpg', price: 125400 },
];

const ProductListingPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header isPagesHeader={true} />
      <div className="container mx-auto px-4 py-8 max-w-7xl mt-20">
        <div className="mb-8">
          <p className="text-sm text-gray-600 text-left">
            <span className="font-bold text-black">Showing 1 - 20</span> out of 2,356 Products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProducts.map((product) => (
            <Card 
              key={product.id} 
              className="overflow-hidden cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="relative card-image-container">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-[250px] object-cover"
                />
                <div className="absolute bottom-3 right-3 flex gap-2">
                  <a className="w-8 h-8 bg-transparent rounded-full flex items-center justify-center text-white">
                    <img 
                      src="/assets/Images/Icons/List.png"
                      alt="List" 
                      className="h-full"
                    />
                  </a>
                  <a className="w-8 h-8 rounded-full flex items-center justify-center text-white">
                    <img 
                      src="/assets/Images/Icons/magnifier.png"
                      alt="Magnifier" 
                      className="h-full"
                    />
                  </a>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-[#1c1c1e] text-lg font-semibold font-['Poppins'] capitalize">{product.name}</h3>
                <div className="w-full h-[42px] bg-[#0798ff]/10 rounded-md flex justify-center items-center mt-2">
                  <span className="text-black text-lg font-semibold font-['Poppins'] leading-[21px]">
                    ${product.price.toLocaleString()}/ Kg
                  </span>
                </div>
                <button className="text-[#0798ff] hover:text-blue-700 font-semibold mt-4">
                  Enquire Now
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentPage === number
                  ? 'bg-[#0798ff] text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductListingPage; 