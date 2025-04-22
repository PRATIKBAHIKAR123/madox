import Header from "@/header/header";
import AddressSection from "./address";
import PropertyBanners from "./banners";
import ContactCard from "./contactCard";
import Decription from "./description";
import DetailsSection from "./detailsSection";
import MapSection from "./map";
//import Overview from "./overview";
import PriceCard from "./priceCard";
import VideoSection from "./videosection";
import Footer from "@/header/footer";

const LandDetails = () => {
  return (
    <>
    <Header isPagesHeader={true}/>
    <div className="flex flex-col min-h-screen bg-[#F5F5F5]  mt-12 md:mt-34">
      {/* Banner section */}
      <div className="w-full">
        <PropertyBanners />
      </div>
      
      {/* Content section */}
      <div className="max-w-7xl mx-auto px-4 w-full mt-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="flex-1">
            <h1 className="text-black text-5xl font-semibold font-['Inter'] text-left">Park House</h1>
            <div className="mt-2 mb-5 justify-start text-black text-[15px] font-normal font-['Inter'] text-left">CONDOS PROPERTY ID : 89430</div>
            {/* Additional property info can go here */}
            {/* <Overview /> */}
            <Decription/>
            <AddressSection data={{
                          street: "East 59th St",
                          city: "Jersey City",
                          area: "Greenville",
                          state: "New Jersey State",
                          zip: "524662",
                          country: "United States"
                      }}/>
                      <DetailsSection data={{
                          propertyId: "31",
                          price: "$ 5,000,000",
                          priceInfo: "$ 1,200 / sq ft",
                          propertySize: "1,300 ft",
                          propertyLotSize: "1,300 ft",
                          rooms: "3",
                          bedrooms: "3",
                          bathrooms: "3",
                          garages: "1",
                          yearBuilt: "1985",
                          garageSize: "2 Cars",
                          availableFrom: "2014-06-01",
                          structureType: "Brick",
                          floorsNo: "2"
                      }}/>
                      <VideoSection/>
                      <MapSection/>
          </div>
          
          <div className="w-full md:w-auto shrink-0">
            <PriceCard />
            <ContactCard
      name="Steve Parker"
      address="560 3rd Ave, New York, NY 10016, USA"
      officePhone="+2224445557"
      mobilePhone="+3336669991"
      whatsapp="3336669991"
      email="steveparker@example.com"
      avatarUrl="/assets/Images/Properties/Rectangle 12.jpg" // Replace with actual image path
    />
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default LandDetails;