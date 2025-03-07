// components/ClientLoadingWrapper.tsx
'use client';

import { useState, useEffect } from 'react';
import ResponsiveLoadingScreen from './ResponsiveLoadingScreen';

interface ClientLoadingWrapperProps {
  children: React.ReactNode;
}

const ClientLoadingWrapper = ({ children }: ClientLoadingWrapperProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add any logic to determine when your app is fully loaded
    // For example, you could check if images are loaded, data is fetched, etc.
    
    // This is handled by the loading screen component now
    return () => {};
  }, []);

  const handleLoadingComplete = () => {
    // Give a slight delay before showing content for a smoother transition
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  };

  return (
    <>
      <ResponsiveLoadingScreen 
        imageSrc="/loading/loading-background.webp"
        loaderPosition={{ x: 50, y: 70 }} // Positioned at 50% from left, 55% from top
        onLoadingComplete={handleLoadingComplete}
      />
      <div 
        style={{ 
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.8s ease-in-out',
          visibility: isLoading ? 'hidden' : 'visible'
        }}
      >
        {children}
      </div>
    </>
  );
};

export default ClientLoadingWrapper;