import Header from "@/header/header";
import AddressSection from "./address";
import PropertyBanners from "./banners";
import ContactCard from "./contactCard";
import Decription from "./description";
import DetailsSection from "./detailsSection";
import MapSection from "./map";
import Overview from "./overview";
import PriceCard from "./priceCard";
import VideoSection from "./videosection";
import Footer from "@/header/footer";
import { useLocation, useNavigate } from 'react-router-dom';

const PropertyDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const property = location.state?.property;

  if (!property) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Header isPagesHeader={true} />
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
          <p className="mb-4">The property you're looking for could not be found.</p>
          <button 
            onClick={() => navigate('/property-list')}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Back to Properties
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  // Safely handle location data
  const locationParts = property.location?.split(',') || ['', ''];
  const city = locationParts[0]?.trim() || 'Unknown';
  const area = locationParts[1]?.trim() || 'Unknown';

  return (
    <>
    <Header isPagesHeader={true}/>
    <div className="flex flex-col min-h-screen   mt-12 md:mt-34 bg-[#F5F5F5]">
      {/* Banner section */}
      <div className="w-full">
        <PropertyBanners image={property.image} />
      </div>
      
      {/* Content section */}
      <div className="max-w-7xl mx-auto px-4 w-full mt-8">
        <div className="flex-1">
          <h1 className="text-black text-5xl font-semibold font-['Inter'] text-left">{property.name}</h1>
          <div className="mt-2 mb-5 justify-start text-black text-[15px] font-normal font-['Inter'] text-left">PROPERTY ID : {property.id}</div>
          <Overview beds={property.beds} baths={property.baths} sqft={property.sqft} />
          <Decription/>
          <AddressSection data={{
            street: property.location,
            city: city,
            area: area,
            state: area,
            zip: "00000",
            country: "United States"
          }}/>
          <DetailsSection data={{
            propertyId: property.id.toString(),
            price: property.price,
            priceInfo: `$${parseInt(property.price.replace(/[^0-9]/g, '')) / property.sqft} / sq ft`,
            propertySize: `${property.sqft} ft`,
            propertyLotSize: `${property.sqft} ft`,
            rooms: property.beds.toString(),
            bedrooms: property.beds.toString(),
            bathrooms: property.baths.toString(),
            garages: "1",
            yearBuilt: "1985",
            garageSize: "2 Cars",
            availableFrom: "2024-01-01",
            structureType: "Brick",
            floorsNo: "2"
          }}/>
          <VideoSection/>
          <MapSection/>
        </div>
        
        <PriceCard price={property.price} />
        <ContactCard
          name={property.contact}
          address={property.location}
          officePhone="+2224445557"
          mobilePhone="+3336669991"
          whatsapp="3336669991"
          email={`${property.contact.toLowerCase().replace(/\s+/g, '')}@example.com`}
          avatarUrl="/assets/Images/Properties/Rectangle 12.jpg"
        />
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default PropertyDetails;