import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import RotatingText from './RotatingText';

const Hero: React.FC = () => {
  return (
    <section className="fixed inset-0 w-full h-screen overflow-hidden z-1">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/images/3569294-uhd_3840_2160_24fps.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex mt-[130px] justify-center">
        <div className="relative" style={{ width: '100%', height: 288 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
            style={{ width: '100%' }}
          >
            <h1 style={{ 
              display: 'flex',
              alignItems: 'flex-start',
              gap: 10,
              fontSize: 100, 
              fontFamily: 'Bebas Neue', 
              fontWeight: '400', 
              lineHeight: '128px',
              wordWrap: 'break-word'
            }}>
              <span
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-start',
                  width: 380, // Adjust as needed for the widest word
                  minWidth: 380,
                }}
              >
                <RotatingText
                  texts={["Explore,", "Travel,", "Adventure,"]}
                  mainClassName=""
                  elementLevelClassName=""
                  splitBy="characters"
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: '-120%', opacity: 0 }}
                  rotationInterval={2000}
                  auto={true}
                  textStyle={{
                    fontSize: 100,
                    fontFamily: 'Bebas Neue',
                    fontWeight: '400',
                    lineHeight: '128px',
                    wordWrap: 'break-word',
                background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    display: 'inline-block',
                  }}
                />
              </span>
              <span style={{ color: '#2E2E2E' }}> </span>
              <span style={{ color: '#D9D9D9' }}>Professor Style</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute left-[25px] top-[128px] text-center"
            style={{ width: '100%' }}
          >
            <p style={{
              color: '#D9D9D9',
              fontSize: 20,
              fontFamily: 'Poppins',
              fontWeight: '400',
              lineHeight: '40px',
              wordWrap: 'break-word'
            }}>
              From hidden Himalayan trails to vibrant city escapes, every trip is crafted with expertise, heart, and a touch of adventure. <br /> You dream it—we handle the flights, stays, and the stories you'll bring home.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search Section */}
      <div className="absolute inset-0 flex justify-center mt-[370px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center"
        >
          <div style={{
            width: 450, 
            height: 56, 
            paddingLeft: 8, 
            paddingRight: 8, 
            background: 'white', 
            boxShadow: '0px 4px 12px rgba(13, 10, 44, 0.06)', 
            borderRadius: 10, 
            justifyContent: 'flex-start', 
            alignItems: 'center', 
            gap: 6, 
            display: 'inline-flex'
          }}>
            <div style={{
              padding: 10, 
              justifyContent: 'flex-start', 
              alignItems: 'center', 
              gap: 10, 
              display: 'flex'
            }}>
              <div style={{position: 'relative'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="url(#paint0_linear_672_1585)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20.9992 21.0002L16.6992 16.7002" stroke="url(#paint1_linear_672_1585)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="paint0_linear_672_1585" x1="3" y1="3" x2="21.0967" y2="5.89548" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F36E20"/>
                      <stop offset="1" stopColor="#FDAF16"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_672_1585" x1="16.6992" y1="16.7002" x2="21.5627" y2="17.4784" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F36E20"/>
                      <stop offset="1" stopColor="#FDAF16"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div style={{
              flex: '1 1 0', 
              justifyContent: 'flex-start', 
              alignItems: 'center', 
              display: 'flex'
            }}>
              <input
                type="text"
                placeholder="Search destinations, experiences..."
                style={{
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  color: '#ABB7C2',
                  fontSize: 18,
                  fontFamily: 'Poppins',
                  fontWeight: '400',
                  width: '100%'
                }}
              />
            </div>
            <div style={{
              padding: 10, 
              justifyContent: 'flex-start', 
              alignItems: 'center', 
              gap: 10, 
              display: 'flex'
            }}>
              <div style={{position: 'relative'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 4H14" stroke="#ABB7C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 4H3" stroke="url(#paint0_linear_672_138)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12H12" stroke="url(#paint1_linear_672_138)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12H3" stroke="#ABB7C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 20H16" stroke="#ABB7C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 20H3" stroke="url(#paint2_linear_672_138)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V6" stroke="#ABB7C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 10V14" stroke="#ABB7C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 18V22" stroke="#ABB7C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="paint0_linear_672_138" x1="3" y1="4" x2="6.60185" y2="8.03407" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F36E20"/>
                      <stop offset="1" stopColor="#FDAF16"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_672_138" x1="12" y1="12" x2="15.3967" y2="16.8912" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F36E20"/>
                      <stop offset="1" stopColor="#FDAF16"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_672_138" x1="3" y1="20" x2="6.39667" y2="24.8912" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F36E20"/>
                      <stop offset="1" stopColor="#FDAF16"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Buttons Section */}
      <div className="absolute inset-0 flex justify-center mt-[490px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{ width: 266, height: 51, position: 'relative', borderRadius: 16 }}
        >
          <Link to="/landing">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: 123, 
                height: 51, 
                padding: 8, 
                left: 143, 
                top: 0, 
                position: 'absolute', 
                background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)', 
                borderRadius: 16, 
                justifyContent: 'center', 
                alignItems: 'center', 
                gap: 8, 
                display: 'inline-flex',
                cursor: 'pointer'
              }}
            >
              <div style={{
                color: 'white', 
                fontSize: 18, 
                fontFamily: 'Poppins', 
                fontWeight: '500', 
                wordWrap: 'break-word'
              }}>
                Enquire
              </div>
            </motion.div>
          </Link>
          
          <Link to="/destinations">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: 134, 
                height: 51, 
                paddingLeft: 10, 
                paddingRight: 10, 
                paddingTop: 8, 
                paddingBottom: 8, 
                left: 0, 
                top: 0, 
                position: 'absolute', 
                borderRadius: 16, 
                outline: '1px #F36E20 solid', 
                justifyContent: 'center', 
                alignItems: 'center', 
                gap: 8, 
                display: 'inline-flex',
                cursor: 'pointer'
              }}
            >
              <div style={{
                color: '#F36E20', 
                fontSize: 18, 
                fontFamily: 'Poppins', 
                fontWeight: '500', 
                wordWrap: 'break-word'
              }}>
                Destinations
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 