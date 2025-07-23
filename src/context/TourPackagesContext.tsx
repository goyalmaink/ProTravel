import React, { createContext, useContext, useState, useEffect } from 'react';
import { TourPackage } from '../utils/pdfParser';

interface TourPackagesContextType {
  packages: TourPackage[];
  loading: boolean;
  error: string | null;
  setPackages: (packages: TourPackage[]) => void;
}

const TourPackagesContext = createContext<TourPackagesContextType | undefined>(undefined);

export const TourPackagesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [packages, setPackages] = useState<TourPackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPackages = async () => {
      try {
        const response = await fetch('/src/data/tourPackages.json');
        if (!response.ok) {
          throw new Error('Failed to load tour packages');
        }
        const data = await response.json();
        setPackages(data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load tour packages');
        setLoading(false);
      }
    };

    loadPackages();
  }, []);

  const value = {
    packages,
    loading,
    error,
    setPackages
  };

  return (
    <TourPackagesContext.Provider value={value}>
      {children}
    </TourPackagesContext.Provider>
  );
};

export const useTourPackages = () => {
  const context = useContext(TourPackagesContext);
  if (context === undefined) {
    throw new Error('useTourPackages must be used within a TourPackagesProvider');
  }
  return context;
}; 