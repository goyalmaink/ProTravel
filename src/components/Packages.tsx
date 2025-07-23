import React from 'react';
import { motion } from 'framer-motion';
import { useTourPackages } from '../context/TourPackagesContext';

const Packages: React.FC = () => {
  const { packages, loading, error } = useTourPackages();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 py-8">
        {error}
      </div>
    );
  }

  return (
    <section className="py-16 px-[110px]">
      <h2 className="text-4xl font-bold mb-8 text-center">Our Tour Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg) => (
                <motion.div 
            key={pkg.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
            <div className="relative">
              {/* Placeholder image - you'll need to add actual images to your tour packages data */}
                    <img 
                src={`/images/placeholder-${pkg.id}.jpg`}
                      alt={pkg.title} 
                className="w-full h-48 object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/default-package.jpg';
                }}
              />
              <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                {pkg.daysAndNights}
              </div>
                    </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">{pkg.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{pkg.description}</p>
              
              <div className="flex justify-between items-center">
                <button className="text-primary font-medium hover:text-primary-dark transition-colors duration-300 group relative">
                        Read More
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                      </button>
                
                <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors duration-300">
                        Enquire
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
      </div>
    </section>
  );
};

export default Packages; 