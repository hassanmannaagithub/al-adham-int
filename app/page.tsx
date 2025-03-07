'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <section className="relative flex-1">
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
              backgroundColor: 'rgba(158, 92, 33, 0.2)'
            }}
          ></div>
          
          {/* Stronger gradient from left */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(158, 89, 34, 0.92) 0%, rgba(158, 89, 34, 0.75) 20%, rgba(158, 89, 34, 0.38) 35%, rgba(158, 89, 34, 0) 40%)',
              maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.5) 15%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 1) 85%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 1) 85%, transparent 100%)'
            }}
          ></div>
        </div>
        
        {/* Content container with higher z-index to appear above the shadow */}
        <div className="relative h-full flex items-center px-4 sm:px-10 md:px-20 pt-[13rem] justify-center lg:justify-start z-20">
          <div className="max-w-xl text-white text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-[6.4rem] font-light leading-tight md:leading-[4.1rem]">
              OUR VISION
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-[6.4rem] font-bold leading-tight md:leading-[6.5rem]">
              IS BRIGHT
            </h1>
            <p className="max-w-lg text-lg sm:text-xl md:text-2xl font-light mt-2 mb-6 tracking-widest mx-auto lg:mx-0">
              To artfully tell stories that are deeply rooted, close to reality, loaded with value to move people's lives.
            </p>
            <Link
              href="#"
              className="bg-[#ed7e0c] hover:bg-orange-600 transition-colors text-xl sm:text-2xl md:text-3xl text-white uppercase px-6 sm:px-8 md:px-12 py-[0.5rem] inline-block rounded-md"
            >
              Know More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}