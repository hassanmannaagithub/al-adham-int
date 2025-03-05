'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';

export default function Home() {
  return (
    <main className="h-screen overflow-hidden flex flex-col">
      <Header showProductions={true} />
      
      <section className="relative flex-1">
        <div className="absolute inset-0">
          <Image
            src="/background-family-04.webp"
            alt="Family watching projection"
            fill
            priority
            className="object-cover"
          />
        </div>
        
        <div className="relative h-full flex items-center px-8">
          <div className="max-w-md text-white">
            <h1 className="text-5xl md:text-7xl font-thin mb-2">
              OUR VISION
              <br />
              <span className="text-5xl md:text-7xl font-bold">IS BRIGHT</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8">
              To artfully tell stories that are deeply rooted,
              close to reality, loaded with value to move
              people's lives.
            </p>
            <Link href="#" className="bg-orange-500 hover:bg-orange-600 transition-colors text-white uppercase font-bold px-6 py-3 md:px-8 md:py-4 inline-block">
              Know More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}