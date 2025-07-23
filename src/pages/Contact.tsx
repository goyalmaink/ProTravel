import React from 'react';
import { motion } from 'framer-motion';
import ContactHero from '../components/Contact/ContactHero';
import ContactCards from '../components/Contact/ContactCards';
import ContactForm from '../components/Contact/ContactForm';
import QuickServices from '../components/Contact/QuickServices';

const Contact: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
      className="w-full min-h-screen bg-[#FFECCE]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <ContactHero />
      </motion.div>
      <motion.div 
        className="container mx-auto px-4"
        variants={itemVariants}
      >

        <motion.div 
          className="flex gap-8"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <ContactCards />
          <ContactForm />
        </motion.div>
        <motion.div variants={itemVariants}>
          <QuickServices />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact; 