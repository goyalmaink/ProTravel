import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from '../components/Hero';
import GiveUsACall from '../components/GiveUsACall';
import CuratedForYou from '../components/CuratedForYou';
import PerfectTrip from '../components/PerfectTrip';
import WhyTravelProfessor from '../components/WhyTravelProfessor';
import Newsletter from '../components/Newsletter';
import { ThePackagesHome, TrendingTips } from '../components/ThePackagesHome';
import Testimonial from '../components/Testimonial';
import Masonry from '../components/Masonry';
import BlogSection from '../components/BlogSection';
import ThePackages from '../components/ThePackages';
import RollingGallery from '../components/RollingGallery';
import ImageFrame from '../components/ImageFrame';
//import RollingGallery from '../components/RollingGallery';

const Home: React.FC = () => {
  // Ref for the first section after hero
  const trendingTipsRef = useRef<HTMLDivElement>(null);
  
  // Framer Motion scroll progress for the trending tips section
  const { scrollYProgress } = useScroll({
    target: trendingTipsRef,
    offset: ["start end", "start start"]
  });
  
  // Animate translateY from 100px to 0
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

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

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Sample data for Blog Section
  const blogPosts = [
    {
      category: "Travel Professor' Pick",
      readTime: "9 minute Read",
      title: "Climate change is beginning to have a devastating impact on forests across the world",
      source: "VOX",
      timeAgo: "6 Hours Ago",
      imageUrl: "/Testimonial/blog-1.jpg"
    },
    {
      category: "Changing Travel",
      readTime: "5 minute Read",
      title: "The future of sustainable tourism: How technology is shaping eco-friendly travel",
      source: "VOX",
      timeAgo: "2 hours ago",
      imageUrl: "/Testimonial/blog-2.jpg"
    },
    {
      category: "Changing Travel",
      readTime: "2 minute Read",
      title: "Top 10 hidden gems in Southeast Asia that tourists haven't discovered yet",
      source: "VOX",
      timeAgo: "3 days ago",
      imageUrl: "/Testimonial/blog-3.jpg"
    },
    {
      category: "Travel Professor' Pick",
      readTime: "9 minute Read",
      title: "How local communities are benefiting from responsible tourism initiatives",
      source: "VOX",
      timeAgo: "4 Days",
      imageUrl: "/Testimonial/blog-4.jpg"
    }
  ];

  return (
    <motion.div 
      className="min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Hero />
      
      {/* Spacer to allow scrolling past hero */}
      <div style={{ height: '100vh' }} />
      {/*
      <motion.div 
        ref={trendingTipsRef}
        style={{ 
          y, 
          backgroundImage: 'url(/images/exp.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
         }}
        variants={sectionVariants}
        className="relative z-10"
      >
        <ThePackagesHome />
        <TrendingTips />
      </motion.div >*/}]]]\
      <motion.div variants={sectionVariants} className="relative z-10 bg-[#FFECCE]">
        <ThePackagesHome />
      </motion.div>
      <motion.div variants={sectionVariants} className="relative z-10" style={{ background: 'linear-gradient(158deg, #F36E20 0%, #FDAF16 100%)' }}>
        <TrendingTips />
      </motion.div>
      <motion.div variants={sectionVariants} className="relative z-10 bg-white">
        <WhyTravelProfessor />
      </motion.div>
      <motion.div variants={sectionVariants} className="relative z-10 bg-white">
        <CuratedForYou />
      </motion.div>
      <motion.div variants={sectionVariants} className="relative z-10 bg-white">
        <RollingGallery />
      </motion.div>
      
      <motion.div variants={sectionVariants} className="relative z-10 bg-white">
        <GiveUsACall />
      </motion.div>
      <motion.div variants={sectionVariants} className="relative z-10 bg-white">
        <ImageFrame />
      </motion.div>
      <motion.div variants={sectionVariants} className="relative z-10 bg-white">
        <PerfectTrip />
      </motion.div>


      <motion.div variants={sectionVariants} className="relative z-10 bg-white">
       
          <Masonry />
    
      </motion.div>
      <motion.div variants={sectionVariants} className="relative z-10 bg-white">
        <Testimonial />
      </motion.div>
      <motion.div variants={sectionVariants} className="relative z-10">
        <BlogSection blogPosts={blogPosts} />
      </motion.div>
      <motion.div variants={sectionVariants} className="relative z-10 bg-white">
        <Newsletter />
      </motion.div>
    </motion.div>
  );
};

export default Home; 