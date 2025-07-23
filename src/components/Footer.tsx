import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'Destinations', href: '#' },
    { name: 'Packages', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'FAQs', href: '#' }
  ];

  const destinations = [
    { name: 'India', href: '#' },
    { name: 'Thailand', href: '#' },
    { name: 'Dubai', href: '#' },
    { name: 'Turkey', href: '#' },
    { name: 'Italy', href: '#' },
    { name: 'More', href: '#' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: '/images/foot/facebook.jpg', href: '#' },
    { name: 'Instagram', icon: '/images/foot/instagram.jpg', href: '#' },
    { name: 'LinkedIn', icon: '/images/foot/linkedin.jpg', href: '#' },
    { name: 'YouTube', icon: '/images/foot/youtube.jpg', href: '#' }
  ];

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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
    <motion.footer 
      className="relative bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-8 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-12 gap-y-10 mb-12">
          {/* Quick Links */}
          <motion.div 
            className="transform transition-all duration-300 hover:translate-y-[-5px]"
            variants={itemVariants}
          >
            <h3 className="font-medium text-xl mb-6"
            style={{
              background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a 
                    href={link.href} 
                    className="text-gray-600 hover:text-primary transition-colors duration-300 inline-block hover:translate-x-2 transform text-[15px]"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Destinations */}
          <motion.div 
            className="transform transition-all duration-300 hover:translate-y-[-5px]"
            variants={itemVariants}
          >
            <h3 className="font-medium text-xl mb-6"
            style={{
              background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Destinations</h3>
            <ul className="space-y-3">
              {destinations.map((destination, index) => (
                <motion.li 
                  key={destination.name}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a 
                    href={destination.href} 
                    className="text-gray-600 hover:text-primary transition-colors duration-300 inline-block hover:translate-x-2 transform text-[15px]"
                  >
                    {destination.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="transform transition-all duration-300 hover:translate-y-[-5px]"
            variants={itemVariants}
          >
            <h3 className="font-medium text-xl mb-6"
            style={{
              background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Contact Information</h3>
            <div className="space-y-4">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-600 mb-1 text-[15px]">Email:</p>
                <a 
                  href="mailto:hello@travelprofessor.in" 
                  className="text-gray-800 hover:text-primary transition-colors duration-300 group inline-flex items-center text-[15px]"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    hello@travelprofessor.in
                  </span>
                </a>
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-600 mb-1 text-[15px]">Phone:</p>
                <a 
                  href="tel:+91XXXXXXXXX" 
                  className="text-gray-800 hover:text-primary transition-colors duration-300 group inline-flex items-center text-[15px]"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    +91-XXXXXXXXX
                  </span>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Legal */}
          <motion.div 
            className="transform transition-all duration-300 hover:translate-y-[-5px]"
            variants={itemVariants}
          >
            <h3 className="font-medium text-xl mb-6"
            style={{
              background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Legal</h3>
            <ul className="space-y-3">
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-primary transition-colors duration-300 inline-block hover:translate-x-2 transform text-[15px]"
                >
                  Privacy Policy
                </a>
              </motion.li>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-primary transition-colors duration-300 inline-block hover:translate-x-2 transform text-[15px]"
                >
                  Terms & Conditions
                </a>
              </motion.li>
            </ul>
          </motion.div>
          </div>
        </div>

        {/* Social Links */}
      <motion.div 
        className="w-full h-[48px] flex justify-center items-center gap-8"
        style={{
          background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
        }}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {/* Facebook */}
        <motion.div 
          className="cursor-pointer" 
          data-layer="Brand/facebook"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6.29985H15.6244H14.9936C14.4504 6.29985 14.0101 6.74015 14.0101 7.2833V10.7337H18L17.4156 14.5322H14.0101V21.5H9.62255V14.5322H6V10.7337H9.57575L9.62255 7.12815L9.6159 6.47355C9.59395 4.30109 11.3372 2.52217 13.5097 2.5002C13.5229 2.50007 13.5362 2.5 13.5494 2.5H18V6.29985Z" fill="#1E1E1E"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M13.5494 3.25L13.5173 3.25016C11.7591 3.26794 10.3481 4.70767 10.3659 6.46593C10.3659 6.46592 10.3659 6.46594 10.3659 6.46593L10.3725 7.12053L10.3725 7.13788L10.3257 10.7434C10.3204 11.1538 9.98617 11.4837 9.57575 11.4837H6.75V13.7822H9.62255C10.0368 13.7822 10.3726 14.1179 10.3726 14.5322V20.75H13.2601V14.5322C13.2601 14.1179 13.5959 13.7822 14.0101 13.7822H16.7722L17.1258 11.4837H14.0101C13.5959 11.4837 13.2601 11.1479 13.2601 10.7337V7.2833C13.2601 6.32596 14.0362 5.54985 14.9936 5.54985H17.25V3.25H13.5494Z" fill="#1E1E1E"/>
          </svg>
        </motion.div>

        {/* Instagram */}
        <motion.div 
          className="cursor-pointer" 
          data-layer="Brand/instagram"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 3H7C4.79086 3 3 4.79086 3 7V17C3 19.2092 4.79086 21 7 21H17C19.2092 21 21 19.2092 21 17V7C21 4.79086 19.2092 3 17 3Z" fill="#1E1E1E"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M2.25 7C2.25 4.37665 4.37665 2.25 7 2.25H17C19.6234 2.25 21.75 4.37665 21.75 7V17C21.75 19.6234 19.6234 21.75 17 21.75H7C4.37665 21.75 2.25 19.6234 2.25 17V7ZM7 3.75C5.20507 3.75 3.75 5.20507 3.75 7V17C3.75 18.7949 5.20507 20.25 7 20.25H17C18.7949 20.25 20.25 18.7949 20.25 17V7C20.25 5.20507 18.7949 3.75 17 3.75H7Z" fill="#1E1E1E"/>
            <path d="M12 16C14.2092 16 16 14.2092 16 12C16 9.79085 14.2092 8 12 8C9.79085 8 8 9.79085 8 12C8 14.2092 9.79085 16 12 16Z" fill="#F77A40"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M7.25 12C7.25 9.37664 9.37664 7.25 12 7.25C14.6234 7.25 16.75 9.37664 16.75 12C16.75 14.6234 14.6234 16.75 12 16.75C9.37664 16.75 7.25 14.6234 7.25 12ZM12 8.75C10.2051 8.75 8.75 10.2051 8.75 12C8.75 13.7949 10.2051 15.25 12 15.25C13.7949 15.25 15.25 13.7949 15.25 12C15.25 10.2051 13.7949 8.75 12 8.75Z" fill="#F6F8FA"/>
            <path d="M17.5 5.75C17.9142 5.75 18.25 6.08577 18.25 6.5C18.25 6.91423 17.9142 7.25 17.5 7.25C17.0858 7.25 16.75 6.91423 16.75 6.5C16.75 6.08577 17.0858 5.75 17.5 5.75Z" fill="#F6F8FA" stroke="#F77A40" strokeWidth="0.5"/>
          </svg>
            </motion.div>

        {/* LinkedIn */}
        <motion.div 
          className="cursor-pointer" 
          data-layer="Brand/linkedin"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 6C5.60457 6 6.5 5.10457 6.5 4C6.5 2.89543 5.60457 2 4.5 2C3.39543 2 2.5 2.89543 2.5 4C2.5 5.10457 3.39543 6 4.5 6Z" fill="#F77A40"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M4.5 2.75C3.80964 2.75 3.25 3.30964 3.25 4C3.25 4.69036 3.80964 5.25 4.5 5.25C5.19036 5.25 5.75 4.69036 5.75 4C5.75 3.30964 5.19036 2.75 4.5 2.75ZM1.75 4C1.75 2.48122 2.98122 1.25 4.5 1.25C6.01878 1.25 7.25 2.48122 7.25 4C7.25 5.51878 6.01878 6.75 4.5 6.75C2.98122 6.75 1.75 5.51878 1.75 4Z" fill="#1E1E1E"/>
            <path d="M6.5 9H2.5V21.5H6.5V9Z" fill="#1E1E1E"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M1.75 9C1.75 8.58579 2.08579 8.25 2.5 8.25H6.5C6.91421 8.25 7.25 8.58579 7.25 9V21.5C7.25 21.9142 6.91421 22.25 6.5 22.25H2.5C2.08579 22.25 1.75 21.9142 1.75 21.5V9ZM3.25 9.75V20.75H5.75V9.75H3.25Z" fill="#1E1E1E"/>
            <path d="M10.5 13.75V21.5H14V14.5C14 13.25 14.75 12.25 16 12.25C17.25 12.25 18 13.5 18 14.5V21.5H21.5V13.75C21.5 12.25 19.75 9 16 9C12.25 9 10.5 12.25 10.5 13.75Z" fill="#1E1E1E"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M11.288 10.3089C12.3169 9.17353 13.8859 8.25 16 8.25C18.1141 8.25 19.6831 9.17353 20.712 10.3089C21.7134 11.4138 22.25 12.7737 22.25 13.75V21.5C22.25 21.9142 21.9142 22.25 21.5 22.25H18C17.5858 22.25 17.25 21.9142 17.25 21.5V14.5C17.25 14.1705 17.1205 13.7707 16.879 13.4634C16.647 13.1681 16.3497 13 16 13C15.5924 13 15.303 13.1553 15.1038 13.3907C14.894 13.6386 14.75 14.0199 14.75 14.5V21.5C14.75 21.9142 14.4142 22.25 14 22.25H10.5C10.0858 22.25 9.75 21.9142 9.75 21.5V13.75C9.75 12.7737 10.2866 11.4138 11.288 10.3089ZM12.3995 11.3161C11.5884 12.2112 11.25 13.2263 11.25 13.75V20.75H13.25V14.5C13.25 13.7301 13.481 12.9864 13.9587 12.4218C14.447 11.8447 15.1576 11.5 16 11.5C16.9003 11.5 17.603 11.9569 18.0585 12.5366C18.5045 13.1043 18.75 13.8295 18.75 14.5V20.75H20.75V13.75C20.75 13.2263 20.4116 12.2112 19.6005 11.3161C18.8169 10.4515 17.6359 9.75 16 9.75C14.3641 9.75 13.1831 10.4515 12.3995 11.3161Z" fill="#1E1E1E"/>
          </svg>
          </motion.div>

        {/* YouTube */}
        <motion.div 
          className="cursor-pointer" 
          data-layer="Brand/youtube"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5328 5.2072C8.3044 5.06905 10.4601 5 12 5C13.54 5 15.6965 5.0691 18.4695 5.20725C19.9706 5.28205 21.1846 6.45595 21.3098 7.9536C21.4366 9.4706 21.5 10.8067 21.5 11.9619C21.5 13.1313 21.4351 14.486 21.3051 16.0261C21.1803 17.5051 19.9926 18.6706 18.5114 18.7675C16.1407 18.9225 13.9703 19 12 19C10.03 19 7.8603 18.9225 5.4909 18.7675C4.01024 18.6707 2.82283 17.5059 2.69742 16.0275C2.56581 14.4759 2.5 13.1207 2.5 11.9619C2.5 10.817 2.56424 9.4805 2.6927 7.9522H2.69271C2.81855 6.45515 4.03235 5.282 5.5328 5.2072Z" fill="#1E1E1E"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M12 5.75C10.4787 5.75 8.33744 5.81833 5.57014 5.95627L5.5328 5.2072L5.57014 5.95627C4.4448 6.01237 3.53445 6.89223 3.44007 8.01502C3.40741 8.40351 3.08256 8.7022 2.69271 8.7022H2.6927V7.9522L2.78624 7.96006L2.6927 7.9522L1.94534 7.88937C1.94544 7.88824 1.94553 7.8871 1.94563 7.88597C1.97989 7.49914 2.30398 7.2022 2.6927 7.2022H2.69271L2.6927 7.9522M18.4695 5.20725L18.4322 5.95632L18.4695 5.20725ZM12 5.75C13.5214 5.75 15.6634 5.81838 18.4322 5.95632L12 5.75ZM1.94563 7.88597C1.94553 7.8871 1.94543 7.88824 1.94534 7.88938C1.81566 9.43206 1.75 10.7904 1.75 11.9619C1.75 13.1476 1.81726 14.5249 1.9501 16.0909C2.10687 17.939 3.59112 19.3949 5.44195 19.516L5.44196 19.516C7.82447 19.6718 10.0108 19.75 12 19.75C13.9895 19.75 16.1766 19.6718 18.5604 19.5159C20.4119 19.3948 21.8964 17.938 22.0524 16.0892C22.1836 14.5343 22.25 13.1578 22.25 11.9619C22.25 10.7805 22.1852 9.42281 22.0572 7.89113L21.3098 7.9536L22.0572 7.89112C21.9007 6.01905 20.3831 4.55168 18.5068 4.45818L18.4736 5.12425L18.5068 4.45818C15.7295 4.31982 13.5586 4.25 12 4.25C10.4416 4.25 8.27136 4.31977 5.49546 4.45813L5.49546 4.45813C3.62102 4.55157 2.10449 6.01628 1.94563 7.88597Z" fill="#1E1E1E"/>
            <path d="M10.5 9.80458V14.203C10.5 14.4397 10.6919 14.6316 10.9285 14.6316C11.0126 14.6316 11.0948 14.6069 11.1649 14.5605L14.4637 12.3803C14.6612 12.2498 14.7154 11.9839 14.5849 11.7864C14.5537 11.7392 14.5135 11.6986 14.4665 11.6671L11.1677 9.44893C10.9713 9.31688 10.705 9.36903 10.5729 9.56548C10.5254 9.63618 10.5 9.71943 10.5 9.80458Z" fill="#F6F8FA"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M9.95052 9.14705C10.3137 8.60691 11.046 8.46343 11.5862 8.82661L14.8848 11.0447C14.8848 11.0446 14.8849 11.0447 14.8848 11.0447C15.0142 11.1316 15.1249 11.2434 15.2106 11.3729C15.5694 11.9159 15.4203 12.6471 14.8772 13.006L11.5786 15.1862C11.5785 15.1862 11.5786 15.1862 11.5786 15.1862C11.3857 15.3137 11.1595 15.3817 10.9285 15.3817C10.2777 15.3817 9.75 14.854 9.75 14.2031V9.80466C9.75 9.57032 9.82005 9.34124 9.95052 9.14705Z" fill="#F77A40"/>
          </svg>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer; 