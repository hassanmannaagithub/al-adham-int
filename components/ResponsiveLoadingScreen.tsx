// components/ResponsiveLoadingScreen.tsx
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import CircleLoader from './CircleLoader';

interface ResponsiveLoadingScreenProps {
  imageSrc: string;
  // Position in percentages (0-100)
  loaderPosition?: { 
    x: number; // percentage from left
    y: number; // percentage from top
  };
  centered?: boolean;
  onLoadingComplete?: () => void;
}

const ResponsiveLoadingScreen = ({ 
  imageSrc, 
  loaderPosition = { x: 50, y: 50 }, // Default to center
  centered = false,
  onLoadingComplete
}: ResponsiveLoadingScreenProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or fetch actual loading state
    const timer = setTimeout(() => {
      setLoading(false);
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, 2500); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
        >
          <div className="relative flex items-center justify-center w-full h-full bg-black">
            <div className="relative w-full h-full max-w-screen max-h-screen">
              <Image
                src={imageSrc}
                alt="Loading Background"
                fill
                className="object-contain object-center"
                priority
                sizes="100vw"
              />
            
            {centered ? (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <CircleLoader size={60} />
              </div>
            ) : (
              <div 
                className="absolute" 
                style={{ 
                  left: `${loaderPosition.x}%`, 
                  top: `${loaderPosition.y}%`,
                  transform: 'translate(-50%, -50%)' // Center the loader on the exact percentage point
                }}
              >
                <CircleLoader size={60} />
              </div>
            )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveLoadingScreen;