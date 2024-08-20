"use client";

import { useState } from 'react';

// Define the type for the technology categories
type TechnologyCategory = 'mobile-development' | 'web-development' | 'programming-languages' | 'platforms';

// Define the structure of the technologies data
const technologiesData: Record<TechnologyCategory, { name: string; logo: string; }[]> = {
  'mobile-development': [
    { name: 'iOS', logo: '/mobile1.png' },
    { name: 'Android', logo: '/mobile2.png' },
    { name: 'Flutter', logo: '/mobile3.png' },
    { name: 'React Native', logo: '/mobile4.png' },
    { name: 'Hybrid', logo: '/mobile5.png' },
    { name: 'Mobile Design', logo: '/mobile6.png' },
    { name: 'Cross Platform', logo: '/mobile7.png' },
    { name: 'Mobile App Testing', logo: '/mobile8.png' },
  ],
  'web-development': [
    { name: 'Node.js', logo: '/web1.png' },
    { name: 'React.js', logo: '/web2.png' },
    { name: 'Angular', logo: '/web3.png' },
    { name: 'Vue.js', logo: '/web4.png' },
    { name: 'Laravel', logo: '/web5.png' },
    { name: 'Django', logo: '/web6.png' },
    { name: 'Ruby on Rails', logo: '/web7.png' },
    { name: 'next.js', logo: '/web8.png' },
  ],
  'programming-languages': [
    { name: 'JavaScript', logo: '/prog1.png' },
    { name: 'Python', logo: '/python.png' },
    { name: 'Swift', logo: '/prog2.png' },
    { name: 'Java', logo: '/prog3.png' },
    { name: 'PHP', logo: '/prog4.png' },
    { name: 'C#', logo: '/prog5.png' },
    { name: 'C++', logo: '/prog6.png' },
    { name: 'Ruby', logo: '/prog7.png' },
  ],
  'platforms': [
    { name: 'Wordpress', logo: '/plat1.png' },
    { name: 'Magento', logo: '/plat2.png' },
    { name: 'Shopify', logo: '/plat3.png' },
    { name: 'WooCommerce', logo: '/plat4.png' },
    { name: 'Drupal', logo: '/plat5.png' },
    { name: 'Salesforce', logo: '/plat6.png' },
    { name: 'Squarespace', logo: '/plat7.png' },
    { name: 'BigCommerce', logo: '/plat8.png' },
  ],
};

const TechnologiesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<TechnologyCategory>('mobile-development');

  const handleButtonClick = (category: TechnologyCategory) => {
    setSelectedCategory(category);
  };

  return (
    <div className="bg-[#1D92FB] bg-opacity-10">
      <div className='max-w-7xl mx-auto px-6 py-10 md:px-16 md:py-16'>
        <h2 className="w-full xl:text-4xl text-2xl font-medium text-black pb-6 md:pb-10 text-center">
          Technologies We Use
        </h2>
        <div className="flex flex-wrap justify-center md:mb-12 mb-8 gap-4">
          {Object.keys(technologiesData).map((category) => (
            <button
              key={category}
              className={`px-4 py-2 text-sm rounded-lg ${selectedCategory === category ? 'bg-[#1D92FB] text-white' : 'bg-[#D9D9D9] text-black'} hover:bg-[#1D92FB] border hover:text-white`}
              onClick={() => handleButtonClick(category as TechnologyCategory)}
            >
              {category.replace(/-/g, ' ').toUpperCase()}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {technologiesData[selectedCategory].map((tech, index) => (
            <div key={index} className="flex flex-col items-center text-center w-1/4 sm:w-1/4 md:w-1/4 lg:w-1/5">
              <img src={tech.logo} alt={tech.name} className="w-16 h-16 mb-2" />
              <span className="text-md font-md">{tech.name}</span>
            </div>
          ))}
        </div>



      </div>
    </div>
  );
};

export default TechnologiesSection;
