import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import PlanPayPackSection from '../components/PlanPayPackSection';
import Testimonalslanding from '../components/Testimonalslanding';
import FAQsLanding from '../components/FAQsLanding';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [isNotesExpanded, setIsNotesExpanded] = useState(false);

  // Ref for the next section
  const specialSectionRef = useRef<HTMLDivElement>(null);
  // Framer Motion scroll progress for the special section
  const { scrollYProgress } = useScroll({
    target: specialSectionRef,
    offset: ["start end", "start start"]
  });
  // Animate translateY from 100px to 0, opacity from 0 to 1
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  
  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <div className="fixed inset-0 w-full h-screen overflow-hidden z-1">
        {/* Background Image */}
        <img 
          src="/Landing/bg.jpg" 
          alt="Ladakh Landscape" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.40) 50%, rgba(0, 0, 0, 0) 100%)'
          }}
        />

        {/* Main Content */}
        <div className="relative z-10 w-full h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-20">
            <div className="w-full max-w-4xl">
              {/* Adventure Retreat Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 rounded-full mb-8"
        style={{
                  background: 'rgba(249, 115, 22, 0.20)',
                  border: '1px solid rgba(249, 115, 22, 0.30)'
                }}
              >
                <div className="w-4 h-4 mr-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 16H0V0H16V16Z" stroke="#E5E7EB"/>
                    <path d="M8 1C8.39062 1 8.75312 1.2 8.9625 1.53125L15.7312 12.325C15.9062 12.6031 16 12.925 16 13.2531C16 14.2188 15.2188 15 14.2531 15H1.74688C0.78125 15 0 14.2188 0 13.2531C0 12.925 0.09375 12.6031 0.26875 12.325L7.0375 1.53125C7.24375 1.2 7.60938 1 8 1ZM10.0312 7L8 3.7625L5.52812 7.70312L6.1 8.46562C6.3 8.73125 6.7 8.73125 6.9 8.46562L7.7 7.4C7.8875 7.14687 8.18437 7 8.5 7H10.0312Z" fill="#FB923C"/>
                  </svg>
                </div>
                <span className="text-orange-200 text-sm font-inter font-medium">Adventure Retreat</span>
              </motion.div>

              {/* Main Title */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white text-6xl font-inter font-bold leading-tight mb-6"
              >
                Ladakh Adventure Retreat
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-gray-300 text-xl font-inter font-light mb-12"
              >
                "Where Tranquility Meets Altitude"
              </motion.p>

              {/* Info Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-5 gap-4 mb-12"
              >
                {/* Duration */}
                <div className="bg-white bg-opacity-10 rounded-lg border border-white border-opacity-20 p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-4 mr-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_531_4170)">
                          <path d="M8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0ZM7.25 3.75V8C7.25 8.25 7.375 8.48438 7.58437 8.625L10.5844 10.625C10.9281 10.8562 11.3938 10.7625 11.625 10.4156C11.8562 10.0687 11.7625 9.60625 11.4156 9.375L8.75 7.6V3.75C8.75 3.33437 8.41562 3 8 3C7.58437 3 7.25 3.33437 7.25 3.75Z" fill="#FB923C"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_531_4170">
                            <path d="M0 0H16V16H0V0Z" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
              </div>
                    <span className="text-gray-300 text-sm font-inter">Duration</span>
              </div>
                  <p className="text-white text-base font-inter font-semibold">7 Days</p>
          </div>

                {/* Group Size */}
                <div className="bg-white bg-opacity-10 rounded-lg border border-white border-opacity-20 p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-4 mr-2">
                      <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_531_4178)">
                          <path d="M5.09375 0C5.75679 0 6.39268 0.263392 6.86152 0.732233C7.33036 1.20107 7.59375 1.83696 7.59375 2.5C7.59375 3.16304 7.33036 3.79893 6.86152 4.26777C6.39268 4.73661 5.75679 5 5.09375 5C4.43071 5 3.79482 4.73661 3.32598 4.26777C2.85714 3.79893 2.59375 3.16304 2.59375 2.5C2.59375 1.83696 2.85714 1.20107 3.32598 0.732233C3.79482 0.263392 4.43071 0 5.09375 0ZM16.5938 0C17.2568 0 17.8927 0.263392 18.3615 0.732233C18.8304 1.20107 19.0938 1.83696 19.0938 2.5C19.0938 3.16304 18.8304 3.79893 18.3615 4.26777C17.8927 4.73661 17.2568 5 16.5938 5C15.9307 5 15.2948 4.73661 14.826 4.26777C14.3571 3.79893 14.0938 3.16304 14.0938 2.5C14.0938 1.83696 14.3571 1.20107 14.826 0.732233C15.2948 0.263392 15.9307 0 16.5938 0ZM0.59375 9.33438C0.59375 7.49375 2.0875 6 3.92812 6H5.2625C5.75937 6 6.23125 6.10938 6.65625 6.30312C6.61562 6.52812 6.59688 6.7625 6.59688 7C6.59688 8.19375 7.12187 9.26562 7.95 10C7.94375 10 7.9375 10 7.92812 10H1.25937C0.89375 10 0.59375 9.7 0.59375 9.33438ZM13.2594 10C13.2531 10 13.2469 10 13.2375 10C14.0688 9.26562 14.5906 8.19375 14.5906 7C14.5906 6.7625 14.5688 6.53125 14.5312 6.30312C14.9563 6.10625 15.4281 6 15.925 6H17.2594C19.1 6 20.5938 7.49375 20.5938 9.33438C20.5938 9.70312 20.2938 10 19.9281 10H13.2594ZM7.59375 7C7.59375 6.20435 7.90982 5.44129 8.47243 4.87868C9.03504 4.31607 9.7981 4 10.5938 4C11.3894 4 12.1525 4.31607 12.7151 4.87868C13.2777 5.44129 13.5938 6.20435 13.5938 7C13.5938 7.79565 13.2777 8.55871 12.7151 9.12132C12.1525 9.68393 11.3894 10 10.5938 10C9.7981 10 9.03504 9.68393 8.47243 9.12132C7.90982 8.55871 7.59375 7.79565 7.59375 7ZM4.59375 15.1656C4.59375 12.8656 6.45937 11 8.75937 11H12.4281C14.7281 11 16.5938 12.8656 16.5938 15.1656C16.5938 15.625 16.2219 16 15.7594 16H5.42812C4.96875 16 4.59375 15.6281 4.59375 15.1656Z" fill="#FB923C"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_531_4178">
                            <path d="M0.59375 0H14.5938V16H0.59375V0Z" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm font-inter">Group Size</span>
                  </div>
                  <p className="text-white text-base font-inter font-semibold">Max 15</p>
                </div>

                {/* Price */}
                <div className="bg-white bg-opacity-10 rounded-lg border border-white border-opacity-20 p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-4 mr-2">
                      <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_531_4186)">
                          <path d="M0.1875 2C0.1875 1.44687 0.634375 1 1.1875 1H3.6875C6.17188 1 8.1875 3.01562 8.1875 5.5C8.1875 7.3375 7.0875 8.91563 5.50938 9.61563L7.11562 13.6281C7.32188 14.1406 7.07187 14.7219 6.55937 14.9281C6.04688 15.1344 5.46563 14.8844 5.25938 14.3719L3.50938 10H2.1875V14C2.1875 14.5531 1.74063 15 1.1875 15C0.634375 15 0.1875 14.5531 0.1875 14V9V2ZM2.1875 8H3.6875C5.06875 8 6.1875 6.88125 6.1875 5.5C6.1875 4.11875 5.06875 3 3.6875 3H2.1875V8ZM10.2031 8.5125C10.175 8.7 10.2031 8.78438 10.2156 8.81875C10.2281 8.85313 10.2594 8.9 10.3469 8.97188C10.5719 9.15 10.9312 9.28438 11.5312 9.49687L11.5719 9.5125C12.0719 9.6875 12.7812 9.9375 13.3125 10.3906C13.6094 10.6438 13.8719 10.9719 14.0344 11.4C14.1938 11.8281 14.225 12.2906 14.1531 12.775C14.0219 13.6531 13.5125 14.3156 12.7844 14.6781C12.0938 15.0219 11.2812 15.0688 10.4969 14.9281H10.4906C10.2 14.8719 9.85 14.75 9.575 14.6469C9.3875 14.575 9.18125 14.4937 9.02188 14.4312C8.94375 14.4 8.87813 14.375 8.825 14.3531C8.30937 14.1531 8.05625 13.5719 8.25625 13.0594C8.45625 12.5469 9.03438 12.2906 9.55 12.4906C9.63125 12.5219 9.7125 12.5531 9.79688 12.5875C9.94687 12.6469 10.1031 12.7094 10.2781 12.775C10.5531 12.8781 10.7563 12.9437 10.8625 12.9625C11.3531 13.05 11.6969 12.9875 11.8906 12.8906C12.0469 12.8125 12.1406 12.7031 12.175 12.4844C12.2063 12.2688 12.1813 12.1562 12.1594 12.1C12.1406 12.0469 12.1031 11.9875 12.0188 11.9156C11.8031 11.7344 11.45 11.5906 10.8656 11.3844L10.7719 11.35C10.2875 11.1813 9.61562 10.9437 9.10625 10.5406C8.80937 10.3062 8.53438 9.99062 8.36563 9.57187C8.19375 9.15312 8.15937 8.69688 8.22812 8.22188C8.49062 6.4375 10.3219 5.78437 11.8813 6.06875C12.0969 6.10938 12.7344 6.25 12.9875 6.33125C13.5156 6.49375 13.8094 7.05625 13.6469 7.58437C13.4844 8.1125 12.9219 8.40625 12.3938 8.24375C12.2469 8.2 11.6969 8.07187 11.5219 8.04062C11.0656 7.95625 10.7156 8.02812 10.5031 8.14062C10.3063 8.24375 10.225 8.37813 10.2063 8.51562L10.2031 8.5125Z" fill="#FB923C"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_531_4186">
                            <path d="M0.1875 0H14.1875V16H0.1875V0Z" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm font-inter">Price</span>
                  </div>
                  <p className="text-white text-base font-inter font-semibold">₹34,999</p>
                </div>

                {/* Rating */}
                <div className="bg-white bg-opacity-10 rounded-lg border border-white border-opacity-20 p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-4 mr-2">
                      <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_531_4194)">
                          <path d="M10.6994 0.5625C10.5338 0.21875 10.1838 0 9.79942 0C9.41505 0 9.06817 0.21875 8.89942 0.5625L6.89005 4.69688L2.40255 5.35938C2.02755 5.41563 1.71505 5.67812 1.59942 6.0375C1.4838 6.39687 1.57755 6.79375 1.8463 7.05937L5.10255 10.2812L4.3338 14.8344C4.2713 15.2094 4.42755 15.5906 4.73692 15.8125C5.0463 16.0344 5.45567 16.0625 5.79317 15.8844L9.80255 13.7437L13.8119 15.8844C14.1494 16.0625 14.5588 16.0375 14.8682 15.8125C15.1775 15.5875 15.3338 15.2094 15.2713 14.8344L14.4994 10.2812L17.7557 7.05937C18.0244 6.79375 18.1213 6.39687 18.0025 6.0375C17.8838 5.67812 17.5744 5.41563 17.1994 5.35938L12.7088 4.69688L10.6994 0.5625Z" fill="#FB923C"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_531_4194">
                            <path d="M0.796875 0H18.7969V16H0.796875V0Z" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm font-inter">Rating</span>
                  </div>
                  <p className="text-white text-base font-inter font-semibold">4.9 (120)</p>
                </div>

                {/* Next Departure */}
                <div className="bg-white bg-opacity-10 rounded-lg border border-white border-opacity-20 p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-4 mr-2">
                      <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_531_4202)">
                          <path d="M3.39062 1V2H1.89062C1.0625 2 0.390625 2.67188 0.390625 3.5V5H14.3906V3.5C14.3906 2.67188 13.7188 2 12.8906 2H11.3906V1C11.3906 0.446875 10.9438 0 10.3906 0C9.8375 0 9.39062 0.446875 9.39062 1V2H5.39062V1C5.39062 0.446875 4.94375 0 4.39062 0C3.8375 0 3.39062 0.446875 3.39062 1ZM14.3906 6H0.390625V14.5C0.390625 15.3281 1.0625 16 1.89062 16H12.8906C13.7188 16 14.3906 15.3281 14.3906 14.5V6Z" fill="#FB923C"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_531_4202">
                            <path d="M0.390625 0H14.3906V16H0.390625V0Z" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
              </div>
                    <span className="text-gray-300 text-sm font-inter">Next Departure</span>
            </div>
                  <p className="text-white text-base font-inter font-semibold">22nd July</p>
          </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex space-x-4"
              >
                {/* Book Now Button */}
                <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg flex items-center hover:bg-orange-600 transition-colors shadow-lg">
                  <div className="w-4 h-4 mr-3">
                    <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_531_4211)">
                        <path d="M4.5 0.25C5.12227 0.25 5.625 0.752734 5.625 1.375V2.5H10.125V1.375C10.125 0.752734 10.6277 0.25 11.25 0.25C11.8723 0.25 12.375 0.752734 12.375 1.375V2.5H14.0625C14.9941 2.5 15.75 3.25586 15.75 4.1875V5.875H0V4.1875C0 3.25586 0.755859 2.5 1.6875 2.5H3.375V1.375C3.375 0.752734 3.87773 0.25 4.5 0.25ZM0 7H15.75V16.5625C15.75 17.4941 14.9941 18.25 14.0625 18.25H1.6875C0.755859 18.25 0 17.4941 0 16.5625V7ZM11.5664 10.9727C11.8969 10.6422 11.8969 10.1078 11.5664 9.78086C11.2359 9.45391 10.7016 9.45039 10.3746 9.78086L7.03477 13.1207L5.38242 11.4684C5.05195 11.1379 4.51758 11.1379 4.19062 11.4684C3.86367 11.7988 3.86016 12.3332 4.19062 12.6602L6.44062 14.9102C6.77109 15.2406 7.30547 15.2406 7.63242 14.9102L11.5664 10.9727Z" fill="white"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_531_4211">
                          <path d="M0 0.25H15.75V18.25H0V0.25Z" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  Book Now
              </button>
              
                {/* Enquire Button */}
                <button className="bg-white bg-opacity-10 text-white px-6 py-4 rounded-lg font-inter font-semibold text-lg flex items-center border border-white border-opacity-30 hover:bg-opacity-20 transition-colors">
                  <div className="w-4 h-4 mr-3">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_531_4217)">
                        <path d="M6.54727 1.11466C6.27656 0.460754 5.56289 0.112707 4.88086 0.299035L1.78711 1.14278C1.17539 1.31153 0.75 1.867 0.75 2.49982C0.75 11.1975 7.80234 18.2498 16.5 18.2498C17.1328 18.2498 17.6883 17.8244 17.857 17.2127L18.7008 14.119C18.8871 13.4369 18.5391 12.7233 17.8852 12.4526L14.5102 11.0463C13.9371 10.8072 13.2727 10.9725 12.8824 11.4541L11.4621 13.1873C8.98711 12.0166 6.9832 10.0127 5.8125 7.53771L7.5457 6.12091C8.02734 5.72716 8.19258 5.06622 7.95352 4.49318L6.54727 1.11818V1.11466Z" fill="white"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_531_4217">
                          <path d="M0.75 0.25H18.75V18.25H0.75V0.25Z" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  Enquire
              </button>
              
                {/* Download Brochure Button */}
                <button className="bg-yellow-500 bg-opacity-20 text-yellow-200 px-6 py-4 rounded-lg font-inter font-semibold text-lg flex items-center border border-yellow-500 border-opacity-30 hover:bg-opacity-30 transition-colors">
                  <div className="w-4 h-4 mr-3">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_531_4223)">
                        <path d="M10.8906 1.375C10.8906 0.752734 10.3879 0.25 9.76562 0.25C9.14336 0.25 8.64062 0.752734 8.64062 1.375V9.90742L6.06016 7.32695C5.6207 6.8875 4.90703 6.8875 4.46758 7.32695C4.02813 7.76641 4.02813 8.48008 4.46758 8.91953L8.96758 13.4195C9.40703 13.859 10.1207 13.859 10.5602 13.4195L15.0602 8.91953C15.4996 8.48008 15.4996 7.76641 15.0602 7.32695C14.6207 6.8875 13.907 6.8875 13.4676 7.32695L10.8906 9.90742V1.375ZM3.01562 12.625C1.77461 12.625 0.765625 13.634 0.765625 14.875V16C0.765625 17.241 1.77461 18.25 3.01562 18.25H16.5156C17.7566 18.25 18.7656 17.241 18.7656 16V14.875C18.7656 13.634 17.7566 12.625 16.5156 12.625H12.9473L11.3547 14.2176C10.4758 15.0965 9.05195 15.0965 8.17305 14.2176L6.58398 12.625H3.01562ZM15.9531 14.5938C16.1769 14.5938 16.3915 14.6826 16.5497 14.8409C16.708 14.9991 16.7969 15.2137 16.7969 15.4375C16.7969 15.6613 16.708 15.8759 16.5497 16.0341C16.3915 16.1924 16.1769 16.2812 15.9531 16.2812C15.7293 16.2812 15.5147 16.1924 15.3565 16.0341C15.1983 15.8759 15.1094 15.6613 15.1094 15.4375C15.1094 15.2137 15.1983 14.9991 15.3565 14.8409C15.5147 14.6826 15.7293 14.5938 15.9531 14.5938Z" fill="#FEF08A"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_531_4223">
                          <path d="M0.765625 0.25H18.7656V18.25H0.765625V0.25Z" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  Download Brochure
              </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* END HERO SECTION */}

      {/* Spacer to allow scrolling past hero */}
      <div style={{ height: '100vh' }} />

      {/* WHAT MAKES THIS TRIP SPECIAL SECTION */}
      <motion.section
        ref={specialSectionRef}
        style={{ y }}
        className="relative w-full bg-[#E5E7EB] flex justify-center"
      >
        <div className="flex max-w-7xl w-full">
          {/* Left Column */}
          <div className="w-1/2 pr-12 flex flex-col justify-center">
            {/* Title */}
            <div className="mb-4">
              <h2 className="font-inter mt-8 ml-8 font-bold text-3xl leading-tight text-[#111827]">
                What Makes This Trip <span className="text-[#2563EB]"> </span><span className="text-[#F77A40]"><br />Special</span>
              </h2>
              <div className="mt-2 flex justify-start ml-8">
                <svg width="168" height="9" viewBox="0 0 168 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.69531 7.10824C42.0378 0.384492 126.085 0.384492 166.427 7.10824" stroke="#F77A40" strokeWidth="2.52141" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            {/* Subtitle */}
            <div className="mb-6 ml-8">
              <p className="text-[#4B5563] text-[15px] leading-8 font-inter max-w-xl">
                Experience the perfect blend of adventure, culture, and luxury in one of the world's most breathtaking destinations. This isn't just a trip—it's a transformative journey crafted for those who seek extraordinary experiences.
              </p>
            </div>
            {/* Feature Cards Grid */}
            <div className="grid grid-cols-2 gap-3 ml-8 mb-6">
              {/* Card 1: Exclusive Access */}
              <div className="bg-white rounded-2xl shadow-md border border-white p-6 flex flex-col min-h-[174px]">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#F77A40] rounded-xl mr-4">
                    <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_531_3279)">
                        <path d="M11.7383 4.0498C12.1391 3.80371 12.4062 3.35723 12.4062 2.85449C12.4062 2.07754 11.777 1.44824 11 1.44824C10.223 1.44824 9.59375 2.07754 9.59375 2.85449C9.59375 3.36074 9.86094 3.80371 10.2617 4.0498L8.24727 8.07871C7.92734 8.71855 7.09766 8.90137 6.53867 8.45488L3.40625 5.94824C3.58203 5.7127 3.6875 5.4209 3.6875 5.10449C3.6875 4.32754 3.0582 3.69824 2.28125 3.69824C1.5043 3.69824 0.875 4.32754 0.875 5.10449C0.875 5.88145 1.5043 6.51074 2.28125 6.51074C2.28828 6.51074 2.29883 6.51074 2.30586 6.51074L3.9125 15.349C4.10586 16.4178 5.0375 17.1982 6.12734 17.1982H15.8727C16.959 17.1982 17.8906 16.4213 18.0875 15.349L19.6941 6.51074C19.7012 6.51074 19.7117 6.51074 19.7188 6.51074C20.4957 6.51074 21.125 5.88145 21.125 5.10449C21.125 4.32754 20.4957 3.69824 19.7188 3.69824C18.9418 3.69824 18.3125 4.32754 18.3125 5.10449C18.3125 5.4209 18.418 5.7127 18.5938 5.94824L15.4613 8.45488C14.9023 8.90137 14.0727 8.71855 13.7527 8.07871L11.7383 4.0498Z" fill="white"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_531_3279">
                          <path d="M0.875 0.323242H21.125V18.3232H0.875V0.323242Z" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <span className="text-[#111827] text-3x1 font-inter font-semibold">Exclusive Access</span>
                </div>
                <div className="text-[#4B5563] text-[15px] font-inter">
                  Private tours to hidden gems and VIP experiences unavailable to regular tourists.
                </div>
              </div>
              {/* Card 2: Expert Guides */}
              <div className="bg-white rounded-2xl shadow-md border border-white p-6 flex flex-col min-h-[174px]">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#F77A40] rounded-xl mr-4">
                    <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_531_3291)">
                        <path d="M5.8125 0.970703C6.55842 0.970703 7.27379 1.26702 7.80124 1.79447C8.32868 2.32191 8.625 3.03728 8.625 3.7832C8.625 4.52912 8.32868 5.24449 7.80124 5.77194C7.27379 6.29939 6.55842 6.5957 5.8125 6.5957C5.06658 6.5957 4.35121 6.29939 3.82376 5.77194C3.29632 5.24449 3 4.52912 3 3.7832C3 3.03728 3.29632 2.32191 3.82376 1.79447C4.35121 1.26702 5.06658 0.970703 5.8125 0.970703ZM18.75 0.970703C19.4959 0.970703 20.2113 1.26702 20.7387 1.79447C21.2662 2.32191 21.5625 3.03728 21.5625 3.7832C21.5625 4.52912 21.2662 5.24449 20.7387 5.77194C20.2113 6.29939 19.4959 6.5957 18.75 6.5957C18.0041 6.5957 17.2887 6.29939 16.7613 5.77194C16.2338 5.24449 15.9375 4.52912 15.9375 3.7832C15.9375 3.03728 16.2338 2.32191 16.7613 1.79447C17.2887 1.26702 18.0041 0.970703 18.75 0.970703ZM0.75 11.4719C0.75 9.40117 2.43047 7.7207 4.50117 7.7207H6.00234C6.56133 7.7207 7.09219 7.84375 7.57031 8.06172C7.52461 8.31484 7.50352 8.57852 7.50352 8.8457C7.50352 10.1887 8.09414 11.3945 9.02578 12.2207C9.01875 12.2207 9.01172 12.2207 9.00117 12.2207H1.49883C1.0875 12.2207 0.75 11.8832 0.75 11.4719ZM14.9988 12.2207C14.9918 12.2207 14.9848 12.2207 14.9742 12.2207C15.9094 11.3945 16.4965 10.1887 16.4965 8.8457C16.4965 8.57852 16.4719 8.31836 16.4297 8.06172C16.9078 7.84023 17.4387 7.7207 17.9977 7.7207H19.4988C21.5695 7.7207 23.25 9.40117 23.25 11.4719C23.25 11.8867 22.9125 12.2207 22.5012 12.2207H14.9988ZM8.625 8.8457C8.625 7.9506 8.98058 7.09215 9.61351 6.45922C10.2465 5.82628 11.1049 5.4707 12 5.4707C12.8951 5.4707 13.7536 5.82628 14.3865 6.45922C15.0194 7.09215 15.375 7.9506 15.375 8.8457C15.375 9.74081 15.0194 10.5993 14.3865 11.2322C13.7536 11.8651 12.8951 12.2207 12 12.2207C11.1049 12.2207 10.2465 11.8651 9.61351 11.2322C8.98058 10.5993 8.625 9.74081 8.625 8.8457ZM5.25 18.032C5.25 15.4445 7.34883 13.3457 9.93633 13.3457H14.0637C16.6512 13.3457 18.75 15.4445 18.75 18.032C18.75 18.5488 18.3316 18.9707 17.8113 18.9707H6.18867C5.67188 18.9707 5.25 18.5523 5.25 18.032Z" fill="white"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_531_3291">
                          <path d="M0.75 0.970703H23.25V18.9707H0.75V0.970703Z" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <span className="text-[#111827] text-3x1 font-inter font-semibold">Expert Guides</span>
                </div>
                <div className="text-[#4B5563] text-[15px] font-inter">
                  Local storytellers with decades of experience sharing authentic cultural insights.
                </div>
              </div>
              {/* Card 3: Luxury Comfort */}
              <div className="bg-white rounded-2xl shadow-md border border-white p-6 flex flex-col min-h-[174px]">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#F77A40] rounded-xl mr-4">
                    <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_531_3303)">
                        <path d="M12.0149 1.29395C11.8285 0.907227 11.4348 0.661133 11.0024 0.661133C10.57 0.661133 10.1797 0.907227 9.98987 1.29395L7.72933 5.94512L2.68089 6.69043C2.25902 6.75371 1.90745 7.04902 1.77738 7.45332C1.6473 7.85762 1.75277 8.3041 2.05511 8.60293L5.71839 12.2275L4.85355 17.3498C4.78323 17.7717 4.95902 18.2006 5.30706 18.4502C5.65511 18.6998 6.11566 18.7314 6.49534 18.5311L11.0059 16.1229L15.5164 18.5311C15.8961 18.7314 16.3567 18.7033 16.7047 18.4502C17.0528 18.1971 17.2285 17.7717 17.1582 17.3498L16.2899 12.2275L19.9532 8.60293C20.2555 8.3041 20.3645 7.85762 20.2309 7.45332C20.0973 7.04902 19.7493 6.75371 19.3274 6.69043L14.2754 5.94512L12.0149 1.29395Z" fill="white"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_531_3303">
                          <path d="M0.875 0.661133H21.125V18.6611H0.875V0.661133Z" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <span className="text-[#111827] text-3x1 font-inter font-semibold">Luxury Comfort</span>
                </div>
                <div className="text-[#4B5563] text-[15px] font-inter">
                  5-star accommodations and premium transportation throughout your journey.
                </div>
              </div>
              {/* Card 4: Personal Touch */}
              <div className="bg-white rounded-2xl shadow-md border border-white p-6 flex flex-col min-h-[174px]">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#F77A40] rounded-xl mr-4">
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 18.2764H0V0.276367H18V18.2764Z" stroke="#E5E7EB"/>
                      <path d="M1.67344 10.8369L8.02617 16.7677C8.28984 17.0138 8.63789 17.1509 9 17.1509C9.36211 17.1509 9.71016 17.0138 9.97383 16.7677L16.3266 10.8369C17.3953 9.84196 18 8.44626 18 6.98727V6.78337C18 4.32595 16.2246 2.23063 13.8023 1.82634C12.1992 1.55915 10.568 2.08298 9.42188 3.22907L9 3.65095L8.57812 3.22907C7.43203 2.08298 5.80078 1.55915 4.19766 1.82634C1.77539 2.23063 0 4.32595 0 6.78337V6.98727C0 8.44626 0.604687 9.84196 1.67344 10.8369Z" fill="white"/>
                    </svg>
                  </div>
                  <span className="text-[#111827] text-3x1 font-inter font-semibold">Personal Touch</span>
                </div>
                <div className="text-[#4B5563] text-[15px] font-inter">
                  Customized itineraries tailored to your interests and travel preferences.
                </div>
              </div>
            </div>
            {/* Stats Card */}
            <div className="bg-white bg-opacity-90 rounded-2xl border border-[#E5E7EB] ml-8 p-8 flex flex-col mb-6 max-w-xl">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-[#F77A40] rounded-2xl mr-6">
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_531_3328)">
                      <path d="M10 0.915039C10.1797 0.915039 10.3594 0.954102 10.5235 1.02832L17.8789 4.14941C18.7383 4.5127 19.3789 5.36035 19.375 6.38379C19.3555 10.2588 17.7617 17.3486 11.0313 20.5713C10.3789 20.8838 9.62111 20.8838 8.96877 20.5713C2.2383 17.3486 0.644549 10.2588 0.625018 6.38379C0.621112 5.36035 1.26174 4.5127 2.12111 4.14941L9.48049 1.02832C9.64064 0.954102 9.82033 0.915039 10 0.915039ZM10 3.52441V18.29C15.3906 15.6807 16.8399 9.90332 16.875 6.43848L10 3.52441Z" fill="white"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_531_3328">
                        <path d="M0 0.915039H20V20.915H0V0.915039Z" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <div className="text-[#111827] text-[17px] font-inter font-semibold">Trusted by Thousands</div>
                  <div className="text-[#4B5563] text-[15px] font-inter">Award-winning travel experiences since 2010</div>
                </div>
              </div>
              <div className="flex space-x-12">
                <div className="flex flex-col items-center">
                  <div className="text-[#F77A40] text-[17px] font-inter font-bold">15K+</div>
                  <div className="text-[#4B5563] text-[15px] font-inter">Happy Travelers</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-[#F77A40] text-[17px] font-inter font-bold">4.9/5</div>
                  <div className="text-[#4B5563] text-[15px] font-inter">Average Rating</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-[#F77A40] text-[17px] font-inter font-bold">50+</div>
                  <div className="text-[#4B5563] text-[15px] font-inter">Destinations</div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="w-1/2 flex items-center justify-center relative">
            <div className="relative w-[568px] h-[600px] rounded-3xl shadow-2xl overflow-hidden">
              <img src="/Landing/bg.jpg" alt="Ladakh" className="w-full h-full object-cover rounded-3xl" />
              <div className="absolute inset-0" style={{background: 'linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%)'}} />
              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-white bg-opacity-95 rounded-2xl shadow-lg flex items-center px-6 py-4">
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16.17" cy="16.97" r="15" fill="#F77A40" stroke="white" strokeWidth="2" />
                </svg>
                <span className="ml-4 text-[#111827] text-lg font-inter font-semibold">Featured Experience</span>
              </div>
            </div>
          </div>
      </div>
      </motion.section>

      {/* SET CLEAR EXPECTATIONS SECTION */}
      <section className="relative w-full h-[480px] bg-[#E5E7EB] ">
        {/* Heading and Subtitle */}
        <div className="w-full flex flex-col items-center">
          <h2 className="font-poppins font-bold text-3xl text-[#111827] text-center mb-2">Set Clear Expectations</h2>
          <p className="font-poppins text-lg text-[#4B5563] text-center max-w-2xl">Transparent breakdown of what's included in your package</p>
        </div>
        {/* Cards Row */}
        <div className="flex flex-col md:flex-row gap-4 mt-2 w-[1000px] max-w-6xl ml-[100px]">
          {/* What's Included Card */}
          <div className="flex-1 bg-white rounded-xl shadow-xl border border-[#E5E7EB] overflow-hidden min-w-[320px] max-w-xl">
            {/* Header */}
            <div className="bg-[#10B981] px-8 py-4 flex items-center">
              <span className="inline-flex items-center justify-center w-7 h-7 mr-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_531_3400)">
                    <path d="M12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24ZM17.2969 9.79688L11.2969 15.7969C10.8562 16.2375 10.1438 16.2375 9.70781 15.7969L6.70781 12.7969C6.26719 12.3562 6.26719 11.6438 6.70781 11.2078C7.14844 10.7719 7.86094 10.7672 8.29688 11.2078L10.5 13.4109L15.7031 8.20312C16.1437 7.7625 16.8562 7.7625 17.2922 8.20312C17.7281 8.64375 17.7328 9.35625 17.2922 9.79219L17.2969 9.79688Z" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_531_3400">
                      <path d="M0 0H24V24H0V0Z" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="text-white text-[18px] font-nunito font-semibold">What's Included</span>
            </div>
            {/* List */}
            <div className="px-8 py-6 flex flex-col gap-4">
              {/* Item 1 */}
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-6 h-6 mt-1">
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 16H0V0H20V16Z" stroke="#E5E7EB"/>
                    <path d="M1 1C1.55313 1 2 1.44687 2 2V10H9V5C9 4.44688 9.44687 4 10 4H17C18.6562 4 20 5.34375 20 7V14C20 14.5531 19.5531 15 19 15C18.4469 15 18 14.5531 18 14V13H11H10H2V14C2 14.5531 1.55313 15 1 15C0.446875 15 0 14.5531 0 14V2C0 1.44687 0.446875 1 1 1ZM5.5 4C6.16304 4 6.79893 4.26339 7.26777 4.73223C7.73661 5.20107 8 5.83696 8 6.5C8 7.16304 7.73661 7.79893 7.26777 8.26777C6.79893 8.73661 6.16304 9 5.5 9C4.83696 9 4.20107 8.73661 3.73223 8.26777C3.26339 7.79893 3 7.16304 3 6.5C3 5.83696 3.26339 5.20107 3.73223 4.73223C4.20107 4.26339 4.83696 4 5.5 4Z" fill="#4B5563"/>
                  </svg>
                </span>
                <div>
                  <div className="text-[#111827] text-[15px] font-nunito font-semibold">Hotel Accommodation</div>
                  <div className="text-[#4B5563] text-[12px]  font-nunito">Premium stay at XYZ Valley Resort</div>
                </div>
              </div>
              {/* Item 2 */}
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-6 h-6 mt-1">
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_531_3424)">
                      <path d="M13 0C12.5 0 9 1 9 5.5V9C9 10.1031 9.89688 11 11 11H12V15C12 15.5531 12.4469 16 13 16C13.5531 16 14 15.5531 14 15V11V7.5V1C14 0.446875 13.5531 0 13 0ZM2 0.5C2 0.24375 1.80938 0.03125 1.55313 0.003125C1.29688 -0.025 1.06875 0.14375 1.0125 0.390625L0.065625 4.65C0.021875 4.84688 0 5.04688 0 5.24687C0 6.68125 1.09687 7.85938 2.5 7.9875V15C2.5 15.5531 2.94688 16 3.5 16C4.05312 16 4.5 15.5531 4.5 15V7.9875C5.90312 7.85938 7 6.68125 7 5.24687C7 5.04688 6.97812 4.84688 6.93437 4.65L5.9875 0.390625C5.93125 0.140625 5.69688 -0.025 5.44375 0.003125C5.19062 0.03125 5 0.24375 5 0.5V4.69375C5 4.8625 4.8625 5 4.69375 5C4.53437 5 4.40312 4.87813 4.3875 4.71875L3.99688 0.45625C3.975 0.196875 3.75938 0 3.5 0C3.24062 0 3.025 0.196875 3.00312 0.45625L2.61562 4.71875C2.6 4.87813 2.46875 5 2.30938 5C2.14062 5 2.00312 4.8625 2.00312 4.69375V0.5H2ZM3.50938 5.25H3.5H3.49062L3.5 5.22813L3.50938 5.25Z" fill="#4B5563"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_531_3424">
                        <path d="M0 0H14V16H0V0Z" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <div>
                  <div className="text-[#111827] text-[15px] font-nunito font-semibold">Daily Meals</div>
                  <div className="text-[#4B5563] text-[12px]  font-nunito">Breakfast & Dinner included</div>
                </div>
              </div>
              {/* Item 3 */}
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-6 h-6 mt-1">
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 16H0V0H18V16Z" stroke="#E5E7EB"/>
                    <path d="M9 0C13.2 0 16 1.1 16 2.5V3V4C16.5531 4 17 4.44688 17 5V7C17 7.55313 16.5531 8 16 8V13C16 13.5531 15.5531 14 15 14V15C15 15.5531 14.5531 16 14 16H13C12.4469 16 12 15.5531 12 15V14H6V15C6 15.5531 5.55313 16 5 16H4C3.44688 16 3 15.5531 3 15V14C2.44687 14 2 13.5531 2 13V8C1.44687 8 1 7.55313 1 7V5C1 4.44688 1.44687 4 2 4V3V2.5C2 1.1 4.8 0 9 0ZM4 5V8C4 8.55313 4.44688 9 5 9H8.5V4H5C4.44688 4 4 4.44688 4 5ZM9.5 9H13C13.5531 9 14 8.55313 14 8V5C14 4.44688 13.5531 4 13 4H9.5V9ZM4.5 12.5C4.76522 12.5 5.01957 12.3946 5.20711 12.2071C5.39464 12.0196 5.5 11.7652 5.5 11.5C5.5 11.2348 5.39464 10.9804 5.20711 10.7929C5.01957 10.6054 4.76522 10.5 4.5 10.5C4.23478 10.5 3.98043 10.6054 3.79289 10.7929C3.60536 10.9804 3.5 11.2348 3.5 11.5C3.5 11.7652 3.60536 12.0196 3.79289 12.2071C3.98043 12.3946 4.23478 12.5 4.5 12.5ZM13.5 12.5C13.7652 12.5 14.0196 12.3946 14.2071 12.2071C14.3946 12.0196 14.5 11.7652 14.5 11.5C14.5 11.2348 14.3946 10.9804 14.2071 10.7929C14.0196 10.6054 13.7652 10.5 13.5 10.5C13.2348 10.5 12.9804 10.6054 12.7929 10.7929C12.6054 10.9804 12.5 11.2348 12.5 11.5C12.5 11.7652 12.6054 12.0196 12.7929 12.2071C12.9804 12.3946 13.2348 12.5 13.5 12.5ZM12 2.5C12 2.225 11.775 2 11.5 2H6.5C6.225 2 6 2.225 6 2.5C6 2.775 6.225 3 6.5 3H11.5C11.775 3 12 2.775 12 2.5Z" fill="#4B5563"/>
                  </svg>
                </span>
                <div>
                  <div className="text-[#111827] text-[15px] font-nunito font-semibold">Local Transport</div>
                  <div className="text-[#4B5563] text-[12px]  font-nunito">AC Tempo Traveler / Volvo</div>
                </div>
              </div>
              {/* Item 4 */}
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-6 h-6 mt-1">
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 16H0V0H18V16Z" stroke="#E5E7EB"/>
                    <path d="M2 2C0.896875 2 0 2.89688 0 4V6C0 6.275 0.23125 6.49063 0.490625 6.58125C1.07812 6.78438 1.5 7.34375 1.5 8C1.5 8.65625 1.07812 9.21562 0.490625 9.41875C0.23125 9.50937 0 9.725 0 10V12C0 13.1031 0.896875 14 2 14H16C17.1031 14 18 13.1031 18 12V10C18 9.725 17.7687 9.50937 17.5094 9.41875C16.9219 9.21562 16.5 8.65625 16.5 8C16.5 7.34375 16.9219 6.78438 17.5094 6.58125C17.7687 6.49063 18 6.275 18 6V4C18 2.89688 17.1031 2 16 2H2ZM4 5.5V10.5C4 10.775 4.225 11 4.5 11H13.5C13.775 11 14 10.775 14 10.5V5.5C14 5.225 13.775 5 13.5 5H4.5C4.225 5 4 5.225 4 5.5ZM3 5C3 4.44688 3.44688 4 4 4H14C14.5531 4 15 4.44688 15 5V11C15 11.5531 14.5531 12 14 12H4C3.44688 12 3 11.5531 3 11V5Z" fill="#4B5563"/>
                  </svg>
                </span>
                <div>
                  <div className="text-[#111827] text-[15px] font-nunito font-semibold">Entry Passes</div>
                  <div className="text-[#4B5563] text-[12px]  font-nunito">All monument & activity entries</div>
                </div>
              </div>
              {/* Item 5 */}
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-6 h-6 mt-1">
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_531_3460)">
                      <path d="M7 8C5.93913 8 4.92172 7.57857 4.17157 6.82843C3.42143 6.07828 3 5.06087 3 4C3 2.93913 3.42143 1.92172 4.17157 1.17157C4.92172 0.421427 5.93913 0 7 0C8.06087 0 9.07828 0.421427 9.82843 1.17157C10.5786 1.92172 11 2.93913 11 4C11 5.06087 10.5786 6.07828 9.82843 6.82843C9.07828 7.57857 8.06087 8 7 8ZM6.53438 11.225L5.95312 10.2563C5.75313 9.92188 5.99375 9.5 6.38125 9.5H7H7.61562C8.00313 9.5 8.24375 9.925 8.04375 10.2563L7.4625 11.225L8.50625 15.0969L9.63125 10.5063C9.69375 10.2531 9.9375 10.0875 10.1906 10.1531C12.3813 10.7031 14 12.6844 14 15.0406C14 15.5719 13.5687 16 13.0406 16H8.92188C8.85625 16 8.79688 15.9875 8.74063 15.9656L8.75 16H5.25L5.25938 15.9656C5.20312 15.9875 5.14062 16 5.07812 16H0.959375C0.43125 16 0 15.5687 0 15.0406C0 12.6812 1.62188 10.7 3.80938 10.1531C4.0625 10.0906 4.30625 10.2563 4.36875 10.5063L5.49375 15.0969L6.5375 11.225H6.53438Z" fill="#4B5563"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_531_3460">
                        <path d="M0 0H14V16H0V0Z" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <div>
                  <div className="text-[#111827] text-[15px] font-nunito font-semibold">Expert Guide</div>
                  <div className="text-[#4B5563] text-[12px]  font-nunito">Certified local travel expert</div>
                </div>
              </div>
            </div>
          </div>
          {/* What's Not Included Card */}
          <div className="flex-1 bg-white rounded-xl shadow-xl border border-[#E5E7EB] overflow-hidden min-w-[320px] max-w-xl">
            {/* Header */}
            <div className="bg-[#EF4444] px-8 py-4 flex items-center">
              <span className="inline-flex items-center justify-center w-7 h-7 mr-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_531_3468)">
                    <path d="M12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24ZM8.20312 8.20312C8.64375 7.7625 9.35625 7.7625 9.79219 8.20312L11.9953 10.4062L14.1984 8.20312C14.6391 7.7625 15.3516 7.7625 15.7875 8.20312C16.2234 8.64375 16.2281 9.35625 15.7875 9.79219L13.5844 11.9953L15.7875 14.1984C16.2281 14.6391 16.2281 15.3516 15.7875 15.7875C15.3469 16.2234 14.6344 16.2281 14.1984 15.7875L11.9953 13.5844L9.79219 15.7875C9.35156 16.2281 8.63906 16.2281 8.20312 15.7875C7.76719 15.3469 7.7625 14.6344 8.20312 14.1984L10.4062 11.9953L8.20312 9.79219C7.7625 9.35156 7.7625 8.63906 8.20312 8.20312Z" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_531_3468">
                      <path d="M0 0H24V24H0V0Z" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="text-white text-[18px] font-nunito font-semibold">What's Not Included</span>
            </div>
            {/* List */}
            <div className="px-8 py-6 flex flex-col gap-4">
              {/* Item 1 */}
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-6 h-6 mt-1">
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_531_3480)">
                      <path d="M15.0719 6C16.1406 6 18 6.90625 18 8C18 9.125 16.1406 10 15.0719 10H11.4281L8.2875 15.4969C8.10938 15.8094 7.77812 16 7.41875 16H5.6625C5.33125 16 5.09063 15.6813 5.18125 15.3625L6.7125 10H3.5L2.15 11.8C2.05625 11.925 1.90625 12 1.75 12H0.4375C0.19375 12 0 11.8031 0 11.5625C0 11.5219 0.00625 11.4812 0.015625 11.4406L1 8L0.015625 4.55937C0.003125 4.51875 0 4.47813 0 4.4375C0 4.19375 0.196875 4 0.4375 4H1.75C1.90625 4 2.05625 4.075 2.15 4.2L3.5 6H6.71562L5.18437 0.6375C5.09062 0.31875 5.33125 0 5.6625 0H7.41875C7.77812 0 8.10938 0.19375 8.2875 0.503125L11.4281 6H15.0719Z" fill="#4B5563"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_531_3480">
                        <path d="M0 0H18V16H0V0Z" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <div>
                  <div className="text-[#111827] text-[15px] font-nunito font-semibold">Flights</div>
                  <div className="text-[#4B5563] text-[12px]  font-nunito">To/from Manali (book separately)</div>
          </div>
        </div>
              {/* Item 2 */}
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-6 h-6 mt-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 16H0V0H16V16Z" stroke="#E5E7EB"/>
                    <path d="M2 1C0.896875 1 0 1.89688 0 3V13C0 14.1031 0.896875 15 2 15H14C15.1031 15 16 14.1031 16 13V6C16 4.89687 15.1031 4 14 4H2.5C2.225 4 2 3.775 2 3.5C2 3.225 2.225 3 2.5 3H14C14.5531 3 15 2.55313 15 2C15 1.44687 14.5531 1 14 1H2ZM13 8.5C13.2652 8.5 13.5196 8.60536 13.7071 8.79289C13.8946 8.98043 14 9.23478 14 9.5C14 9.76522 13.8946 10.0196 13.7071 10.2071C13.5196 10.3946 13.2652 10.5 13 10.5C12.7348 10.5 12.4804 10.3946 12.2929 10.2071C12.1054 10.0196 12 9.76522 12 9.5C12 9.23478 12.1054 8.98043 12.2929 8.79289C12.4804 8.60536 12.7348 8.5 13 8.5Z" fill="#4B5563"/>
                  </svg>
                </span>
                <div>
                  <div className="text-[#111827] text-[15px] font-nunito font-semibold">Personal Expenses</div>
                  <div className="text-[#4B5563] text-[12px]  font-nunito">Shopping, tips, snacks</div>
                </div>
              </div>
              {/* Item 3 */}
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-6 h-6 mt-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 16H0V0H16V16Z" stroke="#E5E7EB"/>
                    <path d="M2 1C0.896875 1 0 1.89688 0 3V13C0 14.1031 0.896875 15 2 15H14C15.1031 15 16 14.1031 16 13V6C16 4.89687 15.1031 4 14 4H2.5C2.225 4 2 3.775 2 3.5C2 3.225 2.225 3 2.5 3H14C14.5531 3 15 2.55313 15 2C15 1.44687 14.5531 1 14 1H2ZM13 8.5C13.2652 8.5 13.5196 8.60536 13.7071 8.79289C13.8946 8.98043 14 9.23478 14 9.5C14 9.76522 13.8946 10.0196 13.7071 10.2071C13.5196 10.3946 13.2652 10.5 13 10.5C12.7348 10.5 12.4804 10.3946 12.2929 10.2071C12.1054 10.0196 12 9.76522 12 9.5C12 9.23478 12.1054 8.98043 12.2929 8.79289C12.4804 8.60536 12.7348 8.5 13 8.5Z" fill="#4B5563"/>
                  </svg>
                </span>
                <div>
                  <div className="text-[#111827] text-[15px] font-nunito font-semibold">Travel Insurance</div>
                  <div className="text-[#4B5563] text-[12px]  font-nunito">Optional, but recommended</div>
                </div>
              </div>
              {/* Item 4 */}
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-6 h-6 mt-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 16H0V0H14V16Z" stroke="#E5E7EB"/>
                    <path d="M2 1C0.896875 1 0 1.89688 0 3V13C0 14.1031 0.896875 15 2 15H14C15.1031 15 16 14.1031 16 13V6C16 4.89687 15.1031 4 14 4H2.5C2.225 4 2 3.775 2 3.5C2 3.225 2.225 3 2.5 3H14C14.5531 3 15 2.55313 15 2C15 1.44687 14.5531 1 14 1H2ZM13 8.5C13.2652 8.5 13.5196 8.60536 13.7071 8.79289C13.8946 8.98043 14 9.23478 14 9.5C14 9.76522 13.8946 10.0196 13.7071 10.2071C13.5196 10.3946 13.2652 10.5 13 10.5C12.7348 10.5 12.4804 10.3946 12.2929 10.2071C12.1054 10.0196 12 9.76522 12 9.5C12 9.23478 12.1054 8.98043 12.2929 8.79289C12.4804 8.60536 12.7348 8.5 13 8.5Z" fill="#4B5563"/>
                  </svg>
                </span>
                <div>
                  <div className="text-[#111827] text-[15px] font-nunito font-semibold">Anything Not Mentioned Above</div>
                  <div className="text-[#4B5563] text-[12px]  font-nunito">Items not specifically listed in inclusions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPORTANT NOTES SECTION */}
      <section className="relative w-full bg-[#E5E7EB]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            className="bg-white w-[500px] ml-[350px] rounded-xl shadow-xl border border-[#E5E7EB] overflow-hidden cursor-pointer"
            onClick={() => setIsNotesExpanded(!isNotesExpanded)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="border-b border-[#E5E7EB] px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-3">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.99856 1.75C10.5532 1.75 11.065 2.04297 11.3462 2.52344L19.7837 16.8984C20.0689 17.3828 20.0689 17.9805 19.7915 18.4648C19.5142 18.9492 18.9947 19.25 18.4361 19.25H1.56106C1.00246 19.25 0.482933 18.9492 0.205589 18.4648C-0.0717543 17.9805 -0.067848 17.3789 0.213402 16.8984L8.6509 2.52344C8.93215 2.04297 9.44387 1.75 9.99856 1.75ZM9.99856 6.75C9.47903 6.75 9.06106 7.16797 9.06106 7.6875V12.0625C9.06106 12.582 9.47903 13 9.99856 13C10.5181 13 10.9361 12.582 10.9361 12.0625V7.6875C10.9361 7.16797 10.5181 6.75 9.99856 6.75ZM11.2486 15.5C11.2486 15.1685 11.1169 14.8505 10.8824 14.6161C10.648 14.3817 10.3301 14.25 9.99856 14.25C9.66704 14.25 9.3491 14.3817 9.11467 14.6161C8.88025 14.8505 8.74856 15.1685 8.74856 15.5C8.74856 15.8315 8.88025 16.1495 9.11467 16.3839C9.3491 16.6183 9.66704 16.75 9.99856 16.75C10.3301 16.75 10.648 16.6183 10.8824 16.3839C11.1169 16.1495 11.2486 15.8315 11.2486 15.5Z" fill="#F59E0B"/>
                    </svg>
                  </div>
                  <span className="text-[#111827] text-[18px] font-nunito font-semibold">Important Notes</span>
                </div>
                <motion.div 
                  className="w-4 h-4"
                  animate={{ rotate: isNotesExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.29219 12.7066C7.68281 13.0973 8.31719 13.0973 8.70781 12.7066L14.7078 6.70664C15.0984 6.31602 15.0984 5.68164 14.7078 5.29102C14.3172 4.90039 13.6828 4.90039 13.2922 5.29102L7.99844 10.5848L2.70469 5.29414C2.31406 4.90352 1.67969 4.90352 1.28906 5.29414C0.898438 5.68477 0.898438 6.31914 1.28906 6.70977L7.28906 12.7098L7.29219 12.7066Z" fill="#6B7280"/>
                  </svg>
                </motion.div>
              </div>
            </div>
            {/* Content */}
            <AnimatePresence>
              {isNotesExpanded && (
                <motion.div 
                  className="px-6 py-6"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    {/* Item 1: Passport */}
                    <motion.div 
                      className="bg-[#FFFBEB] rounded-lg border border-[#FDE68A] p-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-4 h-4 mt-1">
                          <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_531_3550)">
                              <path d="M0 2.5C0 1.25898 1.00898 0.25 2.25 0.25H13.5C14.741 0.25 15.75 1.25898 15.75 2.5V16C15.75 17.241 14.741 18.25 13.5 18.25H2.25C1.00898 18.25 0 17.241 0 16V2.5ZM6.43359 10.0516C5.45273 9.5875 4.73203 8.66641 4.5457 7.5625H5.92031C5.97656 8.63125 6.19102 9.45391 6.43359 10.0516ZM7.88555 10.375H7.875H7.86445C7.78008 10.252 7.66406 10.0621 7.54453 9.79492C7.33359 9.3168 7.10859 8.58906 7.04531 7.5625H8.70117C8.63789 8.58906 8.41641 9.3168 8.20195 9.79492C8.08242 10.0621 7.96641 10.252 7.88203 10.375H7.88555ZM9.31641 10.0516C9.55547 9.45039 9.76992 8.63125 9.82969 7.5625H11.2043C11.018 8.66641 10.2973 9.5875 9.31641 10.0516ZM9.82969 6.4375C9.77344 5.36875 9.55898 4.54609 9.31641 3.94844C10.2973 4.4125 11.018 5.33359 11.2043 6.4375H9.82969ZM7.86445 3.625H7.875H7.88555C7.96992 3.74805 8.08594 3.93789 8.20547 4.20508C8.41641 4.6832 8.64141 5.41094 8.70469 6.4375H7.04883C7.11211 5.41094 7.33359 4.6832 7.54805 4.20508C7.66758 3.93789 7.78359 3.74805 7.86797 3.625H7.86445ZM6.43359 3.94844C6.19453 4.54961 5.98008 5.36875 5.92031 6.4375H4.5457C4.73203 5.33359 5.45273 4.4125 6.43359 3.94844ZM12.375 7C12.375 5.80653 11.9009 4.66193 11.057 3.81802C10.2131 2.97411 9.06847 2.5 7.875 2.5C6.68153 2.5 5.53693 2.97411 4.69302 3.81802C3.84911 4.66193 3.375 5.80653 3.375 7C3.375 8.19347 3.84911 9.33807 4.69302 10.182C5.53693 11.0259 6.68153 11.5 7.875 11.5C9.06847 11.5 10.2131 11.0259 11.057 10.182C11.9009 9.33807 12.375 8.19347 12.375 7ZM3.9375 13.75C3.62812 13.75 3.375 14.0031 3.375 14.3125C3.375 14.6219 3.62812 14.875 3.9375 14.875H11.8125C12.1219 14.875 12.375 14.6219 12.375 14.3125C12.375 14.0031 12.1219 13.75 11.8125 13.75H3.9375Z" fill="#D97706"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_531_3550">
                                <path d="M0 0.25H15.75V18.25H0V0.25Z" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div>
                          <div className="text-[#111827] text-[15px] font-nunito font-semibold">Passport (if international)</div>
                          <div className="text-[#4B5563] text-[12px] font-nunito">Valid for 6+ months</div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Item 2: Health */}
                    <motion.div 
                      className="bg-[#FFFBEB] rounded-lg border border-[#FDE68A] p-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-5 h-5 mt-1">
                          <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_531_3558)">
                              <path d="M3.9375 3.625C3.00586 3.625 2.25 4.38086 2.25 5.3125V9.25H5.625V5.3125C5.625 4.38086 4.86914 3.625 3.9375 3.625ZM0 5.3125C0 3.13633 1.76133 1.375 3.9375 1.375C6.11367 1.375 7.875 3.13633 7.875 5.3125V13.1875C7.875 15.3637 6.11367 17.125 3.9375 17.125C1.76133 17.125 0 15.3637 0 13.1875V5.3125ZM19.5082 14.2914C19.2586 14.7238 18.675 14.752 18.3199 14.4004L11.7246 7.80508C11.373 7.45352 11.3977 6.86641 11.8336 6.6168C12.6562 6.1457 13.609 5.875 14.625 5.875C17.7328 5.875 20.25 8.39219 20.25 11.5C20.25 12.516 19.9793 13.4688 19.5082 14.2914ZM17.4164 16.3832C16.5938 16.8543 15.641 17.125 14.625 17.125C11.5172 17.125 9 14.6078 9 11.5C9 10.484 9.2707 9.53125 9.7418 8.70859C9.99141 8.27617 10.575 8.24805 10.9301 8.59961L17.5254 15.1949C17.877 15.5465 17.8523 16.1336 17.4164 16.3832Z" fill="#D97706"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_531_3558">
                                <path d="M0 0.25H20.25V18.25H0V0.25Z" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div>
                          <div className="text-[#111827] text-[15px] font-nunito font-semibold">Health</div>
                          <div className="text-[#4B5563] text-[12px] font-nunito">Inform us of allergies or conditions in advance</div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Item 3: Dress Code */}
                    <motion.div 
                      className="bg-[#FFFBEB] rounded-lg border border-[#FDE68A] p-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-6 h-5 mt-1">
                          <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_531_3566)">
                              <path d="M7.44629 0.25C7.72051 0.25 7.94903 0.450391 8.0334 0.714062C8.46582 2.07461 9.74199 3.0625 11.2502 3.0625C12.7584 3.0625 14.0346 2.07461 14.467 0.714062C14.5514 0.450391 14.7799 0.25 15.0541 0.25H15.4971C16.2881 0.25 17.051 0.527734 17.6592 1.03398L22.0959 4.72891C22.3279 4.92227 22.4721 5.20352 22.4967 5.50586C22.5213 5.8082 22.4229 6.10703 22.2225 6.33555L20.2537 8.58555C19.8529 9.04609 19.1568 9.09883 18.6857 8.70859L16.8752 7.20039V16C16.8752 17.241 15.8662 18.25 14.6252 18.25H7.8752C6.63418 18.25 5.6252 17.241 5.6252 16V7.20039L3.81465 8.70859C3.34707 9.09883 2.65098 9.04609 2.24668 8.58555L0.277932 6.33555C0.0775409 6.10703 -0.0208966 5.8082 0.00371278 5.50586C0.0283222 5.20352 0.172463 4.92227 0.404494 4.72891L4.84121 1.03398C5.44942 0.527734 6.21231 0.25 7.00332 0.25H7.44629Z" fill="#D97706"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_531_3566">
                                <path d="M0 0.25H22.5V18.25H0V0.25Z" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div>
                          <div className="text-[#111827] text-[15px] font-nunito font-semibold">Dress Code</div>
                          <div className="text-[#4B5563] text-[12px] font-nunito">Respectful clothing for temple visits</div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Item 4: Weather */}
                    <motion.div 
                      className="bg-[#FFFBEB] rounded-lg border border-[#FDE68A] p-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-5 h-5 mt-1">
                          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_531_3574)">
                              <path d="M3.375 11.5C1.51172 11.5 0 9.98828 0 8.125C0 6.63086 0.970313 5.36172 2.3168 4.91875C2.27461 4.6832 2.25 4.43711 2.25 4.1875C2.25 2.01133 4.01133 0.25 6.1875 0.25C7.70273 0.25 9.01758 1.1043 9.675 2.35938C10.1918 1.7582 10.9582 1.375 11.8125 1.375C13.3664 1.375 14.625 2.63359 14.625 4.1875C14.625 4.38086 14.6039 4.56719 14.5687 4.75C14.5863 4.75 14.6074 4.75 14.625 4.75C16.4883 4.75 18 6.26172 18 8.125C18 9.98828 16.4883 11.5 14.625 11.5H3.375ZM3.13594 13.3281C3.18164 13.2402 3.27305 13.1875 3.375 13.1875C3.47695 13.1875 3.56484 13.2402 3.61406 13.3281L4.84805 15.5992C4.99219 15.8629 5.06602 16.1547 5.06602 16.4535V16.559C5.06602 17.4906 4.31016 18.2465 3.37852 18.2465C2.44687 18.2465 1.69102 17.4906 1.69102 16.559V16.4535C1.69102 16.1547 1.76484 15.8594 1.90898 15.5992L3.13594 13.3281ZM8.76094 13.3281C8.80664 13.2402 8.89805 13.1875 9 13.1875C9.10195 13.1875 9.18984 13.2402 9.23906 13.3281L10.473 15.5992C10.6172 15.8629 10.691 16.1547 10.691 16.4535V16.559C10.691 17.4906 9.93516 18.2465 9.00352 18.2465C8.07188 18.2465 7.31602 17.4906 7.31602 16.559V16.4535C7.31602 16.1547 7.38984 15.8594 7.53398 15.5992L8.76094 13.3281ZM13.152 15.5992L14.3859 13.3281C14.4316 13.2402 14.523 13.1875 14.625 13.1875C14.727 13.1875 14.8148 13.2402 14.8641 13.3281L16.098 15.5992C16.2422 15.8629 16.316 16.1547 16.316 16.4535V16.559C16.316 17.4906 15.5602 18.2465 14.6285 18.2465C13.6969 18.2465 12.941 17.4906 12.941 16.559V16.4535C12.941 16.1547 13.0148 15.8594 13.159 15.5992H13.152Z" fill="#D97706"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_531_3574">
                                <path d="M0 0.25H18V18.25H0V0.25Z" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div>
                          <div className="text-[#111827] text-[15px] font-nunito font-semibold">Weather</div>
                          <div className="text-[#4B5563] text-[12px] font-nunito">Mountain conditions may change suddenly</div>
            </div>
          </div>
                    </motion.div>

                    {/* Item 5: Emergency Contact */}
                    <motion.div 
                      className="bg-[#FFFBEB] rounded-lg border border-[#FDE68A] p-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-5 h-5 mt-1">
                          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_531_3582)">
                              <path d="M5.79727 1.11564C5.52656 0.46173 4.81289 0.113683 4.13086 0.300011L1.03711 1.14376C0.425391 1.31251 0 1.86798 0 2.50079C0 11.1984 7.05234 18.2508 15.75 18.2508C16.3828 18.2508 16.9383 17.8254 17.107 17.2137L17.9508 14.1199C18.1371 13.4379 17.7891 12.7242 17.1352 12.4535L13.7602 11.0473C13.1871 10.8082 12.5227 10.9734 12.1324 11.4551L10.7121 13.1883C8.23711 12.0176 6.2332 10.0137 5.0625 7.53868L6.7957 6.12189C7.27734 5.72814 7.44258 5.0672 7.20352 4.49415L5.79727 1.11915V1.11564Z" fill="#D97706"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_531_3582">
                                <path d="M0 0.25H18V18.25H0V0.25Z" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div>
                          <div className="text-[#111827] text-[15px] font-nunito font-semibold">Emergency Contact</div>
                          <div className="text-[#4B5563] text-[12px] font-nunito">Provided post-booking</div>
                        </div>
          </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* PLAN, PAY & PACK SECTION */}
      <PlanPayPackSection />

      {/* TESTIMONIALS SECTION */}
      <Testimonalslanding />

      {/* FAQs SECTION */}
      <FAQsLanding />
    </div>
  );
};

export default LandingPage; 

