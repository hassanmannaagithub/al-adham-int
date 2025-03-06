// Updated Header.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

interface HeaderProps {
  showProductions?: boolean;
}

export default function Header({ showProductions = true }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const headerRef = useRef<HTMLElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Get initial header height
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
      // Set a CSS variable for header height that can be used in layout
      document.documentElement.style.setProperty('--header-height', `${headerRef.current.offsetHeight}px`);
    }

    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      
      // Check if we're scrolled down at all
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Determine scroll direction and control visibility
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide header
        setIsVisible(false);
      } else {
        // Scrolling up - show header
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);

      // Update header height when it changes
      if (headerRef.current) {
        const newHeight = headerRef.current.offsetHeight;
        if (newHeight !== headerHeight) {
          setHeaderHeight(newHeight);
          document.documentElement.style.setProperty('--header-height', `${newHeight}px`);
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', controlHeader);
    
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY, headerHeight]);

  return (
    <header 
      ref={headerRef}
      className={`
        fixed top-0 left-0 w-full bg-[#5c1816] text-white z-50
        transition-all duration-300 ease-in-out
        ${isScrolled ? 'shadow-lg' : ''}
        ${isVisible ? 'translate-y-0' : '-translate-y-[calc(100%-10px)]'}
      `}
    >
      <div className="container mx-auto px-4 py-4 flex flex-col xl:flex-row justify-between items-center">
        <div className="w-full xl:w-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="mr-2">
              <Image 
                src="/logo-1.webp" 
                width={60} 
                height={60} 
                alt="Al Adham Productions Logo" 
                className={`
                  w-[60px] h-[60px] xl:w-[90px] xl:h-[90px] rounded-full bg-orange-500
                  transition-all duration-300
                  ${isScrolled ? 'xl:w-[70px] xl:h-[70px]' : ''}
                `}
              />
            </div>
            <div className="flex flex-col">
              <Image 
                src="/logo-2.webp" 
                width={218} 
                height={62} 
                alt="Al Adham Productions Logo" 
                className={`
                  w-[150px] h-auto xl:w-[218px]
                  transition-all duration-300
                  ${isScrolled ? 'xl:w-[180px]' : ''}
                `}
              />
            </div>
          </Link>
          
          {/* Hamburger Menu Button - Only visible on screens smaller than 1280px */}
          <button 
            className="xl:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Navigation Links */}
        <nav className={`
          ${isMenuOpen ? 'flex' : 'hidden'} xl:flex flex-col xl:flex-row w-full xl:w-auto 
          mt-4 xl:mt-0 items-center gap-4 xl:gap-8
          transition-all duration-300
        `}>
          <Link href="/production" className="uppercase font-normal text-lg hover:text-orange-400 transition-colors py-2 xl:py-0">Our Production</Link>
          <Link href="/clients" className="uppercase font-normal text-lg hover:text-orange-400 transition-colors py-2 xl:py-0">Our Clients</Link>
          <Link href="/about" className="uppercase font-normal text-lg hover:text-orange-400 transition-colors py-2 xl:py-0">About Us</Link>
          <Link href="/team" className="uppercase font-normal text-lg hover:text-orange-400 transition-colors py-2 xl:py-0">Our Team</Link>
          <Link href="/services" className="uppercase font-normal text-lg hover:text-orange-400 transition-colors py-2 xl:py-0">Services</Link>
          <Link href="/contacts" className="uppercase font-normal text-lg hover:text-orange-400 transition-colors py-2 xl:py-0">Contacts</Link>
          <button aria-label="Search" className="text-white py-2 xl:py-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </nav>
      </div>

      {/* Visual indicator for collapsed header */}
      <div className={`
        h-[10px] w-full bg-[#5c1816] opacity-0
        transition-opacity duration-300
        ${!isVisible ? 'opacity-100' : ''}
      `}></div>
    </header>
  );
}