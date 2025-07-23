import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.section 
      className="h-[570px] flex items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-4 scale-[0.85] origin-top-left"
          initial={{ opacity: 0, y: 20, x: -50 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="w-[305px] font-oswald text-[30px] font-semibold ml-[50px] mt-4">
            <span className="text-[#2E2E2E]">TRENDING </span>
            <span className="text-white">TRIPS...</span>
          </h2>
          <p className="w-[648px] ml-[50px] opacity-50 text-white text-[20px] font-poppins font-normal leading-[40px]">
            Handpicked Journeys Everyone's Talking About
          </p>
        </motion.div>

        <div className="relative flex justify-center scale-[0.85] origin-top mt-6">
          <div className="flex gap-20 items-stretch">
            <AnimatePresence mode="wait">
              {visibleTrips.map((trip, index) => (
                <motion.div 
                  key={`${currentIndex}-${index}`}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-[310px] h-[433px] bg-[#F6F8FA] rounded-[10px] shadow-[5px_6px_30px_rgba(0,0,0,0.25)] border-2 border-primary overflow-hidden"
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="p-[22px]">
                    <motion.img 
                      src={trip.image} 
                      alt={trip.title} 
                      className="w-[266px] h-[205px] rounded-[10px] object-cover"
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.3 }
                      }}
                    />
                    <div className="mt-4 text-center">
                      <h3 className="w-[266px] text-[24px] font-oswald font-semibold">
                        <span className="text-[#2E2E2E]">{trip.title} </span>
                        <span style={{
                          background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}>{trip.subtitle}...</span>
                      </h3>
                      <p className="w-[266px] mt-2 opacity-50 text-[#2E2E2E] text-[16px] font-poppins leading-[20px]">
                      {trip.description}
                      </p>
                      </div>
                    <div className="flex justify-center gap-4 items-center mt-5">
                      <motion.button 
                        className="text-[18px] font-poppins font-medium hover:text-[#FF6B00] transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF6B00] hover:after:w-full after:transition-all after:duration-300"
                        style={{
                          background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                          Read More
                      </motion.button>
                      <motion.button 
                        className="px-[16px] py-[8px] bg-primary rounded-[16px] text-white text-[18px] font-poppins font-medium hover:bg-[#FF6B00] transform hover:scale-105 transition-all duration-300"
                        style={{
                          background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)'
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 10px 25px rgba(247, 122, 64, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                          Enquire
                      </motion.button>
                      </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          <motion.button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          
          <motion.button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default TrendingTips; 