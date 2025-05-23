"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CircleLoader from "./CircleLoader";

interface ClientLoadingWrapperProps {
  children: React.ReactNode;
}

const ClientLoadingWrapper = ({ children }: ClientLoadingWrapperProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);
  const [showBackground, setShowBackground] = useState(true);
  const [loaderPosition, setLoaderPosition] = useState("center"); // 'center' or 'bottom'
  const [removeAllStyles, setRemoveAllStyles] = useState(false);

  useEffect(() => {
    // Simulate loading time or connect to actual loading events
    const timer = setTimeout(() => {
      handleLoadingComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    // 1. First, move the loader from center to bottom
    setLoaderPosition("bottom");

    // 2. After loader animation completes, animate the red overlay away
    setTimeout(() => {
      setShowOverlay(false);
    }, 700); // Time for loader to drop

    // 3. After red overlay fades, fade away the background AND START FADING IN CONTENT
    setTimeout(() => {
      setShowBackground(false);
      setIsLoading(false); // Start fading in the main content at the same time

      // 4. After all animations complete, remove all wrapper styles
      setTimeout(() => {
        setRemoveAllStyles(true);
      }, 1000); // Allow time for content to fade in
    }, 700 + 1500); // Loader drop (700ms) + overlay fade time (1500ms)
  };

  // If all animations are complete and styles should be removed, just render children directly
  if (removeAllStyles) {
    return <>{children}</>;
  }

  // During loading and animations, use the styled wrapper
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background image that stays until explicitly faded */}
      <AnimatePresence>
        {showBackground && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: "url(/loading/loading-background.webp)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundColor: "#5f1e1d", // Fallback color
              backgroundRepeat: "no-repeat",
              zIndex: 10, // Increased z-index to be above main content initially
            }}
          />
        )}
      </AnimatePresence>

      {/* Red overlay that fades away after loader drops */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ clipPath: "inset(0 0 0 0)" }}
            exit={{ clipPath: "inset(0 0 0 100%)" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{
              position: "absolute",
              zIndex: 20,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "#5f1e1d",
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
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
            }}
            exit={{ opacity: 0 }}
            animate={{
              top: loaderPosition === "center" ? "50%" : "70%",
              y: loaderPosition === "center" ? "-50%" : "0",
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            style={{
              position: "absolute",
              zIndex: 30,
              x: "-50%",
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
        transition={{ duration: 1.0, ease: "easeInOut" }}
        style={{
          position: "relative",
          zIndex: 5,
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ClientLoadingWrapper;
