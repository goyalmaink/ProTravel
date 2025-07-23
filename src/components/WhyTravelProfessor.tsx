import React from 'react';
import { motion } from 'framer-motion';

const WhyTravelProfessor: React.FC = () => {
  return (
    <section 
      className="relative overflow-hidden"
      style={{
        width: '100%',
        height: 900,
        background: '#FFECCE',
        backgroundImage: 'url("/images/why/Why bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Background Image */}
      <div 
        className="absolute"
        style={{
          width: 617,
          height: 950,
          left: 0,
          top: 20,
          backgroundImage: 'url("/images/travel-professor-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Content Container */}
      <div className="absolute mt-4 ml-[250px]">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Main Title */}
          <h2 
            className="mb-4 mt-8 ml-[450px]"
            style={{
              fontSize: 50,
              fontFamily: 'Bebas Neue',
              fontWeight: '400',
              lineHeight: '86px',
              color: '#2E2E2E',
              marginBottom: 10
            }}
          >
            Why{' '}
            <span style={{
              background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Travel Professor?
            </span>
          </h2>

          {/* Description */}
          <p 
            className="ml-[450px] mb-6 w-[670px]"
            style={{
              fontSize: 18,
              fontFamily: 'Poppins',
              fontWeight: '400',
              lineHeight: '36px',
              color: '#2E2E2E',
              //marginBottom: 48
            }}
          >
Join a community of passionate explorers and discover the world with confidence.
          </p>

          {/* Statistics Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="ml-[450px]"
            style={{ width: 600, height: 171, position: 'relative' }}
          >
            {/* 5000+ Happy Travelers */}
            <div style={{ width: 193, height: 50, left: 0, top: 0, position: 'absolute' }}>
              <div style={{
                              background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text',
                fontSize: 55,
                fontFamily: 'Bebas Neue',
                fontWeight: '400',
                lineHeight: '92px',
                wordWrap: 'break-word'
              }}>
                5000+
              </div>
              <div style={{
                width: 105,
                left: 0,
                top: 77,
                position: 'absolute',
                color: 'black',
                fontSize: 24,
                fontFamily: 'Oswald',
                fontWeight: '600',
                wordWrap: 'break-word'
              }}>
                Happy Travelers...
              </div>
            </div>

            {/* 250+ Group Trips */}
            <div style={{ width: 163, height: 83, left: 230, top: 0, position: 'absolute' }}>
              <div style={{
                //color: '#3E3E3E',
                background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: 55,
                fontFamily: 'Bebas Neue',
                fontWeight: '400',
                lineHeight: '92px',
                wordWrap: 'break-word'
              }}>
                250+
              </div>
              <div style={{
                width: 162.53,
                left: 0,
                top: 77,
                position: 'absolute',
                color: 'black',
                fontSize: 24,
                fontFamily: 'Oswald',
                fontWeight: '600',
                wordWrap: 'break-word'
              }}>
                Group Trips Conducted...
              </div>
            </div>

            {/* 50+ Destinations */}
            <div style={{ width: 116, height: 83, left: 456, top: 0, position: 'absolute' }}>
              <div style={{
                background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: 55,
                fontFamily: 'Bebas Neue',
                fontWeight: '400',
                lineHeight: '92px',
                wordWrap: 'break-word'
              }}>
                50+
              </div>
              <div style={{
                width: 172,
                left: 0,
                top: 77,
                position: 'absolute',
                color: 'black',
                fontSize: 24,
                fontFamily: 'Oswald',
                fontWeight: '600',
                wordWrap: 'break-word'
              }}>
                Destinations Explored...
              </div>
            </div>
          </motion.div>
          {/* Testimonial Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="ml-[450px] mt-8"
            style={{ width: 717, height: 126, position: 'relative' }}
          >
            {/* Avatar and Testimonial Container */}
            <div style={{ width: 274, height: 126, left: -40, top: 0, position: 'absolute', overflow: 'hidden' }}>
              {/* Avatar Image */}
              <div style={{ left: 50, top: 0, position: 'absolute' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', backgroundColor: '#F36E20', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>TP</span>
                </div>
              </div>
            {/* Author Name */}
            <div data-layer="Text" 
            className="Text" 
            style={{
              position: 'absolute',
              top: 50,
              left: -70,
              width: 300, 
              textAlign: 'center', 
              color: '#F36E20', 
              fontSize: 24, 
              fontFamily: 'Oswald', 
              fontWeight: '600', 
              lineHeight: '36px', 
              wordWrap: 'break-word'
              }}>
              Emily Johnson
              </div>
              <div data-layer="Text" 
              className="Text" 
              style={{
                position: 'absolute',
                top: 80,
                left: -70,
                width: 300, 
                textAlign: 'center', 
                color: '#232323', 
                fontSize: 16, 
                fontFamily: 'Bebas Neue', 
                fontWeight: '400', 
                lineHeight: '24px', 
                wordWrap: 'break-word'
                }}>
                  Travel Blogger, Wanderlust</div>
            </div>

            {/* Testimonial Text */}
            <div style={{ width: 500, left: 140, top: 7, position: 'absolute' }}>
              <p style={{
                color: '#232323',
                fontSize: 18,
                fontFamily: 'Oswald',
                fontWeight: '300',
                lineHeight: '28px',
                //fontStyle: 'italic',
                margin: 0
              }}>
                "Travel Professor completely changed how I see travel. Instead of rushing through sights, I learned to savor every moment and connect with the places I visit."
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Adventure Card Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="absolute"
        style={{
          left: 555,
          top: 650,
          width: 720,
          height: 205,
          position: 'relative',
          //background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
          overflow: 'hidden',
          borderRadius: 20
        }}
      >
        {/* Card Content */}
        <div 
          style={{
            width: 420,
            left: 270,
            top: 0,
            position: 'absolute',
            textAlign: 'center',
            color: '#1C1B1E',
            fontSize: 24,
            fontFamily: 'Oswald',
            fontWeight: '600',
            wordWrap: 'break-word'
          }}
        >
          Ready to Start Your Adventure?
        </div>

        {/* Explore Button */}
        <div 
          className="cursor-pointer hover:scale-105 transition-transform duration-300"
          style={{
            width: 230,
            height: 54,
            left: 365,
            top: 50,
            position: 'absolute',
            background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
            boxShadow: '7px 6px 13px rgba(255, 255, 255, 0.20)',
            borderRadius: 5
          }}
        >
          <div 
            style={{
              width: 230,
              height: 54,
              left: 0,
              top: 0,
              position: 'absolute',
              overflow: 'hidden',
              borderRadius: 4,
              outline: '1px #F77A40 solid',
              outlineOffset: '-1px'
            }}
          >
            <div 
              style={{
                width: 2,
                height: 2,
                left: 114,
                top: 26,
                position: 'absolute',
                background: 'linear-gradient(180deg, rgba(247, 122, 64, 0) 0%, rgba(244, 185, 67, 0) 100%)',
                borderRadius: 9999
              }} 
            />
            <div 
              style={{
                left: 9,
                top: 19,
                position: 'absolute',
                textAlign: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                color: 'white',
                fontSize: 20,
                fontFamily: 'Urbanist',
                fontWeight: '600',
                lineHeight: '16px',
                wordWrap: 'break-word'  
              }}
            >
              Explore Upcoming Trips
            </div>
          </div>
        </div>



      </motion.div>
    </section>
  );
};

export default WhyTravelProfessor; 