import React, { useState } from 'react';
import PropertyCard from '../PropertyCard/PropertyCard';
import { properties } from '../../data/properties';
import './PropertyList.css';

const PropertyList: React.FC = () => {
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
        <div className="property-list-container">
            <div className="property-grid">
                {currentProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>
            
            {totalPages > 1 && (
                <div className="pagination">
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
    );
};

export default PropertyList; 