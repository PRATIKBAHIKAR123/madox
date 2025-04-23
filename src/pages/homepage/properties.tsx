import { MapPin } from 'lucide-react';
import { Card } from '../../components/ui/card';
import CarouselNavigation, { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedDots from '@/components/ui/animation';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const properties = [
  { id: 1, name: '155 Dalla Homestay', featured:true, image:'/assets/Images/Properties/house1.jpg', price: '$1,000,000', location: 'New York, NY', beds: 3, baths: 2, sqft: 1500, contact: 'John Doe', postedTime: '2 days ago' },
  { id: 2, name: 'House In Foxhall Ave', featured:false, image:'/assets/Images/Properties/house2.jpg' , price: '$1,200,000', location: 'Los Angeles, CA', beds: 4, baths: 3, sqft: 2000 , contact: 'Jane Smith', postedTime: '5 days ago' },
  { id: 3, name: 'Villa in St San Francisco', featured:false, image:'/assets/Images/Properties/house3.jpg', price: '$900,000', location: 'Chicago, IL', beds: 2, baths: 1, sqft: 1200 , contact: 'Alice Johnson', postedTime: '1 week ago' },
];

const Properties = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const navigate = useNavigate();

  return (
    <motion.section 
    initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-7xl mx-auto px-4 py-16 relative">
      <div className="text-center mb-12">
        <motion.div initial={{ x: -10, opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 3 }} className="title">Properties for Sales</motion.div>
        <AnimatedDots/>
        <div className="text-center justify-center text-[#8a909a] text-lg font-medium font-['Mulish'] leading-[27px]">Hand-Picked selection of quality places</div>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        setApi={(api) => setCarouselApi(api)}
        className="w-full"
      >
        <CarouselContent className='-ml-4 md:mx-[80px]'>
          {properties.map((item) => (
            <CarouselItem key={item.id} className="basis-full md:basis-1/2 lg:basis-1/3 px-2 md:px-4">
              <Card className="overflow-hidden h-full cursor-pointer" onClick={() => navigate('/property-details', { state: { property: item } })}>
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
              
                <div className="flex justify-between text-sm text-gray-500 my-2">
                  <div className="flex items-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                      <path d="M15.8333 7.5H4.16667C3.24619 7.5 2.5 8.24619 2.5 9.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V9.16667C17.5 8.24619 16.7538 7.5 15.8333 7.5Z" stroke="#58667E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5.83337 7.5V4.98611C5.83337 4.04096 6.21468 3.13429 6.89278 2.45619C7.57088 1.77809 8.47754 1.39679 9.4227 1.39679V1.39679C10.3679 1.39679 11.2745 1.77809 11.9526 2.45619C12.6307 3.13429 13.012 4.04096 13.012 4.98611V7.5" stroke="#58667E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 11.6667V13.3334" stroke="#58667E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Beds {item.beds}
                  </div>
                  <div className="flex items-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                      <path d="M2.5 9.16667C2.5 8.70643 2.6756 8.26488 2.98816 7.95232C3.30072 7.63976 3.74226 7.46416 4.20251 7.46416H15.7975C16.2578 7.46416 16.6993 7.63976 17.0119 7.95232C17.3244 8.26488 17.5 8.70643 17.5 9.16667V15.8333C17.5 16.2936 17.3244 16.7351 17.0119 17.0477C16.6993 17.3602 16.2578 17.5358 15.7975 17.5358H4.20251C3.74226 17.5358 3.30072 17.3602 2.98816 17.0477C2.6756 16.7351 2.5 16.2936 2.5 15.8333V9.16667Z" stroke="#58667E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5.83333 7.46418V4.75209C5.83333 3.83161 6.20288 2.94892 6.86059 2.29122C7.51829 1.63351 8.40097 1.26396 9.32146 1.26396H10.6786C11.599 1.26396 12.4817 1.63351 13.1394 2.29122C13.7971 2.94892 14.1667 3.83161 14.1667 4.75209V7.46418" stroke="#58667E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12.5 11.0476L9.16663 14.381" stroke="#58667E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10.8333 11.0476H12.5V12.7143" stroke="#58667E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7.5 14.381H9.16667V16.0476" stroke="#58667E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Baths {item.baths}
                  </div>
                  <div className="flex items-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                      <path d="M2.5 3.33334L3.6875 4.52084L5.3125 6.14584L6.5 7.33334" stroke="#58667E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8.75 9.58334L13.75 14.5833" stroke="#58667E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16.25 17.0833L17.5 18.3333" stroke="#58667E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17.5 3.33334L16.3125 4.52084L14.6875 6.14584L8.75 12.0833L6.5 14.3333" stroke="#58667E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2.5 18.3333L3.6875 17.1458L5.3125 15.5208L6.5 14.3333" stroke="#58667E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Sizes {item.sqft}
                  </div>
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-blue-600' : 'bg-gray-300'}`}
              ></div>
            ))}
          </div>
        </div>
      </Carousel>
      
      <div className="flex justify-center mt-8">
        <Button 
          variant="link" 
          className="text-blue-600 hover:text-blue-800" 
          onClick={() => {
            window.location.href = '/#/property-list';
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          View More
        </Button>
      </div>
      
      {/* Use our reusable carousel navigation component */}
      {carouselApi && <CarouselNavigation carouselApi={carouselApi} />}
    </motion.section>
  );
};

export default Properties;