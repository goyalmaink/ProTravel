import React from 'react';
import { motion } from 'framer-motion';

const ContactCards: React.FC = () => {
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
      className="ml-14 w-[600px] grid grid-cols-2 gap-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Email Card */}
      <motion.div 
        className="w-full bg-white rounded-[20px] border-2 border-[#F77A40] p-6"
        variants={cardVariants}
        whileHover={{ 
          y: -5,
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.h3 
          className="text-[26px] font-oswald text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <span className="text-[#3E3E3E]">Email</span>
          <span 
          style={{ 
            background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}> Us</span>
        </motion.h3>
        <motion.div 
          className="text-center mt-3"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-black text-[15px] font-semibold font-poppins leading-[32px]">
            Detailed trip planning
          </p>
          <a href="mailto:hello@travelprofessor.in" className="text-black/65 text-[15px] font-poppins underline leading-[32px] block hover:text-primary transition-colors duration-300">
            hello@travelprofessor.in
          </a>
          <p className="text-black/65 text-[15px] font-poppins leading-[32px]">
            Talk to us and find what you're exactly looking for.
          </p>
        </motion.div>
        <motion.p 
          className="text-[15px] font-poppins leading-[40px] text-center mt-2"
          style={{ 
            background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
        >
          We respond within 4 hours!
        </motion.p>
        <motion.button 
          className="w-[123px] h-[40px] rounded-[16px] flex items-center justify-center gap-1 mx-auto mt-4"
          style={{
            background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
            fontWeight: '500'
          }}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          transition={{ duration: 0.2 }}
        >
          <span className="text-white text-[20px] font-oswald font-semibold">📧</span>
          <span className="text-white text-[15px] font-poppins font-medium">Mail</span>
        </motion.button>
      </motion.div>

      {/* WhatsApp Card */}
      <motion.div 
        className="w-full bg-white rounded-[20px] border-2 border-[#F77A40] p-6"
        variants={cardVariants}
        whileHover={{ 
          y: -5,
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.h3 
          className="text-[26px] font-oswald text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <span className="text-[#3E3E3E]">WhatsApp</span>
          <span 
          style={{ 
            background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}> Us</span>
        </motion.h3>
        <motion.div 
          className="text-center mt-3"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-black text-[15px] font-semibold font-poppins leading-[32px]">
            Quick responses guaranteed
          </p>
          <p className="text-black/65 text-[15px] font-poppins leading-[32px]">
            +91-XXXXXXXXXX<br />
            Available 24/7 for urgent queries.
          </p>
        </motion.div>
        <motion.p 
          className="text-[15px] font-poppins leading-[40px] text-center mt-2"
          style={{ 
            background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Drop us a Hey!
        </motion.p>
        <motion.button 
          className="w-[123px] h-[40px] rounded-[16px] flex items-center justify-center gap-1 mx-auto mt-4"
          style={{
            background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
            fontWeight: '500'
          }}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          transition={{ duration: 0.2 }}
        >
          <span className="text-white text-[20px] font-oswald font-semibold">💬</span>
          <span className="text-white text-[15px] font-poppins font-medium">Message</span>
        </motion.button>
      </motion.div>

      {/* Call Card */}
      <motion.div 
        className="w-full bg-white rounded-[20px] border-2 border-[#F77A40] p-6"
        variants={cardVariants}
        whileHover={{ 
          y: -5,
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.h3 
          className="text-[26px] font-oswald text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-[#3E3E3E]">Call</span>
          <span 
          style={{ 
            background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}> Us</span>
        </motion.h3>
        <motion.div 
          className="text-center mt-3"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-black text-[15px] font-semibold font-poppins leading-[32px]">
            Speak with our travel experts
          </p>
          <p className="text-black/65 text-[15px] font-poppins leading-[32px]">
            +91-XXXXXXXXXX
          </p>
          <p className="leading-[32px]">
            <span className="text-[15px] font-poppins"
            style={{ 
              background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
            >Monday-Saturday:<br /></span>
            <span className="text-black/65 text-[15px] font-poppins"> 9:00 AM - 7:00 PM</span>
          </p>
          <p className="leading-[32px]">
            <span className="text-[15px] font-poppins"
            style={{ 
              background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
            >Sunday:<br /></span>
            <span className="text-black/65 text-[15px] font-poppins"> 10:00 AM - 5:00 PM</span>
          </p>
        </motion.div>
        <motion.button 
          className="w-[123px] h-[40px] rounded-[16px] flex items-center justify-center gap-1 mx-auto mt-4"
          style={{
            background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
            fontWeight: '500'
          }}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          transition={{ duration: 0.2 }}
        >
          <span className="text-white text-[20px] font-oswald font-semibold">📞</span>
          <span className="text-white text-[15px] font-poppins font-medium">Call</span>
        </motion.button>
      </motion.div>

      {/* Visit Card */}
      <motion.div 
        className="w-full bg-white rounded-[20px] border-2 border-[#F77A40] p-6"
        variants={cardVariants}
        whileHover={{ 
          y: -5,
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.h3 
          className="text-[26px] font-oswald text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-[#3E3E3E]">Visit</span>
          <span 
          style={{ 
            background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}> Us</span>
        </motion.h3>
        <motion.div 
          className="text-center mt-3"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-black text-[15px] font-semibold font-poppins leading-[32px]">
            Meet us in person
          </p>
          <p className="text-black/65 text-[15px] font-poppins leading-[32px]">
            Travel Professor Headquarters, Connaught Place<br />
            New Delhi - 110001
          </p>
        </motion.div>
        <motion.p 
          className="text-[15px] font-poppins leading-[40px] text-center mt-2"
          style={{ 
            background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          viewport={{ once: true }}
        >
          We look forward to see you!
        </motion.p>
        <motion.button 
          className="w-[123px] h-[40px] rounded-[16px] flex items-center justify-center gap-1 mx-auto mt-8"
          style={{
            background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
            fontWeight: '500'
          }}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          transition={{ duration: 0.2 }}
        >
          <span className="text-white text-[20px] font-oswald font-semibold">📍</span>
          <span className="text-white text-[15px] font-poppins font-medium">Location</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ContactCards; 