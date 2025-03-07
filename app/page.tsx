'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <section className="relative flex-1">
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
        
        <div className="relative h-full flex items-center px-20 pt-[13rem]">
          {/* Adjusted padding-top to account for header overlap */}
          <div className="max-w-xl text-white">
            <h1 className="text-[6.4rem] md:text-[6.4rem] font-light leading-[4.1rem]">
              OUR VISION
            </h1>
            <h1 className="text-[6.4rem] md:text-[6.4rem] font-bold leading-[6.5rem]">IS BRIGHT</h1>
            <p className="max-w-lg text-2xl md:text-2xl font-light mt-2 mb-6 tracking-widest">
              To artfully tell stories that are deeply rooted,
              close to reality, loaded with value to move
              people's lives.
            </p>
            <Link href="#" className="bg-[#ed7e0c] hover:bg-orange-600 transition-colors text-3xl text-white uppercase px-12 py-[0.5rem] inline-block rounded-md">
              Know More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}