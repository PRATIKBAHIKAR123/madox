import { Check } from "lucide-react";

export default function ContactUs() {
  const benefits = [
    "Multiply global marketing policy",
    "Track your daily activity",
    "Virtual support team",
    "Integrate it on your business",
    "Let's monitor the team",
    "Pick up the tool"
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Left side - Image */}
        <div className="w-full md:w-1/2">
          <div className="overflow-hidden">
            <div className="h-64 md:h-[560px]">
              {/* Placeholder for the business person image */}
              <img src="/assets/Images/business_professional.jpg" alt="Business Person" className="w-full h-full relative rounded-[15px]" />
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="w-full md:w-1/2 space-y-6 text-left">
          <div className="space-y-4">
            <p className="skill_tag ">YOUR BENEFIT</p>
            
            <h2 className="skill_title">
              Expert Services Change Your Business Value
            </h2>
            
            <p className="text-[#656567] text-lg font-normal font-['Mulish']">
              Curabitur vitae nunc sed. Fringilla urna porttitor rhoncus dolor purus non at 
              enim malesuada bibeum arcu vitae elementum. Semper eget duis tellus 
              lorem ipsum dolor simit urna condimentum.
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="bg-[#0070ae] rounded-full p-1 flex items-center justify-center">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-left text-[#0070ae] text-lg font-medium font-['Public_Sans']">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Contact Button */}
          <div className="flex justify-center md:justify-start mt-8">
          <a className="default_btn">
            <span className="text-white">Contact Us</span>
            </a>
            </div>
        </div>
      </div>

    </div>
  );
}