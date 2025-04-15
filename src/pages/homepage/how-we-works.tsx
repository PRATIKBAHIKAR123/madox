
import { Card } from "@/components/ui/card";

export default function HowWeWorks() {
  const steps = [
    {
      number: "01",
      title: "Search for Location",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio.",
      icon: '/assets/Images/Icons/work-icon-1.svg fill.png',
      color: "bg-indigo-500"
    },
    {
      number: "02",
      title: "Select Property Type",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio.",
      icon: '/assets/Images/Icons/work-icon-2.svg.png',
      color: "bg-blue-500"
    },
    {
      number: "03",
      title: "Book Your Property",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio.",
      icon: '/assets/Images/Icons/work-icon-3.svg.png',
      color: "bg-emerald-500"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      {/* Heading Section */}
      <div className="text-center mb-12">
          <div className="title"> How We Works</div>
          <div className='flex justify-center items-center space-x-2 my-[15px]'>
          <div className="w-4 h-1.5 bg-[#0070ae] rounded-[30px]" />
          <div className="w-[46px] h-1.5 bg-[#0070ae] rounded-[30px]" />
          </div>
          <div className="text-center justify-center text-[#8a909a] text-lg font-medium font-['Mulish'] leading-[27px]">Follow these 3 steps to book your place</div>
          </div>

      {/* Steps Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <Card key={index} className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col items-center text-center">
              {/* Icon Circle */}
              <div className={`${step.color} rounded-full p-5 mb-6 flex items-center justify-center`}>
                <img 
                  src={step.icon} 
                  alt="Step Icon" 
                  className="h-8 w-8"
                />
              </div>
              
              {/* Step Number and Title */}
              <div className="mb-3">
                <h3 className=" text-[#0e0e46] text-xl font-semibold font-['Plus_Jakarta_Sans']">{step.number}. {step.title}</h3>
              </div>
              
              {/* Description */}
              <p className="text-[#8a909a] text-base font-normal font-['Plus_Jakarta_Sans']">{step.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}