"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { getBlurDataUrl } from "@/utils/imageUtils";
import Search from "./Search";

interface HeaderProps {
  showProductions?: boolean;
}

export default function Header({ showProductions = true }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const { scrollY } = useScroll();
  const prevScrollYRef = useRef<number>(0);
  const lastToggleTimeRef = useRef<number>(Date.now());
  const scrollDirectionBufferRef = useRef<number[]>([]);

  // Check if screen width is larger than 1320px
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1320);
    };

    // Set initial value
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Use effect for smoother scroll handling with debounce
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const now = Date.now();

      // Add current direction to buffer (1 for down, -1 for up)
      scrollDirectionBufferRef.current.push(
        currentScrollY > prevScrollYRef.current ? 1 : -1
      );

      // Keep only the last 5 directions
      if (scrollDirectionBufferRef.current.length > 5) {
        scrollDirectionBufferRef.current.shift();
      }

      // Calculate dominant direction (sum of buffer)
      const dominantDirection = scrollDirectionBufferRef.current.reduce(
        (a, b) => a + b,
        0
      );

      // Only toggle if enough time has passed (debounce)
      if (now - lastToggleTimeRef.current > 100) {
        if (currentScrollY < 50) {
          // Always show header near the top
          setIsHeaderVisible(true);
        } else if (dominantDirection < -2) {
          // Consistently scrolling up - show header
          setIsHeaderVisible(true);
          lastToggleTimeRef.current = now;
        } else if (dominantDirection > 2 && currentScrollY > 100) {
          // Consistently scrolling down and not at the top - hide header
          setIsHeaderVisible(false);
          lastToggleTimeRef.current = now;
        }
      }

      prevScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    if (!isDesktop) {
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      id="main-header"
      className="fixed top-0 left-0 w-full bg-[#5f1e1d] text-white z-50"
      animate={{
        y: isHeaderVisible ? 0 : "calc(-100% + 10px)",
      }}
      transition={{
        type: "tween",
        duration: 0.3,
        ease: "easeInOut",
      }}
      initial={{ y: 0 }}
    >
      {/* Changed from container with fixed margin to a responsive padding approach */}
      <div
        className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[3.7rem] py-4 flex flex-col xl:flex-row justify-between items-center"
        style={{ flexDirection: isDesktop ? "row" : "column" }}
      >
        <div
          className="w-full xl:w-auto flex items-center justify-between"
          style={{ width: isDesktop ? "auto" : "100%" }}
        >
          <Link href="/" className="flex items-center">
            <div className="mr-3 sm:mr-4 md:mr-5">
              <Image
                src="/logo-1.webp"
                width={60}
                height={60}
                alt="Al Adham Productions Logo"
                className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[65px] md:h-[65px] xl:w-[69px] xl:h-[69px] rounded-full bg-orange-500"
                blurDataURL={getBlurDataUrl(60, 60)}
                placeholder="blur"
              />
            </div>
            <div className="flex flex-col pt-2 sm:pt-3 md:pt-4">
              <Image
                src="/logo-2.webp"
                width={218}
                height={62}
                alt="Al Adham Productions Logo"
                className="w-[120px] sm:w-[135px] md:w-[145px] lg:w-[180px] xl:w-[218px] h-auto"
                blurDataURL={getBlurDataUrl(218, 62)}
                placeholder="blur"
              />
            </div>
          </Link>

          {/* Hamburger Menu Button - Only visible on screens smaller than 1320px */}
          <button
            className="xl:hidden focus:outline-none p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            style={{ display: isDesktop ? "none" : "block" }}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 sm:w-9 sm:h-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 sm:w-9 sm:h-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links with responsive text sizes */}
        <nav
          className={`
          ${
            isMenuOpen ? "flex" : "hidden"
          } xl:flex flex-col xl:flex-row w-full xl:w-auto 
          mt-2 items-center gap-2 sm:gap-3 md:gap-4 xl:gap-10
          ${!isDesktop ? "py-4 px-2" : ""}
        `}
          style={{
            display: isDesktop ? "flex" : isMenuOpen ? "flex" : "none",
            flexDirection: isDesktop ? "row" : "column",
            width: isDesktop ? "auto" : "100%",
          }}
        >
          <Link
            href="/about"
            onClick={handleLinkClick}
            className="uppercase font-semibold tracking-widest xxl:text-xl sm:text-lg hover:text-orange-400 transition-colors py-2 xl:py-0"
            style={{ padding: isDesktop ? "0" : "0.5rem 0" }}
          >
            About Us
          </Link>
          <Link
            href="/team"
            onClick={handleLinkClick}
            className="uppercase font-semibold tracking-widest xxl:text-xl sm:text-lg hover:text-orange-400 transition-colors py-2 xl:py-0"
            style={{ padding: isDesktop ? "0" : "0.5rem 0" }}
          >
            Our Team
          </Link>
          <Link
            href="/services"
            onClick={handleLinkClick}
            className="uppercase font-semibold tracking-widest xxl:text-xl sm:text-lg hover:text-orange-400 transition-colors py-2 xl:py-0"
            style={{ padding: isDesktop ? "0" : "0.5rem 0" }}
          >
            Services
          </Link>
          <Link
            href="/production"
            onClick={handleLinkClick}
            className="uppercase font-semibold tracking-widest xxl:text-xl sm:text-lg hover:text-orange-400 transition-colors py-2 xl:py-0"
            style={{ padding: isDesktop ? "0" : "0.5rem 0" }}
          >
            Our Production
          </Link>
          <Link
            href="/clients"
            onClick={handleLinkClick}
            className="uppercase font-semibold tracking-widest xxl:text-xl sm:text-lg hover:text-orange-400 transition-colors py-2 xl:py-0"
            style={{ padding: isDesktop ? "0" : "0.5rem 0" }}
          >
            Our Clients
          </Link>
          <Link
            href="/contacts"
            onClick={handleLinkClick}
            className="uppercase font-semibold tracking-widest xxl:text-xl sm:text-lg hover:text-orange-400 transition-colors py-2 xl:py-0"
            style={{ padding: isDesktop ? "0" : "0.5rem 0" }}
          >
            Contact Us
          </Link>
          <Search />
        </nav>
      </div>

      {/* The visible strip that will remain when header is collapsed */}
      <div className="h-[10px] w-full bg-[#5f1e1d]"></div>
    </motion.header>
  );
}
