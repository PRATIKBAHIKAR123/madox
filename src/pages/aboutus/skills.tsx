
const DigitalExperienceSection = () => {
  const skills = [
    { name: 'Design & Development', percentage: 43 },
    { name: 'Digital Marketing', percentage: 34 },
    { name: 'Product Promotion', percentage: 40 }
  ];

  return (
    <div className="flex flex-col md:flex-row bg-white p-6 gap-8 max-w-7xl mx-auto">
      {/* Left content area */}
      <div className="flex-1 skills_sction py-6">
        <div className="text-left text-[#0070ae] text-base font-semibold font-['Public_Sans'] uppercase leading-relaxed">OUR SKILL</div>
        <h2 className="skill_title">Let's Build Together The<br />Digital Experience</h2>
        
        <p className="text-[#656567] text-lg font-normal font-['Public_Sans'] leading-7">
          Malesuada bibendum arcu vitae elementum. Semper eget duis at 
          tellus at urna condimentum. Aliquam malesuada bibendum arcu vitae 
          elementum curabitur vitae nunc sed.
        </p>
        
        {/* Skills with progress bars */}
        <div className="space-y-6 mb-8">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-[#0070ae] text-lg font-medium font-['Public_Sans'] leading-[6px]">{skill.name}</span>
                <span className="text-[#0070ae] text-base font-bold font-['Public_Sans'] leading-none">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-[#0070ae] h-2 rounded-full" 
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 items-center">
          <button className="bg-[#0070ae] text-white px-6 py-3 rounded-full flex items-center">
            Contact Us
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          
          <button className="flex items-center text-gray-700 gap-2">
            <div className="bg-gray-700 rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
            Watch Demo
          </button>
        </div>
      </div>
      
      {/* Right image area */}
      <div className="flex-1">
        <div className="bg-gray-100 rounded-lg overflow-hidden h-full">
          <img 
            src="/assets/Images/two-womens-collabrate.jpg" 
            alt="Two people collaborating on digital marketing"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default DigitalExperienceSection;