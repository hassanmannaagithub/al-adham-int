"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define types for the arrow props
interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export default function Home() {
  const sliderRef = useRef(null);
  // State to track the gradient settings based on screen size
  const [gradientStyles, setGradientStyles] = useState({
    background: `linear-gradient(
      to right, 
      rgba(158, 89, 34, 0.92) 0%, 
      rgba(158, 89, 34, 0.75) 20%, 
      rgba(158, 89, 34, 0.38) 35%, 
      rgba(158, 89, 34, 0) 40%
    )`,
  });

  // Update gradient when window resizes
  useEffect(() => {
    // Define the handler function
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        // Small screens - extreme spread with very weak opacity
        setGradientStyles({
          background: `linear-gradient(
            to right, 
            rgba(158, 89, 34, 0.6) 0%, 
            rgba(158, 89, 34, 0.35) 15%, 
            rgba(158, 89, 34, 0.15) 40%, 
            rgba(158, 89, 34, 0.08) 70%,
            rgba(158, 89, 34, 0) 100%
          )`,
        });
      } else if (width < 768) {
        // Medium screens - significant spread, weaker opacity
        setGradientStyles({
          background: `linear-gradient(
            to right, 
            rgba(158, 89, 34, 0.7) 0%, 
            rgba(158, 89, 34, 0.45) 15%, 
            rgba(158, 89, 34, 0.2) 40%, 
            rgba(158, 89, 34, 0.1) 65%,
            rgba(158, 89, 34, 0) 85%
          )`,
        });
      } else {
        // Large screens - original gradient
        setGradientStyles({
          background: `linear-gradient(
            to right, 
            rgba(158, 89, 34, 0.92) 0%, 
            rgba(158, 89, 34, 0.75) 20%, 
            rgba(158, 89, 34, 0.38) 35%, 
            rgba(158, 89, 34, 0) 40%
          )`,
        });
      }
    };

    // Set gradient on initial load
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Custom arrow components for the carousel with proper TypeScript props
  const CustomPrevArrow = (props: ArrowProps) => {
    const { onClick } = props;
    return (
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center"
        onClick={onClick}
      >
        {/* You can replace this with your custom image */}
        <div className="w-12 h-12 flex items-center justify-center bg-black bg-opacity-50 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
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
        {/* You can replace this with your custom image */}
        <div className="w-12 h-12 flex items-center justify-center bg-black bg-opacity-50 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </button>
    );
  };

  // Carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    adaptiveHeight: true,
  };

  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Slider ref={sliderRef} {...settings} className="h-full">
        {/* First slide - Current homepage content */}
        <div className="h-screen">
          <section className="relative h-full">
            {/* Background image container */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="relative w-[112%] h-full">
                <Image
                  src="/home/imgs/home-background.jpg"
                  alt="Family watching projection"
                  fill
                  priority
                  className="object-cover object-left scale-x-[-1] translate-y-10"
                />
              </div>
            </div>

            {/* Multiple overlays to achieve the exact effect */}
            <div className="absolute inset-0 z-10">
              {/* Base warm overlay across entire image */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: "rgba(158, 92, 33, 0.2)",
                }}
              ></div>

              {/* Responsive gradient from left */}
              <div
                className="absolute inset-0"
                style={{
                  ...gradientStyles,
                  maskImage:
                    "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.5) 15%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 1) 85%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 1) 85%, transparent 100%)",
                }}
              ></div>
            </div>

            {/* Content container with higher z-index to appear above the shadow */}
            <div className="relative h-full flex items-center px-4 sm:px-10 md:px-20 pt-2 sm:pt-4 md:pt-8 lg:pt-[13rem] justify-center lg:justify-start z-20">
              <div className="max-w-xl text-white text-center lg:text-left">
                <h1 className="text-[4rem] md:text-[6.4rem] font-light leading-tight md:leading-[4.1rem]">
                  OUR VISION
                </h1>
                <h1 className="text-[4rem] md:text-[6.4rem] font-bold leading-tight md:leading-[6.5rem]">
                  IS BRIGHT
                </h1>
                <p className="max-w-lg text-lg sm:text-xl md:text-2xl font-light mt-2 mb-6 tracking-widest mx-auto lg:mx-0">
                  To artfully tell stories that are deeply rooted, close to
                  reality, loaded with value to move people's lives.
                </p>
                <Link
                  href="/production"
                  className="bg-[#ed7e0c] hover:bg-orange-600 transition-colors text-xl sm:text-2xl md:text-3xl text-white uppercase px-6 sm:px-8 md:px-12 py-[0.5rem] inline-block rounded-md"
                >
                  Know More
                </Link>
              </div>
            </div>
          </section>
        </div>

        {/* Second slide - Local video with black background */}
        {/* Second slide - Local video with black background */}
        <div className="h-screen bg-black">
          <div className="relative h-full flex items-center justify-center pt-[80px]">
            {" "}
            {/* Add padding-top to account for header height */}
            <div className="w-full max-w-4xl px-4 sm:px-0">
              <div className="relative pb-[56.25%]">
                {" "}
                {/* 16:9 aspect ratio */}
                <video
                  className="absolute top-0 left-0 w-full h-full"
                  controls
                  poster="/videos/trailer-1.png"
                >
                  <source src="/videos/trailer-1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
