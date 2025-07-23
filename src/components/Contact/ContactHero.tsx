import React from 'react';
import { motion } from 'framer-motion';

const ContactHero: React.FC = () => {
  return (
    
    <motion.div 
      className="w-full pt-[100px] pb-8 bg-[#FFECCE]"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
          <motion.p 
          className="text-[24px] mb-8 font-poppins font-normal leading-[30px] mt-3 text-black text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Our travel experts are here to help you create unforgettable memories.
        </motion.p>
      <div className="text-center">
        <motion.div 
          data-layer="Let's plan Your next adventure together" 
          className="LetSPlanYourNextAdventureTogether" 
          style={{
            width: 827, 
            height: 191, 
            textAlign: 'center',
            margin: '0 auto'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span style={{
            color: '#2E2E2E', 
            fontSize: 120, 
            fontFamily: 'Bebas Neue', 
            fontWeight: '400', 
            lineHeight: '99px', 
            wordWrap: 'break-word'
          }}>
            Let's plan Your next adventure 
          </span>
          <span style={{
            background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: 120, 
            fontFamily: 'Bebas Neue', 
            fontWeight: '400', 
            lineHeight: '99px', 
            wordWrap: 'break-word'
          }}>
            together
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactHero; 