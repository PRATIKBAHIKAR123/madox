import { Play } from "lucide-react";

// interface VideoSectionProps {
//   data: {
//     url: string;
//   };
// }

export default function VideoSection() {
  return (
    <div className=" p-8 bg-white rounded-md text-left mb-2">
        <div className="text-[#222222] text-base text-left font-medium font-['Roboto'] leading-tight py-[30px]">Video</div>
      <div className="relative w-full h-48 md:h-64 bg-gray-200 rounded-md overflow-hidden">
        <img 
          src="/assets/Images/Properties/Link → white_room-1110x623.jpg.jpg" 
          alt="Property video thumbnail" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button 
            className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center"
            aria-label="Play video"
          >
            <Play size={24} className="text-gray-800 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}