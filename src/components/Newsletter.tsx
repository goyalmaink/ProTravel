import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && isValidEmail) {
      setIsSubscribed(true);
      setEmail('');
      setIsValidEmail(false);
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const DottedLine = () => (
    <motion.div 
      className="flex items-center gap-2"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
    >
      {Array(12).fill(null).map((_, i) => (
        <motion.div 
          key={i} 
          className="w-2 h-2 rounded-full bg-primary/30"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
          viewport={{ once: true }}
        />
      ))}
    </motion.div>
  );

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
    <>
      <motion.section 
        className="bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={itemVariants}
          >
            <motion.h2 
              className="mb-4" 
              data-layer="Sign up to our Newsletter"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="text-[64px] mt-4 font-bebas-neue font-normal">Sign up to our </span>
              <span className="text-[64px] font-bebas-neue font-normal"
                                      style={{ 
                                        background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text'
                                      }}>Newsletter</span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 text-lg mb-8"
              variants={itemVariants}
            >
              Learn, Build, Reimagine and discover unheard stories about fairy destinations,
              <br />all at the tip of your finger!
            </motion.p>

            <motion.div 
              className="relative"
              variants={itemVariants}
            >
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <motion.input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter Email Address"
                  className={`
                    w-[422px] h-[40px] px-4
                    bg-[#F6F8FA]
                    shadow-[7px_5px_18.9px_rgba(0,0,0,0.20)]
                    rounded-[16px]
                    outline outline-1 outline-primary
                    text-[#1E1E1E]/30 text-[20px] font-poppins font-normal
                    placeholder:text-[#1E1E1E]/30 placeholder:text-[20px] placeholder:font-poppins placeholder:font-normal
                    focus:outline focus:outline-1 focus:outline-primary
                    text-center
                    ${email && !isValidEmail ? 'outline-red-500' : 'outline-primary'}
                  `}
                  whileFocus={{ 
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(247, 122, 64, 0.3)"
                  }}
                  transition={{ duration: 0.2 }}
                />
                <AnimatePresence>
                  {email && !isValidEmail && (
                    <motion.p 
                      className="text-red-500 text-sm mt-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      Please enter a valid email address
                    </motion.p>
                  )}
                </AnimatePresence>
                <motion.button
                  type="submit"
                  whileHover={{ 
                    scale: isValidEmail ? 1.05 : 1,
                    boxShadow: isValidEmail ? "0 10px 25px rgba(247, 122, 64, 0.3)" : "none"
                  }}
                  whileTap={{ scale: isValidEmail ? 0.95 : 1 }}
                  className={`mt-6 px-8 py-3 rounded-full transition-colors duration-300 ${
                    isValidEmail
                      ? 'text-white hover:opacity-90'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  style={{
                    background: isValidEmail 
                      ? 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)'
                      : undefined
                  }}
                  disabled={!isValidEmail}
                >
                  Get In Touch
                </motion.button>
              </form>

              <div className="flex justify-between items-center mt-8">
                <DottedLine />
                <DottedLine />
              </div>

              <AnimatePresence>
                {isSubscribed && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.9 }}
                    className="absolute -bottom-12 left-0 right-0 text-green-500 text-sm"
                  >
                    Thanks for subscribing to our newsletter!
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Instagram Section */}
      <motion.section 
        className="relative w-[1152px] h-[calc(100vh-80px)] mx-auto overflow-hidden" 
        data-layer="Frame 127"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2 
          className="absolute left-[373px] top-[40px] text-[51px] font-bebas-neue font-normal bg-gradient-to-r from-[#AD61FF] to-[#FF238A] text-transparent bg-clip-text" 
          data-layer="Follow Us on instagram"
          variants={itemVariants}
        >
          FOLLOW US ON INSTAGRAM
        </motion.h2>

        <motion.div
          className="absolute w-[1050px] h-[520px] left-[51px] top-[102px] overflow-hidden"
          data-layer="Frame 72"
          variants={itemVariants}
        >
          {/* Center Image */}
          <motion.div
            className="w-[288px] h-[440px] absolute left-[381px] top-[40px] bg-[#D9D9D9] cursor-pointer"
            data-layer="Rectangle 118"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          {/* Left Images */}
          <motion.div
            className="w-[248px] h-[376px] absolute left-[89px] top-[72px] bg-[#D9D9D9] cursor-pointer"
            data-layer="Rectangle 120"
            initial={{ scale: 0.8, opacity: 0, x: -50 }}
            whileInView={{ scale: 1, opacity: 1, x: 0 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
            }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          <motion.div
            className="w-[216px] h-[312px] absolute left-[-171px] top-[104px] bg-[#D9D9D9] cursor-pointer"
            data-layer="Rectangle 121"
            initial={{ scale: 0.8, opacity: 0, x: -100 }}
            whileInView={{ scale: 1, opacity: 1, x: 0 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
            }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          {/* Right Images */}
          <motion.div
            className="w-[248px] h-[376px] absolute left-[713px] top-[72px] bg-[#D9D9D9] cursor-pointer"
            data-layer="Rectangle 119"
            initial={{ scale: 0.8, opacity: 0, x: 50 }}
            whileInView={{ scale: 1, opacity: 1, x: 0 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
            }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          <motion.div
            className="w-[216px] h-[312px] absolute left-[1005px] top-[104px] bg-[#D9D9D9] cursor-pointer"
            data-layer="Rectangle 122"
            initial={{ scale: 0.8, opacity: 0, x: 100 }}
            whileInView={{ scale: 1, opacity: 1, x: 0 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
            }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </motion.div>
      </motion.section>
    </>
  );
};

export default Newsletter; 