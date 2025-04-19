

import Properties from './homepage/properties';
import SmallbannerSection from './homepage/smallbanner';
import FeaturedLands from './homepage/featured-lands';
import PropertyPortfolio from './homepage/portfolio';
import ConstructionProducts from './homepage/construction-products';
import ContactUs from './homepage/contactUs';
import Brands from './homepage/brands';
import HowWeWorks from './homepage/how-we-works';
import Header from '@/header/header';
import { motion } from 'framer-motion';
import Footer from '@/header/footer';

const RealEstateLandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <Header/>

      {/* Hero Section */}
      <section 
        className="relative h-[260px] md:h-[100vh] bg-cover bg-center flex items-center mt-20 md:mt-0" 
        style={{ backgroundImage: "url('/assets/Images/Banners/home-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 text-white text-left">
        <motion.p
      initial={{ x: -20, opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 3 }}
    ><div className="justify-right text-white text-[25px] md:text-[40px] font-extrabold font-['Mulish'] leading-[30px] md:leading-[60px] animate-fade-in-down px-4">Easy Way to Find a<br/>Perfect Property</div></motion.p>
        <div className="justify-right text-white text-[15px] font-normal font-['Mulish'] leading-7">From as low as $10 per day with limited time offer discounts.</div>
          
        </div>
      </section>

      {/* Featured Properties */}
      <Properties />

      {/* Property Categories */}
      <SmallbannerSection
  title="Buy A Land Now"
  description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  imageUrl="/assets/Images/Section.jpg"
  buttonText="Register Now"
/>



      {/* Recent Blog Posts */}
      <FeaturedLands/>
      
      <PropertyPortfolio/>
      <ConstructionProducts/>
      <ContactUs/>

      <SmallbannerSection
  title="Buy A Property Now"
  description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  imageUrl="/assets/Images/Section.jpg"
  buttonText="Register Now"
/>

<Brands/>
<HowWeWorks/>
<Footer/>
    </div>
  );
};

export default RealEstateLandingPage;