import AnimatedDots from '@/components/ui/animation';
import { Card } from '../../components/ui/card';
import CarouselNavigation, { Carousel, CarouselApi, CarouselContent, CarouselItem, } from '@/components/ui/carousel';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const products = [
  { id: 1, name: 'Red Sand Bags', featured:true, image:'/assets/Images/Lands/construction_material1.jpg', price: '$125,400/ Kg', location: '2612 Macarthur Boulevard, Oakland', beds: 3, baths: 2, sqft: 1500, contact: '91+ 9876543210', postedTime: '2 days ago' },
    { id: 2, name: 'White Cement Bags', featured:false, image:'/assets/Images/Lands/construction_material2.jpg' , price: '$125,400/ Kg', location: '2612 Macarthur Boulevard, Oakland', beds: 4, baths: 3, sqft: 2000 , contact: '91+ 9876543210', postedTime: '5 days ago' },
    { id: 3, name: 'Red Bricks', featured:false, image:'/assets/Images/Lands/construction_material3.jpg', price: '$125,400/ Kg', location: '2612 Macarthur Boulevard, Oakland', beds: 2, baths: 1, sqft: 1200 , contact: '91+ 9876543210', postedTime: '1 week ago' },
]

const ConstructionProducts = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const navigate = useNavigate();

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    
      <section className="w-full max-w-7xl mx-auto px-4 py-16 relative">
        
          <div className="text-center mb-12">
          <div className="title">Construction Products</div>
          <AnimatedDots/>
          <div className="text-center justify-center text-[#8a909a] text-lg font-medium font-['Mulish'] leading-[27px]">Some More Products We Sell</div>
          </div>

          <Carousel
          setApi={(api) => setCarouselApi(api)}
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent className='-ml-4 md:mx-[80px]'>
      {products.map((item) => (
          <CarouselItem key={item.id} className="basis-full md:basis-1/2 lg:basis-1/3 pl-4 md:pl-8">
            <Card 
              className="overflow-hidden h-full cursor-pointer transition-transform hover:scale-105"
              onClick={() => handleProductClick(item.id)}
            >
                <div className='relative card-image-container'>
                {item.featured && (
                    <div className="absolute top-3 left-3 bg-amber-400 text-white text-xs font-medium py-1 px-2 rounded z-10">
                      Featured
                    </div>
                  )}
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="h-full w-full object-cover"
                  />
                  
                  <div className="absolute bottom-3 right-3 flex gap-2">
                    <a className="w-8 h-8 bg-transparent  rounded-full flex items-center justify-center text-white">
                    <img 
                    src={'/assets/Images/Icons/List.png'} 
                    alt="Property" 
                    className="w-4 h-4"
                  />
                      {/* <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 20.25H5.25C5.05109 20.25 4.86032 20.171 4.71967 20.0303C4.57902 19.8897 4.5 19.6989 4.5 19.5V6C4.5 5.80109 4.57902 5.61032 4.71967 5.46967C4.86032 5.32902 5.05109 5.25 5.25 5.25H7.5V3.75H9V5.25H15V3.75H16.5V5.25H18.75C18.9489 5.25 19.1397 5.32902 19.2803 5.46967C19.421 5.61032 19.5 5.80109 19.5 6V13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19.5 17.25C19.5 18.4926 18.4926 19.5 17.25 19.5C16.0074 19.5 15 18.4926 15 17.25C15 16.0074 16.0074 15 17.25 15C18.4926 15 19.5 16.0074 19.5 17.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg> */}
                    </a>
                    <a className="w-8 h-8  rounded-full flex items-center justify-center text-white">
                    <img 
                    src={'/assets/Images/Icons/magnifier.png'} 
                    alt="Property" 
                    className="w-4 h-4"
                  />
                      {/* <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg> */}
                    </a>
                  </div>
                </div>
                <div className="text-center text-[#1c1c1e] text-lg font-semibold font-['Poppins'] capitalize">{item.name}</div>
                  {/* <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="h-4 w-4 mr-1 text-[#8e8e93] text-sm font-normal font-['Poppins'] leading-[21px]" /> {item.location}
                  </div> */}
                
                  <div className="w-full h-[42px] bg-[#0798ff]/10 rounded-md flex justify-center items-center" >
                 
                  <span className="text-black text-lg font-semibold font-['Poppins'] leading-[21px]">$125,400/ Kg</span>
                  </div>
                
              </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-8">
        <Button 
          variant="link" 
          className="text-blue-600 hover:text-blue-800" 
          onClick={() => {
            window.location.href = '/#/products';
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          View More
        </Button>
      </div>
    </Carousel>
    {/* Use our reusable carousel navigation component */}
    {carouselApi && <CarouselNavigation carouselApi={carouselApi} />}

        
      </section>

    
  );
};

export default ConstructionProducts;