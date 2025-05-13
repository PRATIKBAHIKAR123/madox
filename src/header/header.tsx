import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { List, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  isPagesHeader?: boolean;
}

const Header = ({ isPagesHeader }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // const handleContactClick = () => {
  //   navigate('/contact');
  //   setSidebarOpen(false);
  // };

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio-section');
    if (portfolioSection) {
      const headerHeight = 80; // Approximate header height in pixels
      const elementPosition = portfolioSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setSidebarOpen(false);
  };

  const scrollToProperties = () => {
    const propertiesSection = document.getElementById('properties-section');
    if (propertiesSection) {
      const headerHeight = 80; // Approximate header height in pixels
      const elementPosition = propertiesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <header
        className={`fixed w-full top-0 z-10 transition-colors duration-300 ${scrolled
          ? 'bg-white'
          : isPagesHeader
            ? 'bg-white md:bg-[#0070AE]'
            : 'md:bg-transparent'
          }`}
      >
        <div className="container mx-auto px-4 py-2 flex items-center justify-between md:py-4 border-b border-gray-200">
          {/* Logo (left) */}
          <div onClick={() => navigate('/')} className="cursor-pointer flex-1 flex justify-start">
            <img
              src={`${scrolled ? '/assets/Images/logo-dark.png' : '/assets/Images/logo.png'}`}
              alt="Logo"
              className="hidden md:block h-20 w-auto"
            />
            <img
              src="/assets/Images/logo-dark.png"
              alt="Logo"
              className="block md:hidden h-12 w-auto"
            />          </div>
          {/* Brand (center) */}
          <div className="flex-1 flex justify-center">
            <span
              className={`hidden md:inline text-4xl font-bold tracking-widest transition-colors duration-300 ${scrolled ? 'text-[#0070AE]' : 'text-white'
                }`}
            >
              MADOX
            </span>
          </div>

          {/* Contact Details (right) */}
          <div className="flex-1 flex justify-end items-center">
            <span
              onClick={() => navigate('/contact')}
              className={`hidden md:block text-sm font-semibold cursor-pointer hover:underline transition-colors duration-200 ${scrolled ? 'text-gray-800' : 'text-white'
                }`}
            >
              Contact: +1 (234) 567-9801 | info@madox.com
            </span>
          </div>

          {/* Mobile menu button */}
          <Button
            onClick={toggleSidebar}
            className="block md:hidden p-2 bg-[#0070ae] rounded ml-2"
          >
            {sidebarOpen ? <X color="white" /> : <List color="white" />}
          </Button>
        </div>
        {/* Navigation Bar (centered) */}
        <nav className="w-full ">

          <div className="container mx-auto px-4 flex items-center justify-center space-x-6 py-2">
            <a
              className={`hover:text-blue-200 hidden md:inline transition-colors font-semibold text-base ${scrolled ? 'text-gray-800' : 'text-white'}`}
              href="/#/aboutus"
            >
              About Us
            </a>
            <a
              className={`hover:text-blue-200 hidden md:inline transition-colors font-semibold text-base cursor-pointer ${scrolled ? 'text-gray-800' : 'text-white'}`}
              onClick={scrollToProperties}
            >
              Our Business
            </a>
            <a className={`hover:text-blue-200 hidden md:inline transition-colors font-semibold text-base cursor-pointer ${scrolled ? 'text-gray-800' : 'text-white'}`} onClick={scrollToPortfolio}>Current Projects</a>
            <a className={`hover:text-blue-200 hidden md:inline transition-colors font-semibold text-base cursor-pointer ${scrolled ? 'text-gray-800' : 'text-white'}`} href="/#/property-list">Real Estate</a>
            <a className={`hover:text-blue-200 hidden md:inline transition-colors font-semibold text-base cursor-pointer ${scrolled ? 'text-gray-800' : 'text-white'}`} href="/#/products">Our Products</a>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-20 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}>
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center px-4 py-3 border-b">
            <img
              src="/assets/Images/logo-dark.png"
              alt="Logo"
              className="h-10 w-auto"
            />
            <button onClick={toggleSidebar} className="p-2 bg-gray-200">
              <X size={20} />
            </button>
          </div>

          <div className="flex flex-col py-4">
            <a className="px-4 py-3 text-gray-800 hover:bg-blue-50 transition-colors font-bold text-base" href="/">Home</a>
            <a className="px-4 py-3 text-gray-800 hover:bg-blue-50 transition-colors font-bold text-base" href="/#/aboutus">About Us</a>
            <a className="px-4 py-3 text-gray-800 hover:bg-blue-50 transition-colors font-bold text-base" onClick={scrollToProperties}>Our Business</a>
            <a className="px-4 py-3 text-gray-800 hover:bg-blue-50 transition-colors font-bold text-base" onClick={scrollToPortfolio}>Current Project</a>
            <a className="px-4 py-3 text-gray-800 hover:bg-blue-50 transition-colors font-bold text-base" href="/#/property-list">Real Estate</a>
            <a className="px-4 py-3 text-gray-800 hover:bg-blue-50 transition-colors font-bold text-base" href="/#/products">Our Products</a>
            <a className="px-4 py-3 text-gray-800 hover:bg-blue-50 transition-colors font-bold text-base" href="/#/contact">Contact</a>
          </div>

          <div className="mt-auto p-4 border-t">
            {/* <Button 
              onClick={handleContactClick}
              className="w-full text-white bg-blue-600 hover:bg-blue-700"
            >
              {isPagesHeader ? 'Login' : 'Contact Us'}
            </Button> */}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Header;