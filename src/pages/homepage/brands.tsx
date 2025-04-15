import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const properties = [
  { id: 1,  image:'src/assets/Images/Brands/brand-first.png' },
    { id: 2, image:'src/assets/Images/Brands/brand.png'},
    { id: 3,  image:'src/assets/Images/Brands/brand-first.png' },
    { id: 4, image:'src/assets/Images/Brands/brand.png'},
    { id: 5,  image:'src/assets/Images/Brands/brand-first.png' },
    { id: 6, image:'src/assets/Images/Brands/brand.png'},
    { id: 7,  image:'src/assets/Images/Brands/brand-first.png' },
    { id: 8, image:'src/assets/Images/Brands/brand.png'},
  ]

const Brands = () => {
  return (
    
      <section className="w-full mx-auto px-4 py-16">
        
          <div className="text-center mb-12">
          <div className="title">Hundreds of Partners Around the World</div>
          <div className='flex justify-center items-center space-x-2 my-[15px]'>
          <div className="w-4 h-1.5 bg-[#0070ae] rounded-[30px]" />
          <div className="w-[46px] h-1.5 bg-[#0070ae] rounded-[30px]" />
          </div>
          <div className="text-center justify-center text-[#8a909a] text-lg font-medium font-['Mulish'] leading-[27px]">Every day, we build trust through communication, transparency, and results.</div>
          </div>

          <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent >
      {properties.map((item) => (
          <CarouselItem key={item.id} className="basis-1/3 md:basis-1/6 lg:basis-1/8">
            
                <div className='bg-[#f2faff] rounded-[10px] px-[30px] py-2'>
                
                  <img 
                    src={item.image} 
                    alt="Property" 
                    className="h-full"
                  />
                </div>
                
             
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
          

        
      </section>

    
  );
};

export default Brands;