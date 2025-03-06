'use client';

import { useEffect, useState, useRef } from 'react';

export default function HeaderSpacer() {
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    // Initial measurement
    const updateHeaderHeight = () => {
      const header = document.getElementById('main-header');
      if (header) {
        // Use clientHeight instead of offsetHeight for more stable measurements
        const newHeight = header.clientHeight;
        // Only update if there's a meaningful change to prevent reflows
        if (Math.abs(newHeight - headerHeight) > 1) {
          setHeaderHeight(newHeight);
        }
      }
    };

    // Run initial measurement
    updateHeaderHeight();
    
    // Set up a short delay for initial render
    const timeoutId = setTimeout(updateHeaderHeight, 200);

    // Setup ResizeObserver for more accurate size tracking
    if (typeof ResizeObserver !== 'undefined') {
      const header = document.getElementById('main-header');
      if (header) {
        resizeObserverRef.current = new ResizeObserver(updateHeaderHeight);
        resizeObserverRef.current.observe(header);
      }
    } else {
      // Fallback to resize event if ResizeObserver is not supported
      window.addEventListener('resize', updateHeaderHeight);
    }

    // Clean up
    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
      window.removeEventListener('resize', updateHeaderHeight);
      clearTimeout(timeoutId);
    };
  }, [headerHeight]);

  return <div style={{ height: `${headerHeight}px` }} aria-hidden="true" />;
}