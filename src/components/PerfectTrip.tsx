import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TripTypeButton: React.FC<{ 
  label: string; 
  isActive: boolean;
  onClick: () => void;
}> = ({ label, isActive, onClick }) => {
  return (
    <motion.button 
      onClick={onClick}
      className={`px-10 py-1 rounded-full text-small font-poppins transition-colors duration-300 shadow-md ${
        isActive ? 'text-white' : 'bg-white text-[#2E2E2E] hover:text-white'
      }`}
      style={{
        background: isActive 
          ? 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)'
          : undefined
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)'
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {label}
    </motion.button>
  );
};

const PackageCard: React.FC<{
  title: string;
  description: string;
  image: string;
}> = ({ title, description, image }) => {
  return (
    <motion.div 
      className="relative flex justify-center scale-[0.85] origin-top"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      <div className="flex gap-20 items-stretch">
        <div className="p-[22px] w-[310px] h-[433px] bg-[#F6F8FA] rounded-[10px] shadow-[5px_6px_30px_rgba(0,0,0,0.25)] border-2 border-primary overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-[266px] h-[205px] rounded-[10px] object-cover"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          />
        <div className="mt-4 text-center">
          <h3 className="w-[266px] text-[24px] font-oswald font-semibold">
           <span className="text-[#2E2E2E] text-[24px] font-oswald font-semibold">
             {title.split(' ').slice(0, -1).join(' ')}{' '}
           </span>
           <span style={{ 
                background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
             {title.split(' ').slice(-1)}...
           </span>
          </h3>
          <p className="w-[266px] h-[60px] mt-2 opacity-50 text-[#2E2E2E] text-[16px] font-poppins leading-[20px]">
            {description}
          </p>
        </div>
        <div className="flex justify-center gap-4 items-center mt-5">
          <motion.button 
            className="text-primary text-[18px] font-poppins font-medium hover:text-[#FF6B00] transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF6B00] hover:after:w-full after:transition-all after:duration-300"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            Read More
          </motion.button>
          <motion.button 
            className="px-[16px] py-[8px] bg-primary rounded-[16px] text-white text-[18px] font-poppins font-medium hover:bg-[#FF6B00] transform hover:scale-105 transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
              fontWeight: '500'
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
        </div>
    </motion.div>
  );
};

const PerfectTrip: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedType, setSelectedType] = useState('All');

  const tripTypes = [
    'All',
    'Weekend Getaways',
    'Adventure Escapes',
    'International Tours',
    'Family Holiday',
    'Wellness Retreat'
  ];

  const allPackages = [
    {
      title: 'Ladakh Bike Expedition',
      description: 'Experience the thrill of riding through the highest motorable roads.',
      price: '₹24999/-',
      duration: '8/9',
      image: '/destination/ladakh-1.jpg',
      type: 'Adventure Escapes'
    },
    {
      title: 'MSK Weekend Trip',
      description: 'Explore the beauty of Manali, Solan, and Kullu in one go.',
      price: '₹12999/-',
      duration: '2/3',
      image: '/destination/msk-1.jpg',
      type: 'Weekend Getaways'
    },
    {
      title: 'Do Dham Yatra',
      description: 'Embark on a spiritual journey to sacred temples.',
      price: '₹15999/-',
      duration: '4/5',
      image: '/destination/dodham-1.jpg',
      type: 'Wellness Retreat'
    },
    {
      title: 'Spiti Valley Adventure',
      description: 'Journey through the stunning cold desert valley.',
      price: '₹19999/-',
      duration: '6/7',
      image: '/destination/spiti-1.jpg',
      type: 'Adventure Escapes'
    },
    {
      title: 'Singapore City Tour',
      description: 'Experience the perfect blend of modernity and culture.',
      price: '₹89999/-',
      duration: '4/5',
      image: '/destination/singapore-1.jpg',
      type: 'International Tours'
    },
    {
      title: 'Dubai Desert Safari',
      description: 'Luxury, adventure, and modern marvels in one package.',
      price: '₹99999/-',
      duration: '5/6',
      image: '/destination/dubai-1.jpg',
      type: 'International Tours'
    },
    {
      title: 'Goa Beach Holiday',
      description: 'Perfect family getaway with beaches and water activities.',
      price: '₹14999/-',
      duration: '3/4',
      image: '/destination/goa-1.jpg',
      type: 'Family Holiday'
    },
    {
      title: 'Bali Island Retreat',
      description: 'Tropical paradise with culture and adventure.',
      price: '₹79999/-',
      duration: '6/7',
      image: '/destination/bali-1.jpg',
      type: 'International Tours'
    },
    {
      title: 'Sikkim Wellness Tour',
      description: 'Rejuvenate in the lap of the Himalayas.',
      price: '₹16999/-',
      duration: '4/5',
      image: '/destination/sikkim-1.jpg',
      type: 'Wellness Retreat'
    }
  ];

  // Filter packages based on selected type
  const filteredPackages = selectedType === 'All' 
    ? allPackages 
    : allPackages.filter(pkg => pkg.type === selectedType);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredPackages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredPackages.length) % filteredPackages.length);
  };

  // Reset current index when filter changes
  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    setCurrentIndex(0);
  };

  const visiblePackages = [
    filteredPackages[currentIndex],
    filteredPackages[(currentIndex + 1) % filteredPackages.length],
    filteredPackages[(currentIndex + 2) % filteredPackages.length]
  ].filter(Boolean); // Filter out undefined packages when less than 3 packages are available

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="w-full px-16 py-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="flex justify-between items-center mb-2">
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-oswald font-semibold">
            <span className="text-[#2E2E2E]">FIND YOUR PERFECT </span>
            <span style={{ 
                background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>TRIP...</span>
          </h2>
          <p className="mt-1 text-1xl font-poppins text-[#2E2E2E] opacity-50">
            Still not finding what you're looking for?
          </p>
        </motion.div>
        <motion.div 
          className="flex items-center gap-2"
          variants={itemVariants}
        >
          <p className="text-black text-base font-poppins font-small">
            Try Searching with Filters
          </p>
          <motion.button 
            className="hover:scale-110 transition-transform duration-300"
            whileHover={{ rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <img 
              src="/images/setting-config.png" 
              alt="Settings" 
              className="w-6 h-6"
            />
          </motion.button>
        </motion.div>
      </div>

      <motion.div 
        className="flex gap-4 mb-8"
        variants={itemVariants}
      >
        {tripTypes.map((type, index) => (
          <TripTypeButton
            key={type}
            label={type}
            isActive={selectedType === type}
            onClick={() => handleTypeChange(type)}
          />
        ))}
      </motion.div>

      <div className="relative flex justify-center">
        <div className="flex gap-10 items-stretch">
          <AnimatePresence mode="wait">
            {visiblePackages.map((pkg, index) => (
              <motion.div 
                key={`${currentIndex}-${index}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PackageCard {...pkg} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <motion.button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
          whileHover={{ 
            //scale: 1.1,
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
          }}
          //whileTap={{ scale: 0.9 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>
        
        <motion.button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
          whileHover={{ 
            //scale: 1.1,
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
          }}
          //whileTap={{ scale: 0.9 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PerfectTrip; 