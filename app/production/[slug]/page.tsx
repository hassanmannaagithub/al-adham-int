'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getProductionBySlug } from '@/data/productionData';

export default function ProductionDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [production, setProduction] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch the production data from an API
    // For now, we'll use our data file
    setLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      const foundProduction = getProductionBySlug(slug);
      setProduction(foundProduction || null);
      setLoading(false);
    }, 500);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen pt-28 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (!production) {
    return (
      <div className="min-h-screen pt-28 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Production Not Found</h1>
        <p className="text-xl">The production you're looking for doesn't exist.</p>
        <Link 
          href="/production"
          className="mt-8 bg-[#ed7e0c] hover:bg-orange-600 transition-colors text-white uppercase px-6 py-2 inline-block rounded-md"
        >
          View All Productions
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="pt-28">
        {/* Production Details Section with orange background */}
        <div className="bg-[#ed7e0c] text-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row">
              {/* Left side - Production Information */}
              <div className="md:w-1/2 pr-0 md:pr-8 lg:pr-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-wider">{production.title}</h1>
                
                {/* Genres with dot separators */}
                {production.genres && (
                  <div className="mb-8">
                    <p className="text-lg md:text-xl tracking-wider">
                      {production.genres.map((genre: string, index: number) => (
                        <span key={genre}>
                          {genre}
                          {index < production.genres.length - 1 && <span className="mx-2">•</span>}
                        </span>
                      ))}
                    </p>
                  </div>
                )}
                
                {/* Description */}
                {production.description && (
                  <p className="text-lg md:text-xl mb-10 tracking-wide leading-relaxed">
                    {production.description}
                  </p>
                )}
                
                {/* Stars */}
                {production.stars && (
                  <div className="mb-8">
                    <h2 className="text-xl md:text-2xl font-bold mb-2 tracking-wider">Stars:</h2>
                    <p className="text-lg md:text-xl tracking-wide">
                      {production.stars.join(', ')}
                    </p>
                  </div>
                )}
                
                {/* Episodes */}
                {production.episodeCount && (
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold tracking-wider">EPISODES ({production.episodeCount})</h2>
                  </div>
                )}
                
                {/* Back button */}
                <div className="mt-8">
                  <Link 
                    href="/production"
                    className="inline-block bg-[#5f1e1d] text-white text-sm font-semibold py-2 px-6 hover:bg-[#4a1816] transition-colors"
                  >
                    BACK TO PRODUCTIONS
                  </Link>
                </div>
              </div>
              
              {/* Right side - Production Image */}
              <div className="md:w-1/2 mt-8 md:mt-0">
                <div className="relative aspect-[4/5] md:aspect-auto md:h-full max-h-[600px]">
                  <Image 
                    src={production.image} 
                    alt={production.alt || production.title}
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                  
                  {/* Arabic title overlay on the bottom of the image */}
                  {production.arabicTitle && (
                    <div className="absolute bottom-4 right-4 text-white text-4xl md:text-5xl font-bold">
                      {production.arabicTitle}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional content section */}
        <div className="bg-[#222] text-white">
          <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Trailer</h2>
            
            {/* Video player placeholder */}
            <div className="max-w-4xl mx-auto relative aspect-video bg-black">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#ed7e0c] rounded-full p-4 cursor-pointer hover:bg-[#d97209] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}