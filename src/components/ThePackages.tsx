import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const trips = [
  {
    image: './destination/ladakh-1.jpg',
    title: 'Ladakh Bike',
    subtitle: 'Expedition',
    description: 'Experience the thrill of riding through the highest motorable roads in the world.',
    rating: 4.9,
    reviews: 2873,
    price: 1499,
    duration: '9 Days'
  },
  {
    image: './destination/goa-1.jpg',
    title: 'Goa Beach',
    subtitle: 'Paradise',
    description: 'Discover the perfect blend of beaches, culture, and nightlife in India\'s party capital.',
    rating: 4.7,
    reviews: 3450,
    price: 699,
    duration: '5 Days'
  },
  {
    image: './destination/dubai-1.jpg',
    title: 'Dubai City',
    subtitle: 'Explorer',
    description: 'Experience luxury, modern marvels, and desert adventures in the city of gold.',
    rating: 4.8,
    reviews: 4120,
    price: 1899,
    duration: '6 Days'
  },
  {
    image: './destination/spiti-1.jpg',
    title: 'Spiti Valley',
    subtitle: 'Adventure',
    description: 'Journey through the stunning landscapes of the cold desert mountain valley.',
    rating: 4.9,
    reviews: 1890,
    price: 1299,
    duration: '8 Days'
  },
  {
    image: './destination/bali-1.jpg',
    title: 'Bali Island',
    subtitle: 'Paradise',
    description: 'Explore tropical beaches, ancient temples, and vibrant culture of Indonesia.',
    rating: 4.8,
    reviews: 5230,
    price: 1599,
    duration: '7 Days'
  },
  {
    image: './destination/singapore-1.jpg',
    title: 'Singapore City',
    subtitle: 'Explorer',
    description: 'Discover the perfect blend of modernity, culture, and natural beauty.',
    rating: 4.7,
    reviews: 4780,
    price: 1799,
    duration: '5 Days'
  }
];

const TrendingTips: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % trips.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + trips.length) % trips.length);
  };

  // Calculate which trips to show based on currentIndex
  const visibleTrips = [
    trips[currentIndex],
    trips[(currentIndex + 1) % trips.length],
    trips[(currentIndex + 2) % trips.length]
  ];

  return (
    <section className="h-[550px] bg-gray-50 flex items-center">
      <div className="container mx-auto">
        <motion.div 
          className="mb-4 scale-[0.85] origin-top-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-between items-center">
            <div>
              <h2 className="w-[305px] font-oswald text-[30px] font-semibold ml-[50px] mt-[60px]">
                <span className="text-[#2E2E2E]">ALL OUR </span>
                <span className="text-primary">PACKAGES</span>
              </h2>
              <p className="w-[648px] ml-[50px] opacity-50 text-[#2E2E2E] text-[20px] font-poppins font-normal leading-[40px]">
                Everything you will need, and MORE!
              </p>
            </div>
            <button 
              onClick={() => navigate('/packages')}
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-[#ff8533] transition-colors duration-300 text-lg font-medium mr-[50px] mt-[60px]"
            >
              View All
            </button>
          </div>
        </motion.div>

        <div className="relative flex justify-center scale-[0.85] origin-top mt-6">
          <div className="flex gap-20 items-stretch">
            <AnimatePresence mode="wait">
              {visibleTrips.map((trip, index) => (
                <motion.div 
                  key={`${currentIndex}-${index}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-[310px] h-[433px] bg-[#F6F8FA] rounded-[10px] shadow-[5px_6px_30px_rgba(0,0,0,0.25)] border-2 border-primary overflow-hidden"
                >
                  <div className="p-[22px]">
                    <img 
                      src={trip.image} 
                      alt={trip.title} 
                      className="w-[266px] h-[205px] rounded-[10px] object-cover"
                    />
                    
                    <div className="mt-4 text-center">
                      <h3 className="w-[266px] text-[24px] font-oswald font-semibold">
                        <span className="text-[#2E2E2E]">{trip.title} </span>
                        <span className="text-primary">{trip.subtitle}...</span>
                      </h3>
                      <p className="w-[266px] mt-2 opacity-50 text-[#2E2E2E] text-[16px] font-poppins leading-[20px]">
                      {trip.description}
                      </p>
                      </div>

                    <div className="flex justify-center gap-4 items-center mt-5">
                      <button className="text-primary text-[18px] font-poppins font-medium hover:text-[#FF6B00] transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF6B00] hover:after:w-full after:transition-all after:duration-300">
                          Read More
                      </button>
                      <button className="px-[16px] py-[8px] bg-primary rounded-[16px] text-white text-[18px] font-poppins font-medium hover:bg-[#FF6B00] transform hover:scale-105 transition-all duration-300">
                          Enquire
                      </button>
                      </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          <motion.button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
            //whileHover={{ scale: 1.1 }}
            //whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          
          <motion.button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
            //whileHover={{ scale: 1.1 }}
            //whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TrendingTips; 