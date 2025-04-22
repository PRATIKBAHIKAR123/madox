import { Bath, Bed, Box, Calendar, Car } from "lucide-react";

const Overview = () => { 
return (
<div className="bg-white p-8 mb-2">
  <div className="text-[#222222] text-base text-left font-medium font-['Roboto'] leading-tight">Overview</div>
  <div className="flex gap-4 mt-2 justify-center">
  <div className="overflow-hidden flex flex-col gap-2 items-center">
  <Bed/>
  <div className="text-[#222222] text-sm font-medium font-['Roboto'] leading-tight">3 Bedrooms</div>
  </div>

  <div className="overflow-hidden flex flex-col gap-2 items-center">
  <Bath/>
  <div className="text-[#222222] text-sm font-medium font-['Roboto'] leading-tight">2.5 Bathrooms</div>
  </div>
  
  <div className="overflow-hidden flex flex-col gap-2 items-center">
    <Car/>
    <div className="text-[#222222] text-sm font-medium font-['Roboto'] leading-tight">1 Garages</div>
  </div>

  <div className="overflow-hidden flex flex-col gap-2 items-center">
    <Box/>
    <div className="text-[#222222] text-sm font-medium font-['Roboto'] leading-tight">1,300 ft</div>
  </div>


  <div className="overflow-hidden flex flex-col gap-2 items-center">
    <Calendar/>
    <div className="text-[#222222] text-sm font-medium font-['Roboto'] leading-tight">Year Built: 1985</div>
  </div>

  </div>
</div>
);
}
export default Overview;