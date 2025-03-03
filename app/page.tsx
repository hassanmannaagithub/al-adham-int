'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header showProductions={true} />
      
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/background-family.webp"
            alt="Family watching projection"
            fill
            priority
            className="object-cover brightness-75"
          />
        </div>
        
        <div className="relative container mx-auto px-8 h-full flex flex-col justify-center">
          <div className="max-w-md text-white">
            <h1 className="text-6xl font-bold mb-2">
              OUR VISION
              <br />
              <span className="text-7xl">IS BRIGHT</span>
            </h1>
            <p className="text-xl mb-8">
              To artfully tell stories that are deeply rooted,
              close to reality, loaded with value to move
              people's lives.
            </p>
            <Link href="#" className="bg-orange-500 hover:bg-orange-600 transition-colors text-white uppercase font-bold px-8 py-4 inline-block">
              Know More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}