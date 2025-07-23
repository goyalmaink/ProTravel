import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Destination from './pages/Destination';
import Home from './pages/Home';
import Packages from './pages/Packages';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';

// Home page components
import Hero from './components/Hero';
import TrendingTips from './components/TrendingTips';
import CuratedForYou from './components/CuratedForYou';
import { TourPackagesProvider } from './context/TourPackagesContext';
import LandingPage from './pages/LandingPage';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    in: {
      opacity: 1,
      y: 0
    },
    out: {
      opacity: 0,
      y: -20
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.6
  };

  return (
    <AnimatePresence mode="wait">
      <motion.main 
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="min-h-screen"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/destinations" element={<Destination />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <TourPackagesProvider>
        <motion.div 
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </motion.div>
      </TourPackagesProvider>
    </Router>
  );
};

export default App; 