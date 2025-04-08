"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productions } from "@/data/productionData";
import { getBlurDataUrl } from "@/utils/imageUtils";

// Define types for the arrow props
interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export default function ProductionContent() {
  // Custom arrow components for the carousel with proper TypeScript props
  const CustomPrevArrow = (props: ArrowProps) => {
    const { onClick } = props;
    return (
      <button
        className="absolute left-0 top-[40%] sm:top-[30%] -translate-y-1/2 -translate-x-full z-30 
                   w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth={2}
          className="w-6 h-6 md:w-7 md:h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    );
  };

  const CustomNextArrow = (props: ArrowProps) => {
    const { onClick } = props;
    return (
      <button
        className="absolute right-0 top-[40%] sm:top-[30%] -translate-y-1/2 translate-x-full z-30 
                   w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth={2}
          className="w-6 h-6 md:w-7 md:h-7"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
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
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen overflow-x-hidden pt-16 bg-[#e17910]">
      <section className="relative flex flex-col justify-center min-h-[calc(100vh-64px)]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/production/production-bg.webp"
            alt="Production background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
            blurDataURL={getBlurDataUrl(1920, 1080)}
            placeholder="blur"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-super-title font-light text-center text-white tracking-widest">
            OUR PRODUCTION
          </h1>
        </div>

        <div className="container max-w-[98%] xl:max-w-[95%] 2xl:max-w-[2000px] mx-auto relative z-10">
          <div className="production-slider relative px-8 md:px-12">
            <Slider {...settings}>
              {productions.map((production) => (
                <div key={production.id} className="px-1">
                  <div className="mb-4">
                    <div className="relative w-full aspect-[3/2] mx-auto overflow-hidden rounded-md">
                      <Link href={production.link}>
                        <Image
                          src={production.image}
                          alt={production.alt}
                          fill
                          sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 22vw"
                          className="object-cover object-center hover:scale-105 transition-transform duration-300"
                          blurDataURL={getBlurDataUrl(800, 533)}
                          placeholder="blur"
                        />
                      </Link>
                    </div>
                    <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl mt-3 md:mt-4 line-clamp-1">
                      {production.title}
                    </h3>
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
