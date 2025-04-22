import Header from "@/header/header";
import Footer from "@/header/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ContactPage = () => {
  return (
    <>
      <Header isPagesHeader={true} />
      <div className="flex flex-col min-h-screen pt-12">
        {/* Banner Section */}
        <div className="w-full h-[300px] relative mb-8">
          <img 
            src="/assets/Images/contact.png" 
            alt="Contact Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Contact Us</h1>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full h-[400px] mt-6 px-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5424422533817!2d-0.12985492402827147!3d51.50073446338381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce176ac979%3A0x42af85654e23a0b4!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1710644106045!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>

        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Side - Contact Info */}
            <div className="space-y-8 text-left">
              <div>
                <h2 className="text-[40px] font-bold mb-6">Get In Touch</h2>
                <p className="text-[#656567] text-base mb-4">14 LE Goulburn St, Sydney 1198NSA.</p>
                <p className="text-[#656567] text-base mb-4">(+089)19918989</p>
                <p className="text-[#656567] text-base mb-8">[email protected]</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">OPEN HOURS</h3>
                <p className="text-[#656567] text-base mb-2">Contact Our Customer Happiness Team</p>
                <p className="text-[#656567] text-base">Monday-Friday 9am-5pm</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">FOLLOW US:</h3>
                <div className="flex items-center space-x-4">
                  <a href="#" className="hover:text-[#0070AE]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.17 6.17 0 0 0-1-.1A6.3 6.3 0 0 0 4 15.64a6.3 6.3 0 0 0 6.3 6.3 6.3 6.3 0 0 0 6.3-6.3V8.2a8.24 8.24 0 0 0 4.4 1.29v-3.4a4.85 4.85 0 0 1-1.41.6z"/>
                    </svg>
                  </a>
                  <a href="#" className="hover:text-[#0070AE]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="hover:text-[#0070AE]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="hover:text-[#0070AE]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16.6.213l-2.865.001c-3.215 0-5.292 2.138-5.292 5.451v2.512H5.57c-.251 0-.454.204-.454.456v3.642c0 .252.203.456.454.456h2.873v9.19c0 .252.203.456.454.456h3.745c.251 0 .454-.204.454-.456v-9.19h3.354c.251 0 .454-.204.454-.456l.001-3.642c0-.121-.048-.237-.133-.323-.085-.086-.201-.133-.321-.133h-3.355V5.064c0-1.019.241-1.537 1.558-1.537l1.911-.001c.251 0 .454-.204.454-.456V.669c0-.251-.203-.456-.454-.456z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 text-left">Name</label>
                    <div className="relative">
                      <Input 
                        type="text" 
                        placeholder="Name" 
                        className="w-full border-gray-200 focus:border-[#0070AE] focus:ring-[#0070AE]" 
                      />
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500">*</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 text-left">Email</label>
                    <div className="relative">
                      <Input 
                        type="email" 
                        placeholder="Email adress" 
                        className="w-full border-gray-200 focus:border-[#0070AE] focus:ring-[#0070AE]" 
                      />
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500">*</span>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 text-left">Your message</label>
                  <textarea
                    rows={8}
                    className="w-full rounded-md border border-gray-200 bg-transparent px-3 py-2 text-base shadow-sm outline-none focus:border-[#0070AE] focus:ring-[#0070AE]"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <div className="flex justify-start">
                  <Button className="bg-[#0070AE] hover:bg-[#005a8e] text-white px-12 py-3 rounded-md text-base">
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage; 