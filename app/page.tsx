'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <section className="relative flex-1">
        <div className="absolute inset-0 overflow-hidden">
          <div className="relative w-[111%] h-full">
            <Image
              src="/home/imgs/home-background.jpg"
              alt="Family watching projection"
              fill
              priority
              className="object-cover object-left scale-x-[-1]"
            />
          </div>
        </div>
        
        <div className="relative h-full flex items-center px-20 pt-20">
          {/* Adjusted padding-top to account for header overlap */}
          <div className="max-w-xl text-white">
            <h1 className="text-8xl md:text-8xl font-light mb-2">
              OUR VISION
              <br />
              <span className="font-bold">IS BRIGHT</span>
            </h1>
            <p className="text-2xl md:text-2xl font-light mb-6 md:mb-8">
              To artfully tell stories that are deeply rooted,
              close to reality, loaded with value to move
              people's lives.
            </p>
            <Link href="#" className="bg-orange-500 hover:bg-orange-600 transition-colors text-3xl text-white uppercase font-bold px-10 py-3 md:px-14 md:py-3 inline-block rounded-md">
              Know More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}