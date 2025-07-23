import React, { useState } from 'react';

interface PackageCardProps {
  title: string;
  description: string;
  image: string;
  price: string;
  duration: string;
}

const PackageCard: React.FC<PackageCardProps> = ({
  title,
  description,
  price,
  duration,
  image,
}) => {
  return (
    <div className="w-[280px] h-[390px] relative overflow-hidden group">
      <div className="w-[280px] h-[390px] absolute left-0 top-0 bg-[#F6F8FA] shadow-[5px_6px_30px_rgba(0,0,0,0.25)] rounded-[10px] border-2 border-primary">
        <img 
          src={image} 
          alt={title} 
          className="w-[240px] h-[185px] absolute left-[20px] top-[18px] rounded-[10px] object-cover" 
        />
              
        <div className="w-[240px] absolute left-[20px] top-[217px]">
          <span className="text-[#2E2E2E] text-xl font-oswald font-semibold">{title}</span>
        </div>
        <div className="w-[240px] absolute left-[20px] top-[254px] opacity-50 text-[#2E2E2E] text-sm font-poppins leading-5">
          {description}
        </div>
        <div className="absolute left-[25px] top-[328px] text-primary text-base font-poppins font-medium cursor-pointer hover:text-[#FF6B00] transition-colors duration-300">
          <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF6B00] hover:after:w-full after:transition-all after:duration-300 inline-block">Read More</span>
        </div>
        <div className="w-[111px] h-[46px] px-2 absolute left-[142px] top-[317px] rounded-2xl flex justify-center items-center cursor-pointer transform hover:scale-105 transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
            fontWeight: '500'
          }}
        >
          <div className="text-white text-base font-poppins font-medium">
            Enquire
          </div>
        </div>
      </div>
    </div>
  );
};

const NavigationArrow: React.FC<{ direction: 'left' | 'right'; onClick: () => void }> = ({
  direction,
  onClick
}) => {
  return (
    <div 
      className="w-[45px] h-[45px] relative overflow-hidden group cursor-pointer hover:scale-105 transition-transform"
      onClick={onClick}
    >
      <div className="absolute w-[38px] h-[38px] left-[3.5px] top-[3.5px] bg-primary rounded-full opacity-100 group-hover:opacity-100" />
      <div className="absolute w-[41px] h-[41px] left-[2px] top-[2px] bg-white rounded-full shadow-lg border border-primary group-hover:bg-primary transition-colors duration-300" />
      {direction === 'left' ? (
        <svg
          fill="none"
          stroke="#F77A40"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 group-hover:stroke-white transition-colors duration-300"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      ) : (
        <svg
          fill="none"
          stroke="#F77A40"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 group-hover:stroke-white transition-colors duration-300"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      )}
    </div>
  );
};

const AllPackages: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const allPackages = [
    // Slide 1
    [
      {
        title: 'Ladakh Bike Expedition',
        description: 'Experience the thrill of riding through the highest motorable roads in the world.',
        image: '/destination/ladakh-1.jpg',
        price: '₹24,999/-',
        duration: '8/9'
      },
      {
        title: 'Kerala Backwaters',
        description: 'Glide through serene backwaters, witness village life and enjoy authentic cuisine.',
        image: '/destination/kerala-1.jpg',
        price: '₹18,999/-',
        duration: '5/6'
      },
      {
        title: 'Rajasthan Heritage',
        description: 'Journey through the land of kings, exploring magnificent forts and palaces.',
        image: '/destination/rajasthan-1.jpg',
        price: '₹22,999/-',
        duration: '6/7'
      },
      {
        title: 'Kashmir Paradise',
        description: 'Experience heaven on earth with stunning landscapes and rich culture.',
        image: '/destination/kashmir-1.jpg',
        price: '₹21,999/-',
        duration: '5/6'
      },
      {
        title: 'Goa Beach Holiday',
        description: 'Perfect blend of beaches, culture, and vibrant nightlife.',
        image: '/destination/goa-1.jpg',
        price: '₹14,999/-',
        duration: '4/5'
      },
      {
        title: 'Sikkim Explorer',
        description: 'Discover the hidden gems of Northeast India and its unique culture.',
        image: '/destination/sikkim-1.jpg',
        price: '₹19,999/-',
        duration: '5/6'
      }
    ],
    // Slide 2
    [
      {
        title: 'Spiti Valley Adventure',
        description: 'Journey through the stunning cold desert valley and ancient monasteries.',
        image: '/destination/spiti-1.jpg',
        price: '₹23,999/-',
        duration: '6/7'
      },
      {
        title: 'Coorg Mysore Ooty',
        description: 'Experience the best of South Indian hill stations and culture.',
        image: '/destination/coorg-1.jpg',
        price: '₹16,999/-',
        duration: '5/6'
      },
      {
        title: 'Do Dham Yatra',
        description: 'Embark on a spiritual journey to sacred temples in the Himalayas.',
        image: '/destination/dodham-1.jpg',
        price: '₹15,999/-',
        duration: '6/7'
      },
      {
        title: 'Meghalaya Magic',
        description: 'Explore the abode of clouds and living root bridges.',
        image: '/destination/meghalaya-1.jpg',
        price: '₹17,999/-',
        duration: '5/6'
      },
      {
        title: 'Mussoorie Retreat',
        description: 'Enjoy the queen of hill stations with panoramic Himalayan views.',
        image: '/destination/mussoorie-1.jpg',
        price: '₹12,999/-',
        duration: '3/4'
      },
      {
        title: 'MSK Weekend Trip',
        description: 'Explore Manali, Solang, and Kullu in one amazing journey.',
        image: '/destination/msk-1.jpg',
        price: '₹13,999/-',
        duration: '3/4'
      }
    ],
    // Slide 3
    [
      {
        title: 'Dubai City Tour',
        description: 'Experience luxury, modern marvels, and desert adventures.',
        image: '/destination/dubai-1.jpg',
        price: '₹89,999/-',
        duration: '5/6'
      },
      {
        title: 'Singapore Explorer',
        description: 'Discover the perfect blend of modernity and cultural heritage.',
        image: '/destination/singapore-1.jpg',
        price: '₹79,999/-',
        duration: '5/6'
      },
      {
        title: 'Bangkok Phuket',
        description: 'Experience the best of Thailand\'s city life and beaches.',
        image: '/destination/bangkok-1.jpg',
        price: '₹49,999/-',
        duration: '6/7'
      },
      {
        title: 'Bali Paradise',
        description: 'Explore tropical beaches, ancient temples, and vibrant culture.',
        image: '/destination/bali-1.jpg',
        price: '₹69,999/-',
        duration: '6/7'
      },
      {
        title: 'Vietnam Discovery',
        description: 'Journey through stunning landscapes and historical sites.',
        image: '/destination/vietnam-1.jpg',
        price: '₹59,999/-',
        duration: '7/8'
      },
      {
        title: 'Phuket Island',
        description: 'Experience the perfect beach holiday with amazing activities.',
        image: '/destination/phuket-1.jpg',
        price: '₹45,999/-',
        duration: '5/6'
      }
    ],
    // Slide 4
    [
      {
        title: 'Ladakh Cultural',
        description: 'Discover the mystical beauty of Ladakh\'s monasteries and culture.',
        image: '/destination/ladakh-2.jpg',
        price: '₹26,999/-',
        duration: '7/8'
      },
      {
        title: 'Ooty Hill Station',
        description: 'Experience the queen of hill stations in South India.',
        image: '/destination/ooty-1.jpg',
        price: '₹15,999/-',
        duration: '4/5'
      }
    ]
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % allPackages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + allPackages.length) % allPackages.length);
  };

  return (
    <div className="w-full px-[70px] py-10">
      <div className="relative bg-white rounded-[40px] p-12 shadow-[5px_6px_30px_rgba(0,0,0,0.25)]">
        <div className="text-center mb-12">
          <h2 className="text-[36px] font-oswald font-semibold tracking-wide">
            <span className="text-[#2E2E2E]">ALL OUR </span>
            <span style={{ 
                background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>PACKAGES</span>
          </h2>
          <p className="mt-2 text-[#2E2E2E] text-2xl font-poppins opacity-50">
            Everything you will need, and MORE!
          </p>
        </div>

        <div className="relative">
          <button className="absolute -left-[40px] top-1/2 -translate-y-1/2 z-10">
            <NavigationArrow direction="left" onClick={prevSlide} />
          </button>
        
          <div className="pl-[10px] pr-[50px]">
            <div className="grid grid-cols-3 gap-x-[100px] gap-y-8">
              {allPackages[currentSlide].map((pkg, index) => (
                <PackageCard key={index} {...pkg} />
              ))}
            </div>
          </div>

          <button className="absolute -right-[40px] top-1/2 -translate-y-1/2 z-10">
            <NavigationArrow direction="right" onClick={nextSlide} />
          </button>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          {allPackages.map((_, i) => (
            <div 
              key={i} 
              className={`rounded-full cursor-pointer transition-all duration-300 ${
                i === currentSlide 
                  ? 'w-[18px] h-[18px] bg-primary/60' 
                  : i === currentSlide - 1 || i === currentSlide + 1 
                    ? 'w-4 h-4 bg-[#D9D9D9]' 
                    : 'w-3.5 h-3.5 bg-[#D9D9D9]'
              }`}
              onClick={() => setCurrentSlide(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPackages; 