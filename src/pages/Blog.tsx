import React from 'react';
import SearchBar from '../components/SearchBar';

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFF5E6] pb-16">
      {/* Hero Section */}
      <div className="relative w-full h-[254px] flex items-center justify-center">
        <div className="w-[920px] relative mt-[180px] mb-10">
          <div className="text-center">
            <h1 className="font-['Bebas_Neue'] text-[120px] leading-[99px]">
              <span className="text-[#2E2E2E]">Professor's </span>
              <span style={{ 
                background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Diary</span>
            </h1>
          </div>
          <div className="text-center mt-4">
            <p className="font-poppins text-[28px] leading-[30px]">
              <span className="text-black">Explore Travel </span>
              <span style={{ 
                background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Tips</span>
              <span className="text-black">, Destination </span>
              <span style={{ 
                background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Guides</span>
              <span className="text-black">, and inspiring </span>
              <span style={{ 
                background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Stories</span>
              <span className="text-black">,</span>
            </p>
            <p className="font-poppins text-black text-[28px] leading-[30px] mt-2">
              from around the world
            </p>
          </div>
        </div>
      </div>

      {/* Search Bar Section */}
      <div className="mt-16">
        <SearchBar />
      </div>

      {/* Blog Post Cards */}
      <div className="container mx-auto mt-16 px-4">
        <div className="max-w-[1201px] mx-auto space-y-8">
          {/* First Blog Post - Ladakh */}
          <div className="relative w-full h-[600px] bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Image Placeholder */}
            <div className="absolute left-0 top-0 w-[533px] h-[600px] bg-[#D9D9D9]">
              {/* Download and add Ladakh image here */}
            </div>
            
            {/* Content Section */}
            <div className="absolute left-[557px] top-0 w-[644px] h-full p-8 flex flex-col justify-between">
              {/* Title */}
              <div className="mb-4">
                <span className="text-[#F36E20] text-[36px] font-oswald font-semibold">Ladakh</span>
                <span className="text-[#2E2E2E] text-[36px] font-oswald font-semibold"> Trip Guide</span>
              </div>
              
              {/* Description */}
              <div className="flex-1">
                <p className="text-[#3E3E3E] text-[18px] font-poppins font-normal leading-[25px]">
                  Experience the raw beauty of Ladakh with its dramatic landscapes, ancient monasteries, and thrilling high-altitude adventures. This carefully crafted itinerary balances must-see attractions with hidden gems, ensuring you capture the true essence of the "Land of High Passes." Experience the raw beauty of Ladakh with its dramatic landscapes, ancient monasteries, and thrilling high-altitude adventures. This carefully crafted itinerary balances must-see attractions with hidden gems, ensuring you capture the true essence of the "Land of High Passes." Experience the raw beauty of Ladakh with its dramatic landscapes, ancient monasteries, and thrilling high-altitude adventures. This carefully crafted itinerary balances must-see attractions with hidden gems, ensuring you capture the true essence of the "Land of High Passes." Experience the raw beauty of Ladakh with its dramatic landscapes, ancient monasteries, and thrilling high-altitude adventures...
                </p>
              </div>
              
              {/* Read More Button */}
              <div className="mt-4">
                <button className="text-[#F77A40] text-[18px] font-poppins font-medium hover:text-[#F36E20] transition-colors duration-200">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Second Blog Post - Bali */}
          <div className="relative w-full h-[600px] bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Image Placeholder */}
            <div className="absolute left-0 top-0 w-[533px] h-[600px] bg-[#D9D9D9]">
              {/* Download and add Bali image here */}
            </div>
            
            {/* Content Section */}
            <div className="absolute left-[557px] top-0 w-[644px] h-full p-8 flex flex-col justify-between">
              {/* Title */}
              <div className="mb-4">
                <span className="text-[#F36E20] text-[36px] font-oswald font-semibold">Bali</span>
                <span className="text-[#2E2E2E] text-[36px] font-oswald font-semibold"> Paradise Guide</span>
              </div>
              
              {/* Description */}
              <div className="flex-1">
                <p className="text-[#3E3E3E] text-[18px] font-poppins font-normal leading-[25px]">
                  Discover the enchanting island of Bali, where pristine beaches meet lush rice terraces and ancient temples. This comprehensive guide takes you through the island's most breathtaking destinations, from the spiritual heart of Ubud to the vibrant beaches of Seminyak. Experience the perfect blend of adventure and relaxation as you explore hidden waterfalls, traditional markets, and world-class surf spots. Our carefully curated itinerary ensures you experience both the tourist hotspots and the authentic local culture that makes Bali truly special. From sunrise hikes at Mount Batur to sunset cocktails on the beach, every moment in Bali is filled with wonder and discovery...
                </p>
              </div>
              
              {/* Read More Button */}
              <div className="mt-4">
                <button className="text-[#F77A40] text-[18px] font-poppins font-medium hover:text-[#F36E20] transition-colors duration-200">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Third Blog Post - Switzerland */}
          <div className="relative w-full h-[600px] bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Image Placeholder */}
            <div className="absolute left-0 top-0 w-[533px] h-[600px] bg-[#D9D9D9]">
              {/* Download and add Switzerland image here */}
            </div>
            
            {/* Content Section */}
            <div className="absolute left-[557px] top-0 w-[644px] h-full p-8 flex flex-col justify-between">
              {/* Title */}
              <div className="mb-4">
                <span className="text-[#F36E20] text-[36px] font-oswald font-semibold">Switzerland</span>
                <span className="text-[#2E2E2E] text-[36px] font-oswald font-semibold"> Alpine Adventure</span>
              </div>
              
              {/* Description */}
              <div className="flex-1">
                <p className="text-[#3E3E3E] text-[18px] font-poppins font-normal leading-[25px]">
                  Embark on an unforgettable journey through Switzerland's majestic Alps, where snow-capped peaks meet pristine lakes and charming villages. This alpine adventure guide covers everything from world-class skiing in Zermatt to scenic train rides through the Bernese Oberland. Experience the perfect harmony of nature and luxury as you explore medieval cities like Lucerne, hike through the stunning Lauterbrunnen Valley, and indulge in authentic Swiss cuisine. Our detailed itinerary balances adrenaline-pumping activities with peaceful moments of reflection, ensuring you capture the essence of this breathtaking country. From the iconic Matterhorn to the serene Lake Geneva, Switzerland offers endless opportunities for exploration and wonder...
                </p>
              </div>
              
              {/* Read More Button */}
              <div className="mt-4">
                <button className="text-[#F77A40] text-[18px] font-poppins font-medium hover:text-[#F36E20] transition-colors duration-200">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog; 