'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productions } from '@/data/productionData';

// Define types for the arrow props
interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export default function ProductionPage() {
  // Custom arrow components for the carousel with proper TypeScript props
  const CustomPrevArrow = (props: ArrowProps) => {
    const { onClick } = props;
    return (
      <button
        className="absolute -left-2 sm:-left-4 md:-left-8 lg:-left-12 top-[20%] sm:top-[22%] md:top-[25%] -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center"
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.5} className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 20l-8-8 8-8" />
        </svg>
      </button>
    );
  };

  const CustomNextArrow = (props: ArrowProps) => {
    const { onClick } = props;
    return (
      <button
        className="absolute -right-2 sm:-right-4 md:-right-8 lg:-right-12 top-[20%] sm:top-[22%] md:top-[25%] -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center"
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.5} className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 4l8 8-8 8" />
        </svg>
      </button>
    );
  };

  // Responsive settings for the carousel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Set back to 4 as requested
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3, // Set back to 3
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="min-h-screen overflow-x-hidden pt-16 bg-[#e17910]">
      {/* Production Section with background image */}
      <section className="relative min-h-[calc(100vh-64px)] pt-20 md:pt-28 pb-16">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/production/production-bg.webp" 
            alt="Production background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        
        {/* Title section */}
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-super-title font-light text-center text-white mt-10 sm:mt-16 md:mt-20 tracking-widest">
            OUR PRODUCTION
          </h1>
        </div>
        
        {/* Productions Carousel */}
        <div className="container max-w-[98%] xl:max-w-[95%] 2xl:max-w-[2000px] mx-auto relative z-10 mt-8 sm:mt-12 md:mt-24 pb-8 md:pb-16">
          <div className="production-slider relative mx-2 sm:mx-4 md:mx-6">
            <Slider {...settings}>
              {productions.map((production) => (
                <div key={production.id} className="px-1">
                  <div className="mb-4">
                    <div className="relative w-full aspect-[3/2] mx-auto overflow-hidden rounded-md">
                      <Image
                        src={production.image}
                        alt={production.alt}
                        fill
                        sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 22vw"
                        className="object-cover object-center"
                      />
                    </div>
                    <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl mt-3 md:mt-4 line-clamp-1">{production.title}</h3>
                    <Link href={production.link}>
                      <div className="inline-block bg-[#5f1e1d] text-white text-xs sm:text-sm font-light py-1 px-2 mt-2 hover:bg-[#4a1816] transition-colors rounded-md">
                        KNOW MORE
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}