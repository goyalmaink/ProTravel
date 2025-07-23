import React from 'react';
import { motion } from 'framer-motion';

const featuredDestinations = [
  {
    name: 'Spiti Roadtrip',
    image: '/destination/spiti-roadtrip.png',
    position: 'left'
  },
  {
    name: 'Goan Adventure',
    image: '/destination/goan-adventure.png',
    position: 'center'
  },
  {
    name: 'Kerala Escape',
    image: '/destination/kerala-escape.png',
    position: 'right'
  }
];

const Destinations: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-[80vh] overflow-hidden bg-white"
      >
        {/* Main Background */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.5 }}
          style={{ 
            backgroundImage: 'url("/destination/background.png")',
            backgroundSize: '100% 100%'
          }}
        />

        {/* Dark Background Animation */}
        <motion.div
          className="absolute inset-0 w-full h-full z-10"
          initial={{ opacity: 1, x: '-65%' }}
          animate={{ 
            opacity: [1, 1, 1, 1, 0],
            x: ['-65%', '-30%', '5%', '35%', '35%']
          }}
          transition={{ 
            duration: 4,
            times: [0, 0.3, 0.6, 0.9, 1],
            ease: "easeInOut"
          }}
        >
          <img
            src="/destination/Ellipse 24.png"
            alt="Dark background"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Background Line Image */}
        <motion.div
          className="absolute inset-0 w-full h-full z-20"
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={{ clipPath: 'inset(0 0% 0 0)' }}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          <motion.img
            src="/destination/Line.png"
            alt="Decorative line"
            className="w-full h-full object-cover opacity-60"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3 }}
          />
        </motion.div>

        <div className="container mx-auto px-4 h-full relative z-30">
          <div className="flex flex-col items-center justify-between h-full py-16">
            {/* Polaroid Images */}
            <div className="relative w-full h-[400px]">
              {featuredDestinations.map((destination, index) => (
                <motion.div
                  key={destination.name}
                  className={`absolute ${getPositionClasses(destination.position)}`}
                  initial={{ opacity: 0, x: -100, y: 50 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.5 + (index * 1),
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ scale: 1.05, rotate: [-2, 2] }}
                >
                  <motion.div 
                    className="bg-white p-3 rounded-lg shadow-lg transform rotate-[-2deg] hover:rotate-[2deg] transition-transform"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.6 + (index * 1),
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <div className="w-[250px] h-[250px] overflow-hidden rounded-lg mb-4">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-center text-lg font-medium">{destination.name}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Heading */}
            <motion.div 
              className="text-center mt-8 flex flex-wrap justify-center gap-x-4"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            >
              <motion.span
                className="text-6xl md:text-7xl font-bold"
                initial={{ opacity: 0, y: -100, x: -200 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ 
                  duration: 0.8,
                  delay: 4,
                  type: "spring",
                  stiffness: 100
                }}
              >
                DISCOVER
              </motion.span>
              <motion.span
                className="text-6xl md:text-7xl font-bold"
                initial={{ opacity: 0, y: -150, x: 100 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ 
                  duration: 0.8,
                  delay: 4.2,
                  type: "spring",
                  stiffness: 100
                }}
              >
                YOUR
              </motion.span>
              <motion.span
                className="text-6xl md:text-7xl font-bold"
                initial={{ opacity: 0, y: -120, x: -150 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ 
                  duration: 0.8,
                  delay: 4.4,
                  type: "spring",
                  stiffness: 100
                }}
              >
                NEXT
              </motion.span>
              <motion.span
                className="text-6xl md:text-7xl font-bold text-primary"
                initial={{ opacity: 0, y: -200, x: 150 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ 
                  duration: 0.8,
                  delay: 4.6,
                  type: "spring",
                  stiffness: 100
                }}
              >
                ADVENTURE
              </motion.span>
              <motion.p
                className="w-full text-xl md:text-2xl text-gray-600 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: 5,
                  ease: "easeOut"
                }}
              >
                From Himalayan Peaks to Tropical Beaches
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

// Helper function to get position classes for polaroid images
const getPositionClasses = (position: string) => {
  switch (position) {
    case 'left':
      return 'left-[1%] top-[6%] transform rotate-3';
    case 'center':
      return 'left-[45%] -translate-x-1/2 top-[20%]';
    case 'right':
      return 'right-[-2%] top-[-13%] transform -rotate-3';
    default:
      return '';
  }
};

export default Destinations; 