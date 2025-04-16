
import {  Phone, Mail, MessageSquare } from 'lucide-react';

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
    
      {/* Footer */}
      <footer className="bg-[#0070AE] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-200">About Us</a></li>
              <li><a href="#" className="hover:text-blue-200">Our Business</a></li>
              <li><a href="#" className="hover:text-blue-200">Current Projects</a></li>
              <li><a href="#" className="hover:text-blue-200">Real estate</a></li>
              <li><a href="#" className="hover:text-blue-200">Our Products</a></li>
            </ul>
          </div>

          {/* Business Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Business</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-200">contruction</a></li>
              <li><a href="#" className="hover:text-blue-200">Manufacturing</a></li>
              <li><a href="#" className="hover:text-blue-200">Real Estate</a></li>
              <li><a href="#" className="hover:text-blue-200">Hospitality</a></li>
              <li><a href="#" className="hover:text-blue-200">Agriculture</a></li>
            </ul>
          </div>

          {/* General Inquiries Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">General Inquiries</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <a href="tel:+12345679801" className="hover:text-blue-200">+1 (234) 567-9801</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a href="mailto:support@sacredthemes.net" className="hover:text-blue-200">support@sacredthemes.net</a>
              </li>
              <li className="flex items-center">
                <MessageSquare size={18} className="mr-2" />
                <a href="#" className="hover:text-blue-200">Chat</a>
              </li>
              <li className="flex items-center"><a href="#" className="hover:text-blue-200">Career Opportunities</a></li>
              <li className="flex items-center"><a href="#" className="hover:text-blue-200">News Letter</a></li>
            </ul>

            {/* Social Media Links */}
            <div className="flex space-x-3 mt-4">
              <a href="#" className="bg-[#0070AE] hover:bg-blue-800 p-2 rounded-md outline outline-1 outline-offset-[-1px] outline-white/20 overflow-hidden">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="bg-[#0070AE] hover:bg-blue-800 p-2 rounded-md outline outline-1 outline-offset-[-1px] outline-white/20 overflow-hidden">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              <a href="#" className="bg-[#0070AE] hover:bg-blue-800 p-2 rounded-md outline outline-1 outline-offset-[-1px] outline-white/20 overflow-hidden">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Partners Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Partners</h3>
            <div className="grid grid-cols-2 gap-2">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="bg-white text-gray-700 px-2 py-2 rounded flex items-center justify-center">
                  {i % 3 === 0 ? (
                    <img src='/assets/Images/Icons/Vector.png' alt="Brand" className="h-4" />
                  ) : (
                    <img src='/assets/Images/Brands/brand-first.png' alt="Brand" className="h-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default RealEstateLandingPage;