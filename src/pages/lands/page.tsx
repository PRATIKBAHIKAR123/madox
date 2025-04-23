import { Card } from '@/components/ui/card';
import Footer from '@/header/footer';
import Header from '@/header/header';
import { MapPin } from 'lucide-react';
import React, { useState } from 'react';

const properties = [
    { id: 1, name: '155 Dalla Homestay', featured:true, image:'/assets/Images/Lands/1.png', price: '$1,000,000', location: '2612 Macarthur Boulevard, Oakland', beds: 3, baths: 2, sqft: 1500, contact: '91+ 9876543210', postedTime: '2 days ago' },
    { id: 2, name: '155 Dalla Homestay', featured:true, image:'/assets/Images/Lands/1.png', price: '$1,000,000', location: '2612 Macarthur Boulevard, Oakland', beds: 3, baths: 2, sqft: 1500, contact: '91+ 9876543210', postedTime: '2 days ago' },
    ...Array.from({ length: 28 }, (_, i) => ({
        id: i + 3,
        name: '155 Dalla Homestay',
        featured: true,
        image: '/assets/Images/Lands/1.png',
        price: '$1,000,000',
        location: '2612 Macarthur Boulevard, Oakland',
        beds: 3,
        baths: 2,
        sqft: 1500,
        contact: '91+ 9876543210',
        postedTime: '2 days ago',
    })),
  ];
  

const Lands: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const propertiesPerPage = 9;

    // Calculate pagination
    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);
    const totalPages = Math.ceil(properties.length / propertiesPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
        <Header isPagesHeader={true} />
        <div className="flex flex-col gap-4 md:gap-10 mt-12 md:mt-30">
            <div className='w-full h-[220px] md:h-[400px]'>
                <img src='/assets/Images/Lands/div.header_media.jpg' alt='map' className='w-full h-full object-cover'/>
            </div>
            <div className="w-full max-w-7xl mx-auto px-4 py-2 md:py-16 relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {currentProperties.map((item) => (
                    <Card key={item.id} className="overflow-hidden h-full cursor-pointer" onClick={() => window.location.href = '/#/land-details'}>
                    <div className='relative card-image-container'>
                      {item.featured && (
                        <div className="absolute top-3 left-3 bg-amber-400 text-white text-xs font-medium py-1 px-2 rounded z-10">
                          Featured
                        </div>
                      )}
                      <img 
                        src={item.image} 
                        alt="Property" 
                        className="h-full"
                      />
                      <div className="absolute bottom-3 left-3 text-white font-bold text-xl">
                        {item.price}
                      </div>
                      <div className="absolute bottom-3 right-3 flex gap-2">
                        <a className="w-8 h-8 bg-transparent rounded-full flex items-center justify-center text-white">
                          <img 
                            src={'/assets/Images/Icons/List.png'} 
                            alt="Property" 
                            className="w-4 h-4"
                          />
                        </a>
                        <a className="w-8 h-8 rounded-full flex items-center justify-center text-white">
                          <img 
                            src={'/assets/Images/Icons/magnifier.png'} 
                            alt="Property" 
                            className="w-4 h-4"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="text-left text-[#1c1c1e] text-lg font-semibold font-['Poppins'] capitalize">{item.name}</div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin className="h-4 w-4 mr-1 text-[#8e8e93] text-sm font-normal font-['Poppins'] leading-[21px]" /> {item.location}
                    </div>
                  
                    <div className="w-full h-[42px] bg-[#0798ff]/10 rounded-md flex justify-center items-center">
                      <img 
                        src={'/assets/Images/Icons/size2.svg.png'} 
                        alt="Property" 
                        className="h-[20px] w-[20px]"
                      />
                      <span className="text-black text-[17px] font-medium font-['Poppins'] leading-[21px]">1,5030 sqft</span>
                    </div>
                  
                    <div className="border-t border-gray-200 pt-4 mt-auto">
                      <div className="flex justify-between items-center w-full">
                        <div className="text-sm text-gray-500">
                          Contact: {item.contact}
                        </div>
                        <div className="text-sm text-gray-400">
                          {item.postedTime}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
            </div>
            {totalPages > 1 && (
                <div className="pagination mb-4">
                    {currentPage > 1 && (
                        <button 
                            className="pagination-button"
                            onClick={() => handlePageChange(currentPage - 1)}
                        >
                            Previous
                        </button>
                    )}
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                        <button
                            key={pageNum}
                            className={`pagination-button ${pageNum === currentPage ? 'active' : ''}`}
                            onClick={() => handlePageChange(pageNum)}
                        >
                            {pageNum}
                        </button>
                    ))}
                    
                    {currentPage < totalPages && (
                        <button 
                            className="pagination-button"
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            Next
                        </button>
                    )}
                </div>
            )}
        </div>
        <Footer/>
        </>
    );
};

export default Lands; 