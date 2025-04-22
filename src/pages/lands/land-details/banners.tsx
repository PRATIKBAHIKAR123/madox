import CarouselNavigation, { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useState } from 'react';
import { motion } from 'framer-motion';

const properties = [
  { id: 1, image:'/assets/Images/Lands/Rectangle 19 (2).jpg' },
  { id: 2, image:'/assets/Images/Lands/Rectangle 19 (1).jpg' },
  { id: 3, image:'/assets/Images/Lands/Rectangle 19.jpg' },
];

const PropertyBanners = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  
  return (
    <motion.section
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full mx-auto relative"
    >
      <Carousel
        setApi={(api) => setCarouselApi(api)}
        className="w-full"
      >
        <CarouselContent>
          {properties.map((item) => (
            <CarouselItem key={item.id} className="relative basis-2/4.5">
              <img
                src={item.image}
                alt="Property"
                className="w-full h-auto object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      {carouselApi && <CarouselNavigation carouselApi={carouselApi} classname='rounded-lg h-[54px] w-[54px] carousel-nav-button-left carousel-nav-button-right'/>}
    </motion.section>
  );
};

export default PropertyBanners;