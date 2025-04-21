import React from 'react';
import PropertyList from '../../components/PropertyList/PropertyList';
import './PropertyListingPage.css';

const PropertyListingPage: React.FC = () => {
    return (
        <div className="property-listing-page">
            <div className="page-header">
                <h1>Property Listings</h1>
                <p>Find your perfect home from our curated selection of properties</p>
            </div>
            <PropertyList />
        </div>
    );
};

export default PropertyListingPage; 