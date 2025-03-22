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
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center"
        onClick={onClick}
      >
        <div className="w-12 h-12 flex items-center justify-center bg-black bg-opacity-50 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
      </button>
    );
  };

  const CustomNextArrow = (props: ArrowProps) => {
    const { onClick } = props;
    return (
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center"
        onClick={onClick}
      >
        <div className="w-12 h-12 flex items-center justify-center bg-black bg-opacity-50 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </button>
    );
  };

  // Responsive settings for the carousel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
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
    <div className="min-h-screen">
      {/* Production Section with background image and orange overlay */}
      <section className="relative min-h-screen pt-28">
        {/* Background image */}
        <div className="absolute inset-0 z-0 bg-[#ed7e0c]">
          <Image
            src="/production-background.webp" 
            alt="Production background"
            fill
            className="object-cover"
            priority
          />
          {/* Orange overlay */}
          <div className="absolute inset-0 bg-[#ed7e0c] opacity-80"></div>
        </div>
        
        {/* Title section */}
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-super-title font-light text-center text-white mt-16 md:mt-24 tracking-widest">
            OUR PRODUCTION
          </h1>
        </div>
        
        {/* Productions Carousel */}
        <div className="container mx-auto px-4 relative z-10 mt-12 md:mt-24 pb-16">
          <div className="production-slider">
            <Slider {...settings}>
              {productions.map((production) => (
                <div key={production.id} className="px-2 md:px-4">
                  <div className="mb-4">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={production.image}
                        alt={production.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-white font-bold text-xl md:text-2xl mt-4">{production.title}</h3>
                    <Link href={production.link}>
                      <div className="inline-block bg-[#5f1e1d] text-white text-sm font-semibold py-1 px-4 mt-2 hover:bg-[#4a1816] transition-colors">
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