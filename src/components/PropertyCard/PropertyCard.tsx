import React from 'react';
import { Property } from '../../types/property';
import './PropertyCard.css';
import { FaBed, FaBath, FaRuler } from 'react-icons/fa';
import { BsZoomIn } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';

interface PropertyCardProps {
    property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
    return (
        <div className="property-card">
            <div className="property-image-container">
                <img src={property.image} alt={property.title} className="property-image" />
                {property.featured && <span className="featured-badge">Featured</span>}
                <div className="property-actions">
                    <button className="action-button"><BsZoomIn /></button>
                    <button className="action-button"><AiOutlineHeart /></button>
                </div>
            </div>
            <div className="property-info">
                <div className="property-price">${property.price.toLocaleString()}</div>
                <h3 className="property-title">{property.title}</h3>
                <p className="property-address">{property.address}</p>
                <div className="property-details">
                    <div className="detail-item">
                        <FaBed />
                        <span>Beds {property.beds}</span>
                    </div>
                    <div className="detail-item">
                        <FaBath />
                        <span>Baths {property.baths}</span>
                    </div>
                    <div className="detail-item">
                        <FaRuler />
                        <span>Sizes {property.size}</span>
                    </div>
                </div>
                <div className="property-footer">
                    <div className="contact">Contact: {property.contact}</div>
                    <div className="posted-date">{property.postedDate}</div>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard; 