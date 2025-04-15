

// Define interface for property category data
interface PortFolio {
  id: number;
  title: string;
  imageUrl: string;
  listingCount: number;
  gridClass?: string;
}

// Sample property categories data
const propertyCategories: PortFolio[] = [
  {
    id: 1,
    title: 'Apartments',
    imageUrl: 'src/assets/Images/Properties/property_listing.jpg',
    listingCount: 17,
    gridClass: 'col-span-2' // Takes 2 columns
  },
  {
    id: 2,
    title: 'Condos',
    imageUrl: 'src/assets/Images/Properties/dining_table_set.jpg',
    listingCount: 8,
    gridClass: ''
  },
  {
    id: 3,
    title: 'Duplexes',
    imageUrl: 'src/assets/Images/Properties/property_listing_sofa.jpg',
    listingCount: 0,
    gridClass: ''
  },
  {
    id: 4,
    title: 'Houses',
    imageUrl: 'src/assets/Images/Lands/3.png',
    listingCount: 5,
    gridClass: ''
  },
  {
    id: 5,
    title: 'Offices',
    imageUrl: 'src/assets/Images/Lands/banner.png',
    listingCount: 2,
    gridClass: '' 
  },
  {
    id: 6,
    title: 'Villas',
    imageUrl: 'src/assets/Images/Lands/1.png',
    listingCount: 4,
    gridClass: 'col-span-2'
  }
];

const PropertyPortfolio = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className=" text-[#222222] text-[32px] font-medium font-['Mulish'] mb-4">Our Portfolio</h2>
        <p className="text-[#5c727d] text-base font-normal font-['Mulish'] max-w-3xl mx-auto">
          Highlight the best of your properties by using the List Category shortcode. You can
          list specific properties categories, types, cities, areas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[15px]">
        {propertyCategories.map((category) => (
            <div key={category.id} className={category.gridClass}>
          <div className="overflow-hidden transition-all duration-300 rounded-[3px] hover:shadow-lg">
            <div className="relative h-64 w-full overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${category.imageUrl})` }}
              />
              <div className="absolute inset-0 bg-opacity-20" />
              <div className="absolute top-4 left-4">
                <h3 className="text-white text-xl font-bold">{category.title}</h3>
              </div>
              <div className="absolute p-4 bottom-0 left-0">
              <p className="text-[#f7f7f7] text-[15px] font-normal font-['Roboto'] leading-[30px] font-medium">
                {category.listingCount} listings
              </p>
            </div>
            </div>
            
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyPortfolio;