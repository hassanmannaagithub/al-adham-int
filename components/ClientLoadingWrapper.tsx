'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CircleLoader from './CircleLoader';

interface ClientLoadingWrapperProps {
  children: React.ReactNode;
}

const ClientLoadingWrapper = ({ children }: ClientLoadingWrapperProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    // Simulate loading time or connect to actual loading events
    const timer = setTimeout(() => {
      handleLoadingComplete();
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    // First, animate the red overlay away
    setShowOverlay(false);
    
    // Then, after the overlay animation completes, transition to the main content
    setTimeout(() => {
      setIsLoading(false);
    }, 1500); // This should match the duration of the overlay exit animation
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      {/* Background image that stays throughout the process */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/loading/loading-background.webp)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundColor: '#5f1e1d', // Fallback color
          backgroundRepeat: 'no-repeat',
          zIndex: 1
        }}
      />
      
      {/* Red overlay that fades away first */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 0 0)' }}
            exit={{ clipPath: 'inset(0 0 0 100%)' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{
              position: 'absolute',
              zIndex: 10,
              top: '20%',
              left: '20%',
              right: '20%',
              bottom: '20%',
              backgroundColor: '#5f1e1d',
              opacity: 1,
            }}
          />
        )}
      </AnimatePresence>
      
      {/* Loader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'absolute',
              zIndex: 20,
              bottom: '30%',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          >
            <CircleLoader size={40} color="#ffffff" />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{
          position: 'relative',
          zIndex: 5,
          width: '100%',
          height: '100%',
          visibility: isLoading ? 'hidden' : 'visible'
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ClientLoadingWrapper;