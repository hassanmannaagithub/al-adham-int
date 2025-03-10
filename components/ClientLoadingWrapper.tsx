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
  const [loaderPosition, setLoaderPosition] = useState('center'); // 'center' or 'bottom'

  useEffect(() => {
    // Simulate loading time or connect to actual loading events
    const timer = setTimeout(() => {
      handleLoadingComplete();
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    // First, move the loader from center to bottom
    setLoaderPosition('bottom');
    
    // After loader animation completes, animate the overlay away
    setTimeout(() => {
      setShowOverlay(false);
    }, 700); // Time for loader to drop
    
    // Then, after the overlay animation completes, transition to the main content
    setTimeout(() => {
      setIsLoading(false);
    }, 2200); // 700ms for loader drop + 1500ms for overlay fade
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      {/* Background image that fades with the overlay */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
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
        )}
      </AnimatePresence>
      
      {/* Red overlay that fades away with the background */}
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
      
      {/* Loader with animated position */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ 
              top: '50%',
              left: '50%',
              x: '-50%',
              y: '-50%'
            }}
            exit={{ opacity: 0 }}
            animate={{ 
              top: loaderPosition === 'center' ? '50%' : '70%',
              y: loaderPosition === 'center' ? '-50%' : '0'
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            style={{
              position: 'absolute',
              zIndex: 20,
              x: '-50%'
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