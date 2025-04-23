import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { properties } from '../../data/properties';
import Header from '@/header/header';
import Footer from '@/header/footer';
import { useNavigate } from 'react-router-dom';
import './PropertyListingPage.css';

const PropertyListingPage: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const propertiesPerPage = 9;
    const navigate = useNavigate();

    // Calculate pagination
    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);
    const totalPages = Math.ceil(properties.length / propertiesPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const handleCardClick = (property: any) => {
        // Transform the property data to match the expected structure
        const transformedProperty = {
            ...property,
            name: property.title,
            location: property.address,
            sqft: property.size,
            contact: property.contact,
            price: `$${property.price.toLocaleString()}`
        };
        navigate('/property-details', { state: { property: transformedProperty } });
    };

    return (
        <>
            <Header isPagesHeader={true} />
            <div className="flex flex-col min-h-screen">
                <div className="w-full h-[220px] md:h-[400px] mt-12 md:mt-30">
                    <img src='/assets/Images/Lands/div.header_media.jpg' alt='map' className='w-full h-full object-cover'/>
                </div>
                <div className="container mx-auto px-4 py-8 max-w-7xl">
                    <div className="mb-8">
                        <p className="text-sm text-gray-600 text-left">
                            <span className="font-bold text-black">Showing 1 - {currentProperties.length}</span> out of {properties.length} Properties
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentProperties.map((property) => (
                            <Card 
                                key={property.id} 
                                className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
                                onClick={() => handleCardClick(property)}
                            >
                                <div className="relative card-image-container">
                                    <img 
                                        src={property.image} 
                                        alt={property.title} 
                                        className="w-full h-[250px] object-cover"
                                    />
                                    {property.featured && (
                                        <div className="absolute top-3 left-3 bg-amber-400 text-white text-xs font-medium py-1 px-2 rounded z-10">
                                            Featured
                                        </div>
                                    )}
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
                                <div className="p-4">
                                    <h3 className="text-[#1c1c1e] text-lg font-semibold font-['Poppins'] capitalize">{property.title}</h3>
                                    <p className="text-[#8e8e93] text-sm font-normal font-['Poppins'] mt-1">{property.address}</p>
                                    <div className="w-full h-[42px] bg-[#0798ff]/10 rounded-md flex justify-center items-center mt-4">
                                        <span className="text-black text-lg font-semibold font-['Poppins'] leading-[21px]">
                                            ${property.price.toLocaleString()}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-sm text-gray-500 mt-4">
                                        <div className="flex items-center gap-1">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.8333 7.5H4.16667C3.24619 7.5 2.5 8.24619 2.5 9.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V9.16667C17.5 8.24619 16.7538 7.5 15.8333 7.5Z" stroke="#58667E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M5.83337 7.5V4.98611C5.83337 4.04096 6.21468 3.13429 6.89278 2.45619C7.57088 1.77809 8.47754 1.39679 9.4227 1.39679V1.39679C10.3679 1.39679 11.2745 1.77809 11.9526 2.45619C12.6307 3.13429 13.012 4.04096 13.012 4.98611V7.5" stroke="#58667E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            Beds {property.beds}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.5 9.16667C2.5 8.70643 2.6756 8.26488 2.98816 7.95232C3.30072 7.63976 3.74226 7.46416 4.20251 7.46416H15.7975C16.2578 7.46416 16.6993 7.63976 17.0119 7.95232C17.3244 8.26488 17.5 8.70643 17.5 9.16667V15.8333C17.5 16.2936 17.3244 16.7351 17.0119 17.0477C16.6993 17.3602 16.2578 17.5358 15.7975 17.5358H4.20251C3.74226 17.5358 3.30072 17.3602 2.98816 17.0477C2.6756 16.7351 2.5 16.2936 2.5 15.8333V9.16667Z" stroke="#58667E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            Baths {property.baths}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.5 3.33334L3.6875 4.52084L5.3125 6.14584L6.5 7.33334" stroke="#58667E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M17.5 3.33334L16.3125 4.52084L14.6875 6.14584L8.75 12.0833L6.5 14.3333" stroke="#58667E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            Sizes {property.size}
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-200 pt-4 mt-4">
                                        <div className="flex justify-between items-center">
                                            <div className="text-sm text-gray-500">Contact: {property.contact}</div>
                                            <div className="text-sm text-gray-400">{property.postedDate}</div>
                                        </div>
                                    </div>
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
        </>
    );
};

export default PropertyListingPage; 