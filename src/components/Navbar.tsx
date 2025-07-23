import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const isLandingPage = location.pathname === '/landing';
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const getIndicatorStyles = (path: string) => {
    if (isActive(path)) {
      switch (path) {
        case '/': return { left: '7px', width: '40px' }; // Home
        case '/destinations': return { left: '130px', width: '40px' }; // Destination
        case '/packages': return { left: '270px', width: '40px' }; // Package
        case '/blog': return { left: '377.5px', width: '40px' }; // Blog
        case '/about': return { left: '485px', width: '40px' }; // About Us
        case '/contact': return { }; // Contact
        default: return { left: '9px', width: '40px' };
      }
    }
    return {};
  };

  const getTextColor = (path: string) => {
    if (isLandingPage && !isScrolled) {
      return isActive(path) ? 'text-white font-semibold' : 'text-white opacity-65';
    }
    return isActive(path) ? 'text-[#2E2E2E] font-semibold' : 'text-[#2E2E2E] opacity-65';
  };

  return (
    <motion.nav 
      className={`fixed w-full h-[80px] z-50 transition-all duration-800 ease-in-out transform ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto h-full flex items-center justify-between px-9" style={{ gap: '60px' }}>
        {/* Logo */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link to="/" className="font-oswald text-[40px] font-semibold">
            <span className={isLandingPage && !isScrolled ? "text-white" : "text-[#3E3E3E]"}>TRAVEL </span>
            <span style={{ 
                background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>PROFESSOR.</span>
          </Link>
        </motion.div>

        {/* Menu */}
        <motion.div 
          className="flex items-center gap-12 relative"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Link 
              to="/" 
              className={`text-[18px] font-poppins ${getTextColor('/')}`}
            >
              Home
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Link 
              to="/destinations" 
              className={`text-[18px] font-poppins ${getTextColor('/destinations')}`}
            >
              Destination
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Link 
              to="/packages" 
              className={`text-[18px] font-poppins ${getTextColor('/packages')}`}
            >
              Package
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Link 
              to="/blog" 
              className={`text-[18px] font-poppins ${getTextColor('/blog')}`}
            >
              Blog
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Link 
              to="/about" 
              className={`text-[18px] font-poppins ${getTextColor('/about')}`}
            >
              About Us
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Link 
              to="/contact" 
              className="text-[18px] font-poppins text-white px-6 py-2 rounded-2xl transition-all"
              style={{
                background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                fontWeight: '500'
              }}
            >
              Contact
            </Link>
          </motion.div>

          {/* Active Indicator */}
          {Object.entries({
            '/': null,
            '/destinations': null,
            '/packages': null,
            '/blog': null,
            '/about': null,
            '/contact': null
          }).map(([path]) => {
            const styles = getIndicatorStyles(path);
            return isActive(path) && (
              <motion.div 
                key={path}
                className={`absolute h-[3px] rounded-[3px] bottom-[-2px] ${
                  isLandingPage && !isScrolled ? 'bg-white' : 'bg-primary'
                }`}
                style={{
                  left: styles.left,
                  width: styles.width
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            );
          })}
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 