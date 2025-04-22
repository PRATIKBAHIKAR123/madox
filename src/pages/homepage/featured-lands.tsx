import { MapPin } from 'lucide-react';
import { Card } from '../../components/ui/card';
import CarouselNavigation, { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useState } from 'react';
import AnimatedDots from '@/components/ui/animation';
import { Button } from '@/components/ui/button';

const properties = [
  { id: 1, name: '155 Dalla Homestay', featured:true, image:'/assets/Images/Lands/1.png', price: '$1,000,000', location: '2612 Macarthur Boulevard, Oakland', beds: 3, baths: 2, sqft: 1500, contact: '91+ 9876543210', postedTime: '2 days ago' },
  { id: 2, name: 'House In Foxhall Ave', featured:false, image:'/assets/Images/Lands/banner.png' , price: '$1,200,000', location: '2612 Macarthur Boulevard, Oakland', beds: 4, baths: 3, sqft: 2000 , contact: '91+ 9876543210', postedTime: '5 days ago' },
  { id: 3, name: 'Villa in St San Francisco', featured:false, image:'/assets/Images/Lands/3.png', price: '$900,000', location: '2612 Macarthur Boulevard, Oakland', beds: 2, baths: 1, sqft: 1200 , contact: '91+ 9876543210', postedTime: '1 week ago' },
];

const FeaturedLands = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 relative">
      <div className="text-center mb-12">
        <div className="title">Featured Lands for Sales</div>
        <AnimatedDots/>
        <div className="text-center justify-center text-[#8a909a] text-lg font-medium font-['Mulish'] leading-[27px]">Hand-Picked selection of quality Land</div>
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
              <Card className="overflow-hidden h-full cursor-pointer" onClick={() => {
    window.location.href = '/#/land-details';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }}>
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <Button variant={'link'} className='mt-3' onClick={() => {
    window.location.href = '/#/land-list';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }}>View More</Button>
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
      
      {/* Use our reusable carousel navigation component */}
      {carouselApi && <CarouselNavigation carouselApi={carouselApi} />} 
    </section>
  );
};

export default FeaturedLands;