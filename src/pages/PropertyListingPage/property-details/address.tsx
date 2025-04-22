// AddressSection.tsx
interface AddressSectionProps {
    data: {
      street: string;
      city: string;
      area: string;
      state: string;
      zip: string;
      country: string;
    };
  }
  
  export default function AddressSection({ data }: AddressSectionProps) {
    return (
      <div className=" p-8 bg-white rounded-md text-left mb-2">
        <div className="text-[#222222] text-base text-left font-medium font-['Roboto'] leading-tight py-[30px]">Address</div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div  className="flex gap-2 items-center">
            <p className="text-sm font-medium text-black">Address:</p>
            <p className="text-sm">{data.street}</p>
          </div>
          <div  className="flex gap-2 items-center">
            <p className="text-sm font-medium text-black">City:</p>
            <p className="text-sm">{data.city}</p>
          </div>
          <div  className="flex gap-2 items-center">
            <p className="text-sm font-medium text-black">Area:</p>
            <p className="text-sm">{data.area}</p>
          </div>
          <div   className="flex gap-2 items-center">
            <p className="text-sm font-medium text-black">State/County:</p>
            <p className="text-sm">{data.state}</p>
          </div>
          <div   className="flex gap-2 items-center">
            <p className="text-sm font-medium text-black">Zip:</p>
            <p className="text-sm">{data.zip}</p>
          </div>
          <div  className="flex gap-2 items-center">
            <p className="text-sm font-medium text-black">Country:</p>
            <p className="text-sm">{data.country}</p>
          </div>
        </div>
        <button className="mt-4 bg-green-500 text-white px-4 py-1 rounded-md text-sm">
          Open In Google Maps
        </button>
      </div>
    );
  }
  