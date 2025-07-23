import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Country-specific trips data
const tripsByCountry = {
  Singapore: [
    {
      image: './destination/singapore-1.jpg',
      title: 'Singapore City',
      subtitle: 'Explorer',
      description: 'Discover the perfect blend of modernity, culture...',
      rating: 4.7,
      reviews: 4780,
      price: 1799,
      duration: '5 Days'
    },
    {
      image: './destination/singapore-marina.jpg',
      title: 'Marina Bay',
      subtitle: 'Luxury',
      description: 'Experience world-class attractions and stunning...',
      rating: 4.8,
      reviews: 3200,
      price: 2199,
      duration: '4 Days'
    },
    {
      image: './destination/singapore-gardens.jpg',
      title: 'Gardens by Bay',
      subtitle: 'Nature',
      description: 'Explore futuristic gardens and iconic supertree...',
      rating: 4.9,
      reviews: 2890,
      price: 1599,
      duration: '3 Days'
    }
  ],
  Indonesia: [
    {
      image: './destination/bali-1.jpg',
      title: 'Bali Island',
      subtitle: 'Paradise',
      description: 'Explore tropical beaches, ancient temples, and...',
      rating: 4.8,
      reviews: 5230,
      price: 1599,
      duration: '7 Days'
    },
    {
      image: './destination/jakarta-city.jpg',
      title: 'Jakarta City',
      subtitle: 'Urban',
      description: 'Discover the bustling capital with rich history...',
      rating: 4.5,
      reviews: 2100,
      price: 1299,
      duration: '5 Days'
    },
    {
      image: './destination/yogyakarta.jpg',
      title: 'Yogyakarta',
      subtitle: 'Cultural',
      description: 'Experience traditional Javanese culture and...',
      rating: 4.7,
      reviews: 1890,
      price: 1099,
      duration: '6 Days'
    }
  ],
  India: [
    {
      image: './destination/goa-1.jpg',
      title: 'Goa Beach',
      subtitle: 'Paradise',
      description: 'Discover the perfect blend of beaches,..',
      rating: 4.7,
      reviews: 3450,
      price: 699,
      duration: '5 Days'
    },
    {
      image: './destination/ladakh-1.jpg',
      title: 'Ladakh Bike',
      subtitle: 'Expedition',
      description: 'Experience the thrill of riding through the...',
      rating: 4.9,
      reviews: 2873,
      price: 1499,
      duration: '9 Days'
    },
    {
      image: './destination/spiti-1.jpg',
      title: 'Spiti Valley',
      subtitle: 'Adventure',
      description: 'Journey through the stunning landscapes of...',
      rating: 4.9,
      reviews: 1890,
      price: 1299,
      duration: '8 Days'
    }
  ],
  Thailand: [
    {
      image: './destination/bangkok-city.jpg',
      title: 'Bangkok City',
      subtitle: 'Explorer',
      description: 'Experience vibrant street life, temples,...',
      rating: 4.6,
      reviews: 4200,
      price: 1299,
      duration: '5 Days'
    },
    {
      image: './destination/phuket-beach.jpg',
      title: 'Phuket Beach',
      subtitle: 'Paradise',
      description: 'Relax on pristine beaches and enjoy crystal...',
      rating: 4.8,
      reviews: 3800,
      price: 1599,
      duration: '6 Days'
    },
    {
      image: './destination/chiang-mai.jpg',
      title: 'Chiang Mai',
      subtitle: 'Cultural',
      description: 'Explore ancient temples and traditional...',
      rating: 4.7,
      reviews: 2650,
      price: 1199,
      duration: '7 Days'
    }
  ],
  Vietnam: [
    {
      image: './destination/halong-bay.jpg',
      title: 'Halong Bay',
      subtitle: 'Wonder',
      description: 'Cruise through stunning limestone karsts...',
      rating: 4.9,
      reviews: 3400,
      price: 1399,
      duration: '6 Days'
    },
    {
      image: './destination/ho-chi-minh.jpg',
      title: 'Ho Chi Minh',
      subtitle: 'City',
      description: 'Experience the dynamic energy of Vietnam\'s...',
      rating: 4.5,
      reviews: 2890,
      price: 1099,
      duration: '5 Days'
    },
    {
      image: './destination/hoi-an.jpg',
      title: 'Hoi An',
      subtitle: 'Ancient',
      description: 'Wander through the charming old town with...',
      rating: 4.8,
      reviews: 2100,
      price: 1299,
      duration: '4 Days'
    }
  ],
  Dubai: [
    {
      image: './destination/dubai-1.jpg',
      title: 'Dubai City',
      subtitle: 'Explorer',
      description: 'Experience luxury, modern marvels, and...',
      rating: 4.8,
      reviews: 4120,
      price: 1899,
      duration: '6 Days'
    },
    {
      image: './destination/dubai-marina.jpg',
      title: 'Dubai Marina',
      subtitle: 'Luxury',
      description: 'Enjoy waterfront dining and stunning...',
      rating: 4.7,
      reviews: 3200,
      price: 2199,
      duration: '4 Days'
    },
    {
      image: './destination/desert-safari.jpg',
      title: 'Desert Safari',
      subtitle: 'Adventure',
      description: 'Experience thrilling dune bashing and...',
      rating: 4.9,
      reviews: 2800,
      price: 1599,
      duration: '3 Days'
    }
  ]
};

interface AnimatedItemProps {
  children: React.ReactNode;
  delay?: number;
  index: number;
  onMouseEnter?: () => void;
  onClick?: () => void;
}

const AnimatedItem: React.FC<AnimatedItemProps> = ({ children, delay = 0, index, onMouseEnter, onClick }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  return (
    <motion.div
      ref={ref}
      data-index={index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
      transition={{ duration: 0.2, delay }}
      className="mb-4 cursor-pointer"
    >
      {children}
    </motion.div>
  );
};

interface AnimatedListProps {
  items?: string[];
  onItemSelect?: (item: string, index: number) => void;
  showGradients?: boolean;
  enableArrowNavigation?: boolean;
  className?: string;
  itemClassName?: string;
  displayScrollbar?: boolean;
  initialSelectedIndex?: number;
  selectedItem?: string; // Add this prop
}

const AnimatedList: React.FC<AnimatedListProps> = ({
  items = [
    'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5',
    'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10',
    'Item 11', 'Item 12', 'Item 13', 'Item 14', 'Item 15'
  ],
  onItemSelect,
  showGradients = true,
  enableArrowNavigation = true,
  className = '',
  itemClassName = '',
  displayScrollbar = true,
  initialSelectedIndex = -1,
  selectedItem, // Add this prop
}) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);
  const [keyboardNav, setKeyboardNav] = useState(false);
  const [topGradientOpacity, setTopGradientOpacity] = useState(0);
  const [bottomGradientOpacity, setBottomGradientOpacity] = useState(1);

  // Update selectedIndex when selectedItem changes
  useEffect(() => {
    if (selectedItem) {
      const index = items.indexOf(selectedItem);
      if (index !== -1) {
        setSelectedIndex(index);
      }
    }
  }, [selectedItem, items]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    setTopGradientOpacity(Math.min(scrollTop / 50, 1));
    const bottomDistance = scrollHeight - (scrollTop + clientHeight);
    setBottomGradientOpacity(
      scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1)
    );
  };

  useEffect(() => {
    if (!enableArrowNavigation) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex((prev) => Math.min(prev + 1, items.length - 1));
      } else if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter') {
        if (selectedIndex >= 0 && selectedIndex < items.length) {
          e.preventDefault();
          if (onItemSelect) {
            onItemSelect(items[selectedIndex], selectedIndex);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [items, selectedIndex, onItemSelect, enableArrowNavigation]);

  useEffect(() => {
    if (!keyboardNav || selectedIndex < 0 || !listRef.current) return;
    const container = listRef.current;
    const selectedItem = container.querySelector(`[data-index="${selectedIndex}"]`) as HTMLElement;
    if (selectedItem) {
      const extraMargin = 50;
      const containerScrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const itemTop = selectedItem.offsetTop;
      const itemBottom = itemTop + selectedItem.offsetHeight;
      if (itemTop < containerScrollTop + extraMargin) {
        container.scrollTo({ top: itemTop - extraMargin, behavior: 'smooth' });
      } else if (itemBottom > containerScrollTop + containerHeight - extraMargin) {
        container.scrollTo({
          top: itemBottom - containerHeight + extraMargin,
          behavior: 'smooth',
        });
      }
    }
    setKeyboardNav(false);
  }, [selectedIndex, keyboardNav]);

  return (
    <div className={`relative w-[263px] ${className}`}>
      <div
        ref={listRef}
        className={`max-h-[400px] overflow-y-auto p-4 ${
          displayScrollbar
            ? "[&::-webkit-scrollbar]:w-[8px] [&::-webkit-scrollbar-track]:bg-[#060010] [&::-webkit-scrollbar-thumb]:bg-[#222] [&::-webkit-scrollbar-thumb]:rounded-[4px]"
            : "scrollbar-hide"
        }`}
        onScroll={handleScroll}
        style={{
          scrollbarWidth: displayScrollbar ? "thin" : "none",
          scrollbarColor: "#222 #060010",
        }}
      >
        {items.map((item, index) => {
          // Determine if this item is selected based on selectedItem prop or internal state
          const isSelected = selectedItem ? item === selectedItem : selectedIndex === index;
          
          return (
          <AnimatedItem
            key={index}
            delay={0.1}
            index={index}
            onMouseEnter={() => setSelectedIndex(index)}
            onClick={() => {
              setSelectedIndex(index);
              if (onItemSelect) {
                onItemSelect(item, index);
              }
            }}
          >
              <div className={`p-4 rounded-lg border border-[#E5D3B3] transition-all duration-200 group ${isSelected ? 'bg-gradient-to-r from-[#F36E20] to-[#FDAF16] shadow-lg' : 'bg-[#F5E6D3]'} hover:bg-gradient-to-r hover:from-[#F36E20] hover:to-[#FDAF16] ${itemClassName}`}>
                <p className={`m-0 font-poppins text-bold transition-colors duration-200 ${isSelected ? 'text-white' : 'text-[#2E2E2E]'} group-hover:text-white`}>
                    {item}
              </p>
            </div>
          </AnimatedItem>
          );
        })}
      </div>
      {showGradients && (
        <>
          <div
            className="absolute top-0 left-0 right-0 h-[50px] bg-gradient-to-b from-[#FFECCE] to-transparent pointer-events-none transition-opacity duration-300 ease"
            style={{ opacity: topGradientOpacity }}
          ></div>
          <div
            className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-[#FFECCE] to-transparent pointer-events-none transition-opacity duration-300 ease"
            style={{ opacity: bottomGradientOpacity }}
          ></div>
        </>
      )}
    </div>
  );
};

const CuratedForYou: React.FC = () => {
  const countries = [
    'Singapore', 'Indonesia', 'India', 'Thailand', 'Vietnam', 
    'Dubai'
  ];

  const [selectedCountry, setSelectedCountry] = useState<string | null>('India');
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCountrySelect = (country: string, index: number) => {
    console.log(`Selected country: ${country} at index ${index}`);
    setSelectedCountry(country);
    setCurrentIndex(0); // Reset to first slide when country changes
  };

  const nextSlide = () => {
    if (selectedCountry) {
      const trips = tripsByCountry[selectedCountry as keyof typeof tripsByCountry];
      setCurrentIndex((prevIndex) => (prevIndex + 1) % trips.length);
    }
  };

  const prevSlide = () => {
    if (selectedCountry) {
      const trips = tripsByCountry[selectedCountry as keyof typeof tripsByCountry];
      setCurrentIndex((prevIndex) => (prevIndex - 1 + trips.length) % trips.length);
    }
  };

  // Get visible trips for the selected country
  const getVisibleTrips = () => {
    if (!selectedCountry) return [];
    const trips = tripsByCountry[selectedCountry as keyof typeof tripsByCountry];
    return [
      trips[currentIndex],
      trips[(currentIndex + 1) % trips.length],
      trips[(currentIndex + 2) % trips.length]
    ];
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
    <div className="w-full h-[550px] relative overflow-hidden" style={{ backgroundColor: '#FFECCE',        backgroundImage: 'url("/images/why/Why bg.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center' }}>
      <div className="w-[324px] h-[534px] left-[277px] top-[100px] absolute" />
      
      <div className="w-[832px] left-16 top-[66px] absolute opacity-50 text-[#2E2E2E] text-2xl font-poppins font-normal leading-10 scale-[0.85] origin-top-left">
            Choose a country and discover unforgettable journeys.
      </div>

      <div className="w-[305px] left-16 top-[26px] absolute scale-[0.85] origin-top-left">
        <span className="text-[#1E1E1E] text-4xl font-oswald font-semibold">CURATED FOR</span>
        <span className="text-primary text-4xl font-oswald font-semibold" style={{ 
                background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}> YOU...</span>
      </div>

      <div className="absolute ml-[50px] top-[120px]">
        <AnimatedList
          items={countries}
          onItemSelect={handleCountrySelect}
          showGradients={true}
          enableArrowNavigation={true}
          className="w-[400px]"
          itemClassName="hover:shadow-md transition-shadow duration-200"
          displayScrollbar={true}
          initialSelectedIndex={-1}
          selectedItem={selectedCountry || undefined}
        />
      </div>

      {selectedCountry && (
        <motion.div 
          className="absolute right-16 top-[130px] flex justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <div className="flex gap-8 items-stretch">
              <AnimatePresence mode="wait">
                {getVisibleTrips().map((trip, index) => (
                  <motion.div 
                    key={`${selectedCountry}-${currentIndex}-${index}`}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="w-[280px] h-[380px] bg-[#F6F8FA] rounded-[10px] shadow-[5px_6px_30px_rgba(0,0,0,0.25)] overflow-hidden"
                    whileHover={{ 
                      y: -10,
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="p-5">
                      <motion.img 
                        src={trip.image} 
                        alt={trip.title} 
                        className="w-full h-[160px] rounded-[8px] object-cover"
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.3 }
                        }}
                      />
                      <div className="mt-4 text-center">
                        <h3 className="text-[20px] font-oswald font-semibold">
                          <span className="text-[#2E2E2E]">{trip.title} </span>
                          <span style={{ 
                background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>{trip.subtitle}...</span>
                        </h3>
                        <p className="mt-2 opacity-50 text-[#2E2E2E] text-[14px] font-poppins leading-[18px]">
                          {trip.description}
                        </p>
                      </div>
                      <div className="flex justify-center gap-3 items-center mt-[30px]">
                        <motion.button 
                          className="text-[14px] font-poppins font-medium transition-all duration-300"
                          style={{
                            background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            fontWeight: '500'
                          }}
                          whileHover={{ 
                            x: 2,
                            scale: 1.05
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Read More
                        </motion.button>
                        <motion.button 
                          className="px-4 py-2 bg-primary rounded-[12px] text-white text-[14px] font-poppins font-medium hover:bg-[#FF6B00] transition-all duration-300"
                          style={{
                            background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                            fontWeight: '500'
                            }}
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 6px 15px rgba(247, 122, 64, 0.3)"
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
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
              whileHover={{ 
                //scale: 1.1,
                boxShadow: "0 6px 15px rgba(0,0,0,0.2)"
              }}
              //whileTap={{ scale: 0.9 }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            
            <motion.button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
              whileHover={{ 
                //scale: 1.1,
                boxShadow: "0 6px 15px rgba(0,0,0,0.2)"
              }}
              //whileTap={{ scale: 0.9 }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CuratedForYou; 