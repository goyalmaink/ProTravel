import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Masonry from '../components/Masonry';
import BlogSection from '../components/BlogSection';

const updateNavbarVisibility = (isHidden: boolean) => {
  const navbar = document.querySelector('nav');
  if (!navbar) return;
  
  if (isHidden) {
    navbar.style.transform = 'translateY(-100%)';
    navbar.style.opacity = '0';
  } else {
    navbar.style.transform = 'translateY(0)';
    navbar.style.opacity = '1';
  }
  navbar.style.transitionDelay = isHidden ? '0s' : '0.3s';
};

const HeroSection = () => {
  return (
    <motion.div 
      className="w-full pt-[100px] pb-8"
      style={{ 
        background: 'linear-gradient(180deg, #FFECCE 0%, #F6F8FA 100%)',
      }}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="text-center">
        <motion.h1 
          className="text-[48px] font-oswald font-semibold leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          THE STORY BEHIND<br />
          <span className="text-black">TRAVEL</span> 
          <span style={{ 
                background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}> PROFESSOR</span>
        </motion.h1>
        <motion.p 
          className="text-[24px] font-poppins font-normal leading-[30px] mt-3 text-black"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Turning wanderlust into unforgettable journeys since 2018
        </motion.p>
      </div>
    </motion.div>
  );
};

const OurStory = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
      className="w-full py-12"
      style={{ 
        //backgroundImage: 'url("/about us/bg 1.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-16 flex gap-16">
        <motion.div 
          className="flex-1"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-[28px] font-oswald font-semibold"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-[#2E2E2E]">OUR </span>
            <span style={{ 
                background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>STORY...</span>
          </motion.h2>
          <motion.p 
            className="mt-6 text-[#3E3E3E] text-[18px] font-poppins leading-[28px]"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Travel Professor began with a simple belief: that travel should transform, not just transport. Founded in 2018 by Arjun Sharma after his life-changing trek to the Himalayas, since then our company has grown from a small group of friends organizing weekend getaways to one of India's most trusted travel communities.
          </motion.p>
          <motion.p 
            className="mt-6 text-black text-[14px] font-urbanist font-semibold leading-[20px]"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            What sets us apart isn't just where we go, but how we go. Every itinerary is crafted with purpose-balancing must-see attractions with hidden gems, luxury with authenticity, and adventure with reflection. We're not just selling trips; we're creating experiences that stay with you long after you've returned home.
          </motion.p>
        </motion.div>
        <motion.div 
          className="w-[400px] h-[300px] border border-black rounded-[20px] flex items-center justify-center"
          initial={{ x: 50, opacity: 0, scale: 0.9 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
          }}
        >
          <p className="text-[18px] font-poppins">Place Holder Video</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ValueCard = ({ image, title, subtitle, description }: { image: string; title: string; subtitle: string; description?: string }) => {
  return (
    <motion.div 
      className="w-[280px] h-[420px] rounded-[20px] overflow-hidden relative group"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      <motion.img 
        src={image} 
        alt={`${title} ${subtitle}`}
        className="w-full h-full object-cover"
        whileHover={{ 
          scale: 1.1,
          transition: { duration: 0.4 }
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <motion.div 
        className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out group-hover:translate-y-[-20%]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.h3 
          className="text-[20px] font-oswald font-semibold text-white"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-[20px] font-oswald font-semibold text-primary"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
        {description && (
          <motion.p 
            className="text-white text-[12px] font-poppins font-normal mt-4 px-6 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
};

const OurValues = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
      className="w-full py-1"
      style={{ 
        //backgroundImage: 'url("/about us/bg 1.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto">
        <motion.h2 
          className="text-center text-[28px] font-oswald font-semibold mb-8"
          variants={itemVariants}
        >
          <span className="text-[#2E2E2E]">OUR </span>
          <span style={{ 
                background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>VALUES...</span>
        </motion.h2>
        <motion.div 
          className="flex justify-center gap-6"
          variants={itemVariants}
        >
          <ValueCard 
            image="/about us/authentic.jpg"
            title="Authentic"
            subtitle="Experiences"
            description="We go beyond tourist traps to create genuine connections with places and people. Every itinerary includes local interactions, cultural immersion, and moments you won't find in guidebooks."
          />
          <ValueCard 
            image="/about us/community.jpg"
            title="Community"
            subtitle="Building"
            description="Travel is better together. We foster connections between like-minded explorers, creating friendships that often last long after the trip ends."
          />
          <ValueCard 
            image="/about us/responsible.jpg"
            title="Responsible"
            subtitle="Travel"
            description="Every trip supports local communities and respects the environment. We partner with sustainable accommodations, employ local guides, and minimize our ecological footprint."
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const JourneyMilestone = ({ year, description, highlight }: { year: string; description: string; highlight: string }) => {
  return (
    <div className="text-center w-[289px]">
      <div className="text-black text-[24px] font-poppins font-medium uppercase leading-[21px] mb-2">
        {year}:<br/>
      </div>
      <div className="text-[20px] font-poppins leading-[21px]">
        <span className="text-black">{description} </span>
        <span className="text-primary">{highlight}</span>
      </div>
    </div>
  );
};

const OurJourney = () => {
  useEffect(() => {
    const path = document.querySelector('#animatedPath') as SVGPathElement;
    const journeySection = document.querySelector('#journeySection');
    const title = document.querySelector('#journeyTitle') as HTMLElement;
    const milestones = document.querySelectorAll('.milestone');
    const navbar = document.querySelector('nav');
    if (!path || !journeySection || !title || !navbar) return;
    
    navbar.style.transition = 'transform 0.8s ease-in-out, opacity 0.8s ease-in-out';
    
    const pathLength = path.getTotalLength();
    
    path.style.strokeDasharray = `${pathLength} ${pathLength}`;
    path.style.strokeDashoffset = `${pathLength}`;

    milestones.forEach((milestone) => {
      (milestone as HTMLElement).style.opacity = '0';
      (milestone as HTMLElement).style.transform = 'translateY(20px)';
    });
    
    const handleScroll = () => {
      const rect = journeySection.getBoundingClientRect();
      const scrollProgress = -rect.top / (rect.height - window.innerHeight);
      const scrollPercentage = Math.max(0, Math.min(1, scrollProgress));
      
      const isInJourneySection = rect.top <= 0 && rect.bottom >= window.innerHeight;
      
      const isNearEnd = rect.bottom <= window.innerHeight * 1.2;
      
      if (isInJourneySection && !isNearEnd) {
        updateNavbarVisibility(true);
      } else if (!isInJourneySection || rect.bottom <= window.innerHeight * 0.8) {
        updateNavbarVisibility(false);
      }

      const drawLength = pathLength * scrollPercentage;
      path.style.strokeDashoffset = `${pathLength - drawLength}`;

      title.style.opacity = Math.min(1, scrollProgress * 2).toString();
      title.style.transform = `translateX(${(1 - Math.min(1, scrollProgress * 2)) * 50}px)`;

      milestones.forEach((milestone, index) => {
        const milestoneElement = milestone as HTMLElement;
        const delay = index * 0.1;
        const milestoneProgress = Math.max(0, Math.min(1, (scrollProgress - delay) * 2));
        milestoneElement.style.opacity = milestoneProgress.toString();
        milestoneElement.style.transform = `translateY(${(1 - milestoneProgress) * 20}px)`;
        milestoneElement.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      updateNavbarVisibility(false);
    };
  }, []);

  return (
    <div id="journeySection" className="w-full h-[200vh] relative"
      style={{ 
        //backgroundImage: 'url("/about us/bg 1.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <div id="journeyTitle" className="absolute top-8 right-16 text-right z-50">
          <span className="text-[28px] font-oswald font-semibold uppercase leading-[40px] text-[#2E2E2E]">OUR </span>
          <span className="text-[28px] font-oswald font-semibold uppercase leading-[40px]"
          style={{ 
                background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>JOURNEY</span>
        </div>

        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-full max-w-[1200px] h-[500px]">
            <div className="absolute w-full h-[500px] left-0">
              <svg viewBox="0 0 1353 644" fill="none" className="w-full h-full">
                <path id="animatedPath" d="M1 3C219.425 90.315 125.358 518.113 550.516 317.611C1027.69 92.5788 1092.59 628.064 1353 641" stroke="#F77A40" stroke-width="5" stroke-dasharray="30 30"/>
              </svg>
              
              <img 
                src="/about us/Plane (1).png" 
                alt="Start Plane" 
                className="absolute w-[180px] h-[168px] left-[-50px] top-[-80px] z-10"
              />
              <img 
                src="/about us/Plane.png" 
                alt="End Plane" 
                className="absolute w-[180px] h-[168px] right-[-20px] bottom-[-110px] z-10"
              />
            </div>
              
            <div className="milestone-container absolute w-full h-full">
              <div className="absolute left-[147px] top-[-6px] text-center w-[217px] transition-transform duration-300 ease-in-out hover:-translate-y-[5px] milestone first-trip">
                <div className="text-black text-[18px] font-poppins font-medium uppercase">2018:</div>
                <div className="mt-1">
                  <div className="text-[16px] font-poppins"
                  style={{ 
                    background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>First Group Trip</div>
                  <div className="text-black text-[16px] font-poppins">To Ladakh</div>
                  <div className="text-black text-[16px] font-poppins">With 12 Travelers</div>
                </div>
              </div>

              <div className="absolute left-[234px] top-[123px] text-center w-[217px] transition-transform duration-300 ease-in-out hover:-translate-y-[5px] milestone destinations">
                <div className="text-black text-[18px] font-poppins font-medium uppercase">2019:</div>
                <div className="mt-1">
                  <div className="text-black text-[16px] font-poppins">Expanded To</div>
                  <div className="text-[16px] font-poppins"
                  style={{ 
                    background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>15 Destinations</div>
                  <div className="text-black text-[16px] font-poppins">Across India</div>
                </div>
              </div>

              <div className="absolute left-[270px] top-[294px] text-center w-[217px] transition-transform duration-300 ease-in-out hover:-translate-y-[5px] milestone virtual-travel">
                <div className="text-black text-[18px] font-poppins font-medium uppercase">2020:</div>
                <div className="mt-1">
                  <div className="text-black text-[16px] font-poppins">Launched</div>
                  <div className="text-[16px] font-poppins"
                  style={{ 
                    background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>Virtual Travel</div>
                  <div className="text-[16px] font-poppins"
                  style={{ 
                    background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>Experiences</div>
                  <div className="text-black text-[16px] font-poppins">During Global</div>
                  <div className="text-black text-[16px] font-poppins">Lockdowns</div>
                </div>
              </div>

              <div className="absolute left-[439px] top-[65px] text-center w-[217px] transition-transform duration-300 ease-in-out hover:-translate-y-[5px] milestone international-trips">
                <div className="text-black text-[18px] font-poppins font-medium uppercase">2021:</div>
                <div className="mt-1">
                  <div className="text-black text-[16px] font-poppins">Introduced</div>
                  <div className="text-[16px] font-poppins"
                  style={{ 
                    background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>International</div>
                  <div className="text-[16px] font-poppins"
                  style={{ 
                    background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>Trips</div>
                  <div className="text-black text-[16px] font-poppins">To Nepal, Bhutan, And</div>
                  <div className="text-black text-[16px] font-poppins">Sri Lanka</div>
                </div>
              </div>

              <div className="absolute left-[566px] top-[210px] text-center w-[217px] transition-transform duration-300 ease-in-out hover:-translate-y-[5px] milestone travelers">
                <div className="text-black text-[18px] font-poppins font-medium uppercase">2022:</div>
                <div className="mt-1">
                  <div className="text-black text-[16px] font-poppins">Reached Milestone Of</div>
                  <div className="text-[16px] font-poppins"
                  style={{ 
                    background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>1,000</div>
                  <div className="text-[16px] font-poppins"
                  style={{ 
                    background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>Travelers</div>
                </div>
              </div>

              <div className="absolute left-[685px] top-[107px] text-center w-[217px] transition-transform duration-300 ease-in-out hover:-translate-y-[5px] milestone experts">
                <div className="text-black text-[18px] font-poppins font-medium uppercase">2023:</div>
                <div className="mt-1">
                  <div className="text-black text-[16px] font-poppins">Expanded Team To</div>
                  <div className="text-[16px] font-poppins"
                  style={{ 
                    background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>25 Travel</div>
                  <div className="text-[16px] font-poppins"
                  style={{ 
                    background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>Experts</div>
                </div>
              </div>

              <div className="absolute left-[719px] top-[357px] text-center w-[217px] transition-transform duration-300 ease-in-out hover:-translate-y-[5px] milestone tours">
                <div className="text-black text-[18px] font-poppins font-medium uppercase">2024:</div>
                <div className="mt-1">
                  <div className="text-black text-[16px] font-poppins">Launched Specialized</div>
                  <div className="text-[16px] font-poppins"
                  style={{ 
                    background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>Photography And Culinary</div>
                  <div className="text-[16px] font-poppins"
                  style={{ 
                    background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>Tours</div>
                </div>
              </div>

              <div className="absolute left-[851px] top-[197px] text-center w-[217px] transition-transform duration-300 ease-in-out hover:-translate-y-[5px] milestone happy-traveler">
                <div className="text-black text-[18px] font-poppins font-medium uppercase">2025:</div>
                <div className="mt-1">
                  <div className="text-black text-[16px] font-poppins">Celebrating Our</div>
                  <div className="text-[16px] font-poppins"
                  style={{ 
                    background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>5,000th</div>
                  <div className="text-[16px] font-poppins"
                                            style={{ 
                                              background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                                              WebkitBackgroundClip: 'text',
                                              WebkitTextFillColor: 'transparent',
                                              backgroundClip: 'text'
                                            }}>Happy Traveler!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FoundersMessage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
      className="w-full py-2 bg-[#FFECCE]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-16">
        <motion.h2 
          className="text-[28px] font-oswald font-semibold mb-8"
          variants={itemVariants}
        >
          <span className="text-[#2E2E2E]">FOUNDER'S </span>
          <span style={{ 
                background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>MESSAGE...</span>
        </motion.h2>
        <div className="flex gap-12">
          <motion.div 
            className="w-[360px]"
            variants={itemVariants}
          >
            <motion.div 
              className="border border-black rounded-[20px] h-[320px] flex items-center justify-center"
              initial={{ x: -50, opacity: 0, scale: 0.9 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
              }}
            >
              <p className="text-[18px] font-poppins">Place Holder Image</p>
            </motion.div>
            <motion.div 
              className="mt-4 w-[300px] h-[50px] mx-auto bg-[#D9D9D9] flex items-center justify-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-[24px] font-poppins text-center">Founder Sign</p>
            </motion.div>
          </motion.div>
          <motion.div 
            className="flex-1 relative flex items-center"
            variants={itemVariants}
          >
            <motion.span 
              className="text-[200px] font-bebas-neue absolute -left-[8px] -top-[70px]"
              style={{ 
                background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "backOut" }}
              viewport={{ once: true }}
            >
              "
            </motion.span>
            <div className="px-24">
              <motion.p 
                className="text-[24px] font-poppins leading-[36px] text-[#3E3E3E] mb-6"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Travel isn't just about seeing new places-it's about discovering parts of yourself you never knew existed. That's the transformation we create with every journey.
              </motion.p>
              <motion.p 
                className="text-[16px] font-urbanist font-semibold"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Today, our team of passionate travelers continues this mission, designing each trip as carefully as a lesson plan, with moments of discovery built into every day.
              </motion.p>
            </div>
            <motion.span 
              className="text-[200px] font-bebas-neue absolute -right-[-46px] bottom-[-60px] rotate-180"
              style={{ 
                background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "backOut" }}
              viewport={{ once: true }}
            >
              "
            </motion.span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const OurTeam = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
      className="w-full py-8 bg-[#FFECCE]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-16 text-center">
        <motion.h2 
          className="text-[28px] font-oswald font-semibold mb-6"
          variants={itemVariants}
        >
          <span className="text-[#2E2E2E]">OUR </span>
          <span style={{ 
                                              background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                                              WebkitBackgroundClip: 'text',
                                              WebkitTextFillColor: 'transparent',
                                              backgroundClip: 'text'
                                            }}>TEAM...</span>
        </motion.h2>
        <motion.p 
          className="text-[18px] font-poppins leading-[28px] max-w-[1000px] mx-auto"
          variants={itemVariants}
        >
          Behind every great journey is a team of passionate travelers, each bringing unique expertise and personal experiences to craft your perfect adventure. From our destination specialists who scout the best local experiences to our customer happiness team ensuring smooth journeys, we're united by our love for exploration.
        </motion.p>
      </div>
    </motion.div>
  );
};

const OurMission = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
      className="w-full py-8 bg-[#FFECCE]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-16 text-center">
        <motion.h2 
          className="text-[28px] font-oswald font-semibold mb-6"
          variants={itemVariants}
        >
          <span className="text-[#2E2E2E]">OUR </span>
          <span 
          style={{ 
            background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>MISSION...</span>
        </motion.h2>
        <motion.p 
          className="text-[18px] font-poppins leading-[28px] max-w-[1000px] mx-auto"
          variants={itemVariants}
        >
          To transform ordinary travelers into passionate explorers through carefully crafted journeys that balance adventure, comfort, and cultural immersion.
        </motion.p>
      </div>
    </motion.div>
  );
};

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const statVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  return (
    <motion.div 
      className="bg-cover text-white bg-center bg-no-repeat" 
      style={{ backgroundImage: 'url("/images/bg 4.png")' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-16 py-8">
        <motion.div 
          className="text-center mb-6"
          variants={itemVariants}
        >
          <motion.p 
            className="text-[20px] font-poppins mb-2"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join a community of passionate explorers and discover the world with confidence.
          </motion.p>
          <motion.p 
            className="text-[20px] font-poppins font-medium mb-3"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Ready to Start Your Adventure?
          </motion.p>
          <motion.button 
            className="bg-white text-primary px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(255,255,255,0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>
        <motion.div 
          className="flex justify-center gap-12"
          variants={itemVariants}
        >
          <motion.div 
            className="text-center"
            variants={statVariants}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <motion.p 
              className="text-[28px] font-bold"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "backOut" }}
              viewport={{ once: true }}
            >
              5000+
            </motion.p>
            <p className="text-xs">Happy Travelers</p>
          </motion.div>
          <motion.div 
            className="text-center"
            variants={statVariants}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <motion.p 
              className="text-[28px] font-bold"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "backOut" }}
              viewport={{ once: true }}
            >
              250+
            </motion.p>
            <p className="text-xs">Group Trips Conducted</p>
          </motion.div>
          <motion.div 
            className="text-center"
            variants={statVariants}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <motion.p 
              className="text-[28px] font-bold"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "backOut" }}
              viewport={{ once: true }}
            >
              50+
            </motion.p>
            <p className="text-xs">Destinations Explored</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const AboutUs = () => {
  // Sample blog posts data for BlogSection
  const blogPosts = [
    {
      category: "Travel Tips",
      readTime: "5 min read",
      title: "Essential Packing List for Himalayan Treks",
      source: "Travel Professor",
      timeAgo: "2 days ago",
      imageUrl: "/Testimonial/blog-1.jpg"
    },
    {
      category: "Destination Guide",
      readTime: "8 min read",
      title: "Complete Guide to Ladakh Adventure",
      source: "Travel Professor",
      timeAgo: "1 week ago",
      imageUrl: "/Testimonial/blog-2.jpg"
    },
    {
      category: "Travel Stories",
      readTime: "6 min read",
      title: "Memories from Our First Group Trip",
      source: "Travel Professor",
      timeAgo: "2 weeks ago",
      imageUrl: "/Testimonial/blog-3.jpg"
    }
  ];

  return (
    
    <div className="w-full min-h-screen bg-[#F6F8FA]">
      <HeroSection />
      <OurStory />
      <OurValues />
      <OurJourney />
      <Footer />
      <FoundersMessage />
      <OurTeam />
      <OurMission />
        <Masonry />

    </div>
    
  );
};

export { 
  HeroSection,
  OurStory,
  OurValues,
  OurJourney,
  FoundersMessage,
  OurTeam,
  OurMission,
  Footer,
  AboutUs as default 
}; 