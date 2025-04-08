"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { getBlurDataUrl } from "@/utils/imageUtils";
import AboutContent from "./components/pages/AboutContent";
import ServicesContent from "./components/pages/ServicesContent";
import ClientsContent from "./components/pages/ClientsContent";
import TeamContent from "./components/pages/TeamContent";
import ContactsContent from "./components/pages/ContactsContent";
import ProductionContent from "./components/pages/ProductionContent";

// Dynamically import Slider
const DynamicSlider = dynamic(() => import("react-slick"), {
  ssr: false,
  loading: () => <div className="h-screen bg-black" />,
}) as typeof Slider;

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
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
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

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Custom arrow components for the carousel
  const CustomPrevArrow = (props: ArrowProps) => {
    const { onClick } = props;
    return (
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center"
        onClick={onClick}
      >
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
    <div className="flex flex-col">
      {/* Hero Section with Carousel */}
      <div className="h-screen relative">
        <DynamicSlider ref={sliderRef} {...settings} className="h-full">
          {/* First slide - Hero content */}
          <div className="h-screen">
            <section className="relative h-full">
              <div className="absolute inset-0 overflow-hidden">
                <div className="relative w-[112%] h-full">
                  <Image
                    src="/home/imgs/home-background.jpg"
                    alt="Family watching projection"
                    fill
                    priority
                    sizes="100vw"
                    quality={75}
                    className="object-cover object-left scale-x-[-1] translate-y-10"
                    blurDataURL={getBlurDataUrl(1920, 1080)}
                    placeholder="blur"
                  />
                </div>
              </div>

              <div className="absolute inset-0 z-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundColor: "rgba(158, 92, 33, 0.2)",
                  }}
                ></div>

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

          {/* Second slide - Video */}
          <div className="h-screen bg-black">
            <div className="relative h-full flex items-center justify-center pt-[80px]">
              <div className="w-full max-w-4xl px-4 sm:px-0">
                <div className="relative pb-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/RP1SE9I5glM"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </DynamicSlider>
      </div>

      {/* Production Section */}
      <ProductionContent />

      {/* Clients Section */}
      <ClientsContent />

      {/* Services Section */}
      <ServicesContent />

      {/* About Section */}
      <AboutContent />

      {/* Team Section */}
      <TeamContent />

      {/* Contacts Section */}
      <ContactsContent />
    </div>
  );
}
