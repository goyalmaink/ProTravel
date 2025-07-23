import React from 'react';
import { motion } from 'framer-motion';

const QuickServices: React.FC = () => {
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: "0 8px 20px rgba(247, 122, 64, 0.3)"
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.div 
      className="w-full h-[75vh] mt-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2 
        className="text-[36px] font-bebas-neue ml-10 mt-8"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <span className="text-black">Quick </span>
        <span
        style={{
          background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>Services</span>
      </motion.h2>

      <motion.div 
        className="flex justify-between mt-6 mx-[26px]"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {/* Trip Planning Card */}
        <motion.div 
          className="relative w-[260px] h-[323px]"
          variants={cardVariants}
          whileHover={{ 
            y: -10,
            transition: { duration: 0.3 }
          }}
        >
          <motion.div 
            className="absolute w-[260px] h-[323px] left-0 top-0 bg-white rounded-[20px] border-2 border-[#F77A40]"
            whileHover={{ 
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div 
            className="absolute w-[260px] left-0 top-[15px] text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="text-[26px] font-oswald font-semibold text-[#3E3E3E]">Trip Planning </span>
            <span className="text-[26px] font-oswald font-semibold"
            style={{
              background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Consultation</span>
          </motion.div>
          <motion.div 
            className="absolute w-[227px] left-[16px] top-[115px] text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-black text-[15px] font-poppins font-semibold leading-[27px]">Free 30-minute call<br /></span>
            <span className="text-black/65 text-[15px] font-poppins leading-[27px]">Get expert advice on destinations, timing, and budget planning.</span>
          </motion.div>
          <motion.div 
            className="absolute w-[103px] h-[43px] left-[77px] top-[240px] rounded-[16px] flex justify-center items-center cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
              fontWeight: '500'
            }}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            transition={{ duration: 0.2 }}
          >
            <div className="text-white text-[15px] font-poppins font-medium">Book a Call</div>
          </motion.div>
        </motion.div>

        {/* Custom Itinerary Card */}
        <motion.div 
          className="relative w-[260px] h-[323px] ml-[64px]"
          variants={cardVariants}
          whileHover={{ 
            y: -10,
            transition: { duration: 0.3 }
          }}
        >
          <motion.div 
            className="absolute w-[260px] h-[323px] left-0 top-0 bg-white rounded-[20px] border-2 border-[#F77A40]"
            whileHover={{ 
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div 
            className="absolute w-[260px] left-0 top-[30px] text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-[26px] font-oswald font-semibold text-[#3E3E3E]">Custom </span>
            <span className="text-[26px] font-oswald font-semibold"
            style={{
              background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Itinerary</span>
          </motion.div>
          <motion.div 
            className="absolute w-[227px] left-[16px] top-[115px] text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-black text-[15px] font-poppins font-semibold leading-[27px]">Tailored just for you<br /></span>
            <span className="text-black/65 text-[15px] font-poppins leading-[27px]">Tell us your preferences and we'll create a personalized trip plan.</span>
          </motion.div>
          <motion.div 
            className="absolute w-[141px] h-[43px] left-[60px] top-[240px] rounded-[16px] flex justify-center items-center cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
              fontWeight: '500'
            }}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            transition={{ duration: 0.2 }}
          >
            <div className="text-white text-[15px] font-poppins font-medium">Request Itinerary</div>
          </motion.div>
        </motion.div>

        {/* Emergency Support Card */}
        <motion.div 
          className="relative w-[260px] h-[323px] ml-[64px]"
          variants={cardVariants}
          whileHover={{ 
            y: -10,
            transition: { duration: 0.3 }
          }}
        >
          <motion.div 
            className="absolute w-[260px] h-[323px] left-0 top-0 bg-white rounded-[20px] border-2 border-[#F77A40]"
            whileHover={{ 
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div 
            className="absolute w-[260px] left-0 top-[30px] text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-[26px] font-oswald font-semibold text-[#3E3E3E]">Emergency </span>
            <span className="text-[26px] font-oswald font-semibold"
            style={{
              background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Support</span>
          </motion.div>
          <motion.div 
            className="absolute w-[227px] left-[16px] top-[115px] text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="text-black text-[15px] font-poppins font-semibold leading-[27px]">For current travelers<br /></span>
            <span className="text-black/65 text-[15px] font-poppins leading-[27px]">24/7 assistance for travelers currently on our trips.</span>
          </motion.div>
          <motion.div 
            className="absolute w-[227px] left-[16px] top-[195px] text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-[15px] font-poppins leading-[27px]"
            style={{
              background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Emergency:</span>
            <span className="text-black text-[15px] font-poppins leading-[27px]"> +91-XXXXXXXXXX</span>
          </motion.div>
          <motion.div 
            className="absolute w-[103px] h-[43px] left-[77px] top-[240px] rounded-[16px] flex justify-center items-center cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
              fontWeight: '500'
            }}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            transition={{ duration: 0.2 }}
          >
            <div className="text-white text-[15px] font-poppins font-medium">Contact</div>
          </motion.div>
        </motion.div>

        {/* Group Booking Card */}
        <motion.div 
          className="relative w-[260px] h-[323px] ml-[64px]"
          variants={cardVariants}
          whileHover={{ 
            y: -10,
            transition: { duration: 0.3 }
          }}
        >
          <motion.div 
            className="absolute w-[260px] h-[323px] left-0 top-0 bg-white rounded-[20px] border-2 border-[#F77A40]"
            whileHover={{ 
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div 
            className="absolute w-[260px] left-0 top-[30px] text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="text-[26px] font-oswald font-semibold text-[#3E3E3E]">Group </span>
            <span className="text-[26px] font-oswald font-semibold"
            style={{
              background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Booking</span>
          </motion.div>
          <motion.div 
            className="absolute w-[227px] left-[16px] top-[110px] text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-black text-[15px] font-poppins font-semibold leading-[27px]">Special rates for groups   </span>
            <span className="text-black/65 text-[15px] font-poppins leading-[27px]">Planning a trip with friends, family, or colleagues? Get special group discounts.</span>
          </motion.div>
          <motion.div 
            className="absolute w-[116px] h-[43px] left-[72px] top-[240px] rounded-[16px] flex justify-center items-center cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
              fontWeight: '500'
            }}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            transition={{ duration: 0.2 }}
          >
            <div className="text-white text-[15px] font-poppins font-medium">Group Inquiry</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default QuickServices; 