
interface ContactCardProps {
  name: string;
  address: string;
  officePhone: string;
  mobilePhone: string;
  whatsapp: string;
  email: string;
  avatarUrl?: string;
}

export default function ContactCard({
  name,
  address,
  officePhone,
  mobilePhone,
  whatsapp,
  email,
  avatarUrl = "/api/placeholder/100/100",
}: ContactCardProps) {
  return (
    <div className="max-w-md w-full bg-white rounded-md overflow-hidden shadow-sm mt-4">
      {/* Header with avatar and name */}
      <div className="p-4 flex items-center gap-4 border-b border-gray-100">
        <div className="w-20 h-20 rounded-md overflow-hidden bg-gray-100">
          <img
            src={avatarUrl}
            alt={`${name}'s avatar`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-left">
          <h2 className="text-black text-[29px] font-medium font-['Roboto']">{name}</h2>
          <p className="text-gray-500 mt-1 text-sm">{address}</p>
        </div>
      </div>

      {/* Contact information */}
      <div className="divide-y divide-gray-100">
        <div className="flex justify-between p-4">
          <span className="text-gray-500">Office phone:</span>
          <span className="text-gray-700">{officePhone}</span>
        </div>
        
        <div className="flex justify-between p-4">
          <span className="text-gray-500">Mobile phone:</span>
          <span className="text-gray-700">{mobilePhone}</span>
        </div>
        
        <div className="flex justify-between p-4">
          <span className="text-gray-500">Whatsapp:</span>
          <span className="text-gray-700">{whatsapp}</span>
        </div>
        
        <div className="flex justify-between p-4">
          <span className="text-gray-500">Email:</span>
          <span className="text-gray-700">{email}</span>
        </div>
      </div>

      {/* Contact button */}
      <div className="p-4">
        <button className="w-full bg-[#0070AE] hover:bg-blue-700 text-white py-3 px-4 rounded-md transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  );
}