'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface HeaderProps {
  showProductions?: boolean;
}

export default function Header({ showProductions = true }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#5c1816] text-white">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="mr-2">
              <Image src="/logo-1.webp" width={90} height={90} alt="Al Adham Productions Logo" className="rounded-full bg-orange-500" />
            </div>
            <div className="flex flex-col">
            <Image src="/logo-2.webp" width={218} height={62} alt="Al Adham Productions Logo"/>
              {/* <span className="text-2xl font-light">al adham</span> */}
              {/* {showProductions && <span className="text-lg uppercase tracking-widest">productions</span>} */}
            </div>
          </Link>
          
          {/* Hamburger Menu Button - Only visible on mobile */}
          <button 
            className="md:hidden focus:outline-none" 
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
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-auto mt-4 md:mt-0 items-center gap-4 md:gap-8`}>
          <Link href="/production" className="uppercase font-normal text-lg hover:text-orange-400 transition-colors py-2 md:py-0">Our Production</Link>
          <Link href="/clients" className="uppercase font-normal text-lg hover:text-orange-400 transition-colors py-2 md:py-0">Our Clients</Link>
          <Link href="/about" className="uppercase font-normal text-lg hover:text-orange-400 transition-colors py-2 md:py-0">About Us</Link>
          <Link href="/team" className="uppercase font-normal text-lg hover:text-orange-400 transition-colors py-2 md:py-0">Our Team</Link>
          <Link href="/services" className="uppercase font-normal text-lg hover:text-orange-400 transition-colors py-2 md:py-0">Services</Link>
          <Link href="/contacts" className="uppercase font-normal text-lg hover:text-orange-400 transition-colors py-2 md:py-0">Contacts</Link>
          <button aria-label="Search" className="text-white py-2 md:py-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}