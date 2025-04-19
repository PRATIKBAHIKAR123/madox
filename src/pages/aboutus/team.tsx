

interface TeamMemberProps {
  name: string;
  title: string;
  imagePath: string;
}

const TeamMember = ({ name, title, imagePath }: TeamMemberProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm pb-4 flex flex-col items-center">
      <div className="mb-4 overflow-hidden rounded-lg w-full h-80">
        <img 
          src={imagePath} 
          alt={`${name} - ${title}`}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-bold text-lg text-center text-navy-900">{name}</h3>
      <p className="text-gray-600 text-center">{title}</p>
    </div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Kaitlyn Kristy",
      title: "President & CEO",
      imagePath: "/assets/Images/team/Link → team-h-11-1.png.jpg" // Replace with your image path
    },
    {
      name: "Carla Houston",
      title: "IT Consultant",
      imagePath: "/assets/Images/team/Link → team-h-11-2.png.jpg" // Replace with your image path
    },
    {
      name: "Eleanor Pena",
      title: "Finance Consultant",
      imagePath: "/assets/Images/team/Link → team-h-11-3.png.jpg" // Replace with your image path
    },
    {
      name: "Floyd Miles",
      title: "Senior Advisor",
      imagePath: "/assets/Images/team/Link → team-h-11-4.png.jpg" // Replace with your image path
    }
  ];

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <div className="mb-2">
        <p className="text-left text-[#135c51] text-lg font-semibold uppercase leading-7">OUR TEAM</p>
      </div>
      <h2 className="mb-5 text-left text-[#080d41] text-[50px] font-bold capitalize leading-[65px]">Our Professional Team</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <TeamMember 
            key={index}
            name={member.name}
            title={member.title}
            imagePath={member.imagePath}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;