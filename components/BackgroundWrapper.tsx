// components/BackgroundWrapper.tsx - Client Component
'use client';

import { usePathname } from 'next/navigation';

export default function BackgroundWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Define background colors for different paths
  const getBackgroundColor = () => {
    switch (pathname) {
      case '/':
        return 'bg-white'; // Home page
      case '/about':
        return 'bg-gray-100'; // About page
      case '/services':
        return 'bg-blue-50'; // Services page
      case '/team':
        return 'bg-[#dfd9ca]'; // Portfolio page
      case '/contact':
        return 'bg-green-50'; // Contact page
      default:
        return 'bg-white'; // Default background
    }
  };

  return (
    <div className={`min-h-screen ${getBackgroundColor()}`}>
      {children}
    </div>
  );
}