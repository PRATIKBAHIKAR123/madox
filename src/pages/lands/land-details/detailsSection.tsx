interface DetailsSectionProps {
    data: {
      propertyId: string;
      price: string;
      priceInfo: string;
      propertySize: string;
      propertyLotSize: string;
      rooms: string;
      bedrooms: string;
      bathrooms: string;
      garages: string;
      yearBuilt: string;
      garageSize: string;
      availableFrom: string;
      structureType: string;
      floorsNo: string;
    };
  }
  
  export default function DetailsSection({ data }: DetailsSectionProps) {
    return (
      <div className="p-8 bg-white rounded-md mb-3">
        <div className="text-[#222222] text-base text-left font-medium font-['Roboto'] leading-tight py-[30px]">Details</div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6 text-left">
          <div className="flex gap-2 items-center">
            <p className="text-sm font-medium text-black">Property Id:</p>
            <p className="text-sm">{data.propertyId}</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-sm font-medium text-black">Price:</p>
            <p className="text-sm"> {data.price}</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-sm font-medium text-black">Price info:</p>
            <p className="text-sm"> {data.priceInfo}</p>
          </div>
  
          <div className="flex gap-2 items-center">
            <p className="text-sm font-medium text-black">Property Size:</p>
            <p className="text-sm">{data.propertySize}</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-sm font-medium text-black">Property Lot Size:</p>
            <p className="text-sm">{data.propertyLotSize}</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-sm font-medium text-black">Rooms:</p>
            <p className="text-sm">{data.rooms}</p>
          </div>
  
          <div className="flex gap-2 items-center">
            <p className="text-sm font-medium text-black">Bedrooms:</p>
            <p className="text-sm">{data.bedrooms}</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-sm font-medium text-black">Bathrooms:</p>
            <p className="text-sm">{data.bathrooms}</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-sm font-medium text-black">Garages:</p>
            <p className="text-sm">{data.garages}</p>
          </div>
  
          <div className="flex gap-2 items-center">
            <p className="text-sm font-medium text-black">Year Built:</p>
            <p className="text-sm">{data.yearBuilt}</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-sm font-medium text-black">Garage Size:</p>
            <p className="text-sm">{data.garageSize}</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-sm font-medium text-black">Available from:</p>
            <p className="text-sm">{data.availableFrom}</p>
          </div>
  
          <div className="flex gap-2 items-center">
            <p className="text-sm font-medium text-black">Structure Type:</p>
            <p className="text-sm">{data.structureType}</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-sm font-medium text-black">Floors No:</p>
            <p className="text-sm">{data.floorsNo}</p>
          </div>
        </div>
      </div>
    );
  }