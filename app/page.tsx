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
        
        <div className="relative h-full flex items-center px-20 pt-10">
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
    </main>
  );
}