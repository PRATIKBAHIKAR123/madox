import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/header/header';
import Footer from '@/header/footer';
import { Card } from "@/components/ui/card";
import { useMediaQuery } from '@/hooks/useMediaQuery';

// Mock products data - in a real app, this would come from an API
const productsData = [
  {
    id: 1,
    brand: "Ultra tec Cement",
    name: "Red Sand Bags",
    price: 125400,
    features: [
      "High-quality natural red sand",
      "Perfect for construction and landscaping",
      "Uniform grain size distribution"
    ],
    images: [
      "/assets/Images/Lands/construction_material1.jpg",
      "/assets/Images/Lands/construction_material1.jpg",
      "/assets/Images/Lands/construction_material1.jpg",
      "/assets/Images/Lands/construction_material1.jpg"
    ],
    rating: 4,
    recommendationPercentage: 95
  },
  {
    id: 2,
    brand: "Ultra tec Cement",
    name: "White Cement Bags",
    price: 125400,
    features: [
      "Premium quality white cement",
      "Perfect for decorative finishes",
      "Superior binding strength"
    ],
    images: [
      "/assets/Images/Lands/construction_material2.jpg",
      "/assets/Images/Lands/construction_material2.jpg",
      "/assets/Images/Lands/construction_material2.jpg",
      "/assets/Images/Lands/construction_material2.jpg"
    ],
    rating: 5,
    recommendationPercentage: 98
  },
  {
    id: 3,
    brand: "Ultra tec Cement",
    name: "Red Bricks",
    price: 125400,
    features: [
      "High-strength clay bricks",
      "Uniform size and shape",
      "Excellent durability"
    ],
    images: [
      "/assets/Images/Lands/construction_material3.jpg",
      "/assets/Images/Lands/construction_material3.jpg",
      "/assets/Images/Lands/construction_material3.jpg",
      "/assets/Images/Lands/construction_material3.jpg"
    ],
    rating: 4,
    recommendationPercentage: 92
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('small');
  const [activeTab, setActiveTab] = useState('description');
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Find the product based on the ID from the URL
  const product = productsData.find(p => p.id === Number(id)) || productsData[0];

  const sizes = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' },
    { value: 'extra-large', label: 'Extra Large' },
    { value: 'xxl', label: 'XXL' }
  ];

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header isPagesHeader={true} />
      <div className="container mx-auto px-4 py-8 max-w-7xl mt-28 md:mt-28 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images Section */}
          <div className="flex gap-6">
            {!isMobile ? (
              <>
                {/* Desktop Layout */}
                <div className="flex flex-col gap-4 w-24">
                  {product.images.map((image, index) => (
                    <div
                      key={index}
                      className={`w-24 h-24 border-2 rounded-lg cursor-pointer overflow-hidden ${
                        selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex-1">
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img
                      src={product.images[selectedImage]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </>
            ) : (
              // Mobile Layout
              <div className="w-full relative">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-md"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-md"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* Product Info Section */}
          <div className="space-y-6 px-4 md:px-0">
            <div>
              <div className="flex flex-col mb-2">
                <div className="flex items-center justify-between mb-1">
                  <h5 className="text-2xl md:text-3xl font-bold text-gray-900">{product.name}</h5>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className={`w-4 h-4 md:w-5 md:h-5 ${
                          index < product.rating ? 'fill-red-500 text-red-500' : 'fill-gray-200 text-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-left text-gray-600 text-sm md:text-base">Brand: {product.brand}</p>
              </div>
            </div>

            <div className="pt-2 md:pt-4">
              <div className="flex items-center gap-6 mb-4">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1100ff]">
                  ${(product.price/125.4).toFixed(0)} <span className="text-xl md:text-2xl">/ Kg</span>
                </h2>
              </div>
              <div className="text-left text-xs md:text-sm text-gray-600">
                <span className="text-green-600 font-medium">{product.recommendationPercentage}%</span> of buyers have recommended this
              </div>
            </div>

            <div className="pt-2 md:pt-4">
              <h3 className="text-base md:text-lg mb-4">Choose a Size</h3>
              <RadioGroup
                defaultValue={selectedSize}
                onValueChange={setSelectedSize}
                className="flex flex-row flex-wrap gap-4"
              >
                {sizes.map((size) => (
                  <div key={size.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={size.value} id={size.value} className="text-blue-500" />
                    <Label htmlFor={size.value} className="text-gray-700">{size.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <Button className="w-full bg-[#0798ff] hover:bg-blue-600 text-white py-4 md:py-6 text-base md:text-lg font-semibold rounded-md mt-6 md:mt-8">
              Enquire Now For More
            </Button>
          </div>
        </div>

        {/* Description and Specification Tabs */}
        <div className="mt-16 max-w-7xl mx-auto px-4">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <div className="max-w-[1000px] mx-auto">
              <nav className="-mb-px flex space-x-12">
                <button 
                  onClick={() => setActiveTab('description')}
                  className={`py-4 text-base font-medium border-b-2 transition-colors ${
                    activeTab === 'description' 
                      ? 'border-blue-500 text-blue-600' 
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Description
                </button>
                <button 
                  onClick={() => setActiveTab('specification')}
                  className={`py-4 text-base font-medium border-b-2 transition-colors ${
                    activeTab === 'specification' 
                      ? 'border-blue-500 text-blue-600' 
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Specification
                </button>
              </nav>
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="py-8">
            <div className="max-w-[1000px] mx-auto">
              {activeTab === 'description' && (
                <div className="space-y-8">
                  <p className="text-[15px] leading-7 text-gray-800 text-left">
                    Our premium White Cement Bags offer superior quality and consistency for all your construction needs. Perfect for decorative and architectural applications, this cement delivers excellent workability and durability.
                  </p>
                  
                  <div className="space-y-4 text-[13px] leading-7 text-gray-600 text-left">
                    <p>• High early strength development</p>
                    <p>• Excellent workability and finish</p>
                    <p>• Consistent quality and color</p>
                    <p>• Ideal for architectural and decorative work</p>
                  </div>
                </div>
              )}
              
              {activeTab === 'specification' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Technical Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Add specification details */}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Products You May Like Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold mb-4">Products You May Like</h2>
            <p className="text-gray-600">Some More Products We Sell</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productsData.map((relatedProduct) => (
              <Card 
                key={relatedProduct.id} 
                className="overflow-hidden cursor-pointer"
                onClick={() => navigate(`/product/${relatedProduct.id}`)}
              >
                <div className="relative card-image-container">
                  <img 
                    src={relatedProduct.images[0]} 
                    alt={relatedProduct.name} 
                    className="w-full h-[250px] object-cover"
                  />
                  <div className="absolute bottom-3 right-3 flex gap-2">
                    <a className="w-8 h-8 bg-transparent rounded-full flex items-center justify-center text-white">
                      <img 
                        src="/assets/Images/Icons/List.png"
                        alt="List" 
                        className="h-full"
                      />
                    </a>
                    <a className="w-8 h-8 rounded-full flex items-center justify-center text-white">
                      <img 
                        src="/assets/Images/Icons/magnifier.png"
                        alt="Magnifier" 
                        className="h-full"
                      />
                    </a>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-[#1c1c1e] text-lg font-semibold font-['Poppins'] capitalize">{relatedProduct.name}</h3>
                  <div className="w-full h-[42px] bg-[#0798ff]/10 rounded-md flex justify-center items-center mt-2">
                    <span className="text-black text-lg font-semibold font-['Poppins'] leading-[21px]">
                      ${relatedProduct.price.toLocaleString()}/ Kg
                    </span>
                  </div>
                  <button className="text-[#0798ff] hover:text-blue-700 font-semibold mt-4">
                    Enquire Now
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail; 